let container = document.querySelector('#container');
let root = document.querySelector('#root');

export const welcome = () => {
let welcomeView = `
<div id="welcom">
<h1 class="welcom">TRIVIA MÉXICANA<h1/>
<p class="name">¿Cuál es tu nombre?</p>
<input type="text" id="fname" name="fname">
<input type="button" id='enviar' value="enviar">
</div>
`;
 root.innerHTML = welcomeView;
  let btn = document.querySelector('#enviar');
  btn.addEventListener('click', welcomeTemplete);
  function welcomeTemplete(){
     let nameUser= document.querySelector('#fname').value;
   let templeteWelcom = `
   <div class="nameUser">
   <p>¡Binevenid@ ${nameUser}  diviertete!<p>
   </div>`;
   root.innerHTML = templeteWelcom;
  } 
 }
