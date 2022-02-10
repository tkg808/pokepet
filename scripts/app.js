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
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
    },
  ];

const logo = "http://4.bp.blogspot.com/-oH465XaJjpY/T8yZVJsteTI/AAAAAAAAADs/LwFrlgaVVv0/s1600/dog_paw_print_black.png"

const egg = "https://www.pinclipart.com/picdir/big/89-892298_pokemon-egg-pokemon-go-egg-png-clipart.png"

let currentPet =
{
  name: "",
  age: 0,
  hungry: 0,
  sleepy: 0,
  bored: 0,
  image: "",
  isAlive: false
};

let isAlive = false;

let intervalId;

/* === DOM Elements === */

const $image = $(".pet__image");
const $feed = $(".interact__feed");
const $sleep = $(".interact__sleep");
const $play = $(".interact__play");
const $active = $(".button__active");

/* === Functions === */

function agePet()
{
  if (currentPet.age === 10)
  {
    clearInterval(intervalId);

    intervalId = null;
  }
  else
  {
    currentPet.age += 1;
  }

  $(".info__age").text(`Age: ${currentPet.age}`);
}

function updatePet()
{
  ageInterval;

  $image.attr("src", currentPet.image);
  $(".info__name").text(`Name: ${currentPet.name}`);
  $(".info__age").text(`Age: ${currentPet.age}`)
  $(".stat__hungry").text(currentPet.hungry);
  $(".stat__sleepy").text(currentPet.sleepy);
  $(".stat__bored").text(currentPet.bored);
}

function generateNewPet()
{
  const index = Math.floor(Math.random() * 3) * 3;
  currentPet = pets[index];
  updatePet();
}

/* === Event Functions === */

const checkPet = function ()
{
  if (currentPet.isAlive === false)
  {
    $image.attr("src", egg);

    // the arrow function is required to delay the invokation of updatePet
    setTimeout(() => (generateNewPet()), 3000);
  }
  else
  {
    updatePet();
  }


}

const feedPet = function ()
{
  if ($image.attr("src") !== logo)
  {
    if (currentPet.hungry === 1)
    {
      alert(`${currentPet.name} is not hungry!`)
    }
    else
    {
      currentPet.hungry -= 1;
    }
  }

  $(".stat__hungry").text(currentPet.hungry)
}

const sleepPet = function ()
{
  if ($image.attr("src") !== logo)
  {
    if (currentPet.sleepy === 1)
    {
      alert(`${currentPet.name} doesn't want to nap!`);
    }
    else
    {
      currentPet.sleepy -= 1;
    }
  }

  $(".stat__sleepy").text(currentPet.sleepy);
}

const playPet = function ()
{
  if ($image.attr("src") !== logo)
  {
    if (currentPet.bored === 1)
    {
      alert(`${currentPet.name} is done playing!`);
    }
    else
    {
      currentPet.bored -= 1;
    }
  }

  $(".stat__bored").text(currentPet.bored);
}

const ageInterval = function ()
{
  if (!intervalId)
  {
    intervalId = setInterval(agePet, 1000);
  }
}

/* === Event Listeners === */

$active.on("click", checkPet);

// $active.on("click", ageInterval);

$feed.on("click", feedPet);

$sleep.on("click", sleepPet);

$play.on("click", playPet);

/* === Invoked Functions === */

$image.attr("src", logo);

