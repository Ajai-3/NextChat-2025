// app/chat/page.tsx
"use client";

import { useState } from "react";
import { Search, Plus, Bell, Hash, Volume2, Users, Pin, AtSign, Inbox, HelpCircle, Menu, X, MessageCircle } from "lucide-react";

// Mock data
const servers = [
  { id: 1, name: "Gaming", unread: 3 },
  { id: 2, name: "Devs", unread: 0 },
  { id: 3, name: "Friends", unread: 12, active: true },
  { id: 4, name: "Study", unread: 0 },
];

const channels = [
  { id: 1, name: "general", type: "text", unread: 2 },
  { id: 2, name: "random", type: "text", unread: 0 },
  { id: 3, name: "voice-chat", type: "voice", unread: 0 },
  { id: 4, name: "help", type: "text", unread: 5 },
];

const messages = [
  { id: 1, user: "Alex", avatar: "🦊", content: "Hey everyone! How's it going?", time: "2:30 PM" },
  { id: 2, user: "Sam", avatar: "🐯", content: "Working on the new project. It's coming along nicely!", time: "2:32 PM" },
  { id: 3, user: "Jordan", avatar: "🐼", content: "Anyone up for some gaming later?", time: "2:35 PM" },
  { id: 4, user: "You", avatar: "⭐", content: "I'll be available around 8 PM!", time: "2:36 PM", isCurrentUser: true },
  { id: 5, user: "Taylor", avatar: "🐶", content: "The new design looks amazing! Great work team! 🎉", time: "2:40 PM" },
  { id: 6, user: "Morgan", avatar: "🐱", content: "Can someone help me with the API integration?", time: "2:42 PM" },
];

const onlineUsers = [
  { id: 1, name: "Alex", status: "online", avatar: "🦊" },
  { id: 2, name: "Sam", status: "online", avatar: "🐯" },
  { id: 3, name: "Taylor", status: "idle", avatar: "🐶" },
  { id: 4, name: "Morgan", status: "dnd", avatar: "🐱" },
  { id: 5, name: "Casey", status: "online", avatar: "🐨" },
];

