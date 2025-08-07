import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import "./style.scss";

registerBlockType("carpentry/google-maps", {
  edit: Edit,
  save: () => null, // Server-side rendering
});
