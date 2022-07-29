import mongoose from "mongoose";

const Post = new mongoose.Schema( {
    title: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, default: Date.now},
    picture: {type: String}
});

export default mongoose.model('Post', Post);