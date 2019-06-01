import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <section class="hero is-fullheight is-info is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Main hoon kaun main hun kaun</h1>
            <h2 class="subtitle">main hun main hun main hun DON(xypnox)!</h2>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
