
const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");
let charss = [];
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click",() =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }


const loadCharacters = async () =>{
  try{
    const res= await fetch('https://rickandmortyapi.com/api/character');
    let Chars = await res.json();
    charss = Chars.results;
    makeCards1(charss);
  } catch(err)
  {
    console.log(err);
  }
}

document.getElementById("button").addEventListener("click", () =>{
  let si= document.getElementById("searchfield").value;
  console.log(si);
  const filteredCharacters = charss.filter( character =>{
    return (character.name.toLowerCase().includes(si));
  });
  makeCards(filteredCharacters);

})

function makeCards(charactersArray){

  const cardcontainer = document.querySelector('#card-container')
  charactersArray.forEach((character) =>{
   cardcontainer.innerHTML = 
   ` <div class="boxes">
   <div class="box-content">
     <h2>${character.name}</h2>
     <img src=${character.image}></img>
     <h3>${character.species}</h3>

   </div>
 </div>`
  })
}
function makeCards1(charactersArray){

  const cardcontainer = document.querySelector('#card-container')
  charactersArray.forEach((character) =>{
   cardcontainer.innerHTML += 
   ` <div class="boxes">
   <div class="box-content">
     <h2>${character.name}</h2>
     <img src=${character.image}></img>
     <h3>${character.species}</h3>

   </div>
 </div>`
  })
}

loadCharacters();
