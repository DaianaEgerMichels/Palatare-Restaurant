import React from "react";
import PropTypes from 'prop-types';
import "./style.css"

class NavegationPages extends React.Component{
    render(){
        return(
            <div className="botoes">
            <button className="init">{this.props.init}</button>
            <button className="recipes">{this.props.name}</button>
            </div>
        )
    }
}

NavegationPages.propTypes={
    init: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default NavegationPages;