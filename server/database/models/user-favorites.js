const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserFavoritesSchema = new Schema({
    animalsArray: {type: Array, default: []},
    user_id: { type: "ObjectId", ref: "User" }
});

module.exports = mongoose.models.UserFavorites || mongoose.model("UserFavorites", UserFavoritesSchema);
