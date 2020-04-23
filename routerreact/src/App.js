import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Writers from './Writers'
export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      writers: [
        {
            "id": "ralph-waldo-emerson",
            "name": "ralph-waldo-emerson",
            "born": "May 25, 1803",
            "deceased": "June 1, 1888",
            "description": "Ralph Waldo Emerson (May 25, 1803 – April 27, 1882)[5] was an American essayist, lecturer, philosopher, and poet who led the transcendentalist movement of the mid-19th century. He was seen as a champion of individualism and a prescient critic of the countervailing pressures of society, and he disseminated his thoughts through dozens of published essays and more than 1,500 public lectures across the United States.",
            "image": "https://en.wikipedia.org/wiki/File:Ralph_Waldo_Emerson_ca1857_retouched.jpg"
        },
        {
            "id": "freidrich-nietesch",
            "name": "freidrich-nietesch",
            "born": "June 1, 1921",
            "deceased": "January 7, 1997",
            "description": "Frederick Douglass (born Frederick Augustus Washington Bailey; c. February 1818[4] – February 20, 1895[5]) was an American social reformer, abolitionist, orator, writer, and statesman. After escaping from slavery in Maryland, he became a national leader of the abolitionist movement in Massachusetts and New York, gaining note for his oratory[6] and incisive antislavery writings.",
            "image": "https://en.wikipedia.org/wiki/File:Frederick_Douglass_(circa_1879).jpg"
        },
        {
            "id": "carl jung",
            "name": "carl jung",
            "born": "May 7, 1882",
            "deceased": "May 29, 1990",
            "description": "Carl Gustav Jung (/jʊŋ/ YUUNG,[5][6] German: [kaʁl ˈjʊŋ]; 26 July 1875 – 6 June 1961) was a Swiss psychiatrist and psychoanalyst who founded analytical psychology. Jung's work was influential in the fields of psychiatry, anthropology, archaeology, literature, philosophy, and religious studies. Jung worked as a research scientist at the famous Burghölzli hospital, under Eugen Bleuler. During this time, he came to the attention of Sigmund Freud, the founder of psychoanalysis. The two men conducted a lengthy correspondence and collaborated, for a while, on a joint vision of human psychology.",
            "image": "https://en.wikipedia.org/wiki/File:CGJung.jpg"
        }
      ],
      "texts": [
        {
          "id": '"self-reliance',
          "writer-id": "ralph-waldo-emerson",
          "title": "self-reliance",
          "description": "Hello from self reliance",
          "published": 1841
        }
      ]
    }
  }


  render () {
    const { writers } = this.state
    return (
      <Router>
        <>
          <ul>
            <li>
              <Link to='/'>
          Home
              </Link>
            </li>
            <li>
              <Link to='/writers'>
          writers
              </Link>
            </li>
          </ul>

          <hr/>
          <Switch>
          <Route exact path='/' render={() => <div>Home</div>} />
          <Route path='/writers' render={props => <Writers {...props} writers={writers}/>} />
          <Route render={(
            () => <h3>Not found</h3>
          )} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App
