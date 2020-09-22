import React, { useContext } from "react";

//Import Global State
import GlobalContext from "../globalContext/globalContext";

//Import Components
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";

const RoomsContainer = () => {
  const { loading, rooms, sortedRooms } = useContext(GlobalContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};
export default RoomsContainer;
