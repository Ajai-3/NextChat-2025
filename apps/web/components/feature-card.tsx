// components/feature-card.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Video, 
  Server, 
  Lock, 
  Users, 
  Sparkles,
  LucideIcon 
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  className?: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  MessageSquare,
  Video,
  Server,
  Lock,
  Users,
  Sparkles,
};

const colorClasses = {
  teal: {
    bg: "bg-teal-500/20",
    text: "text-teal-400",
    border: "hover:border-teal-500/50"
  },
  blue: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "hover:border-blue-500/50"
  },
  purple: {
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    border: "hover:border-purple-500/50"
  },
  green: {
    bg: "bg-green-500/20",
    text: "text-green-400",
    border: "hover:border-green-500/50"
  },
  orange: {
    bg: "bg-orange-500/20",
    text: "text-orange-400",
    border: "hover:border-orange-500/50"
  },
  pink: {
    bg: "bg-pink-500/20",
    text: "text-pink-400",
    border: "hover:border-pink-500/50"
  },
};

export function FeatureCard({ title, description, icon, color, className = "" }: FeatureCardProps) {
  const IconComponent = iconMap[icon];
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.teal;

  return (
    <Card className={`bg-gray-900/50 border-gray-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${colorClass.border} ${className}`}>
      <CardHeader>
        <div className={`w-12 h-12 ${colorClass.bg} rounded-lg flex items-center justify-center mb-2`}>
          {IconComponent && <IconComponent className={`w-6 h-6 ${colorClass.text}`} />}
        </div>
        <CardTitle className="text-white text-xl text-start">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}