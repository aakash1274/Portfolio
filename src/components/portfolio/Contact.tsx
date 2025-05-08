
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% chance of success for demo purposes
        setSubmitSuccess(true);
        setFormData(initialFormState);
        setErrorMessage('');
      } else {
        setSubmitSuccess(false);
        setErrorMessage('There was an error sending your message. Please try again.');
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="text-gradient-primary">Get In Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the form below or through my contact details.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="bg-secondary/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-400">hello@johndoe.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-400">San Francisco, California</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {['github', 'linkedin', 'twitter', 'instagram'].map(platform => (
                  <a 
                    key={platform}
                    href={`https://${platform}.com`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-primary transition-colors duration-300 text-white p-3 rounded-full"
                  >
                    <span className="sr-only">{platform}</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/30 border border-gray-700 rounded-lg focus:ring-accent focus:border-accent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/30 border border-gray-700 rounded-lg focus:ring-accent focus:border-accent text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/30 border border-gray-700 rounded-lg focus:ring-accent focus:border-accent text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary/30 border border-gray-700 rounded-lg focus:ring-accent focus:border-accent text-white resize-none"
                ></textarea>
              </div>
              
              {submitSuccess === true && (
                <div className="p-4 bg-green-800/50 border border-green-600 rounded-lg text-green-200">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitSuccess === false && (
                <div className="p-4 bg-red-800/50 border border-red-600 rounded-lg text-red-200">
                  {errorMessage}
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-accent to-primary text-white font-medium transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-accent/80 hover:to-primary/80'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
