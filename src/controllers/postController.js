const prisma = require("../helpers/prisma.js");
const { postSchema } = require("../helpers/schema.js");

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();

    return res.json({
      success: true,
      message: "Posts retrieved successfully",
      statuscode: 200,
      data: posts,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error retrieving posts",
      statuscode: 500,
      data: null,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const parse = postSchema.safeParse(req.body);

    if (!parse.success) {
      const errorMessages = parse.error.issues.map(
        (err) => `${err.path} - ${err.message}`
      );

      return res.json({
        message: errorMessages,
        statuscode: 500,
        data: null,
      });
    }

    const post = await prisma.post.create({
      data: {
        author_name: parse.data.author_name,
        content: parse.data.content,
        title: parse.data.title,
        published: parse.data.published,
      },
    });

    return res.json({
      success: true,
      message: "Posts created successfully",
      statuscode: 200,
      data: post,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error retrieving posts",
      statuscode: 500,
      data: null,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const parse = postSchema.safeParse(req.body);

    if (!parse.success) {
      const errorMessages = parse.error.issues.map(
        (err) => `${err.path} - ${err.message}`
      );

      return res.json({
        message: errorMessages,
        statuscode: 500,
        data: null,
      });
    }

    const post = await prisma.post.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        author_name: parse.data.author_name,
        content: parse.data.content,
        title: parse.data.title,
        published: parse.data.published,
      },
    });

    return res.json({
      success: true,
      message: "Posts updated successfully",
      statuscode: 200,
      data: post,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error updateing posts",
      statuscode: 500,
      data: null,
    });
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
};
