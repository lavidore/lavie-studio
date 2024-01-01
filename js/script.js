 /* sticky navbar */
 window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
  });

  /* filterable cards */
  let list = document.querySelectorAll('.list');
  let card = document.querySelectorAll('.card');

  for(let i=0;i<list.length;i++){
    list[i].addEventListener('click',function(){
      for(let j=0;j<list.length;j++){
        list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');

      for(let k=0;k<card.length;k++){
        card[k].classList.remove('active');
        card[k].classList.add('hide');

        if(card[k].getAttribute('data-item') == dataFilter || dataFilter =='all'){
          card[k].classList.remove('hide');
          card[k].classList.add('active');
        }
      }
    })
  }
  
  /*to top button*/
  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  /* responsive navbar */
  function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const nav = document.querySelector('.nav');
    toggleMenu.classList.toggle('active')
    nav.classList.toggle('active')
  }

  /*scrolling animation*/
  window.addEventListener('scroll',function(){
    var anime = document.querySelectorAll('.animeX');

    for(var s=0;s<anime.length;s++){
      var windowheight =window.innerHeight;
      var animetop = anime[s].getBoundingClientRect().top;
      var animepoint = 150;

      if(animetop < windowheight - animepoint){
        anime[s].classList.add('active');
      }
      else{
        anime[s].classList.remove('active');
      }
    }
  })

// sort
$('#select').change(function () {
  const selectedOption = $(this).val();

  if (selectedOption === 'default') {
    sortCardsByDefault();
  } else if (selectedOption === 'lowToHigh') {
    sortCardsByPrice(true);
  } else if (selectedOption === 'highToLow') {
    sortCardsByPrice(false);
  } else if (selectedOption === 'AtoZ') {
    sortCardsAlphabetically(true);
  } else if (selectedOption === 'ZtoA') {
    sortCardsAlphabetically(false);
  }
});

function sortCardsByDefault() {
  $('.cardBx').append($('.card'));
}

function sortCardsByPrice(ascending) {
  const sortedCards = $('.card').toArray().sort(function (a, b) {
    const priceA = parseFloat($(a).find('.info span:last-child').text());
    const priceB = parseFloat($(b).find('.info span:last-child').text());
    return ascending ? priceA - priceB : priceB - priceA;
  });
  $('.cardBx').append(sortedCards);
}

function sortCardsAlphabetically(ascending) {
  const sortedCards = $('.card').toArray().sort(function (a, b) {
    const titleA = $(a).find('h4').text().toUpperCase();
    const titleB = $(b).find('h4').text().toUpperCase();
    return ascending ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
  });
  $('.cardBx').append(sortedCards);
}

// slideshow automatic and manual
var slideIndex = 1;
var timer = null;

// Call showSlides() initially
var slideIndex = 1;
var timer = null;

// Call showSlides() initially
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var slideshowContainer = document.querySelector(".slideshow-container");

    if (n == undefined) {
        n = ++slideIndex;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Show the slideshow container
    slideshowContainer.style.display = "inline-block";

    timer = setTimeout(showSlides, 5500);
    showButtons(); // Call showButtons() after updating the slide
}

function showButtons() {
    var buttons = document.querySelectorAll('.prev, .next');
    buttons.forEach(function (button) {
        button.style.display = 'block';
    });
}
  // css variable
  const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  resizeOps();
  window.addEventListener("resize", resizeOps);

  // login popup
  function openLoginPopup() {
    var popup = document.getElementById("loginPopup");
    popup.style.display = "block";
}

function closeLoginPopup() {
    var popup = document.getElementById("loginPopup");
    popup.style.display = "none";
}

// show pass
function showPassword() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 

/* jQuery usage section */

// hover img
$(".image-swap").hover( 
  function () { $(this).addClass("hovered"); } ,
  function () { $(this).removeClass("hovered"); }
);

// smooth scrolling
$(document).ready(function() {
  // Smooth scrolling when clicking on links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
});

// play video preview 
function playVideo(button) {
  var box = $(button).closest('.box');
  var videoContainer = box.find('.video-container');
  var videoFrame = box.find('.videoFrame');

  videoContainer.show();
  videoFrame.attr('src', videoFrame.attr('src') + '&autoplay=1');

  videoContainer.click(function () {
    stopVideo(videoContainer, videoFrame);
  });
}