export default function ChatPage() {
  const [activeChannel, setActiveChannel] = useState(1);
  const [message, setMessage] = useState("");
  const [mobileView, setMobileView] = useState<'servers' | 'channels' | 'chat' | 'members'>('chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessage("");
  };

  // Mobile navigation handlers
  const showServers = () => setMobileView('servers');
  const showChannels = () => setMobileView('channels');
  const showChat = () => setMobileView('chat');
  const showMembers = () => setMobileView('members');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white flex">
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 flex justify-around items-center h-16 z-50">
        <button 
          onClick={showServers}
          className={`flex flex-col items-center p-2 ${mobileView === 'servers' ? 'text-teal-400' : 'text-gray-400'}`}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs mt-1">Servers</span>
        </button>
        <button 
          onClick={showChannels}
          className={`flex flex-col items-center p-2 ${mobileView === 'channels' ? 'text-teal-400' : 'text-gray-400'}`}
        >
          <Hash className="w-5 h-5" />
          <span className="text-xs mt-1">Channels</span>
        </button>
        <button 
          onClick={showChat}
          className={`flex flex-col items-center p-2 ${mobileView === 'chat' ? 'text-teal-400' : 'text-gray-400'}`}
        >
          <AtSign className="w-5 h-5" />
          <span className="text-xs mt-1">Chat</span>
        </button>
        <button 
          onClick={showMembers}
          className={`flex flex-col items-center p-2 ${mobileView === 'members' ? 'text-teal-400' : 'text-gray-400'}`}
        >
          <Users className="w-5 h-5" />
          <span className="text-xs mt-1">Members</span>
        </button>
      </div>

      {/* Servers Sidebar - Hidden on mobile unless active */}
      <div className={`
        w-16 bg-gray-900 border-r border-gray-800 flex-col items-center py-4 space-y-4
        lg:flex
        ${mobileView === 'servers' ? 'flex fixed inset-y-0 left-0 z-40' : 'hidden lg:flex'}
      `}>
        {/* Close button for mobile */}
        {mobileView === 'servers' && (
          <button 
            onClick={showChat}
            className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        )}
        
        {/* Direct Messages */}
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer">
          <AtSign className="w-6 h-6" />
        </div>
        
        {/* Server List */}
        {servers.map(server => (
          <div
            key={server.id}
            className={`relative w-12 h-12 rounded-2xl flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer ${
              server.active 
                ? "bg-teal-600 text-white" 
                : "bg-gray-800 text-gray-400 hover:bg-teal-500 hover:text-white"
            }`}
          >
            <div className="font-semibold text-sm">
              {server.name.slice(0, 2)}
            </div>
            {server.unread > 0 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                {server.unread}
              </div>
            )}
          </div>
        ))}
        
        {/* Add Server */}
        <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-all duration-200 cursor-pointer">
          <Plus className="w-6 h-6 text-green-500" />
        </div>
      </div>

      {/* Channels Sidebar - Hidden on mobile unless active */}
      <div className={`
        w-60 bg-gray-900 border-r border-gray-800 flex flex-col
        lg:flex
        ${mobileView === 'channels' ? 'flex fixed inset-y-0 left-0 z-40' : 'hidden lg:flex'}
      `}>
        {/* Close button for mobile */}
        {mobileView === 'channels' && (
          <button 
            onClick={showChat}
            className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Server Header */}
        <div className="p-4 border-b border-gray-800">
          <h2 className="font-bold text-white text-lg">Friends Server</h2>
        </div>

        {/* Channels */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
            Text Channels
          </div>
          {channels.filter(c => c.type === "text").map(channel => (
            <div
              key={channel.id}
              className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                activeChannel === channel.id 
                  ? "bg-gray-800 text-white" 
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
              onClick={() => {
                setActiveChannel(channel.id);
                if (window.innerWidth < 1024) showChat();
              }}
            >
              <Hash className="w-4 h-4" />
              <span className="flex-1">{channel.name}</span>
              {channel.unread > 0 && (
                <span className="bg-red-500 text-white text-xs px-1.5 rounded-full min-w-5 text-center">
                  {channel.unread}
                </span>
              )}
            </div>
          ))}

          <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 mt-4">
            Voice Channels
          </div>
          {channels.filter(c => c.type === "voice").map(channel => (
            <div
              key={channel.id}
              className="flex items-center gap-2 p-2 rounded cursor-pointer text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>{channel.name}</span>
            </div>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-2 border-t border-gray-800 bg-gray-800/50">
          <div className="flex items-center gap-3 p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              Y
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium truncate">Your Name</div>
              <div className="text-green-500 text-xs">#1234</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area - Always visible but adjusts width */}
      <div className={`
        flex-1 flex flex-col
        ${mobileView !== 'chat' ? 'hidden lg:flex' : 'flex'}
        pb-16 lg:pb-0
      `}>
        {/* Chat Header */}
        <div className="h-12 border-b border-gray-800 bg-gray-900/50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={showChannels}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Hash className="w-5 h-5 text-gray-400" />
            <span className="font-semibold text-white">general</span>
            <div className="hidden sm:flex items-center">
              <div className="w-px h-6 bg-gray-700 mx-2"></div>
              <span className="text-gray-400 text-sm">General discussions</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
              <Pin className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 bg-gray-800 rounded px-2 py-1">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent border-none text-sm text-white placeholder-gray-400 focus:outline-none w-20 sm:w-32"
              />
            </div>
            <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
              <Inbox className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/30">
          {messages.map(msg => (
            <div key={msg.id} className={`flex gap-3 group hover:bg-gray-800/30 p-2 rounded ${msg.isCurrentUser ? 'bg-blue-500/10' : ''}`}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                {msg.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`font-semibold text-sm sm:text-base ${msg.isCurrentUser ? 'text-blue-400' : 'text-white'}`}>
                    {msg.user}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm">{msg.time}</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base break-words">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-800 bg-gray-900/50">
          <form onSubmit={sendMessage} className="flex gap-2 sm:gap-4">
            <div className="flex-1 bg-gray-800 rounded-lg border border-gray-700 focus-within:border-teal-500 transition-colors">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message #general"
                className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:outline-none px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              disabled={!message.trim()}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Members Sidebar - Hidden on mobile unless active */}
      <div className={`
        w-60 bg-gray-900 border-l border-gray-800 flex flex-col
        lg:flex
        ${mobileView === 'members' ? 'flex fixed inset-y-0 right-0 z-40' : 'hidden lg:flex'}
      `}>
        {/* Close button for mobile */}
        {mobileView === 'members' && (
          <button 
            onClick={showChat}
            className="lg:hidden absolute top-4 left-4 text-gray-400 hover:text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <Users className="w-5 h-5" />
            <span className="font-semibold">ONLINE — {onlineUsers.length}</span>
          </div>
        </div>
        
        <div className="p-4 space-y-4 overflow-y-auto">
          {onlineUsers.map(user => (
            <div key={user.id} className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {user.avatar}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                  user.status === 'online' ? 'bg-green-500' :
                  user.status === 'idle' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`} />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                {user.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile overlay when sidebars are open */}
      {(mobileView === 'servers' || mobileView === 'channels' || mobileView === 'members') && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={showChat}
        />
      )}
    </div>
  );
}