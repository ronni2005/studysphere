const quotes = [
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    }
  ];
  
  window.onload = () => {
    const quoteElem = document.getElementById("quote");
    const authorElem = document.getElementById("author");
  
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElem.textContent = `"${randomQuote.text}"`;
    authorElem.textContent = `— ${randomQuote.author}`;
  };
  