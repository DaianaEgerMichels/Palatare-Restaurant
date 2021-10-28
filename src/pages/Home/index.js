import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg"
import Main from "../../components/Main";
import Search from "../../components/Search";
import Footer from "../../components/Footer";

class Home extends React.Component{
    render(){
        return(
            
            <div className="home">
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Welcome to the Palatare Restaurant page!"}></Header>
                <Main>
                    <Search type={'text'} placeholder={'Type here what you are looking for...'}></Search>
                </Main>
                <Footer></Footer>
            </div>
            
        )
    }
}

export default Home;