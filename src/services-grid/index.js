import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";

registerBlockType("carpentry-blocks/services-grid", {
  edit,
  save: () => null, // Dynamic block rendered in PHP
});
