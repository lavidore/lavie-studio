document.getElementById('select').addEventListener('change', function() {
  var cards = document.querySelectorAll('.card');
  var cardsArray = Array.prototype.slice.call(cards);
  
  cardsArray.sort(function(a, b) {
    var titleA = a.querySelector('h4').textContent.toUpperCase(); // ignore upper and lowercase
    var titleB = b.querySelector('h4').textContent.toUpperCase(); // ignore upper and lowercase
    if (this.value === 'aToZ') {
      return titleA.localeCompare(titleB);
    } else if (this.value === 'zToA') {
      return titleB.localeCompare(titleA);
    }
  }.bind(this));
  
  var cardBx = document.querySelector('.cardBx');
  cardBx.innerHTML = '';
  cardsArray.forEach(function(card) {
    cardBx.appendChild(card);
  });
});
