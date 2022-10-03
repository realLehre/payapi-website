const linksContainer = document.querySelector('.header-right');
const links = document.querySelectorAll('.link');
const menuIconContainer = document.querySelector('.menu-icon');
const menuIcons = document.querySelectorAll('.menu-btn');
const headerBtn = document.querySelector('.header-right-btn');
const headerLogo = document.querySelector('.header-left');
const headerPattern = document.getElementById('header-pattern');
const heroImg = document.querySelector('.main-hero-right');
const pricingHero = document.getElementById('pricings-container');
const aboutHero = document.getElementById('about-speech-container');
const contactHero = document.getElementById('contact-container');

menuIcons.forEach((menuIcon) => {
  menuIcon.addEventListener('click', () => {
    if (menuIcon.dataset.id == 'open') {
      document.documentElement.classList.add('open');

      linksContainer.classList.add('open');

      menuIconContainer.classList.add('open');

      setTimeout(() => {
        links.forEach((linkItem) => {
          linkItem.classList.add('open');
        });

        headerBtn.classList.add('open');
      }, 300);

      if (pricingHero) {
        pricingHero.classList.add('open');
      }
      if (aboutHero) {
        aboutHero.classList.add('open');
      }
      if (contactHero) {
        contactHero.classList.add('open');
      }
      if (heroImg) {
        heroImg.classList.add('open');
      }

      headerPattern.classList.add('open');

      setTimeout(() => {
        headerLogo.classList.add('open');
      }, 300);
    } else {
      document.documentElement.classList.remove('open');

      linksContainer.classList.remove('open');

      menuIconContainer.classList.remove('open');

      links.forEach((linkItem) => {
        linkItem.classList.remove('open');
      });

      headerBtn.classList.remove('open');

      headerPattern.classList.remove('open');

      setTimeout(() => {
        headerLogo.classList.remove('open');
        if (pricingHero) {
          pricingHero.classList.remove('open');
        }
        if (aboutHero) {
          aboutHero.classList.remove('open');
        }
        if (contactHero) {
          contactHero.classList.remove('open');
        }
        if (heroImg) {
          heroImg.classList.remove('open');
        }
      }, 300);

      // try {
      //   if (heroImg) {
      //     setTimeout(() => {
      //       heroImg.classList.remove('open');
      //     }, 300);
      //   }
      // } catch {}
    }
  });
});
