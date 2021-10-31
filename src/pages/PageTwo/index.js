import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import DetailsRecipes from "../../components/DetailsRecipes";
import Peel from "../Home/recipeLegumes.jpg"

class PageTwo extends React.Component{
    render(){
        return(
        
            <section className="page-two">
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Palatare Restaurant"} subTitle={"Save and gain health!"}></Header>
                <Main>
                    <DetailsRecipes photo={Peel} alt={"Peel"} title={"Toast with Vegetable Peel"} subTitle={"Recipe based on the reuse of vegetable peels"} name={"Author: Kiara Müstchier"} time={"Preparation time: 15 min."} portions={"Makes 5 servings"}></DetailsRecipes>
                </Main>
                <Footer>
                    <h3>Contato</h3>
                    <p>palatare@palatare.com</p>
                </Footer>
            </section>
            
        )
    }
}

export default PageTwo;