import React from "react";
import List from "../RecipesList";
import Search from "../Search";
import "./style.css"

class Main extends React.Component{
    render(){
        return(
            <main className="main">
                {this.props.children}
            </main>
        )
    }
}

export default Main;