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
const select = document.querySelector('#select');
const cards = document.querySelectorAll('.card');

select.addEventListener('change', function() {
  const selectedOption = select.value;
  if (selectedOption === 'default') {
    sortCardsByDefault();
  } else if (selectedOption === 'lowToHigh') {
    sortCardsByPrice(true);
  } else if (selectedOption === 'highToLow') {
    sortCardsByPrice(false);
  }
});

function sortCardsByDefault() {
  const cardBx = document.querySelector('.cardBx');
  Array.from(cards).forEach(function(card) {
    cardBx.appendChild(card);
  });
}

function sortCardsByPrice(ascending) {
  const sortedCards = Array.from(cards).sort(function(a, b) {
    const priceA = parseFloat(a.querySelector('.info span:last-child').textContent);
    const priceB = parseFloat(b.querySelector('.info span:last-child').textContent);
    return ascending ? priceA - priceB : priceB - priceA;
  });
  const cardBx = document.querySelector('.cardBx');
  sortedCards.forEach(function(card) {
    cardBx.appendChild(card);
  });
}
