import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'


class FeaturedRooms extends Component {
    static contextType = RoomContext
  render() {
      // steps to access the value context from Context API
      // is this.context
    //   const value = this.context
  
    let { loading, featuredRooms : rooms } = this.context
        // rendering outside which can be done in the jsx as well
        rooms = rooms.map(room  => {
            return <Room key={room.id} room={room} />
        })
    return (
      <section className='featured-rooms'>
        <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                {/* if loading is true display gif otherwise display rooms */}
                {loading ? <Loading /> : rooms}
            </div>
      </section>
    )
  }
}

export default FeaturedRooms
