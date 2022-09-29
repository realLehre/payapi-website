const linksContainer = document.querySelector('.right-container');
const links = document.querySelectorAll('.link');
const menuIconContainer = document.querySelector('.menu-icon');
const menuIcons = document.querySelectorAll('.menu-btn');
const headerBtn = document.querySelector('.header-right-btn');

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
    } else {
      linksContainer.classList.remove('open');

      menuIconContainer.classList.remove('open');

      links.forEach((linkItem) => {
        linkItem.classList.remove('open');
      });

      headerBtn.classList.remove('open');
    }
  });
});
