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
    setFavorites(  [
    {
      is_adopted: false,
      _id: "61181ce8dcc5f6d865f1be7f",
      name: 'Mashed Potato',
      age: 1,
      profile_pic: 'https://i.ytimg.com/vi/mRf3-JkwqfU/mqdefault.jpg',
      animal_bio: "This is Mashed Potato! Ain't he adorable? He loves pupcups from starbucks, and is a big ole sassy pants!",
      breed: 'Pomeranian',
      __v: 0,
      shelter_id: "61184ee7db91a6f130470e1a",
      species: 'Dog'
    },
    {
      is_adopted: false,
      _id: "6118467fad7dcbe7b6f4b104",
      name: 'Hammy',
      age: 2,
      profile_pic: 'https://parade.com/wp-content/uploads/2007/09/can-dogs-eat-ham.jpg',
      animal_bio: 'He really loves ham!',
      breed: 'Golden Lab',
      __v: 0
    },
    {
      is_adopted: false,
      _id: "61181ef052dc46d8c496c362",
      name: 'Bubba',
      age: 1,
      profile_pic: 'https://www.puppyleaks.com/wp-content/uploads/2017/09/500namespop.png',
      animal_bio: "This is Bubba! Ain't he adorable? He loves pupcups from starbucks, and big sticks!",
      breed: 'Mini Poodle',
      __v: 0
    }
  ],)
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
