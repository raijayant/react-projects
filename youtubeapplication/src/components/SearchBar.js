// class based because it is going to manage the state

import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends Component {
    state = { 
        searchTerm: ''
     }

     handleChange = (e) => {
         e.preventDefault()
         this.setState({
             searchTerm: e.target.value
         })
     }
     handleSubmit = () => {
         const { searchTerm } = this.state
         const { onFormSubmit } = this.props

         onFormSubmit(searchTerm)
     }
    render() { 
        return ( 
            <Paper elevation={6} style={{padding: '25px'}}>
               <form onSubmit={this.handleSubmit}>
                <TextField fullWidth label='Search...' 
                onChange={this.handleChange}/> 
               </form>
            </Paper>
         );
    }
}
 
export default SearchBar;