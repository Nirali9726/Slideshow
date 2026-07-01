const images = [
  "images/1.webp",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.webp"
];

const slideEl = document.getElementById('slide');

let current = 0;

function showSlide(index) {
  current = (index + images.length) % images.length;
  slideEl.src = images[current];
  
}

// auto play every 3 seconds
setInterval(() => {
  showSlide(current + 1);
}, 3000);
