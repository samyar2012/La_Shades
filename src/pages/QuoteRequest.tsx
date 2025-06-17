import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: normal;
`;

const Form = styled.form`
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

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #333;
  cursor: pointer;
`;

const SubmitButton = styled(motion.button)`
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
`;

const QuoteRequest: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    projectType: 'residential',
    productType: '',
    model: '',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    const model = params.get('model');
    
    if (type) {
      setFormData(prev => ({
        ...prev,
        productType: type,
        model: model || ''
      }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, we'll just show an alert
    alert('Thank you for your quote request! We will contact you shortly.');
    navigate('/');
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Title>Request a Quote</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Phone</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>State</Label>
            <Input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>ZIP Code</Label>
            <Input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Project Type</Label>
            <RadioGroup>
              <RadioLabel>
                <input
                  type="radio"
                  name="projectType"
                  value="residential"
                  checked={formData.projectType === 'residential'}
                  onChange={handleChange}
                />
                Residential
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  name="projectType"
                  value="commercial"
                  checked={formData.projectType === 'commercial'}
                  onChange={handleChange}
                />
                Commercial
              </RadioLabel>
            </RadioGroup>
          </FormGroup>

          <FormGroup>
            <Label>Product Type</Label>
            <Select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              required
            >
              <option value="">Select a product type</option>
              <option value="shades">Shades</option>
              <option value="blinds">Blinds</option>
              <option value="curtains">Curtains</option>
              <option value="accessories">Accessories</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Model</Label>
            <Input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Additional Information</Label>
            <Input
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Quote Request
          </SubmitButton>
        </Form>
      </Container>
    </PageContainer>
  );
};

export default QuoteRequest; 