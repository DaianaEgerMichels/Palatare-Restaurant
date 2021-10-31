import {Component} from "react";
import PropTypes from "prop-types";

class IngredientMethod extends Component{
    render(){
        return(
            <section>
                    <div>
                        <h3>Ingredients</h3>
                        <ul>
                            <li>{this.props.ingredient}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Method of Preparation</h3>
                        <p>{this.props.preparation}</p>
                    </div>
                </section>
        )
    }

}

IngredientMethod.propTypes = {
    ingredient: PropTypes.array.isRequired,
    preparation: PropTypes.string.isRequired,
}

export default IngredientMethod;