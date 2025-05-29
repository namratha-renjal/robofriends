import React from "react";

const Card = (props) => {
    //or const Card = ({ id, name, email }) => {
    const { id, name, email } = props; //destructuring props
    return(
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt='Robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
export default Card;
