// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

const options = {
  method: "GET",
};

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((res) => res.json()) 
.then((data) => 
{
  console.log(data)
  const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1> Nombre > ${data.name}</h1>
<h2>${data.order}</h2>
<h3>${data.weight}</h3>
<h6><img src = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png ${data.sprites.back_default}</h6>
<h8><img src = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png ${data.sprites.front_shiny}<h8>
<h7>${data.is_default}</h7>
`;


})
//.then((data) => console.log(data));