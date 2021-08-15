const {
  getFavorites,
  createFavorites,
  addFavorite,
  removeFavorite,
} = require("../database/userFavoritesDb");

module.exports = {
  getFavorites: async (req, res) => {
    console.log("Getting Favorites");
    const id = req.params.id;

    const favorites = await getFavorites(id);
    console.log(favorites);
    if (favorites) {
      res.status(200).send(favorites);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  createFavorites: async (req, res) => {
    console.log("Creating Favorites");
    const id = req.params.id;
    const favorites = await createFavorites(id);
    console.log(favorites);
    if (favorites) {
      res.status(200).send(favorites);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  addFavorite: async (req, res) => {
    console.log("Adding Favorite");

    const favorites = await addFavorite(req.body).catch((err) => {
      console.log(err);
    });
    if (favorites) {
      res.status(200).send(favorites);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
  removeFavorite: async (req, res) => {
    console.log("Removing Favorite");
    const favorites = await removeFavorite(req.body);
    console.log(favorites);
    if (favorites) {
      res.status(200).send(favorites);
    } else {
      res.status(404).send({
        error: "Not Found",
      });
    }
  },
};
