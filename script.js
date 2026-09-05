const photos = [
  { file: "01-graduacion-trono", caption: "Un trono para la ocasión — Graduación 2025", size: "big" },
  { file: "02-graduando-familia", caption: "El abrazo antes de partir", size: "tall" },
  { file: "04-torta-class25", caption: "Class 25, en cada detalle", size: "single" },
  { file: "10-birrete-mama", caption: "El birrete, listo para volar", size: "single" },
  { file: "03-baile-escenario", caption: "La pista se enciende", size: "wide" },
  { file: "05-salon-baile", caption: "Bajo las luces del salón", size: "wide" },
  { file: "07-amigos-arco", caption: "Los amigos de siempre", size: "tall" },
  { file: "06-graduando-solo", caption: "A solas con el momento", size: "big" },
  { file: "08-coreografia-lentes", caption: "Coreografía con actitud", size: "single" },
  { file: "09-baile-energia", caption: "Energía hasta el final", size: "single" },
];

const grid = document.getElementById("galleryGrid");

photos.forEach((p, i) => {
  const item = document.createElement("div");
  item.className = `grid-item ${p.size}`;
  item.dataset.index = i;
  item.innerHTML = `
    <img src="assets/img/${p.file}-thumb.jpg" alt="${p.caption}" loading="lazy">
    <div class="g-caption">${p.caption}</div>
  `;
  item.addEventListener("click", () => openLightbox(i));
  grid.appendChild(item);
});

// ---------- Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbCaption = document.getElementById("lbCaption");
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function updateLightbox() {
  const p = photos[currentIndex];
  lbImage.src = `assets/img/${p.file}.jpg`;
  lbImage.alt = p.caption;
  lbCaption.textContent = p.caption;
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbNext").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % photos.length;
  updateLightbox();
});
document.getElementById("lbPrev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updateLightbox();
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") document.getElementById("lbNext").click();
  if (e.key === "ArrowLeft") document.getElementById("lbPrev").click();
});

// ---------- Header solid on scroll ----------
const header = document.querySelector(".site-header");
function onScroll() {
  if (window.scrollY > window.innerHeight * 0.7) {
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
  }
}
window.addEventListener("scroll", onScroll);
onScroll();

// ---------- Mobile nav ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", false);
    document.body.classList.remove("nav-open");
  })
);

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
