import { useState } from 'react';
import { Hash, Bell, Mail, Users, ChevronDown, ChevronRight, UserPlus, Settings, Search } from 'lucide-react';

function MyGrps() {
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [expandedCategories, setExpandedCategories] = useState({
    text: true,
    notifications: true
  });
  const [showMembers, setShowMembers] = useState(true);

  const channels = {
    notifications: [
      { id: 'inbox', name: 'Inbox', icon: Mail, unread: 5 },
      { id: 'announcements', name: 'Announcements', icon: Bell, unread: 2 }
    ],
    text: [
      { id: 'general', name: 'general', icon: Hash, unread: 0 },
      { id: 'random', name: 'random', icon: Hash, unread: 3 },
      { id: 'help', name: 'help', icon: Hash, unread: 0 }
    ]
  };

  const members = {
    online: [
      { id: 1, name: 'Alice Kumar', avatar: 'A', status: 'online', role: 'Admin' },
      { id: 2, name: 'Raj Patel', avatar: 'R', status: 'online', role: 'Member' },
      { id: 3, name: 'Priya Singh', avatar: 'P', status: 'online', role: 'Member' }
    ],
    offline: [
      { id: 4, name: 'Arjun Sharma', avatar: 'A', status: 'offline', role: 'Member' },
      { id: 5, name: 'Neha Gupta', avatar: 'N', status: 'offline', role: 'Member' }
    ]
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="flex h-screen bg-gray-50 rounded-md">
      {/* Sidebar */}
      <div className="w-60 bg-gradient-to-br from-indigo-600 to-blue-600 flex flex-col shadow-xl">
        {/* Server Header */}
        <div className="h-14 px-4 flex items-center justify-between shadow-lg border-b border-white/10">
          <h2 className="font-bold text-white text-lg">My Groups</h2>
          <button className="text-white hover:bg-white/20 p-1.5 rounded-lg transition">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Channels List */}
        <div className="flex-1 overflow-y-auto pt-3 px-2">
          {/* Notifications Category */}
          <div className="mb-4">
            <button
              onClick={() => toggleCategory('notifications')}
              className="w-full px-2 flex items-center hover:bg-white/10 py-1.5 rounded text-xs font-semibold text-white/80 uppercase tracking-wide transition"
            >
              {expandedCategories.notifications ? 
                <ChevronDown className="w-3 h-3 mr-1" /> : 
                <ChevronRight className="w-3 h-3 mr-1" />
              }
              Notifications
            </button>
            {expandedCategories.notifications && (
              <div className="mt-1 space-y-1">
                {channels.notifications.map(channel => (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full px-3 py-2 flex items-center justify-between rounded-lg transition ${
                      selectedChannel === channel.id
                        ? 'bg-white/20 text-white shadow-md'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center">
                      <channel.icon className="w-4 h-4 mr-2" />
                      <span className="font-medium text-sm">{channel.name}</span>
                    </div>
                    {channel.unread > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                        {channel.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Text Channels Category */}
          <div>
            <button
              onClick={() => toggleCategory('text')}
              className="w-full px-2 flex items-center hover:bg-white/10 py-1.5 rounded text-xs font-semibold text-white/80 uppercase tracking-wide transition"
            >
              {expandedCategories.text ? 
                <ChevronDown className="w-3 h-3 mr-1" /> : 
                <ChevronRight className="w-3 h-3 mr-1" />
              }
              Text Channels
            </button>
            {expandedCategories.text && (
              <div className="mt-1 space-y-1">
                {channels.text.map(channel => (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full px-3 py-2 flex items-center justify-between rounded-lg transition ${
                      selectedChannel === channel.id
                        ? 'bg-white/20 text-white shadow-md'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center">
                      <channel.icon className="w-4 h-4 mr-2" />
                      <span className="font-medium text-sm">{channel.name}</span>
                    </div>
                    {channel.unread > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                        {channel.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* User Area */}
        <div className="h-16 bg-black/20 px-3 flex items-center">
          <div className="flex items-center flex-1">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-sm font-bold text-white shadow-lg">
              U
            </div>
            <div className="ml-2.5">
              <p className="text-sm font-semibold text-white">Username</p>
              <p className="text-xs text-white/60">#1234</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Channel Header */}
        <div className="h-14 px-5 flex items-center justify-between shadow-sm border-b border-gray-200 bg-white">
          <div className="flex items-center">
            <Hash className="w-6 h-6 text-gray-500 mr-2" />
            <h1 className="font-bold text-gray-800 text-lg">{selectedChannel}</h1>
          </div>
          <button 
            onClick={() => setShowMembers(!showMembers)}
            className="flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition font-medium text-sm"
          >
            <Users className="w-4 h-4" />
            Members
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Hash className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                Welcome to #{selectedChannel}
              </h2>
              <p className="text-gray-500">
                This is the beginning of the #{selectedChannel} channel
              </p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder={`Message #${selectedChannel}`}
              className="w-full bg-gray-100 text-gray-800 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Members Sidebar */}
      {showMembers && (
        <div className="w-60 bg-white border-l border-gray-200 flex flex-col shadow-xl">
          {/* Members Header */}
          <div className="h-14 px-4 flex items-center justify-between border-b border-gray-200">
            <h3 className="font-bold text-gray-800">Members</h3>
            <button className="text-indigo-600 hover:bg-indigo-50 p-1.5 rounded-lg transition">
              <UserPlus className="w-5 h-5" />
            </button>
          </div>

          {/* Search Members */}
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search members"
                className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              />
            </div>
          </div>

          {/* Members List */}
          <div className="flex-1 overflow-y-auto p-3">
            {/* Online Members */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                Online — {members.online.length}
              </h4>
              <div className="space-y-1">
                {members.online.map(member => (
                  <button
                    key={member.id}
                    className="w-full px-2 py-2 flex items-center hover:bg-gray-100 rounded-lg transition group"
                  >
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-sm font-bold text-white">
                        {member.avatar}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2.5 flex-1 text-left">
                      <p className="text-sm font-medium text-gray-800 group-hover:text-indigo-600">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Offline Members */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                Offline — {members.offline.length}
              </h4>
              <div className="space-y-1">
                {members.offline.map(member => (
                  <button
                    key={member.id}
                    className="w-full px-2 py-2 flex items-center hover:bg-gray-100 rounded-lg transition group"
                  >
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-sm font-bold text-white opacity-60">
                        {member.avatar}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gray-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2.5 flex-1 text-left">
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-400">{member.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyGrps;