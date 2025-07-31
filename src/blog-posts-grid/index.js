import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";

registerBlockType("carpentry-blocks/blog-posts-grid", {
  edit: Edit,
});
