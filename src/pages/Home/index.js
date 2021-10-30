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


class Home extends React.Component{
    render(){
        return(
            
            <div className="home">
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Welcome to the Palatare Restaurant"} subTitle={"Save and gain health!"}></Header>
                <Main>
                <Search type={"text"} placeholder={"Type here what you are looking for..."}></Search>
                <RecipesList>
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
            </div>
            
        )
    }
}

export default Home;