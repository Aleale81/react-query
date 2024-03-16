const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required"],
    },
    comments: {
      type: [Schema.Types.ObjectId],
      ref: "Comment",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = model("Post", postSchema);
