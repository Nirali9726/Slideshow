const images = [
  "images/1.webp",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.webp"
];

const slideEl = document.getElementById('slide');
const dotsContainer = document.querySelector('.dots');
let current = 0;

// create dots dynamically based on number of images
images.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  current = (index + images.length) % images.length;
  slideEl.src = images[current];
  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

// auto play every 3 seconds
setInterval(() => {
  showSlide(current + 1);
}, 3000);