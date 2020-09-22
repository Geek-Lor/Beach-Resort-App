import React, { useContext, useState, useEffect } from "react";

// Import Global state
import GlobalContext from "../globalContext/globalContext";

//Import Components
import Title from "./Title";

//get Unique value
const getUnique = (items, value) => [
  ...new Set(items.map((item) => item[value])),
];

const RoomsFilter = ({ rooms }) => {
  //Get Unique Room Types
  let types = getUnique(rooms, "type");
  //Add the value All
  types = ["all", ...types];
  //Map to JSX
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  //Get Unique Room Capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    filterByType,
    filterByGuest,
    filterByPrice,
    filterBySize,
    filterByBreakfast,
    filterByPets,
  } = useContext(GlobalContext);

  const [roomType, setRoomtype] = useState(type);
  const [guestNumber, setGuestNumber] = useState(capacity);
  const [roomPrice, setRoomPrice] = useState(price);
  const [smallSize, setSmallSize] = useState(minSize);
  const [bigSize, setBigSize] = useState(maxSize);
  const [breakfastVal, setBreakfastVal] = useState(breakfast);
  const [petsVal, setPetsVal] = useState(pets);

  const handleRoom = (e) => setRoomtype(e.target.value);

  const handleGuest = (e) => setGuestNumber(e.target.value);

  const handlePrice = (e) => setRoomPrice(e.target.value);

  const handleMinSize = (e) => setSmallSize(e.target.value);

  const handleMaxSize = (e) => setBigSize(e.target.value);

  const roomSize = { smallSize, bigSize };

  const handleBreakfast = () => setBreakfastVal(!breakfastVal);

  const handlePets = () => setPetsVal(!petsVal);

  useEffect(
    () => {
      filterByType(roomType);
      filterByGuest(guestNumber);
      filterByPrice(roomPrice);
      filterBySize(roomSize);
      filterByBreakfast(breakfastVal);
      filterByPets(petsVal);
    },
    //eslint-disable-next-line
    [
      roomType,
      guestNumber,
      roomPrice,
      roomSize.smallSize,
      roomSize.bigSize,
      breakfastVal,
      petsVal,
    ]
  );

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/** Select Type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={roomType}
            onChange={handleRoom}
            className='form-control'
          >
            {types}
          </select>
        </div>
        {/**End of Select Type */}
        {/** Guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={guestNumber}
            onChange={handleGuest}
            className='form-control'
          >
            {people}
          </select>
        </div>
        {/**End of Guests */}
        {/**Price */}
        <div className='form-group'>
          <label htmlFor='price'>Room Price ${roomPrice} </label>
          <input
            type='range'
            name='price'
            id='price'
            min={minPrice}
            max={maxPrice}
            value={roomPrice}
            onChange={handlePrice}
            className='form-control'
          />
        </div>
        {/**End of Price */}
        {/* size */}
        <div className='form-group'>
          <label htmlFor='price'>room size </label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              value={smallSize}
              onChange={handleMinSize}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              value={bigSize}
              onChange={handleMaxSize}
              className='size-input'
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfastVal}
              onChange={handleBreakfast}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={petsVal}
              onChange={handlePets}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
