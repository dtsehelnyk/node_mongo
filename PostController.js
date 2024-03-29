import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
  async createPost(req, res) {
    try {
      const post = await PostService.create(req.body);
  
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getPosts(_, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts); 
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getPost(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updatePost(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(e);
    }
  }

  async deletePost(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(e);
    }
  }
}

export default new PostController(); 