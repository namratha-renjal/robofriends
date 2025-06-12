import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
//import { robots } from './Robots' //destructured becqause robots is not default export
import './App.css';

//Smart component
//Smart component is a component that has state and logic
class App extends React.Component{
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }
    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        //this.setState({ robots: robots });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        //console.log(event.target.value);   
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => (
            robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        ));
        //console.log(filteredRobots);
        console.log('render');
        //if robots is a huge database and it takes time to load it
        if (this.state.robots.length === 0) {
            return <h1 className='f1'>Loading...</h1>
        }else{
            return(
            <div className="tc"> 
                <h1 className='f1'>CatFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )}
    }
}
export default App;