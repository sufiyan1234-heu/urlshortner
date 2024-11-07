// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-800 px-6 py-10">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">UrlShortener</span>! We make sharing long URLs easier by shortening them to simple, shareable links. Whether youre a business, a developer, or just need a quick link, we’re here to help.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">Our Mission</h2>
          <p>
            Our mission is to provide a reliable, fast, and secure URL shortening service to help users share links with ease. We aim to offer a tool that is accessible, straightforward, and optimized for performance.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Simple and intuitive interface for quick URL shortening.</li>
            <li>Enhanced link tracking and analytics for business insights.</li>
            <li>Customizable short links for branding and personalization.</li>
            <li>Reliable and fast performance for seamless user experience.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">Our Vision</h2>
          <p>
            We envision a world where sharing information is as seamless as possible. By focusing on simplicity and accessibility, we hope to become the go-to solution for URL shortening in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
