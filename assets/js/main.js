
var hamburger = document.querySelector(".hamburger");
var nav_menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  // Toggle the "active" class on hamburger and nav_menu
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  // Remove the "active" class when a nav-link is clicked
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}));

//about
let aboutInfo = [
  "aboutus.jpg",
  "About us",
  `At the heart of every trip lies a story, and we at Paradise Travel are dedicated to
  making your story unique and unforgettable. With a passion for exploring the world and 
 a love for travel, our team of experts is here to help you experience the most beautiful moments of life.          
   Paradise Travel is more than a travel agency; we are your travel companions to extraordinary destinations around the world.`,

];
let aboutToggleInfo = [
  "aboutus1.jpg",
  "More about us...",
  "Personalized Approach: Our goal is to customize every detail of the trip according to your wishes, making it special and unforgettable.",
  "Quality Above All: From luxurious accommodations to exclusive activities, we insist on the highest quality standards to give you the experience you deserve.",
  "Experience and Expertise: with knowledge of destinations and global trends, we offer you the best advice and support throughout your journey."
];
//blok1
let aboutBlockOne = document.querySelector("#aboutBlockOne");
aboutBlockOne.innerHTML = ` <div id="aboutImagesOne" class="col-sm-12 col-lg-6 ">
                                  <img src="assets/img/${aboutInfo[0]}" alt="about img" />
                            </div>
                              <div class="col-sm-12 col-lg-6">
                                <div class=" my-5">
                                  <h2 class="text-center ">${aboutInfo[1]}</h2>
                                  <p class="text-center fs-6 lh-lg">${aboutInfo[2]}</p>
                                  <div class="centar col-xs-2">
                                      <button type="button" id="dugmeReadMore" class="btn">
                                        Read more
                                    </button>
                                  </div>

                                </div>
                            </div>`;
//blok2
 let aboutBlockTwo = document.querySelector("#aboutBlockTwo");
 aboutBlockTwo.innerHTML = ` <div class="col-sm-12 col-lg-6 ">
                      <div class="my-5 lh-lg">
                        <h2 class="text-center h1">${aboutToggleInfo[1]}</h2>
                        <p class="text-center fs-6">${aboutToggleInfo[2]}</p>
                        <p class="text-center fs-6">${aboutToggleInfo[3]}</p>
                        <p class="text-center fs-6">${aboutToggleInfo[4]}</p>
                      </div>
                    </div>
                    <div id="aboutImagesTwo" class="col-sm-12 col-lg-6 d-flex justify-content-evenly">
                      <img src="assets/img/${aboutToggleInfo[0]}" alt="about img" />
                    
                    </div>`;

$(document).ready(function() {
                                          
$("#aboutBlockTwo").hide();                                                    
 $("#dugmeReadMore").click(function() {
 $("#aboutBlockTwo").toggle(600);                  
 let btn = $(this);
 if(btn.text() == "Read less") {
      btn.text("Read more");
} else {
      btn.text("Read less");
 }         
 })
 });

//GALERIJA KARTICE

let filterKartica=["Exotic","Capitals","Winter"];
let filterDataZaGaleriju=["exotic","capital","winter"];

galerijaIspis=`<ul><li class="list acitve" filter="all">All</li>`
  for(let i=0;i<filterDataZaGaleriju.length;i++){
    galerijaIspis+=`<li class="list" filter="${filterDataZaGaleriju[i]}">${filterKartica[i]}</li>`
  }
  galerijaIspis+=`</ul>`;

//GALERIJA SLIKE
const galerijaDataItem = new Array(
  "exotic",
  "capital",
  "winter",
  "exotic",
  "capital",
  "winter",
  "exotic",
  "capital",
  "winter",
  "exotic",
  "winter",
  "capital",
  "winter",
  "capital",
  "exotic"
);
const galerijaSrc = new Array(
  "exotic1.jpg",
  "capital1.jpg",
  "winter2.jpg",
  "exotic2.jpg",
  "capital2.jpg",
  "winter1.jpg",
  "exotic3.jpg",
  "capital3.jpg",
  "winter3.jpg",
  "exotic4.jpg",
  "winter4.jpg",
  "capital4.jpg",
  "winter5.jpg",
  "capital5.jpg",
  "exotic5.jpg"
);
const galerijaAlt = new Array(
  "exotic photo",
  "capital photo",
  "winter photo",
  "exotic photo",
  "capital photo",
  "winter photo",
  "exotic photo",
  "capital photo",
  "winter photo",
  "exotic photo",
  "winter photo",
  "capital photo",
  "winter photo",
  "capital photo",
  "exotic photo"
);

