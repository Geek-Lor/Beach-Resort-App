import React, { useReducer, useEffect } from "react";
import GlobalContext from "./globalContext";
import GlobalReducer from "./globalReducer";

//Fetch Data
import items from "../data";

const GlobalState = ({ children }) => {
  const initialState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //Format Data
  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let maxPrice = Math.max(item.fields.price);
      let maxSize = Math.max(item.fields.size);
      let room = { ...item.fields, images, id, maxPrice, maxSize };
      return room;
    });

    dispatch({
      type: "FORMAT_DATA",
      payload: tempItems,
    });
  };

  useEffect(() => {
    formatData(items);
  }, []);

  //Get A Single Room
  const getRoom = (slug) => {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  /** FILTER ROOMS */
  //Filter By Type
  const filterByType = (roomType) => {
    dispatch({
      type: "SORT_BY_TYPE",
      payload: roomType,
    });
  };

  //Filter By No. of Guests
  const filterByGuest = (guestNumber) => {
    dispatch({
      type: "SORT_BY_GUESTS",
      payload: guestNumber,
    });
  };

  //Filter By Price
  const filterByPrice = (roomPrice) => {
    dispatch({
      type: "SORT_BY_PRICE",
      payload: roomPrice,
    });
  };

  //Filter By Room Size
  const filterBySize = (roomSize) => {
    dispatch({
      type: "SORT_BY_SIZE",
      payload: roomSize,
    });
  };

  //Filter by Rooms that Allow Breakfast
  const filterByBreakfast = (breakfastVal) => {
    console.log(breakfastVal);
    dispatch({
      type: "SORT_BY_BREAKFAST",
      payload: breakfastVal,
    });
  };

  //Filter by Rooms that Allow Pets
  const filterByPets = (petsVal) => {
    console.log(petsVal);
    dispatch({
      type: "SORT_BY_PETS",
      payload: petsVal,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        rooms: state.rooms,
        sortedRooms: state.sortedRooms,
        featuredRooms: state.featuredRooms,
        loading: state.loading,
        price: state.price,
        maxPrice: state.maxPrice,
        minPrice: state.minPrice,
        type: state.type,
        capacity: state.capacity,
        maxSize: state.maxSize,
        minSize: state.minSize,
        breakfast: state.breakfast,
        pets: state.pets,
        getRoom,
        filterByType,
        filterByGuest,
        filterByPrice,
        filterBySize,
        filterByBreakfast,
        filterByPets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
