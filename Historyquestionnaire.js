import { CounterHistorycuestion } from './Answercorrethistory.js'

let container = document.querySelector('#container');
let root= document.querySelector('#root');

export const historyQuestionnaire = () =>{
  
let cuestion1 = `
<div class='templeHistory'>
  <form>
  <p>HISTORIA DE MEXICO</p>
  <p>¿En dónde se encuentran las pirámides del Sol y la Luna?</p>
    <select name="cuestions" id="pyramids">
      <option value="1">A)Palenque</option>
      <option value="2">B)Chichen Itza</option>
      <option value="3">C)Teotihuacan</option>
    </select>
    <p>¿En que fecha se celebra la Independencia de México?</p>
    <select name="cuestions" id="independence">
<option value="1">A)5 de mayo</option>
<option value="2">B)16 de septiembre</option>
<option value="3">C)20 de noviembre</option>
</select>
  <p>¿Cuales son los tres simbolos patrios de México?</p>
    <select name="cuestions"  id="symbols">
<option value="1">A)El Ángel de la Independencia, el Himno Nacional y la Bandera</option>
<option value="2">B)La Bandera, la Moneda y el Himno Nacional</option>
<option value="3">C) El Escudo, la Bandera y el Himno Nacional</option>
    </select>
    <input type="button" value="Respuestas correctas" id="answer"> 
    <p id="paraf"><p>
	</form>
  </div>
   `;
     root.innerHTML = cuestion1;
  let bttnAnswers = document.querySelector('#answer');
  bttnAnswers.addEventListener('click',CounterHistorycuestion);

}