import React, { Component } from 'react'
import { RoomContext } from '../Context' 
import Room from './Room'
import Title from './Title'
import Loading from '../pages/Loading'

export class FeaturedRooms extends Component {
    // importing context API
    static contextType = RoomContext
    render() {
        // destructuring 
        let { loading, featuredRooms: rooms } = this.context
        rooms = rooms.map(room => {
            // room={room} passing the room prop
            return <Room key={room.id} room={room} />
        })
        
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms"/>
                    <div className="featured-rooms-center">
                        {loading ? <Loading/>: rooms}

                   
                    </div>
                
            </section>
        )
    }
}

export default FeaturedRooms
