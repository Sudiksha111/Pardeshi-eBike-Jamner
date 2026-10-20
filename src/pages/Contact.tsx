import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 9767527704', '+91 8788884819'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['pardeshiebike@gmail.com', 'pardeshiart@gmail.com'],
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['Pardeshi eBike, Behind Best Bazar, Mathai Nagar Pachora Road, Jamner, Dist.Jalgaon '],
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
      color: 'from-orange-500 to-red-400'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            
            <span className="text-foreground"> Get In Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Have questions about our eBikes? Want to schedule a test ride? 
            We're here to help you find the perfect electric bike for your needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bike-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="glass rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="glass floating-input glow focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="glass floating-input glow focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="glass floating-input glow focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="relative">
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="glass floating-input glow focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="glass floating-input glow focus:ring-2 focus:ring-primary resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-lg hover-scale transition-bounce glow"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="animate-slide-up animation-delay-200">
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="glass rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Visit Our Showroom</h3>
                    <p className="text-muted-foreground">
                      Experience our eBikes in person at our premium showroom
                    </p>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="glass rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Why Contact Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Expert Consultation</h4>
                        <p className="text-muted-foreground text-sm">
                          Get personalized recommendations from our eBike experts
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Quick Response</h4>
                        <p className="text-muted-foreground text-sm">
                          We respond to all inquiries within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Test Ride Booking</h4>
                        <p className="text-muted-foreground text-sm">
                          Schedule a test ride for any of our eBike models
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;