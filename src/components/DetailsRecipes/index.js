import { Component } from "react";

class DetailsRecipes extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default DetailsRecipes;