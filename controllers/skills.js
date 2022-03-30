const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update: updateSkill
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

function edit(req, res){
    res.render('skills/edit', {
        skillName: req.params.id,
        skill: Skill.getOne(req.params.id),
        title: 'Pearl\'s Express Skills Lab'
    });
}
function updateSkill(req, res){
    //how to get the original skillName id? 
    console.log(req.body) // logs out an object {skill: 'input'}
    console.log(req.params.id)
    Skill.editOne(req.params.id, req.body),
    res.redirect('/skills');
}