var counter = 0;

function changeBG() {
  var imgs = [
        'url(../imgs/camp.jpg)',
        'url(../imgs/camp1.jpg)',
        'url(../imgs/camp2.jpg)',
        'url(../imgs/camp3.jpg)',
        'url(../imgs/camp4.jpg)',
        'url(../imgs/camp5.jpg)',
        'url(../imgs/camp6.jpg)',
        'url(../imgs/camp7.jpg)'
      ];

  if (counter === imgs.length) {
    counter = 0;
  }
  document.body.style.backgroundImage = imgs[counter];

  counter++;
}

setInterval(changeBG, 7500);