import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";

registerBlockType("carpentry/cta-casa-suenos", {
  edit: Edit,
});
