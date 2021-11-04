import React from "react";
import PropTypes from 'prop-types';
import "./style.css"

class NavegationPages extends React.Component{
    

    render(){
        return(
            <nav className="botoes">
            <button className="init" onClick={this.props.handleHome}>{this.props.init}</button>
            <button className="recipes" onClick={this.props.handleRecipes}>{this.props.name}</button>
            </nav>
        )
    }
}

NavegationPages.propTypes={
    init: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleHome: PropTypes.func.isRequired,
    handleRecipes: PropTypes.func.isRequired,

}

export default NavegationPages;