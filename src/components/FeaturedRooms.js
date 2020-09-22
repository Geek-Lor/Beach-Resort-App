import React, { useContext } from "react";

//Import Global Context
import GlobalContext from "../globalContext/globalContext";

//Components Import
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";

const FeaturedRooms = () => {
  const { loading, featuredRooms } = useContext(GlobalContext);
  let rooms = featuredRooms.map((room) => <Room key={room.id} room={room} />);

  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
