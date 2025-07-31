import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";

registerBlockType("carpentry/contact-section", {
  edit: Edit,
});
