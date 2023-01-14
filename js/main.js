import goldfish from './voxelModels/goldfish.js';
import smallfish from './voxelModels/smallfish.js';

const voxelSize = 10;
const defaultVoxelData = {
    x: 0,
    y: 0,
    z: 0,
}

function createElement(tagName, className = undefined, elProps = undefined) {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    if (elProps) {
        Object.keys(elProps).forEach(key => {
            element[key] = elProps[key];
        });
    }
    return element;
}

function adjust(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

function createVoxel(x = 0, y = 0, z = 0, color = '#f19327') {
    const voxel = createElement('div', 'voxel');
    voxel.style.transform = `translate3d(${x * voxelSize}px, ${y * voxelSize}px, ${z * voxelSize}px)`;
    voxel.style.setProperty('--voxel-color', color);
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--front'));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--back'));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--left', {style: `background-color: ${adjust(color, -10)}`}));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--right', {style: `background-color: ${adjust(color, -20)}`}));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--top', {style: `background-color: ${adjust(color, -30)}`}));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--bottom', {style: `background-color: ${adjust(color, -40)}`}));

    return voxel;
}

function removeHiddenFaces(voxels, voxelData, voxelElement) {
    if ([voxelData.x + 1, voxelData.y, voxelData.z] in voxels) {
        voxelElement.querySelector('.voxel__face--right')?.remove();
        voxels[[voxelData.x + 1, voxelData.y, voxelData.z]].querySelector('.voxel__face--left')?.remove();
    }
    if ([voxelData.x - 1, voxelData.y, voxelData.z] in voxels) {
        voxelElement.querySelector('.voxel__face--left')?.remove();
        voxels[[voxelData.x - 1, voxelData.y, voxelData.z]].querySelector('.voxel__face--right')?.remove();
    }
    if ([voxelData.x, voxelData.y + 1, voxelData.z] in voxels) {
        voxelElement.querySelector('.voxel__face--bottom')?.remove();
        voxels[[voxelData.x, voxelData.y + 1, voxelData.z]].querySelector('.voxel__face--top')?.remove();
    }
    if ([voxelData.x, voxelData.y - 1, voxelData.z] in voxels) {
        voxelElement.querySelector('.voxel__face--top')?.remove();
        voxels[[voxelData.x, voxelData.y - 1, voxelData.z]].querySelector('.voxel__face--bottom')?.remove();
    }
    if ([voxelData.x, voxelData.y, voxelData.z + 1] in voxels) {

        voxelElement.querySelector('.voxel__face--front')?.remove();
        voxels[[voxelData.x, voxelData.y, voxelData.z + 1]].querySelector('.voxel__face--back')?.remove();
    }
    if ([voxelData.x, voxelData.y, voxelData.z - 1] in voxels) {
        voxelElement.querySelector('.voxel__face--back')?.remove();
        voxels[[voxelData.x, voxelData.y, voxelData.z - 1]].querySelector('.voxel__face--front')?.remove();
    }
}

function createVoxelModel(voxelId, voxelsData) {
    const voxels = {}
    const model = createElement('div', 'voxel-model');
    const rotation = createElement('div', 'voxel-rotation');
    model.appendChild(rotation);
    model.setAttribute("id", voxelId);

    voxelsData.forEach(voxelData => {
        voxelData = {...defaultVoxelData, ...voxelData};

        const voxelElement = createVoxel(voxelData.x, voxelData.y, voxelData.z, voxelData.color);
        voxels[[voxelData.x, voxelData.y, voxelData.z]] = voxelElement;
        removeHiddenFaces(voxels, voxelData, voxelElement);
        rotation.appendChild(voxelElement);
    })

    return model;
}

function createFish(fishId, fishModel) {
    return {
        position: {
            x: 0,
            y: 0,
            z: 0,
            rotateY: 0,
            rotateZ: 0,
        },
        element: createVoxelModel(fishId, fishModel)
    }
}

function rotateFishStyling(currentPos, newPos) {
    const radianZ = Math.atan2(Math.abs(newPos.x - currentPos.x), newPos.y - currentPos.y);
    const degreeZ = (radianZ * (180 / Math.PI) * -1) + 90;
    const radianY = Math.atan2(newPos.x - currentPos.x, newPos.z - currentPos.z);
    const degreeY = radianY * (180 / Math.PI) - 90;
    return {
        rotateY: degreeY,
        rotateZ: degreeZ,
    };
}

function randomInRange(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeStart - rangeEnd + 1) + rangeEnd);
 }

function moveFish(fish, duration) {
    const element = fish.element;
    const newDuration =  randomInRange(2500, 10000);
    const currentPos = structuredClone(fish.position);
    fish.position.x = randomInRange(50, window.innerWidth - 50);
    fish.position.y = randomInRange(50, window.innerHeight - 50);
    fish.position.z = randomInRange(0, -500);

    const rotation = rotateFishStyling(currentPos, fish.position);
    fish.position.rotateY = rotation.rotateY;
    fish.position.rotateZ = rotation.rotateZ;

    element.style.transitionDuration = `${duration}ms`;
    element.style.transform = `
        translateX(${fish.position.x}px)
        translateY(${fish.position.y}px)
        translateZ(${fish.position.z}px)
    `;

    element.querySelector('.voxel-rotation').style.transform = `
        rotateY(${fish.position.rotateY}deg)
        rotateZ(${fish.position.rotateZ}deg)
    `;

    setTimeout(() => moveFish(fish, newDuration), duration);
}

for(let i = 0; i < 15; i++) {
    const fish = createFish('goldfish', goldfish);
    document.body.appendChild(fish.element);
    moveFish(fish, 1000);
}

for(let i = 0; i < 20; i++) {
    const fish = createFish('smallfish', smallfish);
    document.body.appendChild(fish.element);
    moveFish(fish, 1000);
}