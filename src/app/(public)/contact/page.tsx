
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white">
       <div className="bg-primary-900 py-20 text-center text-white relative">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-200">We'd love to hear from you.</p>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                  <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                      <p className="text-gray-600 text-lg">
                          Whether you have a question about admissions, fees, or anything else, our team is ready to answer all your questions.
                      </p>
                  </div>

                  <div className="space-y-6">
                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                              <MapPin className="w-6 h-6" />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900">Visit Us</h4>
                              <p className="text-gray-600">Saidu lane, Off peninsula road,<br/>Ogoo farm, Freetown, Sierra Leone</p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                              <Phone className="w-6 h-6" />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900">Call Us</h4>
                              <p className="text-gray-600">+232 33 657 803</p>
                              <p className="text-gray-600">+232 75 970 708</p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                              <Mail className="w-6 h-6" />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900">Email Us</h4>
                              <p className="text-gray-600">admissions@shalomvilleschoolsinternational.org</p>
                              <p className="text-gray-600">shalomvilleis@gmail.com</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
                  <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                          <input placeholder="First Name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500" />
                          <input placeholder="Last Name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500" />
                      </div>
                      <input placeholder="Email Address" type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500" />
                      <input placeholder="Subject" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500" />
                      <textarea placeholder="Your Message..." rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"></textarea>
                      <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors">
                          Send Message
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </div>
  );
}
