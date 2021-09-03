// Remove Favorites button
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function DisplayUserFavorites(props) {
  const [favorites, setFavorites] = useState([]);
  const userFavorites = useSelector((state) => state.userFavorites);
  const { user } = props;

  async function getFavorites(user) {
    const res = await axios
      .get(`http://localhost:4000/api/favorites/user/${user._id}`)
      .then((res) => {
        return res.data
      });
    setFavorites(res.animalsArray);
  }

  useEffect(() => {
    console.log(user)
    getFavorites(user);
  }, [user]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <div className="animal-wrapper">
      {favorites
        ? favorites.map((favorite, i) => {
            return (
              <div className="animal-card"key={i}>
                <h1>{favorite.name}</h1>
                <img src={favorite.profile_pic} alt={favorite.name} />
              </div>
            );
          })
        : null}
    </div>
  );
}
