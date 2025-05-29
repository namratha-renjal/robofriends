import React from "react";
import CardList from "./CardList";
import { robots } from './Robots' //destructured becqause robots is not default export

const App = () => {
    return(
        <CardList robots={robots}/>
    )
}
export default App;