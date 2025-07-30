import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";

registerBlockType("carpentry/how-we-work", {
  edit: Edit,
});
