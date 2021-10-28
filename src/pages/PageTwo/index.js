import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg"
import Main from "../../components/Main";
import Footer from "../../components/Footer";

class PageTwo extends React.Component{
    render(){
        return(
        
            <div className="page-two">
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Palatare Restaurant revenues page"}></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
            
        )
    }
}

export default PageTwo;