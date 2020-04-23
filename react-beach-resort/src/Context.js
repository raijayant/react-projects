import React, { Component } from 'react'
import items from './data'
import Client from './ContentFul'


const RoomContext = React.createContext()

// access to provider and consumer
class RoomProvider extends Component {
    state = { 
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all', 
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0, 
        maxSize: 0, 
        breakfast: false, 
        pets: false

     }

     // getData from contentDFul

     getData = async () => {
         try {
             let response = await Client.getEntries({
                 content_type: 'beachResort'
             })

            let rooms = this.formatData(response.items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
      this.setState({
          rooms, 
          featuredRooms, 
          sortedRooms: rooms,
          loading: false, 
          maxSize,
          maxPrice
      })
         } catch (error) {
             console.log(error)
         }
     }


    
    componentDidMount() {
        this.getData()
      
    }
    // loop through the iems
    formatData(items) {
            let tempItems = items.map(item => {
            let id = item.sys.id 
            let images = item.fields.images.map(image => image.fields.file.url)
            // destructuring fields
            let room = {...item.fields, images, id}
            return room
        })
        return tempItems
    }

    // get room
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room 
    }
    // handleChange function to filter 
    handleChange = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked: target.value
       const name = e.target.name
       this.setState({
           [name]: value
       }, this.filterRooms) 
    }
    // to get the roms 
    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets }
        = this.state
    // for all the rooms 
    let tempRooms = [...rooms]
    // transform value 
    capacity = parseInt(capacity)

    // transform price
    price = parseInt(price)


    // filter by type
    if(type !== 'all') {
        tempRooms = tempRooms.filter(room => room.type === type)
    }
        // filter by capacity
    if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        // filter by price
   tempRooms = tempRooms.filter(room => room.price <= price)
    // filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

    // filter by breakfast
    if(breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true)
    }

    // filter by pets 
    if(pets) {
        tempRooms = tempRooms.filter(room => room.pets === true)
    }

        // change state
        this.setState({
            sortedRooms: tempRooms 
        })
    }
    render() { 
        return ( 
            <RoomContext.Provider 
            value={{...this.state, 
            getRoom: this.getRoom, 
            handleChange: this.handleChange }}
            >
                {this.props.children}     
            </RoomContext.Provider>

             ); 
    }
}

const RoomConsumer = RoomContext.Consumer

// higher order method of accessing context
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}
 
export { RoomProvider, RoomConsumer, RoomContext }


// finally import it to index.js
