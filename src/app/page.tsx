'use client';

import challenges from '../data.json';
import { ModeToggle } from '@/components/mode-toggle';
import ChallengeCard, { type Challenge } from '@/components/challenge-card';
import React, { useState } from 'react';
import { Discord, Github, Linkedin, List, X } from 'react-bootstrap-icons';

const typedChallenges: Challenge[] = challenges;

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
  {
    name: 'Discord',
    url: 'mailto:kkfergie22@example.com',
    icon: Discord,
  },
];

function MobileNav() {
  return (
    <nav className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-md flex flex-col items-center py-4 space-y-4 z-20">
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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between px-8 py-6 fixed w-full top-0 bg-inherit z-10">
        <h1 className="font-bold text-lg md:text-2xl">devwithchris.</h1>
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
                    <Icon size={24} />
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
      <main className="pt-24">
        <h1 className="text-center text-lg md:text-3xl font-heading my-8">
          Every card here represents a Frontend Mentor challenge I’ve tackled —
          proof of my frontend skills and love for building clean, responsive
          web experiences.
        </h1>
        <div className="p-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4">
            {typedChallenges.map((c, i) => {
              return (
                <React.Fragment key={i}>
                  <ChallengeCard
                    title={c.title}
                    desc={c.desc}
                    imgPath={c.imgPath}
                    tags={c.tags}
                    link={c.link}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
