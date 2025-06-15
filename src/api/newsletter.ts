import fs from 'fs';
import path from 'path';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.txt');

// Ensure the data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Add a new subscriber
export const addSubscriber = async (email: string): Promise<void> => {
  ensureDataDirectory();

  // Read existing subscribers
  let subscribers: string[] = [];
  if (fs.existsSync(SUBSCRIBERS_FILE)) {
    const content = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8');
    subscribers = content.split('\n').filter(Boolean);
  }

  // Check if email already exists
  if (subscribers.includes(email)) {
    throw new Error('Email already subscribed');
  }

  // Add new subscriber
  subscribers.push(email);

  // Write back to file
  fs.writeFileSync(SUBSCRIBERS_FILE, subscribers.join('\n') + '\n');
};

// Get all subscribers
export const getSubscribers = async (): Promise<string[]> => {
  ensureDataDirectory();

  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    return [];
  }

  const content = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8');
  return content.split('\n').filter(Boolean);
};

// Remove a subscriber
export const removeSubscriber = async (email: string): Promise<void> => {
  ensureDataDirectory();

  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    throw new Error('No subscribers found');
  }

  const content = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8');
  const subscribers = content.split('\n').filter(Boolean);
  
  const updatedSubscribers = subscribers.filter(sub => sub !== email);
  
  fs.writeFileSync(SUBSCRIBERS_FILE, updatedSubscribers.join('\n') + '\n');
}; 