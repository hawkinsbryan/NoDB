//controller has all of the req res functions

const { allDecks } = require("./data");

let id = 4;

module.exports = {
  getData: function (req, res) {
    res.status(200).json(allDecks);
  },

  addData: (req, res) => {
    console.log(req.body)
    allDecks.push({ ...req.body, id })
    id++;
    res.status(200).json(allDecks)
  },

  updateData: (req, res) => {
    console.log(req.body)
    allDecks.push(req.body)
    res.status(200).json(allDecks)
  },
  deleteData: (req, res) => {
    console.log(req.body)
    allDecks.delete(req.body)

    const index = articles.findIndex(deck => deck.id === +req.params.id)
    allDecks.splice(index, 1)
    res.status(200).json(allDecks)
  }
};
