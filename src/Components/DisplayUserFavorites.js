// Remove Favorites button
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DisplayUserFavorites(props) {
  const [favorites, setFavorites] = useState([]);
  const { user } = props;

  async function getFavorites(user) {
    const favorites = await axios
      .get(`http://localhost:4000/api/favorites/user/${user._id}`)
      .then((res) => {
        return res.data;
      });
    setFavorites(favorites.animalArray);
  }
  
  useEffect(() => {
    getFavorites(user);
  }, [user]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <div>
      {favorites.map((favorite, i) => {
        return (
          <div key={i}>
            <h1>{favorite.name}</h1>
            <img src={favorite.profile_pic} alt={favorite.name} />
          </div>
        );
      })}
    </div>
  );
}
