import React from 'react';
import './App.css';

import Form from './components/Form'
import Recipes from './components/Recipes'


class App extends React.Component {
state = {
  recipes: []
}

getRecipe = async (e) => {
  const recipeName = e.target.elements.recipeName.value
  e.preventDefault()
  const  api_call = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=1&q=${recipeName}`)
  const data = await api_call.json()
  this.setState({
    recipes: data
  })

}

componentDidMount = () =>  {
  const json = localStorage.getItem("recipes")
  const recipes = JSON.parse(json)
  this.setState({ recipes })
}

componentDidUpdate = () =>  {
    const recipes = JSON.stringify(this.state.recipes)
    localStorage.setItem("recipes", recipes)
}

render() {
  const { recipes } = this.state
return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={this.getRecipe}/>
      <Recipes recipes={this.state.recipes}/>
    </div>
  );

  }
}

export default App;
