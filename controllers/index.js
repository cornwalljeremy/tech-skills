const router = require('express').Router();
const Skill = require('../models/Skill');

router.get('/', (req, res) => {
  Skill.find()
    .lean()
    .then((skills) => {
      if (!skills) {
        res.render('no-skills');
      }
      res.render('skills', { skills });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/add', (req, res) => {
  const newSkill = new Skill({
    name: req.body.name,
  });

  newSkill.save().then((skill) => res.redirect('/'));
});

module.exports = router;
