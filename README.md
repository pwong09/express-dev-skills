# express-dev-skills
## Express Lab for GA SEI-R

### Part 1 - adding a skills resource
```
$ express -e express-dev-skills
$ cd express-dev-skills
$ npm i
$ npm start // starts localhost:3000
$ mv app.js server.js
// update bin/www line 7 to require('../server')
$ mkdir models controllers
$ mkdir views/skills
$ touch views/skills/index.ejs
$ touch models/skill.js
$ touch routes/skills.js
$ touch controllers/skills.js
```
Summary of setup:
- models/skill.js
- views/skills (directory)
- controllers.skills.js
- routes/skills.js

#### Screenshots
![app home page](/screenshots/3000.png "home page")
![skills resource](/screenshots/part-1.png "skills page")

### Part 2 - Add a new skill functionality

1. GET /skills/new - controller: new
2. $ touch views/skills/new.ejs
3. routes/skills.js - router.get('/new', skillsCtrl.new)
4. controllers/skills.js - res.render '/skills/new'
5. number 4 handles views render 

1. POST /skills - controller: create
2. no new UI
3. routes/skills.js - router.post('/', skillsCtrl.create)
4. controllers/skills.js - function create (req, res) Skill.create(req.body) res.redirect('/skills')
5. models/skill.js - function create(skill) // res.render new skill in '/skills'

#### Screenshots
![save new skill](/screenshots/part-2-save-new-skill.png "save the new inputted skill")
![new skill has been added to the list](/screenshots/part-2-new-skill-created.png "new skill added to end of list")

### Part 2 - Edit a skill

1. GET /skills/:id/edit - controller: edit
2. $ touch views/skills/edit.ejs
3. route - router.get('/:id/edit', skillsCtrl.edit)
4. controller - function edit - res.render
5. number 4 handles views render

1. PUT /skills/:id - controller: update
2. no new UI - form submission added to show.ejs
3. route - router.put('/:id', skillsCtrl.update)
4. controller - function update - Skill.editOne(req.params.id, req.body)
5. model - function editOne takes req.params.id and req.body to update the old skillName with new input

#### Screenshots
![edit the skill](/screenshots/part-2-edit-skill.png "edit the skill name")
![skill has been updated](/screenshots/part-2-skill-edited.png "skill has been updated")

### Part 2 - Delete a skill functionality

1. DELETE /skills/:id - controller: delete
2. no new UI - form submission added to show.ejs
3. routes - router.delete('/:id', skillsCtrl.delete)
4. controller - function delete - Skill.deleteOne(req.params.id) and res.redirect
5. model - function deleteOne take req.params.id to find corresponding skillName to delete

#### Screenshots
![delete a skill](/screenshots/part-2-delete.png "delete the skill")
![skill removed from list](/screenshots/part-2-skill-deleted.png "skill has been removed from the list")

### Resources
[RESTful Routes to CRUD Mapping Guide](https://gist.github.com/jim-clark/17908763db7bd3c403e6)