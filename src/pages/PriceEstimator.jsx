import React, { useState } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f7f7f7;
  padding: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  color: #222;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  text-align: center;
`;

const Instructions = styled.p`
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 600px;
`;

const Form = styled.form`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 320px;
  max-width: 400px;
`;

const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const CheckboxLabel = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EstimateBox = styled.div`
  margin-top: 2.5rem;
  background: #fffbe6;
  border: 1.5px solid #ffe58f;
  border-radius: 10px;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  color: #b8860b;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const draperyTypes = [
  { label: 'Sheer Drapery', base: 60 },
  { label: 'Blackout Drapery', base: 80 },
  { label: 'Decorative Drapery', base: 90 },
  { label: 'Motorized Drapery', base: 150 },
  { label: 'Fabric Drapery', base: 70 },
];

const fabrics = [
  { label: 'Polyester', multiplier: 1 },
  { label: 'Linen', multiplier: 1.2 },
  { label: 'Velvet', multiplier: 1.4 },
  { label: 'Silk', multiplier: 1.7 },
  { label: 'Cotton', multiplier: 1.1 },
];

const PriceEstimator = () => {
  const [type, setType] = useState(draperyTypes[0].label);
  const [width, setWidth] = useState(48);
  const [height, setHeight] = useState(84);
  const [fabric, setFabric] = useState(fabrics[0].label);
  const [motorized, setMotorized] = useState(false);

  // Estimate logic
  const base = draperyTypes.find(t => t.label === type)?.base || 60;
  const fabricMult = fabrics.find(f => f.label === fabric)?.multiplier || 1;
  const area = (width / 48) * (height / 84); // relative to a standard panel
  let estimate = base * fabricMult * area;
  if (motorized || type === 'Motorized Drapery') estimate += 120;
  estimate = Math.round(estimate);

  return (
    <PageWrapper>
      <Header>Drapery Price Estimator</Header>
      <Instructions>
        Get an instant price estimate for your custom drapery. Select your options below. For a precise quote, please contact us!
      </Instructions>
      <Form onSubmit={e => e.preventDefault()}>
        <div>
          <Label htmlFor="type">Drapery Type</Label>
          <Select id="type" value={type} onChange={e => setType(e.target.value)}>
            {draperyTypes.map(opt => (
              <option key={opt.label} value={opt.label}>{opt.label}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="width">Width (inches)</Label>
          <Input id="width" type="number" min={24} max={200} value={width} onChange={e => setWidth(Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="height">Height (inches)</Label>
          <Input id="height" type="number" min={36} max={144} value={height} onChange={e => setHeight(Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="fabric">Fabric</Label>
          <Select id="fabric" value={fabric} onChange={e => setFabric(e.target.value)}>
            {fabrics.map(opt => (
              <option key={opt.label} value={opt.label}>{opt.label}</option>
            ))}
          </Select>
        </div>
        <div>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={motorized}
              onChange={e => setMotorized(e.target.checked)}
              disabled={type === 'Motorized Drapery'}
            />
            Motorized Option (+$120)
          </CheckboxLabel>
        </div>
      </Form>
      <EstimateBox>
        Estimated Price: <strong>${estimate}</strong>
      </EstimateBox>
    </PageWrapper>
  );
};

export default PriceEstimator; 