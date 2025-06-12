import React from "react";
import Card from './Card'


const CardList = ({robots}) => {
    // const CardComponent = robots.map((user, i) => {
    //     return (
    //         <Card 
    //             key={robots[i].id} //using key to uniquely identify each element in the list
    //             id={robots[i].id} 
    //             name={robots[i].name} 
    //             email={robots[i].email}
    //         />
    //     )   
    // })
    return (
        <>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={user.id} //using key to uniquely identify each element in the list
                            id={user.id} 
                            name={user.name} 
                            email={user.email}
                        />
                    )
                })
            }
        </>
    )
}
export default CardList;