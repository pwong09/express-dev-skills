const Project = require('../models/project');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('projects/index', {
        projects: Project.getAll(),
        title: 'Pearl\'s Express Skills Lab'
    });
};

function show(req, res) {
    res.render('projects/show', {
        projectName: req.params.id,
        project: Project.getOne(req.params.id),
        title: 'Pearl\'s Express Skills Lab'
    });
}