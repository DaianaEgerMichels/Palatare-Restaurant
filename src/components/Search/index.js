import React from "react";
import './style.css';
import PropTypes from 'prop-types';

class Search extends React.Component{
    render(){
        return(
            <label>
                Search:
            <input type={this.props.type} placeholder={this.props.placeholder} className="search"></input>
            </label>
        )
    }

}

Search.propTypes={
    type: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Search;