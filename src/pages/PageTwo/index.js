import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import DetailsRecipes from "../../components/DetailsRecipes";
import RECIPE from "../../assets/RECIPES";

class PageTwo extends React.Component{

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
        
            <section className="page-two">
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Palatare Restaurant"} subTitle={"Save and gain health!"}></Header>
        
                <Main>
                
                {this.state.isLoading && "Loading..."}
                {!this.state.isLoading && (
                       this.state.recipeItem.map(({src, alt, title, subTitle, author, time, portions})=>{return <DetailsRecipes 
                        src={src} 
                        alt={alt} 
                        title={title} 
                        subTitle={subTitle}
                        author={author} 
                        time={time} 
                        portions={portions}
                        />}))}
                </Main>
                <Footer></Footer>
            </section>
            
        )
    }
}

export default PageTwo;