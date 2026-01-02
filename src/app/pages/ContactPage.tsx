import { useState } from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            Contact me
          </h1>
            <p className="text-gray-400 text-lg">
            I am available for freelance missions and internship opportunities.
            Feel free to contact me to discuss your project.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl mb-6">Contact Information</h2>
              <div className="space-y-4">
                <a
                  href="mailto:jean-marc.naounou@epitech.eu"
                  className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">jean-marc.naounou@epitech.eu</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Jmarc07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-white/10">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white">github.com/Jmarc07</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/jean-marc-naounou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-white/10">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white">linkedin.com/in/jean-marc-naounou</p>
                  </div>
                </a>
              </div>
            </div>

           {/*  <div>
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 w-full border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Download size={20} />
                Download my resume
              </a>
            </div> */}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white/5 border-white/10 text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white/5 border-white/10 text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white/5 border-white/10 text-white"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 bg-white/5 border-white/10 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
