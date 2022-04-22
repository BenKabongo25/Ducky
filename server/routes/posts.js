const express = require("express")

function initRouter(db){
let router = express.Router();

router.get("", (req, res) => {
    db.posts.getPosts(req.body)
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.post("", (req,res)  => {
    db.posts.create(req.body)
    .then((post) => res.status(201).send(post))
    .catch((error) => res.send(error))
});

router.get("/post/:postid", (req, res) => {
    if(req.session.userId === req.body.userid){
        db.posts.getFullPost(body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
    }else{
        db.posts.getPost(req.body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
    }
});


router.get("/by/user/:user_id", (req,res) => {
    db.posts.getPostsByUser(req.params.user_id)
    .then((posts) => res.send(posts))
    .catch((error) => res.send(error))
})


router.get("/by", (req,res)  => {
    db.posts.getPostsBy(req.body)
    .then((posts) => res.send(posts))
    .catch((error) => res.send(error))
})

router.get("/post/:post_id/likes", (req,res)=>{
    db.posts.getPostLikes(req.params.post_id)
    .then((users) => res.send(users))
    .catch((error)=> res.send(error))
})

router.post("/posts/:post_id/likes", (req, res)=>{
    db.posts.addPostLike(req.body)
    .then((like) => res.send(like))
    .catch((error) => res.send(error))
})

router.delete("/posts/:post_id/likes", (req,res) => {
    db.posts.delPostLike(req.body)
    .then((like) => res.send("OK"))
    .catch((error) => res.send(error))
})


router.delete("/post/:postid",(req,res)=>{
    if(req.session.userId === req.body.userid){
    db.posts.delete(req.body)
    .then((post) => res.status(201).send(post))
    .catch((error) => res.send(error))    
    }else{res.status(403).send("You're not the owner of this post")}
})

router.patch("/post/:postid", (req, res)=>{
    //requete bd patch 
    if(req.session.userId === req.body.userid){
        db.posts.update(req.body)
        .then((post) => res.status(201).send(post))
        .catch((error) => res.send(error))
    }else{res.status(403).send("You're not the owner of this post")}
    res.send("patched post");
});
}
module.exports = router 
