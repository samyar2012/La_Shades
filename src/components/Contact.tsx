import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styled from 'styled-components';

// Fix Leaflet default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_s22wzwa';
const EMAILJS_TEMPLATE_ID = 'template_cbkujop';
const EMAILJS_PUBLIC_KEY = 'q2AJ_Q1LWwAMjSD6k';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

interface FormData {
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  } | null;
}

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionDivider = styled.div`
  width: 4rem;
  height: 2px;
  background: rgba(0, 0, 0, 0.8);
  margin: 1rem auto;
`;

const SectionDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const ContactInfo = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  height: 100%;
`;

const ContactInfoTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: #333;
  flex-shrink: 0;
`;

const ContactInfoContent = styled.div`
  flex: 1;
`;

const ContactInfoLabel = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.25rem;
`;

const ContactInfoText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #666;
  line-height: 1.5;
`;

const ContactForm = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const FormTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  padding: 0.75rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: #F3F4F6;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  font-family: 'Montserrat', sans-serif;
  padding: 0.75rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  font-size: 0.875rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const MapWrapper = styled.div`
  height: 300px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const SearchInput = styled(Input)`
  padding-right: 2.5rem;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #333;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
  z-index: 10;
`;

const SearchResultButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #F3F4F6;
  }
  
  &:focus {
    outline: none;
    background-color: #F3F4F6;
  }
`;

const SubmitButton = styled.button<{ isSubmitting: boolean }>`
  font-family: 'Montserrat', sans-serif;
  background: #333;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #444;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

// Toast notification component
const Toast: React.FC<{
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out ${
      type === 'success' ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
    } border-l-4 p-4 rounded-lg shadow-lg max-w-md`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${
            type === 'success' ? 'text-green-800' : 'text-red-800'
          }`}>
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <button
            onClick={onClose}
            className={`inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              type === 'success' ? 'text-green-500 hover:text-green-600' : 'text-red-500 hover:text-red-600'
            }`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Map click handler component
const MapClickHandler: React.FC<{ onLocationSelect: (lat: number, lng: number) => void }> = ({ onLocationSelect }) => {
  useMapEvents({
    click: (e) => {
      onLocationSelect(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
    location: null
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{lat: string; lon: string; display_name: string}>>([]);
  const [location, setLocation] = useState<{lat: number; lng: number; address: string} | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([34.0522, -118.2437]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=5`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching location:', error);
      setSearchResults([]);
    }
  };

  const handleSearchResultClick = (result: {lat: string; lon: string; display_name: string}) => {
    const lat = parseFloat(result.lat);
    const lng = parseFloat(result.lon);
    
    if (isNaN(lat) || isNaN(lng)) {
      console.error('Invalid coordinates received from search result');
      return;
    }

    setLocation({
      lat,
      lng,
      address: result.display_name
    });
    setSearchResults([]);
    setSearchQuery('');
  };

  const handleLocationSelect = async (lat: number, lng: number) => {
    try {
      // Fetch address from coordinates using Nominatim
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      
      setLocation({
        lat,
        lng,
        address: data.display_name || 'Selected Location'
      });
      
      // Update form data with the new location
      setFormData(prev => ({
        ...prev,
        location: {
          lat,
          lng,
          address: data.display_name || 'Selected Location'
        }
      }));
    } catch (error) {
      console.error('Error fetching address:', error);
      // Fallback to just coordinates if address fetch fails
    setLocation({
      lat,
      lng,
        address: `Selected Location (${lat.toFixed(6)}, ${lng.toFixed(6)})`
    });
      
      setFormData(prev => ({
        ...prev,
        location: {
          lat,
          lng,
          address: `Selected Location (${lat.toFixed(6)}, ${lng.toFixed(6)})`
        }
      }));
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      const formElement = form.current;
      if (!formElement) {
        throw new Error('Form element not found');
      }

      if (location) {
        const locationAddressInput = formElement.querySelector('input[name="location_address"]') as HTMLInputElement;
        const locationLatInput = formElement.querySelector('input[name="location_lat"]') as HTMLInputElement;
        const locationLngInput = formElement.querySelector('input[name="location_lng"]') as HTMLInputElement;

        if (locationAddressInput) locationAddressInput.value = location.address;
        if (locationLatInput) locationLatInput.value = location.lat.toString();
        if (locationLngInput) locationLngInput.value = location.lng.toString();
      }

      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formElement,
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setToast({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          message: '',
          location: null
        });
        formElement.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      setToast({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <Container>
        <SectionHeader>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionDivider />
          <SectionDescription>
            Have questions or ready to transform your space? Reach out to our team for personalized assistance.
          </SectionDescription>
        </SectionHeader>

        <Grid>
          <ContactInfo>
            <ContactInfoTitle>Get In Touch</ContactInfoTitle>
            <ContactInfoList>
              <ContactInfoItem>
                <IconWrapper>
                  <MapPin className="h-6 w-6" />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Our Location</ContactInfoLabel>
                  <ContactInfoText>
                    123 Elegance Avenue, Suite 456<br />
                    Los Angeles, CA 90001
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
                
              <ContactInfoItem>
                <IconWrapper>
                  <Phone className="h-6 w-6" />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Phone Number</ContactInfoLabel>
                  <ContactInfoText>(123) 456-7890</ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
                
              <ContactInfoItem>
                <IconWrapper>
                  <Mail className="h-6 w-6" />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Email Address</ContactInfoLabel>
                  <ContactInfoText>info@lunadrapes.com</ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
                
              <ContactInfoItem>
                <IconWrapper>
                  <Clock className="h-6 w-6" />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Opening Hours</ContactInfoLabel>
                  <ContactInfoText>
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoList>
          </ContactInfo>

          <ContactForm>
            <FormTitle>Send Us a Message</FormTitle>
            <Form ref={form} onSubmit={sendEmail}>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="user_name">Your Name*</Label>
                  <Input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                </FormGroup>
                  
                <FormGroup>
                  <Label htmlFor="user_email">Email Address*</Label>
                  <Input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                </FormGroup>
                  
                <FormGroup>
                  <Label htmlFor="user_phone">Phone Number*</Label>
                  <Input
                      type="tel"
                      id="user_phone"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      required
                    />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="location">Job Location*</Label>
                  <Input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location?.address || ''}
                        readOnly
                        placeholder="Select location on map"
                        required
                      />
                      <input type="hidden" name="location_lat" value={formData.location?.lat || ''} />
                      <input type="hidden" name="location_lng" value={formData.location?.lng || ''} />
                </FormGroup>
              </FormGrid>
                
              <FormGroup>
                <Label htmlFor="message">Message*</Label>
                <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
              </FormGroup>

              <FormGroup>
                <Label>Select Location on Map*</Label>
                <ContactInfoText>Click on the map to select your location</ContactInfoText>
                  
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a location..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSearch(e);
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={handleSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {searchResults.length > 0 && (
                    <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSearchResultClick(result)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        >
                          {result.display_name}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="h-[300px] w-full rounded-lg overflow-hidden">
                    <div className="h-full w-full">
                      <MapContainer
                        center={mapCenter}
                        zoom={11}
                        style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MapClickHandler onLocationSelect={handleLocationSelect} />
                        {location && (
                          <Marker position={[location.lat, location.lng]} />
                        )}
                      </MapContainer>
                    </div>
                  </div>
              </FormGroup>
                
              <SubmitButton type="submit" disabled={isSubmitting} isSubmitting={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </Form>
          </ContactForm>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
