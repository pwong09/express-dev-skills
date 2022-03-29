const projects = [
    {projectName: 'Affirmations Cookie', tech: 'HTML, CSS, JavaScript', live: true, link: 'https://pwong09.github.io/affirmations-cookie'},
    {projectName: 'Minesweeper', tech: 'HTML, CSS, JavaScript', live: true, link: 'https://pwong09.github.io/SEIR-project-1'}
];

module.exports = {
    getAll,
    getOne
}


function getAll() {
    return projects;
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return projects.find(project => project.projectName === id);
}