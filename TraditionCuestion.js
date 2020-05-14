import { CounterTraditioncuestion } from './answerCorrectTradition.js'
let root = document.querySelector('#root');

 export const TraditionCuestion = () =>{
let templeteTradition =`
<div id="templeTradition">
<form>
<h1>TRADICIONES DE MEXICO</h1>
  <p>¿En México hay una celebracion azteca en honor a "la dama de la muerte" es?</p>
  <select name='respuesta' id="death">
	  <option value="6">A)la dama de la muerte</option>
      <option value="7">B)Dia de muertos</option>
      <option value="8">C)Hallowen</option>
  </select>
<p>¿Que dia se celebra el dia de los santos inocentes?</p>
    <select name="respuesta" id="innocet">
      <option value="6">A)26 de dicimbre</option>
      <option value="7">B)4 de enero</option>
      <option value="8">C)28 de diciembre</option>
    </select>
    <p>¿En México las familias se reúnen para llevar la imagen del niño jesus a la iglesia con el objeto de ser bendecida esta celebracion es?</p>
    <select name="respuesta" id="calendaria">
<option value="9">A)Noche buena</option>
<option value="10">B)Día del niño dios</option>
<option value="11">C)Día de la candelaria</option>
</select>
<input type="button" value="Respuestas correctas" id="answer"> 
<p id="Outcome"><p>
</form>
</div>
`;
root.innerHTML = templeteTradition;
let btn = document.querySelector('#answer');
btn.addEventListener('click', CounterTraditioncuestion);
}