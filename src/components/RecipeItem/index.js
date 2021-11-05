import { Component } from "react";
import PropTypes  from "prop-types";
import "./recipeItem.css";
import {Link} from "react-router-dom";

class RecipeItem extends Component{

    render(){
        return(
            <li>
                <section className="recipe">
                <img className="image" src={this.props.src} alt={this.props.alt}></img>
                <h1 className="name-recipe">{this.props.title}</h1>
                <p className="description-recipe">{this.props.subTitle}</p>
                <Link to="/pageTwo">
                <button className="see-recipe" onClick={this.props.onClick}>See the Recipe</button>
                </Link>
                </section>
            </li>
        )
    }
}

RecipeItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default RecipeItem;