import Post from './Post.js';

class PostService {
  async create(post) {
    return await Post.create(post);
  }

  async getAll() {
    return await Post.find();
  }

  async getOne(id) {
    if (!id) {
      throw Error('there is no ID');
    };

    return await Post.findById(id);
  }

  async update(post) {
    if (!post._id) {
      throw Error('there is no ID');
    };

    return await Post.findByIdAndUpdate(post._id, post, { new: true });
  }

  async delete(id) {
    if (!id) {
      throw Error('there is no ID');
    };

    return await Post.findByIdAndDelete(id);
  }
}

export default new PostService();