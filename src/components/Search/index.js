import React from "react";
import './style.css';
import PropTypes from 'prop-types';

class Search extends React.Component{
    render(){
        return(
            <label>
            <input type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.handleChange} className="search"></input>
            <img className={"loupe"} src={"https://icons.iconarchive.com/icons/icojam/blue-bits/128/search-icon.png"} alt={"loupe"}/>
            </label>
        )
    }

}

Search.propTypes={
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Search;