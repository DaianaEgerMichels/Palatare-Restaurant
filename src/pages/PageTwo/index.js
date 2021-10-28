import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg"
import Main from "../../components/Main";

class Home extends React.Component{
    render(){
        return(
            <>
            <div className="page-two">
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Welcome to the Palatare Restaurant revenues page!"}></Header>
                <Main></Main>
            </div>
            </>
        )
    }
}

export default Home;