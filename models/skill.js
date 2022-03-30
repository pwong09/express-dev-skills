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
    deleteOne,
    editOne
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
    const idx = skills.findIndex(skill => skill.skillName === id);
    skills.splice(idx, 1);
}

function editOne(oldSkillName, skill){
    console.log(`new skill name ${skill[oldSkillName]}`);
    console.log(`old skill name ${oldSkillName}`);
    skills.find(s => {
        if (s.skillName === oldSkillName) s.skillName = skill[oldSkillName];
        if (skill.beginner) {
            s.experience = 'beginner'
        } else if (skill.intermediate) {
            s.experience = 'intermediate'
        } else if (skill.advanced) {
            s.experience = 'advanced'
        }
        if (skill.certified) s.certified = true;
    });
    
}