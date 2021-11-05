import { Component } from "react";
import IngredientMethod from "../IngredientMethod";
import NutricionTable from "../NutricionTable";
import PropTypes from "prop-types";
import "./detailsRecipes.css";

class DetailsRecipes extends Component{
    constructor(props){
        super(props);

        this.state = {
            //isLoading= true,
            nutricionTable: [],
            ingredientMethod:[],
        }
    }

    async componentDidMount(){
        console.log("ComponentDidMount");

        const response = await fetch("/api/nutricion");
        const nutricionTable = await response.json();
        const res = await fetch("/api/recipe");
        const ingredientMethod = await res.json();


                this.setState({
                    //isLoading: false,
                    nutricionTable,
                    ingredientMethod,
                })
    }



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

                {this.state.ingredientMethod.map(({ingredient, preparation})=>{return <IngredientMethod  
                        ingredient={ingredient} 
                        preparation={preparation} 
                />})};


                <div className="table-container">
                    {this.state.nutricionTable.map(({fruit, calories, carbohydrates, proteins, lipids, fat})=>{return <NutricionTable  
                        fruit={fruit} 
                        calories={calories} 
                        carbohydrates={carbohydrates} 
                        proteins={proteins}
                        lipids={lipids}
                        fat={fat}/>})};
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