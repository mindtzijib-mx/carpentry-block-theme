import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";

registerBlockType("carpentry/valor-anadido-nosotros", {
  edit: Edit,
});
