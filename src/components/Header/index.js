import React from "react";
import "./style.css";
import PropTypes from 'prop-types';
import NavegationPages from "../Navegation";

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="header">
                <img className='img' src={this.props.src} alt={this.props.alt}/>
                <h2 className='palatare-logo'>{this.props.name}</h2>
                </div>
                <div className="title-conteiner">
                    <h1 className="title">{this.props.title}</h1>
                    <h3 className="sub-title">{this.props.subTitle}</h3>
                </div>
                <NavegationPages init={"Home"} name={"Recipes"}></NavegationPages>
            </header>
        )
    }
}

Header.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

export default Header;