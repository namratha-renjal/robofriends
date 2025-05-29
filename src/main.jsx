import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Card from './Card'
import { robots } from './Robots' //destructured becqause robots is not default export
import 'tachyons'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
   <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
   <Card id={robots[2].id} name={robots[2].name} email={robots[3].email}/>
  </StrictMode>,
)
