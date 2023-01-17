// Models
import angelfish from "../voxelModels/angelfish.js";
import clownfish from "../voxelModels/clownfish.js";
import goldfish from "../voxelModels/goldfish.js";
import smallfish from "../voxelModels/smallfish.js";

const voxelModels = {
    'smallfish': {
        image: 'images/smallfish.png',
        model: smallfish,
    },
    'goldfish': {
        image: 'images/goldfish.png',
        model: goldfish,
    },
    'clownfish': {
        image: 'images/clownfish.png',
        model: clownfish,
    },
    'angelfish': {
        image: 'images/angelfish.png',
        model: angelfish,
    },
};

export default voxelModels;
