// app/features/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { features } from "@/lib/features-data";
import { FloatingParticles } from "@/components/floating-particles";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white flex flex-col items-center px-6 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center max-w-4xl relative z-10">
        {/* Server/Channel themed header */}
        <div className="mb-8 relative">
          <div className="text-6xl font-black bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            NextChat Features
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-2xl -z-10"></div>
        </div>

        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Discover the powerful features that make NextChat the modern
          communication platform for communities, friends, and teams.
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mb-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>

        {/* Go Home Button */}
        <div className="pt-6">
          <Button
            asChild
            className="bg-gradient-to-r from-teal-500 to-blue-500 h-12 text-base border-0"
          >
            <Link href="/" className="flex items-center gap-3">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Status Information */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mt-8">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All Systems Operational</span>
            </div>
            <div className="text-gray-600">•</div>
            <div>NextChat v2.0</div>
          </div>
        </div>

        {/* Easter Egg - Online Users */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-gray-900"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-gray-900"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <span>1,234,567 online now</span>
        </div>
      </div>

      {/* Floating particles */}
      <FloatingParticles />
    </div>
  );
}
