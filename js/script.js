const imageRoutes = {
  logoNavbar: '/sources/logo.svg',
  logoFooter: '/sources/logo 2.svg',
  carrito: '/sources/Carrito.svg',
  whatsappIcon: '/sources/WhatsappLogo.svg',
  instagramIcon: '/sources/InstagramLogo.svg',
  cards: [
    { img: '/sources/Sofá Patagonia.png', link: 'detalle-producto.html?id=8' },
    { img: '/sources/Biblioteca Recoleta.png', link: 'detalle-producto.html?id=2' },
    { img: '/sources/Butaca Mendoza.png', link: 'detalle-producto.html?id=3' },
    { img: '/sources/Escritorio Costa.png', link: 'detalle-producto.html?id=11' },
  ]
};

const linkRoutes = {
  navbar: {
    home: 'index.html',
    productos: 'productos.html',
    nosotros: 'nosotros.html',
    contacto: 'contacto.html'
  },
  btnHero: 'productos.html',
  footerLinks: {
    home: 'index.html',
    productos: 'productos.html',
    nosotros: 'nosotros.html',
    contacto: 'contacto.html'
  }
};

//Actualizar navbar
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  const text = link.textContent.trim().toLowerCase();
  if (text === 'home') link.href = linkRoutes.navbar.home;
  if (text === 'productos') link.href = linkRoutes.navbar.productos;
  if (text === 'nosotros') link.href = linkRoutes.navbar.nosotros;
  if (text === 'contacto') link.href = linkRoutes.navbar.contacto;
});

// Logo y carrito
document.querySelector('nav .nav-left img').src = imageRoutes.logoNavbar;
const cartImg = document.querySelector('nav .cart img');
if (cartImg) cartImg.src = imageRoutes.carrito;

// Actualizar botón hero 
const btnHero = document.querySelector('.btn-hero');
if (btnHero) btnHero.href = linkRoutes.btnHero;

// Actualizar cards 
const cards = document.querySelectorAll('.cards-container .card');
cards.forEach((card, index) => {
  if (imageRoutes.cards[index]) {
    card.querySelector('img').src = imageRoutes.cards[index].img;
    card.querySelector('a').href = imageRoutes.cards[index].link;
  }
});

// Actualizar footer 
const footerLogo = document.querySelector('.footer-logo');
if (footerLogo) footerLogo.src = imageRoutes.logoFooter;

const footerIcons = document.querySelectorAll('.footer-icon');
footerIcons.forEach(icon => {
  if (icon.alt.toLowerCase().includes('whatsapp')) icon.src = imageRoutes.whatsappIcon;
  if (icon.alt.toLowerCase().includes('instagram')) icon.src = imageRoutes.instagramIcon;
});

// Footer 
const footerLinks = document.querySelectorAll('.footer-col ul li a');
footerLinks.forEach(link => {
  const text = link.textContent.trim().toLowerCase();
  if (text === 'home') link.href = linkRoutes.footerLinks.home;
  if (text === 'productos') link.href = linkRoutes.footerLinks.productos;
  if (text === 'nosotros') link.href = linkRoutes.footerLinks.nosotros;
  if (text === 'contacto') link.href = linkRoutes.footerLinks.contacto;
});
