import React from 'react';

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col content-center items-center justify-center text-center gap-3 p-10">
      <h1 className="text-5xl xl:text-7xl 2xl:text-8xl font-semibold">
        Welcome to the <span className="block">
          <span className="font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 text-transparent bg-clip-text">Custom Poster Maker</span>
        </span>
      </h1>
      <p className="text-lg text-gray-600">
        Create beautiful custom posters with our easy-to-use poster maker.
      </p>
      <button className="px-8 py-4 text-white bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300">
        Get Started
      </button>
    </main>
  );
}
