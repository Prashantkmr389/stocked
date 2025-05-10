import React from 'react';

const UserProfile: React.FC = () => {
  // Placeholder user data
  const user = {
    name: 'Alexa Scarlet',
    phone: '+977-9824681890',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    favorites: 6,
    userPoints: 0.03,
    vouchPoints: 0,
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-10">
      <div className="relative w-32 h-32 mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
      <p className="text-gray-500 mb-4">{user.phone}</p>
      <div className="flex justify-center gap-8 mb-6">
        <div className="flex flex-col items-center">
          <span className="text-red-500 font-bold text-lg">{user.favorites}</span>
          <span className="text-xs text-gray-400">My Favorites</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-500 font-bold text-lg">{user.userPoints}</span>
          <span className="text-xs text-gray-400">User Points</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-700 font-bold text-lg">{user.vouchPoints}</span>
          <span className="text-xs text-gray-400">Vouch Points</span>
        </div>
      </div>
      <div className="w-full">
        <ul className="divide-y divide-gray-200">
          <li className="py-3"><button className="w-full text-left">My Orders</button></li>
          <li className="py-3"><button className="w-full text-left">Refer and Earn</button></li>
          <li className="py-3"><button className="w-full text-left">Help Center</button></li>
          <li className="py-3"><button className="w-full text-left">Edit Profile Details</button></li>
          <li className="py-3"><button className="w-full text-left">Settings</button></li>
        </ul>
      </div>
      <div className="text-xs text-gray-400 mt-6">Version 1.0</div>
    </div>
  );
};

export default UserProfile; 