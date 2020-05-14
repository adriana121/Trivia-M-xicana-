import { historyQuestionnaire } from './Historyquestionnaire.js'
import { welcome } from './renderHome.js'
import { TraditionCuestion } from './TraditionCuestion.js'

let currentRoute = "/"
// main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')

// router
function router(route){
  console.log(route)
  switch(route){
    case '/about':
     TraditionCuestion()
      break;
    case '/login':
     historyQuestionnaire()
      break;
    default:
      welcome()
      break;
         }
}

// btn listener
btns.forEach(btn=>btn.onclick=e=>router(e.target.id))


// init
router()