const Skill = require('../models/skill');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Pearl\'s Express Skills Lab'
    });
};

function show(req, res) {
    res.render('skills/show', {
        skillName: req.params.id,
        skill: Skill.getOne(req.params.id),
        title: 'Pearl\'s Express Skills Lab'
    });
}