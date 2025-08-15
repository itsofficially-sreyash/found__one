import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  MessageSquare,
  Users,
  Search,
  Zap,
  Upload,
  Bell,
  Handshake,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function FoundOneLanding() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-serif font-bold text-4xl md:text-6xl mb-6 leading-tight">
              FoundOne – Lost & Found, <br />
              Reimagined for Students
            </h1>
            <p className="font-sans text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              A campus-wide platform to reunite students with their lost belongings faster, easier, and smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="btn-yellow hover:btn-yellow text-slate-800 font-semibold px-8 py-3 rounded-full text-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg bg-transparent"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-800 mb-6">
              The Problem with WhatsApp Groups
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-slate-800 mb-2">Distraction</h3>
              <p className="font-sans text-slate-600">Constant notifications disrupting your studies</p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-slate-800 mb-2">Chaotic Messages</h3>
              <p className="font-sans text-slate-600">Important posts get buried in endless chatter</p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-slate-800 mb-2">Multiple Groups</h3>
              <p className="font-sans text-slate-600">Fragmented across different departments and years</p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-slate-800 mb-2">Hard to Reach All</h3>
              <p className="font-sans text-slate-600">Difficulty connecting with the entire campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-800 mb-6">The FoundOne Solution</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-800 mb-4">Centralized Campus Platform</h3>
                <p className="font-sans text-slate-600 leading-relaxed">
                  All students in one place. No more juggling multiple WhatsApp groups or missing important posts.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-100">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-800 mb-4">Smart Categorization</h3>
                <p className="font-sans text-slate-600 leading-relaxed">
                  Easily filter by item type, date, and location. Find exactly what you're looking for in seconds.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-200">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-800 mb-4">Faster Matches</h3>
                <p className="font-sans text-slate-600 leading-relaxed">
                  AI-assisted suggestions for possible owners and finders. Get reunited with your belongings faster.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-800 mb-6">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in-up">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-yellow-600" />
              </div>
              <div className="bg-yellow-400 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-800 mb-4">Post Lost/Found Item</h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                Quickly upload a photo and description of your lost or found item with location details.
              </p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Bell className="w-10 h-10 text-yellow-600" />
              </div>
              <div className="bg-yellow-400 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-800 mb-4">Auto-Notifications Sent</h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                Relevant students get notified instantly. Our smart matching connects the right people.
              </p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10 text-yellow-600" />
              </div>
              <div className="bg-yellow-400 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-800 mb-4">Meet & Collect</h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                Coordinate safely through the app and reunite with your belongings on campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Join the FoundOne Community Today</h2>
          <p className="font-sans text-lg mb-8 opacity-90">
            Be part of the revolution that's making campus life easier for students everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-yellow hover:btn-yellow text-slate-800 font-semibold px-8 py-3 rounded-full text-lg">
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-serif font-bold text-2xl mb-4">FoundOne</h3>
              <p className="font-sans text-slate-300 mb-6 leading-relaxed">
                Revolutionizing how students find their lost belongings on campus. Simple, smart, and designed for the
                modern student experience.
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Company</h4>
              <ul className="font-sans space-y-2">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Support</h4>
              <ul className="font-sans space-y-2">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="font-sans text-slate-400">
              © 2024 FoundOne. All rights reserved. Made with ❤️ for students everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
