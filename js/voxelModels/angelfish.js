export default function(color1 = '#31302f', color2 = '#ecdb45') {
    return {
        size: {
            x: 6,
            y: 7,
        },
        voxelsData: [
            { x: 0, y: 2, color: color1},
            { x: 0, y: 4, color: color1},

            { x: 1, y: 0, color: color2},
            { x: 1, y: 3, color: color1},
            { x: 1, y: 6, color: color2},

            { x: 2, y: 1, color: color2},
            { x: 2, y: 2, color: color2},
            { x: 2, y: 3, color: color2},
            { x: 2, y: 4, color: color2},
            { x: 2, y: 5, color: color2},

            { x: 3, y: 1, color: color1},
            { x: 3, y: 2, color: color1},
            { x: 3, y: 3, color: color1},
            { x: 3, y: 4, color: color1},
            { x: 3, y: 5, color: color1},

            { x: 4, y: 2, color: color1},
            { x: 4, y: 3, color: "#000"},
            { x: 4, y: 4, color: color1},

            { x: 5, y: 3, color: color1},
            { x: 5, y: 4, color: color2},

            { x: 2, y: 2, z: -1, color: color2},
            { x: 2, y: 3, z: -1, color: color1},
            { x: 2, y: 4, z: -1, color: color2},
            { x: 3, y: 2, z: -1, color: color1},
            { x: 3, y: 3, z: -1, color: color1},
            { x: 3, y: 4, z: -1, color: color1},
            { x: 4, y: 2, z: -1, color: color1},
            { x: 4, y: 4, z: -1, color: color1},
            { x: 5, y: 3, z: -1, color: color1},

            { x: 2, y: 2, z: 1, color: color2},
            { x: 2, y: 3, z: 1, color: color1},
            { x: 2, y: 4, z: 1, color: color2},
            { x: 3, y: 2, z: 1, color: color1},
            { x: 3, y: 3, z: 1, color: color1},
            { x: 3, y: 4, z: 1, color: color1},
            { x: 4, y: 2, z: 1, color: color1},
            { x: 4, y: 4, z: 1, color: color1},
            { x: 5, y: 3, z: 1, color: color1},
        ],
    };
};
