import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";

registerBlockType("carpentry/footer", {
  edit: Edit,
  save: () => null, // Server-side rendered
});
