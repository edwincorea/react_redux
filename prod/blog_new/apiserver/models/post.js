const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String
    },
    categories: {
        type: String
    },
    content: {
        type: String
    },
    created: {
        type: Date
    },    
    updated: {
        type: Date,
        default: null
    }
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;