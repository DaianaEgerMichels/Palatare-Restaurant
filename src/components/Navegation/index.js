import React from "react";
import PropTypes from 'prop-types';
import "./style.css"

class Navegation extends React.Component{
    render(){
        return(
            <div>
            <button className="init">{this.props.init}</button>
            <button className="revenues">{this.props.name}</button>
            </div>
        )
    }
}

Navegation.propTypes={
    init: PropTypes.string,
    name: PropTypes.string,
}

export default Navegation;