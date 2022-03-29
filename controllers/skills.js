const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
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

function newSkill(req, res){
    res.render('skills/new', {
        title: 'Pearl\'s Express Skills Lab'
    });
}
function create(req, res){
    console.log(req.body);
    Skill.create(req.body)
    res.redirect('/skills');
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}