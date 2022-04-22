const express = require("express")


function initRouter(db) {
let router = express.Router();


router.get("", (req, res) => {
    db.users.getUsers(req.body)
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});


router.delete("/userid/:userid", (req, res) => {
    if(req.session.userId === req.params.userid){
    db.users.delete({_id: req.params.userid})
    .then((status) => res.status(201).send(status))
    .catch((error) => res.send(error));
    }else{res.status(403).send("You cannot delete another user")}
});

router.get("/username/:username", (req, res) =>{
    db.users.getUserByUsername({username: req.params.username})
    .then((user) => res.status(201).send(user))
    .catch((error) => res.send(error));
});

router.get("/userid/:userid", (req, res) =>{
    if(req.session.userId === req.params.userid){
        db.users.getFullUser({userid: req.params.userid})
        .then((user) => res.status(201).send(user))
        .catch((error) => res.send(error));
    }else{
        db.users.getUserById({userid: req.params.userid})
        .then((user) => res.status(201).send(user))
        .catch((error) => res.send(error));   
    }
});


router.patch("/:userid", (req, res)=>{
    //requete bd patch 
    if(req.session.userId === req.params.userid){
    db.users.update(req.params.userid, req.body)
    .then((user)=> res.sendStatus(201).send(user))
    .catch((error) => res.send(error));
    }else{
        res.status(403).status("You cannot modify another user")
    }
});

return router
}
module.exports = initRouter