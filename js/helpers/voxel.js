// Helpers
import { createElement } from './createElement.js';
import adjustColor from './adjustColor.js';

const voxelSize = 10;
const defaultVoxelData = {
    x: 0,
    y: 0,
    z: 0,
}

function createVoxel(x = 0, y = 0, z = 0, color = '#000') {
    const voxel = createElement('div', 'voxel');
    voxel.style.transform = `translate3d(${x * voxelSize}px, ${y * voxelSize}px, ${z * voxelSize}px)`;
    voxel.style.setProperty('--voxel-color', color);

    voxel.appendChild(createElement('div', 'voxel__face voxel__face--front'));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--back'));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--left', {style: `background-color: ${adjustColor(color, -10)}`}));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--right', {style: `background-color: ${adjustColor(color, -20)}`}));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--top', {style: `background-color: ${adjustColor(color, -30)}`}));
    voxel.appendChild(createElement('div', 'voxel__face voxel__face--bottom', {style: `background-color: ${adjustColor(color, -40)}`}));

    return voxel;
}

function hideVoxelFace(position, voxels, voxelElement, faceOne, faceTwo) {
    if (position in voxels) {
        voxelElement.querySelector(`.voxel__face--${faceOne}`)?.remove();
        voxels[position]?.querySelector(`.voxel__face--${faceTwo}`)?.remove();
    }
}

function removeHiddenFaces(voxels, voxelData, voxelElement) {
    hideVoxelFace([voxelData.x + 1, voxelData.y, voxelData.z], voxels, voxelElement, 'right', 'left');
    hideVoxelFace([voxelData.x - 1, voxelData.y, voxelData.z], voxels, voxelElement, 'left', 'right');
    hideVoxelFace([voxelData.x, voxelData.y + 1, voxelData.z], voxels, voxelElement, 'bottom', 'top');
    hideVoxelFace([voxelData.x, voxelData.y - 1, voxelData.z], voxels, voxelElement, 'top', 'bottom');
    hideVoxelFace([voxelData.x, voxelData.y, voxelData.z + 1], voxels, voxelElement, 'front', 'back');
    hideVoxelFace([voxelData.x, voxelData.y, voxelData.z - 1], voxels, voxelElement, 'back', 'front');
}

function createVoxelModel(modelData) {
    const voxels = {}
    const model = createElement('div', 'voxel-model');
    const rotation = createElement('div', 'voxel-rotation');

    const width = modelData.size.x * voxelSize;
    const height = modelData.size.y * voxelSize;

    model.appendChild(rotation);
    model.setAttribute("id", modelData.id);
    model.style.height = `${height}px`;
    model.style.width = `${width}px`;

    rotation.style.transformOrigin = `${width / 2}px ${height / 2}px`;
    modelData.voxelsData.forEach(voxelData => {
        voxelData = {...defaultVoxelData, ...voxelData};

        const voxelElement = createVoxel(voxelData.x, voxelData.y, voxelData.z, voxelData.color);
        voxels[[voxelData.x, voxelData.y, voxelData.z]] = voxelElement;
        removeHiddenFaces(voxels, voxelData, voxelElement);
        rotation.appendChild(voxelElement);
    })

    return model;
}

export default createVoxelModel;