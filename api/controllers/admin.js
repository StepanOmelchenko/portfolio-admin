const mongoose = require("mongoose");

module.exports.getSkills = function(req, res) {
  const skills = mongoose.model("skills");

  skills.find().then(items => {
    if (!items.length) {
      res.status(200).json({ skills: [] });
    } else {
      res.status(200).json({ skills: items });
    }
  });
};

module.exports.setSkills = function(req, res) {  
  console.log("hello from api setSkills", req.body);
  const id = req.body.id;

  const data = {
    id: req.body.skill.id,
    name: req.body.name,
    percents: parseInt(req.body.val),
    type: req.body.skill.type
  };

  console.log("data: ", data);

  const Model = mongoose.model("skills");

  Model.findOneAndUpdate(id, { $set: data }, { new: true })
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ err: "Cat not found" });
      }
    })
    .catch(e => {
      res.status(400).json({ err: e.message });
    });
};
