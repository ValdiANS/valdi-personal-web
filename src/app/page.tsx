'use client';

import { Worker } from '@react-pdf-viewer/core';

import Navbar from 'src/components/NavBar';
import Hero from 'src/components/index/Hero';
import FeaturedProjects from 'src/components/index/FeaturedProjects';
import Education from 'src/components/index/Education';
import Experience from 'src/components/index/Experience';
import Contact from 'src/components/index/Contact';

export default function Home() {
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <div className='w-full min-h-screen flex flex-col items-center mx-auto'>
        <Navbar />

        <div className='w-full overflow-x-hidden'>
          <div className='w-full max-w-5xl mx-auto px-4 xl:px-0'>
            <main className='w-full'>
              <Hero />

              <FeaturedProjects />

              <Education />

              <Experience />

              <Contact />
            </main>
          </div>
        </div>
      </div>
    </Worker>
  );
}
