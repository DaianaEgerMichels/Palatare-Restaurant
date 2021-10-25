import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg"

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Welcome to the Palatare Restaurant home page!"}></Header>
            </div>
        )
    }
}

export default Home;