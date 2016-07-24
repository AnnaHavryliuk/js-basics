onload = function() {
  var firstButton = document.getElementById('first');
  firstButton.addEventListener('click', function(event) {
    showMessageInConsole();
  });
  var secondButton = document.getElementById('second');
  secondButton.addEventListener('click', function(event) {
    findAndShowDistance();
  });
  var thirdButton = document.getElementById('third');
  thirdButton.addEventListener('click', function(event) {
    showHashUsingFor();
  });
  var fourthButton = document.getElementById('fourth');
  fourthButton.addEventListener('click', function(event) {
    showHashUsingWhile();
  });
  var fifthButton = document.getElementById('fifth');
  fifthButton.addEventListener('click', function(event) {
    guessNumberGame();
  });
}
function showMessageInConsole() {
  var name = 'John';
  var time = ' today at 14:00';
  var place = 'Rynok Square in Lviv';
  var event = prompt('Please enter event', 'meeting with friends');
  var sentence = name + ' has a ' + event + time + ' in ' + place + '.';
  console.log(sentence);
}
function findAndShowDistance() {
  var x1, y1, x2, y2, result;
  x1 = parseInt(Math.random() * 11);
  y1 = parseInt(Math.random() * 11);
  while(isNaN(x2)) {
    x2 = parseInt(prompt('Please enter X coordinate of second point', -3));
  }
  while(isNaN(y2)) {
    y2 = parseInt(prompt('Please enter Y coordinate of second point', 4));
  }
  result = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
  var distanceString = 'The distance between points A(' + x1 + ',' + y1 + ') and B(' + x2 + ',' + y2 + ') is ' + result + '.'
  alert(distanceString);
}
function showHashUsingFor() {
  var hash = '';
  for (var counter = 0; counter < 10; counter++) {
    hash += '#';
    console.log(hash);
  }
}
function showHashUsingWhile() {
  var hash2 = '# # # # #';
  counter = 1;
  while (counter < 8) {
    if (!(counter % 2)) {
      console.log(' ' + hash2);
    } else {
      console.log(hash2);
    }
    counter++;
  }
}
function guessNumberGame() {
  var guess, number = parseInt(Math.random() * 101);
  while (guess !== number) {
    guess = prompt('Guess number from 0 to 100');
    if (guess === null) {
      alert('It\'s a pity You have given up. Our number is ' + number + '.');
      return;
    }
    guess = parseInt(guess);
    if (isNaN(guess)) {
      alert('It isn\'t a number, try again.');
    } else if (guess > number) {
      alert ('Our number is lower, try again.');
    } else if (guess < number) {
      alert ('Our number is higher, try again.');
    }
  }
  alert('You are right, our number is ' + number + '.');
}