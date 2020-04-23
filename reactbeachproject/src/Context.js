import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext()

// RoomContext.Provider value={}

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }

    // componentDidMount
    componentDidMount() {
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured
        === true)
        this.setState({
            rooms, featuredRooms, 
            sortedRooms:rooms, 
            loading: false
        })
    }

    formatData(items) {
        // destructuring from data object 
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
            image.fields.file.url)
        // ... = copying 
            let room = {...item.fields, images, id }
            return room;
        })
        return tempItems
    }

    // single room 
    // slug can 
    getRoom = slug => {
        // ... destructuring of the state
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room
    }




    render() {
        return (
            <RoomContext.Provider 
            value={{...this.state, 
            // accessing the single room 
            getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }

// Exporting RoomContext allows the application to access its children. 