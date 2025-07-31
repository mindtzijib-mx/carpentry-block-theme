import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import "./style.scss";

registerBlockType("carpentry-blocks/google-maps", {
  edit: Edit,
});
