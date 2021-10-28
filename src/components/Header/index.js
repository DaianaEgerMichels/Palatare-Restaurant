import React from "react";
import "./style.css";
import PropTypes from 'prop-types';
import Navegation from "../Navegation";

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="header">
                <img src={this.props.src} alt={this.props.alt}/>
                <h2>{this.props.name}</h2>
                </div>
                <div className="title">
                    <h1>{this.props.title}</h1>
                </div>
                <Navegation init={"Home"} name={"Revenues"}></Navegation>
            </header>
        )
    }
}

Header.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
}

export default Header;