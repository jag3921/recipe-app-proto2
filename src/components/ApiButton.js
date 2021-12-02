import React, { Component } from "react";
import axios from "axios";
//import RecipeNodule from "./RecipeNodule";

export default class ApiButton extends Component {
  constructor () {
    super();
    this.state = {
      responses: [],
      word: "Search for your favorite meal!"
    };

  }

  
  getResponse = () => {
    axios.get("/getRecipes").then(response => {
      console.log(response.data);
      this.setState({
        responses: response.data
      }) 
    })
  }
  render() {
    return (
      <div>
        <p>There will be a search bar for recipes. This prototype makes sure the api works with react. For now hit the 'Get Recipes' button to see some pasta dishes.</p>
        <button onClick={this.getResponse}>Get Recipes</button>
        {this.state.responses.map(res => (
          <div className="recipeNode">
              <div>{res.title}</div>
              <img src={res.image}  alt="recipe" />
          </div>
        ))}
      </div>
    );
  }

}