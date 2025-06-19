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

// Add modern Toast component styles
const ToastContainer = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 16px 20px;
  border-radius: 8px;
  background: white;
  color: #1a1a1a;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  max-width: 400px;
  border-left: 4px solid ${props => props.type === 'success' ? '#4CAF50' : '#f44336'};
  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top right;
  position: relative;
  overflow: hidden;

  @keyframes slideIn {
    0% {
      transform: translateX(100%) scale(0.95);
      opacity: 0;
    }
    100% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(100%) scale(0.95);
      opacity: 0;
    }
  }

  &.exiting {
    animation: slideOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;

const ToastProgressBar = styled.div<{ type: 'success' | 'error' }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${props => props.type === 'success' ? '#4CAF50' : '#f44336'};
  animation: progress 5s linear forwards;

  @keyframes progress {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;

const ToastIcon = styled.div<{ type: 'success' | 'error' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.type === 'success' ? '#E8F5E9' : '#FFEBEE'};
  color: ${props => props.type === 'success' ? '#4CAF50' : '#f44336'};
  flex-shrink: 0;
`;

const ToastMessage = styled.div`
  flex: 1;
  line-height: 1.5;
`;

const ToastCloseButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }
`;

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
  const [isExiting, setIsExiting] = useState(false);
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

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setToast(null);
          setIsExiting(false);
        }, 300);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

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
        <ToastContainer type={toast.type} className={isExiting ? 'exiting' : ''}>
          <ToastProgressBar type={toast.type} />
          <ToastIcon type={toast.type}>
            {toast.type === 'success' ? (
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16ZM10 8C10.5523 8 11 8.44772 11 9V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V9C9 8.44772 9.44772 8 10 8ZM10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14Z" fill="currentColor"/>
              </svg>
            )}
          </ToastIcon>
          <ToastMessage>{toast.message}</ToastMessage>
          <ToastCloseButton onClick={() => {
            setIsExiting(true);
            setTimeout(() => {
              setToast(null);
              setIsExiting(false);
            }, 300);
          }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ToastCloseButton>
        </ToastContainer>
      )}
      <Container>
        <SectionHeader>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionDivider />
          <SectionDescription>
            Get in touch with us for any questions about our products or services.
          </SectionDescription>
        </SectionHeader>

        <Grid>
          <ContactInfo>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <ContactInfoList>
              <ContactInfoItem>
                <IconWrapper>
                  <Phone size={20} />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Phone</ContactInfoLabel>
                  <ContactInfoText>(310) 467-5772</ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconWrapper>
                  <Mail size={20} />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Email</ContactInfoLabel>
                  <ContactInfoText>LunaDrapes@gmail.com</ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconWrapper>
                  <Clock size={20} />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoLabel>Business Hours</ContactInfoLabel>
                  <ContactInfoText>
                    Monday - Friday: 9am - 5pm EST<br />
                    Saturday - Sunday: Closed
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
