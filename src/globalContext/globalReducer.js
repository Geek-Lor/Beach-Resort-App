export default (state, action) => {
  switch (action.type) {
    case "FORMAT_DATA":
      return {
        ...state,
        rooms: action.payload,
        sortedRooms: action.payload,
        featuredRooms: action.payload.filter((room) => room.featured === true),
        loading: false,
        maxPrice: Math.max(...action.payload.map((item) => item.maxPrice)),
        maxSize: Math.max(...action.payload.map((item) => item.maxSize)),
        price: Math.max(...action.payload.map((item) => item.maxPrice)),
      };
    case "SORT_BY_TYPE":
      return {
        ...state,
        sortedRooms:
          action.payload === "all"
            ? state.rooms
            : state.rooms.filter((room) => room.type === action.payload),
      };
    case "SORT_BY_GUESTS":
      return {
        ...state,
        sortedRooms:
          parseInt(action.payload) === 1
            ? state.sortedRooms
            : state.sortedRooms.filter(
                (room) => room.capacity >= parseInt(action.payload)
              ),
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortedRooms: state.sortedRooms.filter(
          (room) => room.price <= parseInt(action.payload)
        ),
      };
    case "SORT_BY_SIZE":
      return {
        ...state,
        sortedRooms: state.sortedRooms.filter(
          (room) =>
            room.size >= parseInt(action.payload.smallSize) &&
            room.size <= parseInt(action.payload.bigSize)
        ),
      };
    case "SORT_BY_BREAKFAST":
      return {
        ...state,
        sortedRooms:
          action.payload === true
            ? state.sortedRooms.filter((room) => room.breakfast === true)
            : state.sortedRooms,
      };
    case "SORT_BY_PETS":
      return {
        ...state,
        sortedRooms:
          action.payload === true
            ? state.sortedRooms.filter((room) => room.pets === true)
            : state.sortedRooms,
      };
    default:
      return state;
  }
};
