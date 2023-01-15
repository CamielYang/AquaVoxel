function cssShortestRotate(rot, nR) {
    let aR;
    rot = rot || 0; // if rot undefined or 0, make 0, else rot
    aR = rot % 360;
    if ( aR < 0 ) { aR += 360; }
    if ( aR < 180 && (nR > (aR + 180)) ) { rot -= 360; }
    if ( aR >= 180 && (nR <= (aR - 180)) ) { rot += 360; }
    rot += (nR - aR);
    return rot;
}

export default cssShortestRotate;