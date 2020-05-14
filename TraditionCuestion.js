let root = document.querySelector('#root');

 export const TraditionCuestion = () =>{
let templeteTradition =`
<h1>TRADICIONES DE MEXICO</h1>
<form>
  <p>¿En México hay una celebracion azteca en honor a "la dama de la muerte" es?</p>
  <select name="respuesta">
	  <option value="6">A)la dama de la muerte</option>
      <option value="7">B)Dia de muertos</option>
      <option value="8">C)Hallowen</option>
  </select>
<p>¿Que dia se celebra el dia de los santos inocentes?</p>
    <select name="respuesta">
      <option value="6">A)26 de dicimbre</option>
      <option value="7">B)4 de enero</option>
      <option value="8">C)28 de diciembre</option>
    </select>
    <p>¿En México las familias se reúnen para llevar la imagen del niño jesus a la iglesia con el objeto de ser bendecida esta celebracion es?</p>
    <select name="respuesta">
<option value="9">A)Noche buena</option>
<option value="10">B)Día del niño dios</option>
<option value="11">C)Día de la candelaria</option>
</select>
</form>
<input type="button" value="Respuestas correctas" id="answer"> 
`;
root.innerHTML = templeteTradition;
}