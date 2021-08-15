const { models, connection } = require("./index");

module.exports = { getAnimal, getAnimals, addAnimal, updateAnimal, getAvailableAnimals };

async function getAnimal(id) {
  await connection.init();
  const animal = await models.animal.findById(id).populate("shelter_id");
  await connection.close();
  return animal;
}

async function getAnimals() {
  await connection.init();
  const animals = await models.animal
    .find({})
  await connection.close();
  return animals;
}

async function addAnimal(animalObj) {
  await connection.init();
  const animal = await models.animal.create(animalObj);
  await connection.close();
  return animal;
}

async function updateAnimal(id, animalObj) {
  await connection.init();
  const animal = await models.animal.findOneAndUpdate(
    { _id: id },
    { $set: animalObj },
    { new: true }
  );
  await connection.close();
  return animal;
}

async function getAvailableAnimals() {
  await connection.init();
  const animals = await models.animal.getNotAdopted();
  await connection.close();
  return animals;
}