const linksContainer = document.querySelector('.header-right');
const links = document.querySelectorAll('.link');
const menuIconContainer = document.querySelector('.menu-icon');
const menuIcons = document.querySelectorAll('.menu-btn');
const headerBtn = document.querySelector('.header-right-btn');
const headerPattern = document.getElementById('header-pattern');
const heroImg = document.querySelector('.main-hero-right');

menuIcons.forEach((menuIcon) => {
  menuIcon.addEventListener('click', () => {
    if (menuIcon.dataset.id == 'open') {
      linksContainer.classList.add('open');

      menuIconContainer.classList.add('open');

      setTimeout(() => {
        links.forEach((linkItem) => {
          linkItem.classList.add('open');
        });

        headerBtn.classList.add('open');
      }, 300);

      headerPattern.classList.add('open');
      try {
        heroImg.classList.add('open');
      } catch {}
    } else {
      linksContainer.classList.remove('open');

      menuIconContainer.classList.remove('open');

      links.forEach((linkItem) => {
        linkItem.classList.remove('open');
      });

      headerBtn.classList.remove('open');

      headerPattern.classList.remove('open');

      try {
        setTimeout(() => {
          heroImg.classList.remove('open');
        }, 300);
      } catch {}
    }
  });
});
