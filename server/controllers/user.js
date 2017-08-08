const user = require('../models').user;

module.exports = {
 // POST - /users/signup
  create(req, res) {
    return user
      .create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        membership: req.body.membership,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  // signin user
  signInUser(req, res) {
    return user.findOne({
      where: {
        username: req.body.username
      }
    })
    .then((user) => {
    if (!user){
      return res.status(201).send('user does not exist')
    };
      return res.status(201).send('me i am samuel')})
    
    .catch(error => res.status(400).send(error));
  },
};