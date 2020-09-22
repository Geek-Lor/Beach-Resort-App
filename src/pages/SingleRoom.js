import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Global State Import
import GlobalContext from "../globalContext/globalContext";

//Import Components
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";

const SingleRoom = (props) => {
  const { getRoom } = useContext(GlobalContext);
  const { lord } = props.match.params;
  const rooms = getRoom(lord);
  if (!rooms) {
    return (
      <div className='error'>
        <h3>no such rooms could be found...</h3>
        <Link to='/rooms' className='btn-primary'>
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    extras,
    price,
    pets,
    breakfast,
    images,
  } = rooms;

  const [firstImg, ...restImg] = images;

  return (
    <>
      <StyledHero img={firstImg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {restImg.map((image, index) => (
            <img src={image} key={index} alt={name} />
          ))}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT </h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
            <h6>{breakfast && "Free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>extras</h6>
        <ul className='extras'>
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
