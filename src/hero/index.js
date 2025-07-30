import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";

registerBlockType(metadata.name, {
  edit: Edit,
  save: () => null, // Render con PHP
});
