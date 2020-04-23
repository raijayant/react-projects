import React from 'react';
import { Link } from 'react-router-dom'

const Recipes = props => (
    <div className="container">
    <div className="row">
        { props.recipes.map((recipe) => {
        return (
        <div className="col-md-9" key={recipe.id}>
        <h3 className="recipe__text">Name: {recipe.name}</h3>
            <button className="form__button">
                <Link to={{
                    pathname: `/post/${recipe.name}`,
                    state: { title: recipe.email }
                    }}>View Post</Link>
            </button>

        </div>

        )
      })
      }
    </div>

    </div>
)

export default Recipes