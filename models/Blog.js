const { Schema, model } = require("mongoose");

const BlogSchema = Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: String,
  featuredImg: {
    type: String,
    default: null,
  },
  edited: {
    type: Boolean,
    default: false,
  },
  body: {
    type: String,
    required: [true, "Blog body is required"],
  },
  published: String,
  tags: [String],
  author: {
    type: String,
    default: "Anonymous",
  },
});

const Blog = model("Blog", BlogSchema);
module.exports = Blog;
