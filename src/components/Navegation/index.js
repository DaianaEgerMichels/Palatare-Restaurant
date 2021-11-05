import React from "react";
import PropTypes from 'prop-types';
import "./style.css"
import {Link} from "react-router-dom";

class NavegationPages extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            isHomePage: true,
            isPageRecipes: true,
        }

    }


    render(){
        return(
            <nav className="botoes">
            {this.state.isHomePage && (
                <nav className="botoes">
                    <Link to = "/pageRecipes">
                    <button className="recipes" onClick={this.props.handleRecipes}>{this.props.name}</button>
                    </Link>
                </nav>
            )}
            {!this.state.isHomePage && (
                <nav className="botoes">
                    <Link to="/">
                    <button className="init" onClick={this.props.handleHome}>{this.props.init}</button>
                    </Link>
                    <Link to="/pageRecipes">
                    <button className="recipes" onClick={this.props.handleRecipes}>{this.props.name}</button>
                    </Link>
                </nav>
            )}
            {this.isPageRecipes && (
                <nav className="botoes">
                    <Link to="/">
                    <button className="init" onClick={this.props.handleHome}>{this.props.init}</button>
                    </Link>
                </nav>
            )}
            </nav>
        )
    }
}

NavegationPages.propTypes={
    init: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleHome: PropTypes.func,
    handleRecipes: PropTypes.func,

}

export default NavegationPages;