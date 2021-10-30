import React from "react";
import Header from "../../components/Header";
import "./style.css";
import logo from "../../components/Header/chefe.jpg";
import MainPageTwo from "../../components/MainPageTwo";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

class PageTwo extends React.Component{
    render(){
        return(
        
            <div className="page-two">
                <Header src={logo} alt={"chefe"} name={"Palatare Restaurant"} title={"Palatare Restaurant"} subTitle={"Save and gain health!"}></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
            
        )
    }
}

export default PageTwo;