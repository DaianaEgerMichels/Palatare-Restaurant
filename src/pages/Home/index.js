import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg"
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import RecipesList from "../../components/RecipesList";
import RecipeItem from "../../components/RecipeItem";
import Search from "../../components/Search";
import {Link} from "react-router-dom";

class Home extends React.Component{

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
    }
    
    render(){
        return(
            //<Link to="/">
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
                       {this.state.recipeItem.slice(0,6).map(({src, alt, title, subTitle})=>{return <RecipeItem  
                        src={src} 
                        alt={alt} 
                        title={title} 
                        subTitle={subTitle}
                       />})}
                    </RecipesList>)}
                </Main>
                <Footer></Footer>
            </section>
            //</Link>
        )
    }
}

export default Home;