import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://dam.ngenespanol.com/wp-content/uploads/2019/06/empire-state.png",
    address: "20 W 34th St, New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.748897,
      lng: -73.985824,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://dam.ngenespanol.com/wp-content/uploads/2019/06/empire-state.png",
    address: "20 W 34th St, New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.748897,
      lng: -73.985824,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {

    const userId = useParams().userId;

    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;
