import React from 'react';

export default function NowPlaying() {
  return (
    <div className="flex p-4 bg-gray-800 text-white">
      <div className="w-1/4">
        <img src="/path-to-artwork.jpg" alt="Song Artwork" className="rounded-md" />
        <div className="mt-2">
          <h2 className="text-lg font-bold">#12 For You</h2>
          <p className="text-sm">Shineburst</p>
        </div>
      </div>
      <div className="flex-1 px-4">
        <p>About</p>
        <p className="text-sm text-gray-400">
          This is where the description of the song will go.
        </p>
        <div className="flex items-center space-x-2 mt-4">
          <button className="bg-gray-600 px-4 py-2 rounded-full">Play</button>
          <button className="bg-gray-600 px-4 py-2 rounded-full">Pause</button>
        </div>
        <div className="mt-4">
          <div className="bg-gray-700 h-2 rounded-full">
            <div className="bg-yellow-500 h-full w-1/3"></div>
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>0:45</span>
            <span>3:12</span>
          </div>
        </div>
      </div>
    </div>
  );
}
