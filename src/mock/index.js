import { createServer } from "miragejs"
import RECIPE from "../assets/RECIPES"
import NUTRICION_TABLE from "../assets/NUTRICION_TABLE"

createServer({

    routes(){
        this.namespace = "api";

        this.get("/recipe", ()=>{
            return RECIPE;
        });

        this.get("/nutricion", ()=>{
            return NUTRICION_TABLE;
        });
    }
})