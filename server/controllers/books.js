import db from '../models';

const { book } = db;

export default {
  // POST - /users/signup
  addBook(req, res) {
    return book.create({
      Tittle: req.body.Tittle,
      Author: req.body.Author,
      Category: req.body.Category,
      Quantity: req.body.Quantity,
      Description: req.body.Description,
    })
      .then(bookTnstance => res.status(201).send(bookTnstance))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return book
      .findAll()
      .then(output => res.status(200).send(output))
      .catch(error => res.status(400).send(error));
  },


  modify(req, res) {
    return book.findById(req.params.bookId)
      .then((result) => {
        if (!result) return res.status(404).json('Invalid bookID');
        return result.update(req.body).then(output => res.status(201).send(output));
      })
      .catch(error => res.status(500).send(error));
  },

  findAbook(req, res) {
    return book.findById(req.params.bookId)
      .then((result) => {
        if (!result) return res.status(404).json('Invalid bookID');
        res.status(200).send(result);
      })
      .catch(error => res.status(500).send(error));
  },
};
