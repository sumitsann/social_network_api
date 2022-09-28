const { Thought, User } = require("../models");

const thoughtController = {
  // GET /api/thoughts
  getAllThoughts(req, res) {},

  // GET /api/thoughts/:id
  getThoughtById({ params }, res) {},

  // POST /api/thoughts/
  createThought({ body }, res) {},

  // PUT /api/thoughts/:id
  updateThought({ params, body }, res) {},

  // DELETE /api/thoughts/:id
  deleteThought({ params }, res) {},
};

module.exports = commentController;
