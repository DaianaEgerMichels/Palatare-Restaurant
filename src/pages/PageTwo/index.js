import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import DetailsRecipes from "../../components/DetailsRecipes";

class PageTwo extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            recipeItem: [],
        }

    }

    async componentDidMount(){
        console.log("ComponentDidMount");

        const response = await fetch("/api/recipe");
        const recipeItem = await response.json();

                this.setState({
                    isLoading: false,
                    recipeItem,
                })

    };

    render(){
        return(
        
            <section className="page-two">
                <Header 
                src={logo} 
                alt={"chefe"} 
                name={"Palatare Restaurant"} 
                title={"Palatare Restaurant"} 
                subTitle={"Save and gain health!"}>
                </Header>
        
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