import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <container>
      <section className="video-container">
        <video src="https://player.vimeo.com/external/181445574.hd.mp4?s=d24f32d879305e931468d55e4d7ce6efb5a95c39&amp;profile_id=119" autoplay loop playsinline></video>
        <div className="callout">
          <h1>Run Fast, Eat Slow</h1>
          <div>The recipe generator and meal planning guide</div>
        </div>
      </section>
    </container>
  );
}