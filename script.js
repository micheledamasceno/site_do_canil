
window.addEventListener("scroll", function(){
    let header = document.querySelector('#page-top')
    header.classList.toggle ('rolagem', window.scrollY > 0)
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function() {
    $('.menu-toggle').click(function() {
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
    });
  
    $('.menu > li').click(function() {
      $(this).find('.submenu').toggleClass('active');
    });
  });
  