// app/not-found.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  ArrowLeft,
  MessageSquare,
  Users,
  Server,
  Sparkles,
} from "lucide-react";

export default function NotFound() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Page Not Found";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white flex items-center justify-center px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center max-w-2xl relative z-10">
        {/* Server/Channel themed 404 */}
        <div className="mb-8 relative">
          <div className="text-8xl font-black bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            #404
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-2xl -z-10"></div>
        </div>

        {/* Typing Animation */}
        <h2 className="text-3xl font-bold mb-6 min-h-[42px] font-mono bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
          {displayText}
          <span className="animate-pulse text-gray-400">_</span>
        </h2>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md mx-auto">
          This channel doesn't exist or you don't have permission to view it.
          Maybe the invite link expired or the server was deleted.
        </p>

        {/* Quick Actions - Discord Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-sm mx-auto">
          <Button
            asChild
            className="bg-gradient-to-r from-teal-500 to-blue-500 h-12 text-base border-0"
          >
            <Link href="/" className="flex items-center gap-3">
              <Home className="w-4 h-4" />
              Home Server
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-gray-600 hover:bg-gray-800 h-12 text-base"
          >
            <Link
              href="#"
              onClick={() => window.history.back()}
              className="flex items-center gap-3"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Channel
            </Link>
          </Button>
        </div>

        {/* Status Information */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All Systems Operational</span>
            </div>
            <div className="text-gray-600">•</div>
            <div>NextChat v2.0</div>
          </div>
        </div>

        {/* Support Link */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Need help?{" "}
            <Link
              href="/support"
              className="text-indigo-400 hover:text-indigo-300 underline inline-flex items-center gap-1"
            >
              Contact Support
            </Link>
          </p>
        </div>

        {/* Easter Egg - Online Users */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-gray-900"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-gray-900"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <span>1,234,567 online now</span>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
