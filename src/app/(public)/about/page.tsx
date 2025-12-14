
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-primary-900 py-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-primary-200">Raising the total child.</p>
          </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Who We Are */}
          <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">We are Shalomville</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our promise to parents is to make their children excellent pupils that will be innovative, creative, and award-winning children hence becoming the pride of their parents and the society at large. So, help us God.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                      <p className="text-gray-600">
                        Our vision is to give quality education to our pupils. We transmit knowledge using modern education technology equipment, and with the help of our competent and experienced teaching staff.
                      </p>
                  </div>
                  <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                     <p className="text-gray-600">
                        To help our children develop impeccable characters that will make them exemplary persons everywhere they go. We focus on modelling godly characters such as honesty, integrity, justice, love, and service.
                     </p>
                  </div>
              </div>
          </div>

          {/* Core Values */}
          <div id="values" className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Pillars</h2>
              <div className="grid md:grid-cols-3 gap-6">
                  {[
                      { title: "Education", text: "Quality education using modern tech and result-oriented methodologies." },
                      { title: "Moral Values", text: "Impeccable character development in an age of moral decadence." },
                      { title: "Spiritual", text: "We believe in the Supremacy of God and raising children who fear and love Him." },
                      { title: "Social", text: "Unlocking hidden potentials and talents to benefit society." },
                      { title: "Leadership", text: "Training the next generation of leaders with integrity." }
                  ].map((value, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                          <div>
                              <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                              <p className="text-sm text-gray-500">{value.text}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
}
