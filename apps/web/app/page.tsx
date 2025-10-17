// app/page.tsx
// "use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Users,
  Video,
  Phone,
  Shield,
  Server,
  Sparkles,
  Globe,
  Lock,
  Triangle,
  Biohazard,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { homePageFeatures } from "@/lib/features-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1 mt-1">
              <Triangle className="w-6 h-6" color="black" fill="black" />
            </div>
            <span className="text-4xl font-bold ">NextChat</span>
          </div>

          <div className="hidden md:flex gap-8">
            <Link
              href="/features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/community"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Community
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 border-0">
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent animate-pulse"></div>

          <Badge
            variant="secondary"
            className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Next Generation Chat Platform
          </Badge>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
            Where conversations
            <span className="block">happen</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            NextChat is the modern communication platform that brings together
            messaging, voice, video, and community features in one seamless
            experience. Built for scale, designed for connection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 border-0 text-lg px-8 py-6"
            >
              <Globe className="w-5 h-5 mr-2" />
              Open in Browser
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-6"
            >
              Download App
            </Button>
          </div>

          {/* Hero Image/Preview */}
          <div className="relative max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl p-2 backdrop-blur-sm">
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="grid grid-cols-4 gap-4 text-left">
                <div className="col-span-1 bg-gray-800 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="text-teal-400 font-semibold">Servers</div>
                    <div className="text-gray-400 text-sm">Gaming</div>
                    <div className="text-gray-400 text-sm">Developers</div>
                    <div className="text-gray-400 text-sm">Friends</div>
                  </div>
                </div>
                <div className="col-span-3 bg-gray-800 rounded-lg p-4">
                  <div className="text-teal-400 font-semibold mb-2">
                    # general-chat
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>👋 Welcome to NextChat!</div>
                    <div>💬 Start chatting with your community...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything you need to connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features designed for modern communication and community
              building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homePageFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-700/20 to-blue-700/20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to start chatting?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions of users who trust NextChat for their communication
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 border-0 px-8 py-6 text-lg"
            >
              Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="flex gap-2 items-center">
                <div className="bg-white rounded-full p-1">
                  <Triangle className="w-3 h-3" color="black" fill="black" />
                </div>
                <span>NextChat</span>
              </div>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Developers
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            © 2025 NextChat. Built with Next.js and modern web technologies.
          </div>
        </div>
      </footer>
    </div>
  );
}
