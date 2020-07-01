window.addEventListener("load", function(){
  
  const getInTouch = document.querySelector("#getInTouch");
const abracadabra = document.querySelector("#abracadabra");
const parrafoColor = document.querySelector(".parrafo-color");
const threeBoxes = document.querySelectorAll("section")
let janeDoe = document.querySelector("strong");
const seeRecentWorkButton = document.querySelector("#see-recent");
const lechuza = document.querySelector("#lechuza");
const inputEmail = document.querySelector("#email")


  function colorAlAzar () {
    let colores = ["blue", "red", "green", "pink", "orange"];
    let numeroAlAzar = Math.ceil(Math.random() * 4);
for (let i = 0; i < colores.length; i++) {
  
  switch (numeroAlAzar) {
        case (i = 0):
          return colores[i];
        case (i = 1):
          return colores[i];
        case (i = 2):
          return colores[i];
        case (i = 3):
          return colores[i];
          case (i = 4):
          return colores[i];
      }
      break;
}
       }

         colorAlAzar();


         abracadabra.addEventListener("click", function(e){
          let name = prompt("Por favor, ingrese su nombre");
          janeDoe.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
        })
        
        
        getInTouch.addEventListener("click", function(e){
            parrafoColor.style.color = `${colorAlAzar()}`;
          
          })


          threeBoxes.forEach(element => {
            element.addEventListener("click", function(e){
              
              let h3 = this.querySelector("h3");
              if (h3.innerText == "Consequat lorem") {
                console.log("holis")
                h3.innerText = "Clickeaste sobre Consequat lorem"
              }
            })
          })

         seeRecentWorkButton.addEventListener("mouseover", function(e){
           console.log(getRandomColor())
           console.log(e.target)
          function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }
          seeRecentWorkButton.style.backgroundColor = `${getRandomColor()}`;
         })

         seeRecentWorkButton.addEventListener("mouseout", function(e) {
           

          seeRecentWorkButton.style.backgroundColor = "#888";
         });




         lechuza.addEventListener("click", function(e){
          alert("Preparate para el futuro");

           function futuroLlego() {
             alert("El futuro ya llegó");
           }
           setTimeout(futuroLlego, 5000);
         })


         window.addEventListener("keydown", function(e){
           
           if(e.keyCode == 32){
            console.log("Ey, tocaste la barra espaciadora")
        } else {
          console.log("Ey! Tocaste el teclado")
        }
         })

         inputEmail.addEventListener("keydown", function(e){
           if(e.keyCode == 32) {
             e.preventDefault();
           }
         })
});


 

// let colores = ["azul", "rojo", "verde", "rosa"];

// function iterarColores (input) { 
// for (let i = 0; i < input.length; i++) {
//   console.log(input[i])
//   }
// }

// iterarColores(colores);