const PostsController = require("../controllers/posts_controller");

module.exports = (app) => {
    app.get("/api", PostsController.apiInfo);    
    
    app.get("/api/posts", PostsController.index);
    app.get("/api/posts/:id", PostsController.show);
    app.post("/api/posts", PostsController.create);
    app.put("/api/posts/:id", PostsController.edit);
    app.delete("/api/posts/:id", PostsController.delete);    
};