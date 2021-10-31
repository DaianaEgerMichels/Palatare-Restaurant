import React from "react";
import Header from "../../components/Header";
import logo from "../../components/Header/chefe.jpg";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import RecipesList from "../../components/RecipesList";
import legume from "../../assets/IMAGENS/recipeLegumes.jpg"
import RecipeItem from "../../components/RecipeItem";

class PageRecipes extends React.Component{
    render(){
        return(
        
            <section className="page-recipes">
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Palatare Restaurant"} subTitle={"Save and gain health!"}></Header>
                <Main>
                    <RecipesList>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
                    <RecipeItem src={legume} alt={"Legume"} title={"Salada de frutas"} subTitle={"Um mix de sabores"}></RecipeItem>
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