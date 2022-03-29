// fake database 
const skills = [
    {skillName: 'JavaScript', experience: 'beginner', certified: true},
    {skillName: 'HTML', experience: 'beginner', certified: true},
    {skillName: 'CSS', experience: 'beginner', certified: true},
    {skillName: 'Python', experience: 'intermediate', certified: true},
    {skillName: 'C++', experience: 'beginner', certified: true},
    {skillName: 'PostgreSQL', experience: 'beginner', certified: true},
    {skillName: 'Google Suite', experience: 'advanced', certified: false},
    {skillName: 'Microsoft Office', experience: 'advanced', certified: false},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}


function getAll() {
    return skills;
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.skillName === id);
}
function create(skill){
    skill.experience = 'beginner';
    skill.certified = false;
    skills.push(skill)
}

function deleteOne(id){
    console.log(`deleting ${id}`);
    const idx = skills.findIndex(skill => skill.skillName === id);
    skills.splice(idx, 1);
}