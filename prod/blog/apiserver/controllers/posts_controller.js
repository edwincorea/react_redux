const Post = require("../models/post");

module.exports = {
    apiInfo(req, res) {
        //res.send({status: "Blog API 0.1"});
        res.sendFile(__dirname + '/swagger-ui/index.html');
    },

    index(req, res, next) {
        Post.find({})
            .sort({created: 1})
            .limit(40)
            .then(posts => res.send(posts))
            .catch(next);
    },

    create(req, res, next) {
        const postProps = req.body;

        Post.create(postProps)
          .then(post => res.status(201).send(post))
          .catch(next);
    },

    edit(req, res, next) {
        const postId = req.params.id;
        const postProps = req.body;

        Driver.findByIdAndUpdate({_id: postId}, postProps)
          .then(() => Post.findById({_id: postId}))
          .then(post => res.status(200).send(post))
          .catch(next);
    },

    delete(req, res, next) {
        const postId = req.params.id;
        
        Driver.findByIdAndRemove({_id: postId})
          .then(post => res.status(204).send(post))
          .catch(next);
    }
};