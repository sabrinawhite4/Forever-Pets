const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    name: String,
    age: Number,
    profile_pic: String,
    animal_bio: String,
    breed: String,
    is_adopted: { type: Boolean, default: false},
    shelter_id: { type: "ObjectId", ref: "Shelters" },
    species_id: { type: "ObjectId", ref: "Species" }
});

AnimalSchema.statics.getNotAdopted = function () {
    return this.find({ is_adopted: false });
};

module.exports = mongoose.models.Animal || mongoose.model("Animal", AnimalSchema);
