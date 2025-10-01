'use client';

import { ModeToggle } from '@/components/mode-toggle';
import React, { useState } from 'react';
import { Github, Linkedin, List, X } from 'react-bootstrap-icons';

import { ChallengeCard } from './challenge-card';

import type { Challenge } from '@/payload-types';

const socialLinks = [
  {
    name: 'Github',
    url: 'https://github.com/kkfergie22',
    icon: Github,
  },
  {
    name: 'linkedIn',
    url: 'https://linkedin.com/in/christian-koranteng',
    icon: Linkedin,
  },
];

function MobileNav() {
  return (
    <nav className="absolute top-full left-0 w-full bg-[#f9fafb] dark:bg-black shadow-md flex flex-col items-center py-4 space-y-4 z-20">
      <ul className="flex flex-col gap-4 items-center">
        {socialLinks.map(({ name, url, icon: Icon }) => (
          <li key={name} className="w-full flex justify-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition flex items-center gap-2"
            >
              <Icon size={24} />
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function HomeClient({
  challenges,
}: {
  challenges: Challenge[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-8 py-6 fixed w-full top-0 bg-inherit from-gray-50 to-white border-b-2 z-10">
        <h1 className="font-bold text-lg md:text-2xl text-[#111827] dark:text-[#fefefe]">
          devwithchris.
        </h1>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          <ul className="flex gap-4 items-center justify-center">
            {socialLinks.map(({ name, url, icon: Icon }) => {
              return (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <Icon
                      size={24}
                      className="text-[#111827] dark:text-[#fefefe]"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <ModeToggle />
        </nav>
        {/* Mobile Nav */}
        <div className="flex gap-4 items-center justify-center md:hidden">
          <ModeToggle />
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </header>
      {isOpen && <MobileNav />}
      <main className="pt-24 bg-[#f9fafb] dark:bg-black/50">
        <h1 className="text-center text-lg md:text-3xl font-heading my-8 text-[#111827] dark:text-[#fefefe]">
          Every card here represents a Frontend Mentor challenge I’ve tackled —
          proof of my frontend skills and love for building clean, responsive
          web experiences.
        </h1>
        <div className="p-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4">
            {challenges.map((ch) => {
              return (
                <React.Fragment key={ch.id}>
                  <ChallengeCard {...ch} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
