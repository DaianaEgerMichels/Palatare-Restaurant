import React from "react";
import Search from "../Search";
import "./style.css"

class Main extends React.Component{
    render(){
        return(
            <div className="main">
            <Search type={'text'} placeholder={'Type here what you are looking for...'}></Search>
            </div>
        )
    }
}

export default Main;