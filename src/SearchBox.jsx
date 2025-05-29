import React from "react";

const SearchBox = ({searchFeild, searchChange}) => {
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Robots"
                onChange = {searchChange} //onChange is a React event handler, not onchange
            />
        </div>
    )    
}
export default SearchBox;