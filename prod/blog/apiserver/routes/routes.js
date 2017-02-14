const PostsController = require("../controllers/posts_controller");

module.exports = (app) => {
    app.get("/api", PostsController.apiInfo);    
    
    app.post("/api/posts", PostsController.create);
    app.put("/api/posts/:id", PostsController.edit);
    app.delete("/api/posts/:id", PostsController.delete);
    app.get("/api/posts", PostsController.index);
};