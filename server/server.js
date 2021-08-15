const express = require('express');
const cors = require('cors');
const gradient = require('gradient-string');
const session = require('express-session');
const ac = require('./controllers/animalController.js');
const uc = require('./controllers/userController.js');
const sc = require('./controllers/shelterController.js');
const fc = require('./controllers/favoritesController');
const auth = require('./controllers/authController.js');
const species = require('./controllers/speciesController.js');
const ubc = require('./controllers/userBioController.js');

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  session({
    secret: "Puppies are life",
    resave: false,
    saveUninitialized: true,
    cookie: { },
  })
);

app.listen(4000, () => console.log(gradient.instagram('Server barking on 4000')));

// Animal endpoints
app.get("/api/animals/available", ac.getAvailableAnimals);
app.get('/api/animals/all', ac.getAnimals);
app.get('/api/animals/:id', ac.getAnimal);
app.post('/api/animals', ac.addAnimal);
app.put('/api/animals/:id', ac.updateAnimal);
// Auth endpoints
app.post('/api/auth/login', auth.login);
app.post('/api/auth/register', auth.register);
app.post('/api/auth/logout', auth.logout);
// Favorites endpoints
app.get('/api/favorites/:id', fc.getFavorites);
app.post('/api/favorites/create/:id', fc.createFavorites);
app.put('/api/favorites', fc.addFavorite);
app.delete('/api/favorites', fc.removeFavorite);
// User endpoints
app.get('/api/users', uc.getUsers);
app.get('/api/users/:username', uc.getUser);
app.put('/api/users/:id', uc.updateUser);
app.delete('/api/users/:id', uc.deleteUser);
// Shelter endpoints
app.get('/api/shelters', sc.getShelters);
app.get('/api/shelters/:id', sc.getShelter);
app.post('/api/shelters', sc.addShelter);
app.put('/api/shelters/:id', sc.updateShelter);
app.delete('/api/shelters/:id', sc.deleteShelter);
// Species endpoints
app.get('/api/species/:name', species.getSpecies);
app.get('/api/allSpecies', species.getAllSpecies);
app.post('/api/species', species.addSpecies);
app.put('/api/species/:id', species.updateSpecies);
// UserBio endpoints
app.post('/api/bio/:id', ubc.createUserBio);
app.put('/api/bio/:id', ubc.updateUserBio);
app.delete('/api/bio/:id', ubc.removeUserBio);