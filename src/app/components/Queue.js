import React from 'react';

export default function Queue() {
  const queueItems = [
    { id: 1, title: 'Song 1', image: '/path-to-image1.jpg' },
    { id: 2, title: 'Song 2', image: '/path-to-image2.jpg' },
  ];

  return (
    <div className="p-4">
      <h3 className="text-white text-lg font-bold">Queue</h3>
      <div className="flex overflow-x-scroll space-x-4">
        {queueItems.map((item) => (
          <div key={item.id} className="relative w-24">
            <img src={item.image} alt={item.title} className="rounded-md" />
            <button className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
