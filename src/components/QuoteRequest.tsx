import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, X, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Fix Leaflet default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_nyw0uml';
const EMAILJS_TEMPLATE_ID = 'template_m4peb5c';
const EMAILJS_PUBLIC_KEY = 'tqMguJ8l9g8kvf4CT';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

interface FormData {
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
  product_type: string;
  product_model: string;
  quantity: string;
  window_dimensions: string;
  preferred_color: string;
  preferred_material: string;
  installation_required: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  } | null;
  custom_product_model?: string;
}

// Product categories and their models
const PRODUCT_CATEGORIES = {
  blinds: [
    'Horizontal Blinds - Standard',
    'Horizontal Blinds - Premium',
    'Vertical Blinds - Standard',
    'Vertical Blinds - Premium',
    'Mini Blinds - Standard',
    'Mini Blinds - Premium',
    'Panel Blinds - Standard',
    'Panel Blinds - Premium',
    'Cellular Blinds - Standard',
    'Cellular Blinds - Premium',
    'Roman Blinds - Classic',
    'Roman Blinds - Modern',
    'Venetian Blinds - Standard',
    'Venetian Blinds - Premium',
    'Wood Blinds - Standard',
    'Wood Blinds - Premium',
    'Other'
  ],
  curtains: [
    'Sheer Curtains - Classic',
    'Sheer Curtains - Modern',
    'Blackout Curtains - Standard',
    'Blackout Curtains - Premium',
    'Thermal Curtains - Standard',
    'Thermal Curtains - Premium',
    'Decorative Curtains - Classic',
    'Decorative Curtains - Modern',
    'Panel Curtains - Standard',
    'Panel Curtains - Premium',
    'Cafe Curtains - Classic',
    'Cafe Curtains - Modern',
    'Tab Top Curtains - Standard',
    'Tab Top Curtains - Premium',
    'Grommet Curtains - Standard',
    'Grommet Curtains - Premium',
    'Other'
  ],
  shades: [
    'Roller Shades - Standard',
    'Roller Shades - Premium',
    'Roman Shades - Classic',
    'Roman Shades - Modern',
    'Motorized Shades - Standard',
    'Motorized Shades - Premium',
    'Woven Wood Shades - Standard',
    'Woven Wood Shades - Premium',
    'Cellular Shades - Standard',
    'Cellular Shades - Premium',
    'Solar Shades - Standard',
    'Solar Shades - Premium',
    'Pleated Shades - Standard',
    'Pleated Shades - Premium',
    'Balloon Shades - Classic',
    'Balloon Shades - Modern',
    'Other'
  ],
  drapery: [
    'Fabric Drapery - Classic Elegance',
    'Fabric Drapery - Modern Minimalist',
    'Sheer Drapery - Classic',
    'Sheer Drapery - Modern',
    'Blackout Drapery - Classic',
    'Blackout Drapery - Modern',
    'Decorative Drapery - Classic',
    'Decorative Drapery - Modern',
    'Panel Drapery - Standard',
    'Panel Drapery - Premium',
    'Pleated Drapery - Classic',
    'Pleated Drapery - Modern',
    'Grommet Drapery - Standard',
    'Grommet Drapery - Premium',
    'Tab Top Drapery - Standard',
    'Tab Top Drapery - Premium',
    'Other'
  ]
};

const MATERIALS = {
  blinds: ['Aluminum', 'Wood', 'Faux Wood', 'PVC', 'Bamboo'],
  curtains: ['Cotton', 'Linen', 'Silk', 'Polyester', 'Velvet', 'Sheer'],
  shades: ['Polyester', 'Cotton', 'Linen', 'Bamboo', 'Wood', 'Synthetic'],
  drapery: ['Cotton', 'Linen', 'Silk', 'Velvet', 'Polyester', 'Sheer', 'Blackout']
};

const COLORS = [
  'White', 'Ivory', 'Beige', 'Gray', 'Black', 'Brown', 'Navy', 'Burgundy', 'Green', 'Blue', 'Custom'
];

// Styled components (reusing most from Contact.tsx)
const QuoteRequestSection = styled.section`
  padding: 8rem 0 4rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
`;

const MotionQuoteRequestSection = motion(QuoteRequestSection);

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const SectionDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #333;
  line-height: 1.6;
  max-width: 32rem;
  margin: 0 auto;
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

