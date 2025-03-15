// This function executes when the page loads
window.onload = () => {
  document.body.classList.remove("container");

  // Start showing the first paragraph after a delay (8 seconds)
  setTimeout(() => {
      currentParagraph = 0; // Reset currentParagraph to 0
      showNextParagraph(); // Start showing lyrics
  }, 8000); // Initial delay before showing the first paragraph
};

// Function to display lyrics one by one
let currentParagraph = 0; // Track the current paragraph index

// Array of durations for each paragraph (in milliseconds)
const durations = [
  3000, // "I don′t wanna change a thing"
  3500, // "I'm thinking that we′re right where we're supposed to be"
  2200, // "Are you feeling differently"
  3000, // "Or do you still find yourself missing me?"
  3200, // "And our talks on sidewalks hours long"
  3000, // "We watch the sun until it's gone"
  3000, // "I′ll be seeing you in my dreams"
  2400, // "But right now, it′s harder for me"
  6600, // "I'll be the one to hold you someday, faraway"
  3800, // "I guess I′ll get to know you"
  3700, // "Through the time and space (ooh)"
  2700, // "Told you we'd be closer"
  2200, // "After this is over"
  5200, // "I′ll be the one to hold you someday"
  3700, // "Someday faraway"
  3200, // "Wishing it would just make sense (make sense)"
  2900, // "Some of these days I get so impatient"
  2500, // "Walking right along the fence"
  2000, // "And I'm losing my balance"
  3150, // "′Cause some nights, I remember the first day of summer"
  3050, // "That's when it felt like you'd always be mine (always be mine)"
  3000, // "Stole you some flowers, stayed up for hours"
  2900, // "Knew in the morning that it′d be goodbye"
  6600, // "I′ll be the one to hold you someday, faraway"
  4100, // "I guess I'll get to know you (get to know ya)"
  3700, // "Through the time and space (through the time and space)"
  2700, // "Told you we′d be closer (we'd be closer)"
  2100, // "After this is over (after this is)"
  5400, // "I′ll be the one to hold you someday (someday)"
  3700, // "Someday faraway"
];

// Function to display the next paragraph
function showNextParagraph() {
  const paragraphs = document.querySelectorAll('.lyrics p');

  // Fade out the current paragraph
  if (currentParagraph > 0) {
      const prevParagraph = paragraphs[currentParagraph - 1];
      prevParagraph.style.opacity = '0'; // Start fade out

      // Wait for fade-out to finish before hiding the paragraph
      setTimeout(() => {
          prevParagraph.style.display = 'none'; // Hide after fade-out
          displayCurrentParagraph(); // Show the next paragraph after fade-out
      }, 1000); // Match this duration with the CSS transition time
  } else {
      displayCurrentParagraph(); // For the first paragraph
  }
}

// Function to display the current paragraph
function displayCurrentParagraph() {
  const paragraphs = document.querySelectorAll('.lyrics p');

  // Show the current paragraph if within bounds
  if (currentParagraph < paragraphs.length) {
      const current = paragraphs[currentParagraph];
      current.style.display = 'block'; // Show current paragraph
      current.style.opacity = '1'; // Fade in

      // Set a timeout for the next paragraph based on the current paragraph's duration
      setTimeout(() => {
          currentParagraph++; // Move to the next paragraph
          showNextParagraph(); // Call the function to show the next paragraph
      }, durations[currentParagraph]); // Use the duration for the current paragraph
  }
}