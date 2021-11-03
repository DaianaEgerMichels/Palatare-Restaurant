import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg"
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import RecipesList from "../../components/RecipesList";
import RecipeItem from "../../components/RecipeItem";
import Search from "../../components/Search";
import PageTwo from "../PageTwo";
import RECIPE from "../../assets/RECIPES";


class Home extends React.Component{

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
                        onClick={(recipe)=>{
                            <PageTwo {...recipe}/>}}/>})}
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