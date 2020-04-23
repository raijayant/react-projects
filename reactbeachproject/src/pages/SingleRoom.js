import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../Banner'
import { Link } from 'react-router-dom'
import StyledHero from '../components/StyledHero'

// another method of importing context api besides static
import { RoomContext } from '../Context'

export default class SingleRoom extends Component {
  constructor (props) {
    super(props)
    // console.log(this.props);
    this.state = {
      // get the route param from chrome developer tools
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }

  // accesing the constructor
    static contextType = RoomContext

  render () {
      // destructuring getRooms that comes from the context
      const { getRoom } = this.context
        // to run that function
        const room = getRoom(this.state.slug)
        console.log(room)
        if(!room) {
            return <div className='error'>
                <h3>No such room</h3>
                <Link to='/rooms' className='btn-primary'>
                    Back to Rooms
                </Link>
            </div>
        }

        // if the room is defined 

        const {name, description, capacity, size, price, extras,
        breakfast, pets, images} = room
    return (
        // passing prop
     <StyledHero img={images[0] || this.state.defaultImg}>
        <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
            Back to Rooms
            </Link>
        </Banner>
     </StyledHero>
    )
  }
}
