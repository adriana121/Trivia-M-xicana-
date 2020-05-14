export const CounterTraditioncuestion = () =>{
    let selectdeath = document.querySelector('#death').value;
      let selectinocet = document.querySelector('#innocet').value;
      let selectcandelaria = document.querySelector('#calendaria').value;
      let paraf = document.querySelector('#Outcome');
    
    let counter =0;
     if(selectdeath == 7){
       counter++
     } if(selectinocet ==8){
       counter++
     }
     if(selectcandelaria ==11){
       counter++
     }
     let correct = `<p>Tus respuestas correctas son ${counter} de 3</p>`;
      paraf.innerHTML = correct;
    };  