import React from "react";
import Header from "../../components/Header";
import logo from "../../components/Header/chefe.jpg";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import RecipesList from "../../components/RecipesList";
import RecipeItem from "../../components/RecipeItem";
import RECIPE from "../../assets/RECIPES";
import PageTwo from "../PageTwo";

class PageRecipes extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            recipeItem: [],
        }

    }

    componentDidMount(){
        console.log("Passei aqui");
                this.setState({
                    isLoading: false,
                    recipeItem: RECIPE,
                })
    }

    render(){
        return(
        
            <section className="page-recipes">
                <Header 
                    src={logo} 
                    alt={"chefe"} 
                    name={"Palatare Restaurant"} 
                    title={"Palatare Restaurant"} 
                    subTitle={"Save and gain health!"}>

                </Header>
                <Main>
                    <RecipesList>
                    {this.state.recipeItem.map(({src, alt, title, subTitle})=>{return <RecipeItem  
                        src={src} 
                        alt={alt} 
                        title={title} 
                        subTitle={subTitle}
                        onClick={(recipe)=>{
                            <PageTwo {...recipe}/>}}/>})}
                    </RecipesList>
                </Main>
                <Footer>
                    <h3>Contato</h3>
                    <p>palatare@palatare.com</p>
                </Footer>
            </section>
            
        )
    }
}

export default PageRecipes;