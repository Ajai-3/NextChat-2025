// lib/features-data.ts
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const features: Feature[] = [
  {
    id: "real-time-chat",
    title: "Real-time Chat",
    description: "Enjoy lightning-fast messaging powered by WebSockets — talk privately or in groups instantly without delay.",
    icon: "MessageSquare",
    color: "teal"
  },
  {
    id: "voice-video",
    title: "Voice & Video Calls",
    description: "Connect face-to-face or voice-to-voice with your friends and team members.",
    icon: "Video",
    color: "blue"
  },
  {
    id: "servers-channels",
    title: "Servers & Channels",
    description: "Create your own servers and organize conversations in topic-based channels.",
    icon: "Server",
    color: "purple"
  },
  {
    id: "secure-messaging",
    title: "Secure Messaging",
    description: "All chats are end-to-end encrypted — your data stays yours, always.",
    icon: "Lock",
    color: "green"
  },
  {
    id: "custom-profiles",
    title: "Custom Profiles",
    description: "Personalize your profile with avatars, status updates, and activity info.",
    icon: "Users",
    color: "orange"
  },
  {
    id: "scalable-architecture",
    title: "Scalable Architecture",
    description: "Built with Next.js and Socket.io for real-time performance that grows with you.",
    icon: "Sparkles",
    color: "pink"
  }
];

export const homePageFeatures = [
  {
    id: "real-time-messaging",
    title: "Real-time Chat",
    description: "Instant messaging with markdown support, file sharing, and rich embeds. Private DMs and group conversations with real-time synchronization.",
    icon: "MessageSquare",
    color: "teal"
  },
  {
    id: "voice-video-home",
    title: "Voice & Video",
    description: "Crystal-clear voice calls and HD video conferences. Screen sharing, virtual backgrounds, and low-latency communication.",
    icon: "Video",
    color: "blue"
  },
  {
    id: "servers-communities",
    title: "Servers & Communities",
    description: "Create and manage servers with customizable channels, roles, and permissions. Build your community your way.",
    icon: "Server",
    color: "purple"
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security",
    description: "End-to-end encryption, 2FA, and advanced moderation tools. Keep your conversations private and secure.",
    icon: "Lock",
    color: "green"
  },
  {
    id: "scalable-infrastructure",
    title: "Scalable Infrastructure",
    description: "Built with Next.js and WebSockets for massive scale. Handle thousands of concurrent users with real-time performance.",
    icon: "Users",
    color: "orange"
  },
  {
    id: "developer-friendly",
    title: "Developer Friendly",
    description: "Open API, webhooks, and extensive documentation. Integrate NextChat with your tools and build custom experiences.",
    icon: "Sparkles",
    color: "pink"
  }
];