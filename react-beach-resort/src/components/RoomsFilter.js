import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../components/Title'

// get all unique values
// set only accpets unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter ({ rooms }) {
  const context = useContext(RoomContext)
  const {
    handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
  } = context

  // test the function
  // get unique types
  let types = getUnique(rooms, 'type')

  // add all
  types = ['all', ...types]

  // map to jsx
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  // to get the people
  let people = getUnique(rooms, 'capacity')
  people = people.map((item, index) => {
    return <option key={index} value={item}>
      {item}
           </option>
  })

  return <section className='filter-container'>
    <Title title='Search Rooms' />
    <form className='filter-form'>
      {/* select type */}
      <div className='form-group'>
        <label htmlFor='type'>Room Type</label>
        <select
          name='type' id='type' value={type}
          className='form-control' onChange={handleChange}
        >
          {types}
        </select>

      </div>

      {/* end select type */}

      {/* guests type */}
      <div className='form-group'>
        <label htmlFor='capacity'>Guests</label>
        <select
          name='capacity' id='capacity' value={type}
          className='form-control' onChange={handleChange}
        >
          {people}
        </select>

      </div>

      {/* end guests type */}

      {/* room price */}
      <div className='form-gourp'>
        <label htmlFor='price'>Room Price ${price}
        </label>
        <input
          type='range' name='price' min={minPrice}
          max={maxPrice} value={price} onChange={handleChange}
          className='form-control'
        />

      </div>
      {/* end of room price */}
      {/* size */}
      <div className='form-group'>
        <label htmlFor='size'>Room Size</label>
        <div className='size-inputs'>
        <input
                        type='number' name='minSize' id='size'
            value={minSize} onChange={handleChange}
            className='size-input'
          />

        <input
                        type='number' name='maxSize' id='size'
            value={maxSize} onChange={handleChange}
            className='size-input'
          />
      </div>
      </div>

      {/* end of size */}
      {/* extras */}
      <div className='form-group'>
        <div className='single-extra'>
          <input
                        type='checkbox' name='breakfast'
            id='breakfast' checked={breakfast} onChange={handleChange}
          />
          <label htmlFor='breakfast'>Breakfast</label>
        </div>
        {/* end of extraas */}
        <div className='single-extra'>
          <input
                        type='checkbox' name='pets'
            id='pets' checked={pets} onChange={handleChange}
          />
          <label htmlFor='pets'>Pets</label>
        </div>
      </div>

    </form>

  </section>
}
