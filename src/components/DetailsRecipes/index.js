import { Component } from "react";
import IngredientMethod from "../IngredientMethod";
import NutricionTable from "../NutricionTable";
import PropTypes from "prop-types";
import "./style.css";

class DetailsRecipes extends Component{
    render(){
        return(
            <section className="container">
                <div className="grid-image">
                    <img src={this.props.src} alt={this.props.alt}></img>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subTitle}</h2>
                </div>

                <section className="grid-details">

                    <h3>Author: {this.props.author}</h3>
                    
                    <div>
                        <p>Time preparation: {this.props.time}</p>
                        <p>Servings: {this.props.portions}</p>
                    </div>
                    
                    <div className="like">
                        <button onClick={this.props.handleColor}>Like</button>
                    </div>
                </section>

                <IngredientMethod ingredient={["100g saladas a gosto", "10 unidades de pão torrado","molho de tomate", "sal a gosto", "2 colheres de requeijão"]} preparation={"Misture tudo"}></IngredientMethod>

                <div className="table-container">
                    <NutricionTable fruit={"Morango"} calories={"52 Kcal"} carbohydrates={"12g"}></NutricionTable>
                    <NutricionTable fruit={"Uva"} calories={"61 Kcal"} carbohydrates={"9g"}></NutricionTable>
                    <NutricionTable fruit={"Banana"} calories={"98 Kcal"} carbohydrates={"11g"}></NutricionTable>
                    <NutricionTable fruit={"Abacate"} calories={"160 Kcal"} carbohydrates={"35g"}></NutricionTable>
                </div>

            </section>
        )
    }
}

DetailsRecipes.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    portions: PropTypes.string.isRequired,
    handleColor: PropTypes.func,

}

export default DetailsRecipes;