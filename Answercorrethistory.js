export const CounterHistorycuestion = () =>{
    let selectPyramids = document.querySelector('#pyramids').value;
      let selectIndependence = document.querySelector('#independence').value;
      let selectSymbols = document.querySelector('#symbols').value;
  let paraf = document.querySelector('#paraf');
    
    let counter =0;
     if(selectPyramids == 3){
       counter++
     } if(selectIndependence ==2){
       counter++
     }
     if(selectSymbols ==3){
       counter++
     }
     let correct = `<p>Tus respuestas correctas son ${counter} de 3</p>`;
      paraf.innerHTML = correct;
    };  
