const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/* Nav */
const nav = document.querySelector('header nav');

const navLinks = nav.querySelectorAll('a');
navLinks.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`];
});

const logo = nav.querySelector('#logo-img');
logo.src = siteContent.nav["img-src"];

/* CTA */
const cta = document.querySelector('.cta');

const ctaText = cta.querySelector('.cta-text');
ctaText.querySelector('h1').innerHTML = siteContent.cta.h1.split(' ').join('<br />');
ctaText.querySelector('button').textContent = siteContent.cta.button;

cta.querySelector('#cta-img').src = siteContent.cta['img-src'];

/* Main content */
const mainContent = document.querySelector('.main-content');

const topTextContents = mainContent.querySelectorAll('.top-content .text-content');
const [ features, about ] = topTextContents;
features.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
features.querySelector('p').textContent = siteContent['main-content']['features-content'];
about.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
about.querySelector('p').textContent = siteContent['main-content']['about-content'];

mainContent.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];

const bottomTextContents = mainContent.querySelectorAll('.bottom-content .text-content');
const [ services, product, vision ] = bottomTextContents;
services.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
services.querySelector('p').textContent = siteContent['main-content']['services-content'];
product.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
product.querySelector('p').textContent = siteContent['main-content']['product-content'];
vision.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
vision.querySelector('p').textContent = siteContent['main-content']['vision-content'];

/* Contact */
const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];

const contactParagraphs = contact.querySelectorAll('p');
const [ address, phone, email ] = contactParagraphs;
address.innerHTML = siteContent.contact.address.split('Street').join('Street <br />');
phone.textContent = siteContent.contact.phone;
email.textContent = siteContent.contact.email;

/* Footer */
document.querySelector('footer p').textContent = siteContent.footer.copyright;