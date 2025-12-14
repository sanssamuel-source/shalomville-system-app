
import Link from 'next/link';
import { Download, Check } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <div className="bg-white">
       <div className="bg-primary-900 py-20 text-center text-white relative">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-primary-200">Join the Shalomville Family</p>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose lg:prose-xl mx-auto text-gray-600">
              <p className="lead text-xl mb-8">
                  We are delighted that you are considering Shalomville Schools International for your child's education. The admission process is designed to be simple and transparent.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h3>
              <ul className="space-y-4 mb-12 list-none pl-0">
                  <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">1</div>
                      <div>
                          <strong className="block text-gray-900">Purchase Form</strong>
                          Visit the school administration office to purchase the admission form.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">2</div>
                      <div>
                          <strong className="block text-gray-900">Entrance Exam</strong>
                          Schedule and sit for the entrance examination appropriate for the child's grade level.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">3</div>
                      <div>
                          <strong className="block text-gray-900">Submission</strong>
                          Submit the completed form along with required documents (Birth Certificate, Past Results, Photos).
                      </div>
                  </li>
              </ul>

              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary-600 mb-12">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Download Prospectus</h4>
                  <p className="mb-6 text-sm">Get detailed information about our curriculum, fees, and school policies.</p>
                  <a href="https://shalomvilleschoolsinternational.org/advert/1721237232686acef0c4104e1fdd457128653d1210.pdf" target="_blank" className="flex items-center gap-2 text-primary-600 font-bold hover:underline">
                      <Download className="w-5 h-5" /> Download PDF Prospectus
                  </a>
              </div>

               <div className="text-center">
                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Assistance?</h3>
                   <Link href="/contact" className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                       Contact Admissions Office
                   </Link>
               </div>
          </div>
      </div>
    </div>
  );
}
