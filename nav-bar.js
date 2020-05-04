'use strict'

const navSlide = function(){
     const burger = document.querySelector('.burger-button');
     const nav = document.querySelector('.nav-links');
     const navLinks = document.querySelectorAll('.nav-links li')

     // When click to the burger button
     burger.addEventListener('click', () => {

          // Toggle NavBar
          nav.classList.toggle('nav-active');
     
          // NavBar Links Animation
          navLinks.forEach( (link, index) => {
               if(link.style.animation)
                    link.style.animation = '';
               else
                    link.style.animation = 'navLinksFade 0.5s ease forwards ' + (index/7 + 0.3) + 's';
          });

          //Burger Animation
          burger.classList.toggle('toggle-burger');
     });
};

navSlide();