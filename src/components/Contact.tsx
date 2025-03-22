
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-drift-dark-accent">
      <div className="drift-container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient">Get In Touch</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Interested in our solar desalination technology? Contact us for more information or partnership opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 animate-fade-in">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white/90">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-drift-blue focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white/90">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-drift-blue focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white/90">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-drift-blue focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                <CheckCircle size={60} className="text-drift-blue mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/80 text-center">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
