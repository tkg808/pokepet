/* === Variables === */

const logo = "http://4.bp.blogspot.com/-oH465XaJjpY/T8yZVJsteTI/AAAAAAAAADs/LwFrlgaVVv0/s1600/dog_paw_print_black.png"

const egg = "https://www.pinclipart.com/picdir/big/89-892298_pokemon-egg-pokemon-go-egg-png-clipart.png"

const pets =
  [
    {
      name: "Bulbasaur",
      pokedex: 1,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
      name: "Ivysaur",
      pokedex: 2,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
    },
    {
      name: "Venusaur",
      pokedex: 3,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
    },
    {
      name: "Charmander",
      pokedex: 4,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    },
    {
      name: "Charmeleon",
      pokedex: 5,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
    },
    {
      name: "Charizard",
      pokedex: 6,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
    },
    {
      name: "Squirtle",
      pokedex: 7,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
    {
      name: "Wartortle",
      pokedex: 8,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
    },
    {
      name: "Blastoise",
      pokedex: 9,
      age: 1,
      hungry: 1,
      sleepy: 1,
      bored: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
    },
  ];

let currentPet =
{
  name: "Charmander",
  pokedex: 0,
  age: 1,
  hungry: 2,
  sleepy: 2,
  bored: 2,
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
};

let isAlive = true;

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

/* === Event Functions === */

const checkState = function ()
{
  if ($image.attr("src") === logo)
  {
    $image.attr("src", currentPet.image);
    $(".info__name").text(`Name: ${currentPet.name}`);
    $(".info__age").text(`Age: ${currentPet.age}`)
    $(".stat__hungry").text(currentPet.hungry);
    $(".stat__sleepy").text(currentPet.sleepy);
    $(".stat__bored").text(currentPet.bored);
  }
  else
  {
    $image.attr("src", logo);
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

$active.on("click", checkState);

$active.on("click", ageInterval);

$feed.on("click", feedPet);

$sleep.on("click", sleepPet);

$play.on("click", playPet);

/* === Invoked Functions === */

$image.attr("src", logo);