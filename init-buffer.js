
function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);
    const textureCoordBuffer = initTextureBuffer(gl);
    const indexBuffer = initIndexBuffer(gl);

    return {
        position: positionBuffer,
        textureCoord: textureCoordBuffer,
        indices: indexBuffer,
    };
}

function initColorBuffer(gl) {
    const faceColors = [
        [1.0, 1.0, 1.0, 1.0], // Front face: white
        [1.0, 0.0, 0.0, 1.0], // Back face: red
        [0.0, 1.0, 0.0, 1.0], // Top face: green
        [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
        [1.0, 1.0, 0.0, 1.0], // Right face: yellow
        [1.0, 0.0, 1.0, 1.0], // Left face: purple
    ];
    let colors = [];

    for (let j = 0; j < faceColors.length; ++j) {
        const c = faceColors[j];

        colors = colors.concat(c, c, c, c);
    }

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    return colorBuffer;
}

function initPositionBuffer(gl) {
    // Create buffer square position
    const positionBuffer = gl.createBuffer();

    // Select the positionBuffer as the one to apply buffer operations to
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Create an array of positions for the square
    const positions = [
        // Front face
        //  D---C   Y
        //  |   |   |
        //  A---B   O---X
        // Z = 1.0
        /*A*/ -1.0, -1.0, 1.0, /*B*/ 1.0, -1.0, 1.0, /*C*/ 1.0, 1.0, 1.0, /*D*/ -1.0, 1.0, 1.0,

        // Back face
        //  B---C   Y
        //  |   |   |
        //  A---D   O---X
        // Z = -1.0
        /*A*/ -1.0, -1.0, -1.0, /*B*/ -1.0, 1.0, -1.0, /*C*/ 1.0, 1.0, -1.0, /*D*/ 1.0, -1.0, -1.0,

        // Top face
        //  A---D   O---X
        //  |   |   |
        //  B---C   Z
        // Y = 1.0
        /*A*/ -1.0, 1.0, -1.0, /*B*/ -1.0, 1.0, 1.0, /*C*/ 1.0, 1.0, 1.0, /*D*/ 1.0, 1.0, -1.0,

        // Bottom face
        //  A---B   O---X
        //  |   |   |
        //  D---C   Z
        // Y = -1.0
        /*A*/ -1.0, -1.0, -1.0, /*B*/ 1.0, -1.0, -1.0, /*C*/ 1.0, -1.0, 1.0, /*D*/ -1.0, -1.0, 1.0,

        // Right face
        //  B---C   Y
        //  |   |   |
        //  A---D   O---Z
        // X = 1.0
        /*A*/ 1.0, -1.0, -1.0, /*B*/ 1.0, 1.0, -1.0, /*C*/ 1.0, 1.0, 1.0, /*D*/ 1.0, -1.0, 1.0,

        // Left face
        //  D---C   Y
        //  |   |   |
        //  A---B   O---Z
        // X = -1.0
        /*A*/ -1.0, -1.0, -1.0, /*B*/ -1.0, -1.0, 1.0, /*C*/ -1.0, 1.0, 1.0, /*D*/ -1.0, 1.0, -1.0,
    ];

    // Pass the list of positions into WebGL to build the shape
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    return positionBuffer;
}

function initIndexBuffer(gl) {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    const indices = [
        0, 1, 2, 0, 2, 3, // Front face
        4, 5, 6, 4, 6, 7, // Back face
        8, 9, 10, 8, 10, 11, // Top face
        12, 13, 14, 12, 14, 15, // Bottom face
        16, 17, 18, 16, 18, 19, // Right face
        20, 21, 22, 20, 22, 23, // Left face
    ];

    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices),
        gl.STATIC_DRAW,
    );

    return indexBuffer;
}

function initTextureBuffer(gl) {
    const textureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

    const textureCoordinates = [
        // Front
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // Back
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // Top
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // Bottom
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // Right
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // Left
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    ];

    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(textureCoordinates),
        gl.STATIC_DRAW
    );

    return textureCoordBuffer;
}

export { initBuffers };