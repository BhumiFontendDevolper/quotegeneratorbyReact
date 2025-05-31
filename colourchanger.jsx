import React, { useState } from "react";

export const QuoteGenerator = () => {
  const quotes = [
    "Believe in yourself!",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream it. Wish it. Do it.",
    "Stay focused and never give up.",
    "You are stronger than you think.",
    "Work hard in silence, let your success make the noise.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop until you’re proud.",
    "Great things never come from comfort zones.",
    "Doubt kills more dreams than failure ever will.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Start where you are. Use what you have. Do what you can.",
    "Little things make big days.",
    "It always seems impossible until it’s done.",
    "Your limitation—it’s only your imagination.",
    "Push harder than yesterday if you want a different tomorrow.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Success is what comes after you stop making excuses.",
    "Be stronger than your excuses.",
    "Discipline is doing what needs to be done, even if you don’t want to do it.",
    "The secret of getting ahead is getting started.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Success isn’t always about greatness. It’s about consistency.",
    "Stay positive. Work hard. Make it happen.",
    "Failure is not the opposite of success. It’s part of success.",
    "Success is no accident. It is hard work, perseverance, learning, and sacrifice.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Difficult roads often lead to beautiful destinations.",
    "The future depends on what you do today.",
    "Never give up. Great things take time.",
    "Act as if what you do makes a difference. It does.",
    "Hustle in silence and let your success make the noise.",
    "Believe you can and you’re halfway there.",
    "Every accomplishment starts with the decision to try.",
    "Strive for progress, not perfection.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Opportunities don’t happen. You create them.",
    "Don’t limit your challenges. Challenge your limits.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Keep going. Everything you need will come to you at the perfect time."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const idx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[idx]);
  };

  return (
    <div style={{
      height: "100vh",
      width: "100%",
      background: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      padding: "2rem",
      textAlign: "center"
    }}>
      <div>
        <h2>{quote}</h2>
        <p style={{ fontStyle: "italic", color: "#555" }}>
          Total quotes: {quotes.length}
        </p>
      </div>
      <button
        style={{
          padding: "1rem 2rem",
          borderRadius: "10px",
          border: "none",
          background: "#4CAF50",
          color: "white",
          fontSize: "1rem",
          cursor: "pointer"
        }}
        onClick={randomQuote}
      >
        Click here to Generate Quote
      </button>
    </div>
  );
};
