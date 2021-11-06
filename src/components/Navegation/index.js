import React from "react";
import PropTypes from 'prop-types';
import "./navegation.css"
import {Link} from "react-router-dom";
import Home from "../../pages/Home";

class NavegationPages extends React.Component{
    
    /*constructor(props){
        super(props);

        this.state = {
            isHomePage: <Home/>,
       }

    }*/


    render(){
        return(
            <>
            {/*{this.state.isHomePage && (
                 <div className="botoes">
                    <Link to = "/pageRecipes">
                    <button className="recipes" onClick={this.props.handleRecipes}>{this.props.name}</button>
                    </Link>
                    </div>
            )};
            {!this.state.isHomePage && (*/}
                <div className="botoes">
                    <Link to="/">
                    <button className="init" >{this.props.init}</button>
                    </Link>
                    <Link to="/pageRecipes">
                    <button className="recipes">{this.props.name}</button>
                    </Link>
               </div>
            {/*})}*/}
           </> 
        )
    }
}

NavegationPages.propTypes={
    init: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default NavegationPages;