const QuoteForm = styled.div`
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
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #000;
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

const SubmitButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  margin-top: 1rem;
  
  &:hover {
    background-color: #000;
    color: white;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const MotionSubmitButton = motion(SubmitButton);

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

const LoadingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const QuoteRequest: React.FC = () => {
  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
    product_type: '',
    product_model: '',
    quantity: '',
    window_dimensions: '',
    preferred_color: '',
    preferred_material: '',
    installation_required: 'no',
    location: null,
    custom_product_model: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Extract product info from URL if coming from a product page
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productType = searchParams.get('type');
    const productModel = searchParams.get('model');

    if (productType && productModel) {
      setFormData(prev => ({
        ...prev,
        product_type: productType,
        product_model: productModel
      }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      // Format the data for EmailJS
      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        user_phone: formData.user_phone,
        product_type: formData.product_type,
        product_model: formData.product_model,
        quantity: formData.quantity,
        window_dimensions: formData.window_dimensions,
        preferred_color: formData.preferred_color,
        preferred_material: formData.preferred_material,
        installation_required: formData.installation_required,
        message: formData.message,
        to_email: 'your-email@example.com',
        from_name: 'La Shades Quote Request',
        reply_to: formData.user_email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setToast({
        type: 'success',
        message: 'Your quote request has been sent successfully! We will contact you shortly.'
      });

      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: '',
        product_type: '',
        product_model: '',
        quantity: '',
        window_dimensions: '',
        preferred_color: '',
        preferred_material: '',
        installation_required: 'no',
        location: null,
        custom_product_model: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setToast({
        type: 'error',
        message: 'Failed to send quote request. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionQuoteRequestSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isSubmitting && (
        <LoadingOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoadingSpinner />
        </LoadingOverlay>
      )}

      <Container>
        <SectionHeader>
          <SectionTitle>Request a Quote</SectionTitle>
          <SectionDescription>
            Fill out the form below to receive a personalized quote for your window treatment needs.
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

          <QuoteForm>
            <FormTitle>Quote Request Form</FormTitle>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="user_name">Full Name *</Label>
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
                <Label htmlFor="user_email">Email Address *</Label>
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
                <Label htmlFor="user_phone">Phone Number *</Label>
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
                <Label htmlFor="product_type">Product Type *</Label>
                <Select
                  id="product_type"
                  name="product_type"
                  value={formData.product_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a product type</option>
                  <option value="blinds">Blinds</option>
                  <option value="curtains">Curtains</option>
                  <option value="shades">Shades</option>
                  <option value="drapery">Drapery</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="product_model">Product Model *</Label>
                <Select
                  id="product_model"
                  name="product_model"
                  value={formData.product_model}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a model</option>
                  {formData.product_type && PRODUCT_CATEGORIES[formData.product_type as keyof typeof PRODUCT_CATEGORIES]?.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </Select>
                {formData.product_model === 'Other' && (
                  <Input
                    type="text"
                    name="custom_product_model"
                    placeholder="Please specify your product model"
                    value={formData.custom_product_model || ''}
                    onChange={handleChange}
                    required
                    style={{ marginTop: '0.5rem' }}
                  />
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="quantity">Quantity *</Label>
                <Input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="window_dimensions">Window Dimensions (Optional)</Label>
                <Input
                  type="text"
                  id="window_dimensions"
                  name="window_dimensions"
                  value={formData.window_dimensions}
                  onChange={handleChange}
                  placeholder="e.g., 36 inches x 48 inches"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="preferred_color">Preferred Color *</Label>
                <Select
                  id="preferred_color"
                  name="preferred_color"
                  value={formData.preferred_color}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a color</option>
                  {COLORS.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="preferred_material">Preferred Material *</Label>
                <Select
                  id="preferred_material"
                  name="preferred_material"
                  value={formData.preferred_material}
                  onChange={handleChange}
                  required
                  disabled={!formData.product_type}
                >
                  <option value="">Select a material</option>
                  {formData.product_type && MATERIALS[formData.product_type as keyof typeof MATERIALS]?.map(material => (
                    <option key={material} value={material}>{material}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="installation_required">Installation Required? *</Label>
                <Select
                  id="installation_required"
                  name="installation_required"
                  value={formData.installation_required}
                  onChange={handleChange}
                  required
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Additional Information</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide any additional details about your requirements..."
                />
              </FormGroup>
              <MotionSubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Request Quote'}
              </MotionSubmitButton>
            </Form>
          </QuoteForm>
        </Grid>
      </Container>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </MotionQuoteRequestSection>
  );
};

export default QuoteRequest; 