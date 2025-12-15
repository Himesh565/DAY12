import React from "react";

export default function About() {
  return (
    <div className="container pt-5">
      
      {/* ------------ INTRO SECTION ------------ */}
      <section className="mb-10">
        <h1>About Us</h1>
        <p className="max-w-[750px] text-custom-text leading-[1.7]">
          Welcome to our Product Showcase Platform — a modern, fast and user-friendly
          application built using Vite + React. Our goal is to deliver clean UI,
          smooth navigation and a delightful user experience.
        </p>
      </section>

      {/* ------------ WHO WE ARE ------------ */}
      <section className="section">
        <h2>Who We Are</h2>
        <p className="max-w-[750px] text-custom-text leading-[1.7]">
          We are a passionate team of developers and designers who focus on creating
          high-performance, interactive front-end applications. Our product showcase
          system helps users explore products easily and visually.
        </p>
      </section>

      {/* ------------ OUR MISSION ------------ */}
      <section className="section">
        <h2>Our Mission</h2>
        <p className="max-w-[700px] text-custom-text leading-[1.7]">
          Our mission is to develop intuitive and beautiful web interfaces that improve
          user experience and empower businesses to showcase their products online
          in the most effective way.
        </p>
      </section>

      {/* ------------ OUR VISION ------------ */}
      <section className="section">
        <h2>Our Vision</h2>
        <p className="max-w-[700px] text-custom-text leading-[1.7]">
          To become a leading front-end development team known for quality, creativity,
          and problem-solving using modern technologies like React & Vite.
        </p>
      </section>

      {/* ------------ OUR VALUES ------------ */}
      <section className="section">
        <h2>Our Values</h2>
        <ul className="text-custom-text leading-[1.8]">
          <li>✔ User-centric design</li>
          <li>✔ Performance & speed</li>
          <li>✔ Scalable & clean code</li>
          <li>✔ Creativity & innovation</li>
          <li>✔ Continuous learning</li>
        </ul>
      </section>

      {/* ------------ JOURNEY / TIMELINE ------------ */}
      <section className="section">
        <h2>Our Journey</h2>
        <div className="max-w-[750px] pl-3 text-custom-text">
          <p><strong>2023:</strong> Started as a small frontend learning group.</p>
          <p><strong>2024:</strong> Developed our first UI component system.</p>
          <p><strong>2025:</strong> Built this modern Product Showcase platform.</p>
        </div>
      </section>

      {/* ------------ MEET OUR TEAM (ANIMATED CARDS) ------------ */}
      <section className="section">
        <h2>Meet Our Team</h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 mt-4">
          {[
            { name: "Himesh", role: "Frontend Developer", emoji: "👨‍💻" },
            { name: "Raj", role: "UI/UX Designer", emoji: "🎨" },
            { name: "Aarav", role: "React Developer", emoji: "⚛️" },
            { name: "Simran", role: "QA Tester", emoji: "✅" },
          ].map((member, index) => (
            <div
              key={member.name}
              className="team-card group cursor-pointer"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="text-5xl mb-3 transition-transform duration-500 ease-out group-hover:scale-125 group-hover:rotate-12">
                {member.emoji}
              </div>
              
              <h3 className="m-0 mb-2 text-custom-text text-xl font-bold transition-colors duration-300 group-hover:text-custom-accent">
                {member.name}
              </h3>

              <p className="m-0 text-custom-muted text-sm transition-colors duration-300 group-hover:text-custom-text">
                {member.role}
              </p>
              
              <div className="mt-3 w-0 h-1 bg-gradient-to-r from-custom-accent to-custom-secondary transition-all duration-500 group-hover:w-full mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
