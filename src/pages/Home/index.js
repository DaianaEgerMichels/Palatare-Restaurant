import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg"
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import RecipesList from "../../components/RecipesList";
import RecipeItem from "../../components/RecipeItem";
import Search from "../../components/Search";
import legume from "./recipeLegumes.jpg"
import PageRecipes from "../PageRecipes";
import RECIPE from "../../assets/RECIPES";


class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            recipeItem: [],
    
        }

    }
    RECIPE
    async componentDidMount(){
        console.log("Passei aqui");

        const response = await fetch("../../assets/RECIPES");
        const data = await response.json();
        const recipeItem = data.RECIPE.map((recipe)=>{
            return {
                src: recipe.src ,
                alt: recipe.alt ,
                title: recipe.title ,
                subTitle: recipe.subTitle ,
            }
        });


        this.setState({
                isLoading: false,
                recipeItem,
        });
    }


    render(){
        return(
            
            <section className="home">
                <Header 
                    src={logo} 
                    alt={"chefe"} 
                    name={"Palatare Restaurant"} 
                    title={"Welcome to the Palatare Restaurant"} 
                    subTitle={"Save and gain health!"}>
                </Header>
                <Main>
                    <Search 
                        type={"text"} 
                        placeholder={"Type here what you are looking for..."}
                        onChange={(event)=>{
                            const text = event.target.value;
                            console.log(text);}}>
                    </Search>

                    {this.state.isLoading && "Loading..."}
                    {!this.state.isLoading && (

                    <RecipesList>
                        {this.state.recipeItem.map(({src, alt, title, subTitle})=>{<RecipeItem /*o que está dentro das chaves é descontrução*/ 
                        src={src} 
                        alt={alt} 
                        title={title} 
                        subTitle={subTitle}
                        onClick={(recipe)=>{
                            <PageRecipes {...recipe}/>}}/>})}
                        {/*<RecipeItem 
                            src={legume} 
                            alt={"Legume"} 
                            title={"Salada de frutas"} 
                            subTitle={"Um mix de sabores"}>
                        </RecipeItem>
                        <RecipeItem src={"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                        <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                        <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                        <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                        <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>*/}
                </RecipesList>)}
                </Main>
                <Footer>
                    <h3>Contato</h3>
                    <p>palatare@palatare.com</p>
                </Footer>
            </section>
            
        )
    }
}

export default Home;