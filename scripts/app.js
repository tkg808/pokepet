/* === Variables === */
const pets =
  [
    {
      name: "Bulbasaur",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
      name: "Ivysaur",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
    },
    {
      name: "Venusaur",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
    },
    {
      name: "Charmander",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    },
    {
      name: "Charmeleon",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
    },
    {
      name: "Charizard",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
    },
    {
      name: "Squirtle",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
    {
      name: "Wartortle",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
    },
    {
      name: "Blastoise",
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    },
  ];

const logo = "https://4.bp.blogspot.com/-oH465XaJjpY/T8yZVJsteTI/AAAAAAAAADs/LwFrlgaVVv0/s1600/dog_paw_print_black.png";

const egg = "https://tinyimg.io/i/HEI8mKt.png";

const grave = "https://tinyimg.io/i/rxVYoCD.png";

let currentPet =
{
  name: "",
  age: 0,
  hungry: 0,
  sleepy: 0,
  bored: 0,
  image: "",
};

// picks starter pet and finding transformations in pets array
let index;

// used to activate buttons and end the game
let isAlive = false;

// needed to stop the interval
let intervalId;

// used to determine difficulty
let statAmount;

/* === DOM Elements === */

// pet info displays
const $image = $(".pet-image");
const $nameDisplay = $(".pet-name");
const $ageDisplay = $(".pet-age");

// stat displays
const $hungryDisplay = $(".stat-hungry");
const $sleepyDisplay = $(".stat-sleepy");
const $boredDisplay = $(".stat-bored");

// buttons
const $feed = $(".interact-feed");
const $sleep = $(".interact-sleep");
const $play = $(".interact-play");
const $active = $(".button-start");

/* === Functions === */

// sets an interval if there isn't one already
const ageInterval = function ()
{
  if (!intervalId)
  {
    intervalId = setInterval(increaseAge, 2000);
  }
}

// gets a name for pet from user or uses default names
const getName = function ()
{
  currentPet.name = prompt("What would you like to name your new pet?", pets[index].name);

  if (currentPet.name === null)
  {
    currentPet.name = pets[index].name;
  }
}

// updates the UI with current pet info/stats
const updateDisplay = function ()
{
  $image.attr("src", currentPet.image);
  $nameDisplay.text(`Name: ${currentPet.name}`);
  $ageDisplay.text(`Age: ${currentPet.age}`)
  $hungryDisplay.text(currentPet.hungry);
  $sleepyDisplay.text(currentPet.sleepy);
  $boredDisplay.text(currentPet.bored);
}

const increaseAmount = function ()
{
  if (currentPet.age % 15 === 0)
  {
    statAmount++;
  }
}

// randomly increases a stat
const increaseStats = function ()
{
  if (Math.random() < 0.6)
  {
    currentPet.hungry += Math.ceil(Math.random() * statAmount);
  }

  if (Math.random() < 0.6)
  {
    currentPet.sleepy += Math.ceil(Math.random() * statAmount);
  }

  if (Math.random() < 0.6)
  {
    currentPet.bored += Math.ceil(Math.random() * statAmount);
  }
}

// transforms the pet at certain ages and changes it's name if necessary
const evolvePet = function ()
{
  if (currentPet.age === 30)
  {
    // start animation
    $image.evolve(index + 1);

    // decide if name needs to be changed
    if (currentPet.name === pets[index + 1].name)
    {
      currentPet.name = pets[index + 2].name;
    }

    alert(`Whoa! Your pet is transforming!`);

    increaseAmount++;
  }
  else if (currentPet.age === 15)
  {
    // start animation
    $image.evolve(index);

    // decide if name needs to be changed
    if (currentPet.name === pets[index].name)
    {
      currentPet.name = pets[index + 1].name;
    }

    alert(`Whoa! Your pet is transforming!`);

    // increase difficulty
    increaseAmount++;
  }

  updateDisplay();
}

// invokes when age reaches a specified number or if a stat reaches 10
const buryPet = function ()
{
  $image.attr("src", grave);

  if (currentPet.age === 50)
  {
    alert(`${currentPet.name} lived a happy life and died of old age`);
  }
  else if (currentPet.hungry >= 10)
  {
    alert(`${currentPet.name} died from starvation!`);
  }
  else if (currentPet.sleepy >= 10)
  {
    alert(`${currentPet.name} died from exhaustion!`);
  }
  else if (currentPet.bored >= 10)
  {
    alert(`${currentPet.name} died from boredom!`);
  }
}

// stops the interval if criteria is met, or continues to accrue age/stats
const increaseAge = function ()
{
  if (currentPet.age === 50 ||
    currentPet.hungry >= 10 || currentPet.sleepy >= 10 || currentPet.bored >= 10)
  {
    clearInterval(intervalId);
    intervalId = null;

    isAlive = false;
    buryPet();
  }
  else
  {
    currentPet.age += 1;

    increaseAmount();
    increaseStats();
    evolvePet();

    updateDisplay();
  }
}

const generateNewPet = function ()
{
  // Enables consecutive playing.
  index = Math.floor(Math.random() * 3) * 3;

  // Refreshes statAmount to enable consecutive playing.
  statAmount = 1;

  // spread operator clones the object
  currentPet = { ...pets[index] };

  // let user see their pet before deciding to name it
  $image.attr("src", currentPet.image);

  // asks user for pet's name after delay
  setTimeout(() => (getName()), 500);

  isAlive = true;

  updateDisplay();

  ageInterval();
}

/* === Event Functions === */

const checkPet = function ()
{
  if (!isAlive)
  {
    $image.attr("src", egg);

    eggAnimation();

    // the arrow function is required to delay the invokation of updateDisplay
    setTimeout(() => (generateNewPet()), 4000);
  }
  else
  {
    updateDisplay();
  }
}

const feedPet = function ()
{
  if (isAlive)
  {
    if (currentPet.hungry === 1)
    {
      alert(`${currentPet.name} is not hungry!`)
    }
    else
    {
      currentPet.hungry -= 1;
      bouncePet();
    }

    updateDisplay();
  }
}

const sleepPet = function ()
{
  if (isAlive)
  {
    if (currentPet.sleepy === 1)
    {
      alert(`${currentPet.name} doesn't want to nap!`);
    }
    else
    {
      currentPet.sleepy -= 1;
      bouncePet();
    }

    updateDisplay();
  }
}

const playPet = function ()
{
  if (isAlive)
  {
    if (currentPet.bored === 1)
    {
      alert(`${currentPet.name} is done playing!`);
    }
    else
    {
      currentPet.bored -= 1;
      bouncePet();
    }

    updateDisplay();
  }
}

/* === Event Listeners === */

$active.on("click", checkPet)

$feed.on("click", feedPet);

$sleep.on("click", sleepPet);

$play.on("click", playPet);

/* === Animation Functions === */

const eggAnimation = function ()
{
  setTimeout(() => ($image.shake()), 1500);
  setTimeout(() => ($image.shake()), 2500);
  setTimeout(() => ($image.shake()), 3000);
}

// rapidly moves image from side to side
$.fn.shake = function (interval = 100)
{
  this.addClass('shaking');

  this.css('transition', 'all ' + (interval / 100).toString() + 's');

  setTimeout(() =>
  {
    this.css('transform', 'translateX(-50%)');
  }, interval * 0);

  setTimeout(() =>
  {
    this.css('transform', 'translateX(50%)');
  }, interval * 1);

  setTimeout(() =>
  {
    this.css('transform', 'translateX(-25%)');
  }, interval * 2);

  setTimeout(() =>
  {
    this.css('transform', 'translateX(25%)');
  }, interval * 3);

  setTimeout(() =>
  {
    this.css('transform', 'translateX(-7%)');
  }, interval * 4);

  setTimeout(() =>
  {
    this.css('transform', 'translateX(0%)');
  }, interval * 5);

  this.removeClass('shaking');
}

// alternates two images with varying opacity until the new image is set to currentPet
$.fn.evolve = function (currentIndex, interval = 200)
{
  setTimeout(() =>
  {
    $image.attr("src", pets[currentIndex + 1].image);
    this.css("opacity", "25%");
  }, interval * 0);

  setTimeout(() =>
  {
    $image.attr("src", pets[currentIndex].image);
    this.css("opacity", "100%");
  }, interval * 4);

  setTimeout(() =>
  {
    $image.attr("src", pets[currentIndex + 1].image);
    this.css("opacity", "50%");
  }, interval * 8);

  setTimeout(() =>
  {
    $image.attr("src", pets[currentIndex].image);
    this.css("opacity", "50%");
  }, interval * 10);

  setTimeout(() =>
  {
    $image.attr("src", pets[currentIndex + 1].image);
    this.css("opacity", "75%");
  }, interval * 12);

  setTimeout(() =>
  {
    $image.attr("src", pets[currentIndex].image);
    this.css("opacity", "25%");
  }, interval * 14);

  setTimeout(() =>
  {
    this.attr("src", pets[currentIndex + 1].image);
    this.css("opacity", "100%");
    currentPet.image = pets[currentIndex + 1].image;
  }, interval * 16);
}

const bouncePet = function ()
{
  $image.bounce();
}

$.fn.bounce = function ()
{
  this.addClass('animate__animated animate__bounce');
  this.css("animation", "bounce");
  this.css("animation-duration", "1s");

  setTimeout(() =>
  {
    this.removeClass('animate__animated animate__bounce');
    this.css("animation", "");
    this.css("animation-duration", "");
  }, 800);
}