galerijaIspis += `<div class='drzacSlika'>`;
for (let i = 0; i < galerijaSrc.length; i++) {
  galerijaIspis += `<div class='slika' data-item='${galerijaDataItem[i]}'>
                    <img src='assets/img/${galerijaSrc[i]}' alt='${galerijaAlt[i]}'/>
                  </div>`;
}
galerijaIspis += `</div>`;
const divGalerija = document.querySelector(".filtriranje");
divGalerija.innerHTML = galerijaIspis;

//galerija filter
let liste = document.querySelectorAll(".list");
let itemBoxes = document.querySelectorAll(".slika");

for (let i = 0; i < liste.length; i++) {
  liste[i].addEventListener("click", function () {
    for (let j = 0; j < liste.length; j++) {
      liste[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("filter");

    for (let k = 0; k < itemBoxes.length; k++) {
      itemBoxes[k].classList.remove("active");
      itemBoxes[k].classList.add("hide");

      if (
        itemBoxes[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBoxes[k].classList.remove("hide");
        itemBoxes[k].classList.add("active");
      }
    }
  });
}

//contact
var nesto=document.getElementById('forma');

nesto.innerHTML = `<div class="stil">
<h2 class="sum">Send us a message</h2>
    <div class="col-5 w100">
        <form name="forma-prijava" id="forma-prijava">
            <div class="mb-3">
                <label for="tbImePrezime" class="form-label">Full name:</label>
                <input type="text" id="tbImePrezime" class="form-control"/>
                <p class="alert alert-danger mt-3 sakrij"></p>
            </div>
            <div class="mb-3">
                <label for="tbEmail" class="form-label">E-mail:</label>
                <input type="text" id="tbEmail" class="form-control"/>
                <p class="alert alert-danger mt-3 sakrij"></p>
            </div>
            <div class="mb-3">
                <label for="tbAdresa" class="form-label">Address:</label>
                <input type="text" id="tbAdresa" class="form-control"/>
                <p class="alert alert-danger mt-3 sakrij"></p>
            </div>
       
            <div class="mb-3">
                <label for="taNapomena" class="form-label">Note:</label>
                <textarea id="taNapomena"  class="form-control"></textarea>
                <p class="alert alert-danger mt-3 sakrij"></p>
            </div>
            <div class="dugme1">
                <input type="button" value="Send" class="btn btn-primary" id="btnPrijava" />
            </div>
        </form>
    </div>
    <div id="ispis"></div>
</div>`

window.onload = function(){
    let taster = document.querySelector("#btnPrijava");
    taster.addEventListener("click", obradaForme);
}

function obradaForme(){
    var brojGresaka = 0;
    let objImePrezime,objEmail, objAdresa,objNapomena;

    objImePrezime = document.querySelector("#tbImePrezime");
    objEmail = document.querySelector("#tbEmail");
    objAdresa = document.querySelector("#tbAdresa");
    objNapomena = document.querySelector("#taNapomena");

    let reImePrezime,reEmail, reAdresa;
    reImePrezime = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
    reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`~-]+@[a-zA-Z0-9-]+(.com)+$/;
    reAdresa = /^(([A-Z][a-z]{1,15}(\.)?)|([1-9][0-9]{0,2}(\.)?))[a-zA-Z0-9\s\/\-]+$/;

    proveraRegularnimIzrazima(reImePrezime, objImePrezime, "First and Last name must start with uppercase!(Example:Ana Johnson)");
    proveraRegularnimIzrazima(reEmail, objEmail, "Email must be in format: something@example.com");
    proveraRegularnimIzrazima(reAdresa, objAdresa, "Address must be in format:");

    function proveraRegularnimIzrazima(regularni, objekat, poruka){
        if(!regularni.test(objekat.value)){
            objekat.nextElementSibling.classList.remove("sakrij");
            objekat.nextElementSibling.innerHTML = poruka;
            objekat.classList.add("crvena-bordura");
            brojGresaka++;
        }
        else{
            objekat.nextElementSibling.classList.add("sakrij");
            objekat.nextElementSibling.innerHTML = "";
            objekat.classList.remove("crvena-bordura");
        }
    }
    if(objNapomena.value.length < 10){
        objNapomena.nextElementSibling.classList.remove("sakrij");
        objNapomena.nextElementSibling.innerHTML = "Note must be at least 10 characters long!";
        objNapomena.classList.add("crvena-bordura");
brojGresaka++;
    }
    else{
        objNapomena.nextElementSibling.classList.add("sakrij");
        objNapomena.nextElementSibling.innerHTML = "";
        objNapomena.classList.remove("crvena-bordura");
    }

    if(brojGresaka == 0){
        let divIspis = document.querySelector("#ispis");
        divIspis.setAttribute("class", "alert alert-success mt-4");

        let formatZaIspis = `Your message is sent!`;

        divIspis.innerHTML = formatZaIspis;

        document.getElementById("forma-prijava").reset();
    }

}


