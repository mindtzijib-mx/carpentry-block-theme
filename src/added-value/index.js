import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";

registerBlockType("carpentry/added-value", {
  edit: Edit,
});
