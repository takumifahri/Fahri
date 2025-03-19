






















'use client'
// File: pages/index.js
import Head from 'next/head';
import Header from '../components/Header/page';
import Hero from '../components/Hero/page';
import Skills from '../components/Skills/page';
import Projects from '../components/Projects/page';
import Services from '../components/Services/page';
import Contact from '../components/Contact/page';
import Footer from '../components/Footer/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Fahri Radiansyah - Portfolio</title>
        <meta name="description" content="Portfolio website of Fahri Radiansyah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}