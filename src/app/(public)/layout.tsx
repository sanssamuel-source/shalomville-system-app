
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, ChevronDown, Facebook, Twitter, Instagram } from 'lucide-react';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +232 33 657 803</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@shalomville.com</span>
            </div>
            <div className="flex items-center gap-3">
                <a href="#" className="hover:text-primary-200 transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-primary-200 transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-primary-200 transition-colors"><Instagram className="w-4 h-4" /></a>
                <Link href="/login" className="bg-primary-600 hover:bg-primary-700 px-3 py-1 rounded font-bold transition-colors ml-2">
                    Portal Login
                </Link>
            </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
                <img 
                    src="https://shalomvilleschoolsinternational.org/advert/17212338057fb9d49a72756b23e2dce42ffbe17a2b.png" 
                    alt="Shalomville Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <div className="hidden md:block">
                    <h1 className="text-xl md:text-2xl font-bold text-primary-900 leading-none">SHALOMVILLE</h1>
                    <p className="text-xs md:text-sm text-primary-600 font-medium tracking-wider">SCHOOLS INTERNATIONAL</p>
                </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-700 uppercase tracking-wide">
                <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                
                <div className="relative group">
                    <button className="flex items-center gap-1 hover:text-primary-600 transition-colors py-4">
                        About Us <ChevronDown className="w-3 h-3" />
                    </button>
                    <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-primary-600">
                        <Link href="/about" className="block px-4 py-3 hover:bg-primary-50 hover:text-primary-600">Our Vision</Link>
                        <Link href="/about#team" className="block px-4 py-3 hover:bg-primary-50 hover:text-primary-600">Our Team</Link>
                        <Link href="/about#history" className="block px-4 py-3 hover:bg-primary-50 hover:text-primary-600">History</Link>
                    </div>
                </div>

                <Link href="/admissions" className="hover:text-primary-600 transition-colors">Admissions</Link>
                
                <div className="relative group">
                    <button className="flex items-center gap-1 hover:text-primary-600 transition-colors py-4">
                        News <ChevronDown className="w-3 h-3" />
                    </button>
                     <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-primary-600">
                        <Link href="/news" className="block px-4 py-3 hover:bg-primary-50 hover:text-primary-600">Latest News</Link>
                        <Link href="/news/events" className="block px-4 py-3 hover:bg-primary-50 hover:text-primary-600">Events Calendar</Link>
                    </div>
                </div>

                <Link href="/contact" className="hover:text-primary-600 transition-colors">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600">
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
                <img 
                    src="https://shalomvilleschoolsinternational.org/advert/17212338057fb9d49a72756b23e2dce42ffbe17a2b.png" 
                    alt="Logo" 
                    className="w-16 h-16 mb-4 grayscale opacity-80"
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                   Raising a total child who shines in character and learning. We are positioned to help our children develop impeccable characters.
                </p>
            </div>
            
            <div>
                <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                    <li><Link href="/admissions" className="hover:text-primary-400 transition-colors">Admissions</Link></li>
                    <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
                    <li><Link href="/login" className="hover:text-primary-400 transition-colors">Parent Portal</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Info</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                        <span>Saidu lane, Off peninsula road, Ogoo farm, Freetown, Sierra Leone</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                        <span>+232 33 657 803</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                        <span>admissions@shalomvilleschoolsinternational.org</span>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Newsletter</h3>
                <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest school news.</p>
                <div className="flex">
                    <input placeholder="Email Address" className="bg-gray-800 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-primary-500" />
                    <button className="bg-primary-600 px-4 py-2 rounded-r hover:bg-primary-700 transition-colors">GO</button>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Shalomville Schools International. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
