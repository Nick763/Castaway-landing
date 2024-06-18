function updateScroll() {
  if (window.scrollY > 250) {
    document.querySelector('.header__contaner').classList.add('header__contaner_scrolled');
  } else {
    document.querySelector('.header__contaner').classList.remove('header__contaner_scrolled');
  }
}

window.addEventListener('scroll', updateScroll);


function hideScroll() {
  if (window.scrollY > 4500) {
    document.querySelector('.header__contaner').classList.add('header__contaner_hide');
  } else {
    document.querySelector('.header__contaner').classList.remove('header__contaner_hide');
  }
}

window.addEventListener('scroll', hideScroll);



function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});