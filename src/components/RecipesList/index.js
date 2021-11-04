import React from "react";
import "./style.css"
import "../../mock"

class RecipesList extends React.Component{
    render(){
        return(
            <ul className="recipes-list">
                {this.props.children}
            </ul>
        )
    }
}

export default RecipesList;