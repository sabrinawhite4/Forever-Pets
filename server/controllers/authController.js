const bcrypt = require("bcryptjs");
const { getUser, registerUser } = require("../database/userDb");

module.exports = {
  login: async (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
        
    const { username, password } = req.body;
    const { session } = req;    
    const user = await getUser(username);
        
    if (user && bcrypt.compareSync(password, user.passwordHash)) {
      let userToReturn = user;
        userToReturn.passwordHash = undefined;
        session.user = userToReturn;
      res.status(200).send(session.user);
    } else {
      res.status(401).send("Incorrect username or password");
    }
  },
  register: async (req, res) => {
    console.log("Registering User");
    console.log(req.body);

    const { password, username, email, first_name, last_name } = req.body;
    const { session } = req;
    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);

    let userObj = {
      passwordHash,
      username,
      email,
      first_name,
      last_name,
    };
    await registerUser(userObj);
    let userToReturn = { ...userObj };
    userToReturn.passwordHash = undefined;
    session.user = userToReturn;
    res.status(200).send(session.user);
    },
    logout: async (req, res) => {
        console.log("Logging Out User");
        console.log(req.body);
        req.session.destroy();
        res.status(200).send("Logged Out"); 
    }
};
