const mongoose = require("mongoose");

module.exports.getSkills = function(req, res) {
  const Skills = mongoose.model("skills");

  Skills.find().then(items => {
    if (!items.length) {
      res.status(200).json({ skills: [] });
    } else {
      res.status(200).json({ skills: items });
    }
  });
};

module.exports.setSkills = function(req, res) { 
  const id = req.body.id;
  const val = parseInt(req.body.val);

  const Skills = mongoose.model("skills");

  Skills.update({ _id: id }, { percents: val })
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ err: "Not found" });
      }
    })
    .catch(e => {
      res.status(400).json({ err: e.message });
    });
};
