import React from 'react';
import { Mail, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

const NewsletterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      // Send the email to be stored
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe to newsletter');
      }

      setStatus({
        type: 'success',
        message: 'Thank you for subscribing to our newsletter!'
      });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4">
              Join Our Newsletter
            </h1>
            <p className="text-lg text-amber-800">
              Stay connected with Luna Drapes and be the first to know about our latest collections, exclusive offers, and design inspiration.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            {status.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                <div className="flex items-center justify-center">
                  {status.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 mr-2" />
                  ) : (
                    <X className="h-5 w-5 mr-2" />
                  )}
                  <p>{status.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="block w-full pl-10 px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>We respect your privacy. Unsubscribe at any time.</p>
              <p className="mt-2">
                By subscribing, you agree to receive marketing communications from Luna Drapes.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
              What You'll Receive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <h3 className="font-medium text-amber-800 mb-2">Exclusive Offers</h3>
                <p className="text-gray-600">Get access to special discounts and promotions</p>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-amber-800 mb-2">Design Inspiration</h3>
                <p className="text-gray-600">Latest trends and styling tips for your home</p>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-amber-800 mb-2">New Collections</h3>
                <p className="text-gray-600">Be the first to know about our new products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage; 