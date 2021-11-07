import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  author: {type: String, required: true},
  message: {type: String, required: true},
  // picture: {type: String},
});

export default mongoose.model('Post', Post);
