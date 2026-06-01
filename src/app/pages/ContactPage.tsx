import { SEO } from "../seo/SEO";
import { Phone, Mail, MapPin, Clock, Send, ShieldAlert } from "lucide-react";

export function ContactPage() {
  return (
    <div>
      <SEO 
        title="Contact Texron Power | Turbine Services & Products - Bengaluru" 
        description="Get in touch with Texron Power Plant Systems in Bengaluru for turbine manufacturing, retrofit, overhauling, and power plant services. Call us or send an enquiry today." 
      />

      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="site-shell">
          <h1 className="text-[32px] md:text-[44px] font-bold leading-tight mb-4 text-white max-w-4xl">
            Let's Talk Turbines.
          </h1>
          <p className="text-white/80 text-[18px] max-w-3xl leading-relaxed">
            Whether you have a project in mind, a turbine in trouble, or just want to explore your options - we're here for it. Reach out directly or fill in the enquiry form and our engineering team will get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl shadow-sm border border-[#E8EAED] h-fit">
            <h2 className="text-[#1E3A5F] text-[24px] font-semibold mb-6">Send an Enquiry</h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1">Full Name *</label>
                  <input type="text" className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1">Company Name *</label>
                  <input type="text" className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="Your Power Plant" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1">Email Address *</label>
                  <input type="email" className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="+91 ..." />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1">Nature of Enquiry</label>
                <select className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors text-[#5A6B7D]">
                  <option>Products</option>
                  <option>Services</option>
                  <option>Spares</option>
                  <option>General</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1">Turbine Type / Plant Details</label>
                <input type="text" className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="e.g. 15 MW Back Pressure / BHEL" />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1A2A3A] mb-1">Your Message *</label>
                <textarea rows={4} className="w-full px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#FF6B35] transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <div className="pt-2">
                <button type="button" className="w-full flex justify-center items-center gap-2 bg-[#1E3A5F] hover:bg-[#152a45] text-white font-semibold py-3 px-4 rounded-md transition-colors">
                  <Send className="w-4 h-4" /> Send Enquiry
                </button>
                <p className="mt-3 text-[11px] text-center text-[#5A6B7D]">Are you an existing turbine service Bengaluru customer facing an emergency? Please call our 24/7 hotline directly.</p>
              </div>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col h-fit">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#E8EAED]">
              <h3 className="text-[#1E3A5F] text-[20px] font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">Our Office</h4>
                    <p className="text-[#5A6B7D] text-[14px] leading-relaxed">
                      V-17, 2nd 'C' main, 2nd stage<br />
                      Peenya Industrial Estate<br />
                      Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">Phone</h4>
                    <p className="text-[#5A6B7D] text-[14px] leading-relaxed">
                      Main: <a href="tel:+918904017774" className="hover:text-[#FF6B35] transition-colors">+91 89040 17774</a><br />
                      Alt: <a href="tel:+918904017775" className="hover:text-[#FF6B35] transition-colors">+91 89040 17775</a><br />
                      Mobile: <a href="tel:+916364829650" className="hover:text-[#FF6B35] transition-colors">+91 6364 829 650</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">Email</h4>
                    <p className="text-[#5A6B7D] text-[14px] leading-relaxed">
                      General: <a href="mailto:info@texronpower.com" className="hover:text-[#FF6B35] transition-colors">info@texronpower.com</a><br />
                      Technical: <a href="mailto:jagadish@texronpower.com" className="hover:text-[#FF6B35] transition-colors">jagadish@texronpower.com</a><br />
                      Electrical: <a href="mailto:stanley@texronpower.com" className="hover:text-[#FF6B35] transition-colors">stanley@texronpower.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A2A3A] font-semibold text-[14px] mb-1">Office Hours</h4>
                    <p className="text-[#5A6B7D] text-[14px]">
                      Monday to Saturday: 8:30 AM – 5:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Box */}
            <div className="bg-[#1E3A5F] rounded-xl p-6 text-white flex items-start gap-4">
               <ShieldAlert className="w-8 h-8 text-[#FF6B35] shrink-0" />
               <div>
                  <h4 className="font-semibold text-[16px] mb-2">24/7 Emergency Support</h4>
                  <p className="text-[13px] text-white/80 leading-relaxed mb-3">If you are experiencing an unplanned trip or severe turbine fault, bypass the form and call us directly.</p>
                  <a href="tel:+918904017774" className="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white font-semibold py-2 px-4 rounded text-[13px] transition-colors">
                     Emergency Line
                  </a>
               </div>
            </div>
          </div>

          {/* Map Embed Location - Now Full Width Below Form & Info */}
          <div className="lg:col-span-12 bg-white p-2 rounded-xl shadow-sm border border-[#E8EAED] w-full h-[400px] overflow-hidden relative mt-4">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7865127343747!2d77.49840372346925!3d13.00399297098947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ce2fb88a8d9%3A0xc34a6565f32a0c6a!2sV-17%2C%202nd%20C%20Main%2C%202nd%20Stage%2C%20Peenya%20Industrial%20Estate%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 rounded-lg"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Texron Power Plant Systems Location Map"
             ></iframe>
          </div>

        </div>
      </section>

      {/* JSON-LD Schema Script Injection for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Texron Power Plant Systems",
            "image": "https://texronpower.com/logo.png",
            "@id": "https://texronpower.com",
            "url": "https://texronpower.com",
            "telephone": "+918904017774",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "V-17, 2nd 'C' main, 2nd stage, Peenya Industrial Estate",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:30",
              "closes": "17:30"
            }
          })
        }}
      />
    </div>
  );
}
