import { Component } from "react";
import PropTypes  from "prop-types";
import "./style.css"

class RecipeItem extends Component{

    render(){
        return(
            <li>
                <section className="recipe">
                <img className="image" src={this.props.src} alt={this.props.alt}></img>
                <h1 className="name-recipe">{this.props.title}</h1>
                <p className="description-recipe">{this.props.subTitle}</p>
                <button className="see-recipe" onClick={this.props.onClick}>See the Recipe</button>
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
    onClick: PropTypes.func.isRequired,
}

export default RecipeItem;