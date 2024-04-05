"use strict";
let COLORS;
const main = () => {
    const CANVAS_ELEMENT_ID = "canvas";
    const USABLE_COLORS = [
        COLORS.tomato, COLORS.foliage, COLORS.velvet, COLORS.gold
    ];
    const strHash = (s) => {
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash = Math.abs(s.charCodeAt(i) + (hash << 5) - hash);
        }
        return hash;
    };
    const getColor = (seed) => {
        const key = strHash(seed.toString()) % USABLE_COLORS.length;
        return USABLE_COLORS[key];
    };
    const KEY = [0, 12, 15, 20, 24, 30, 36, 40, 45, 48, 60];
    const GRID_SCALE = 60;
    const VISUAL_SCALE = 0.5;
    const VISUAL_PADDING = 0.5;
    const HIDDEN_SCALE = 2;
    let WIDTH = 0;
    let HEIGHT = 0;
    const MAX_CANVAS_SIZE = 4096;
    const CANVAS = document.getElementById(CANVAS_ELEMENT_ID);
    const CTX = CANVAS.getContext("2d");
    // Resize canvas to fit smoothly on the screen
    // At the moment this causes a bit of flickering when changing the screen size 
    // suddenly, as well as slight wobbling when changing it slowly
    CTX.canvas.width = window.innerWidth;
    CTX.canvas.height = window.innerHeight;
    const updateDimensions = () => {
        CTX.canvas.width = window.innerWidth;
        CTX.canvas.height = window.innerHeight;
        WIDTH = Math.min(Math.floor(window.innerWidth / GRID_SCALE / VISUAL_SCALE * HIDDEN_SCALE + 2 * VISUAL_PADDING), MAX_CANVAS_SIZE);
        HEIGHT = Math.min(Math.floor(window.innerHeight / GRID_SCALE / VISUAL_SCALE * HIDDEN_SCALE + 2 * VISUAL_PADDING), MAX_CANVAS_SIZE);
    };
    addEventListener("resize", _ => {
        updateDimensions();
        redraw();
    });
    updateDimensions();
    const DIRECTIONS = [
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
    ];
    const randomInt = (from, to) => Math.floor(Math.random() * to) + from;
    const getPoints = ([x, y], direction) => KEY.map(d => {
        const [dx, dy] = DIRECTIONS[direction];
        return [x + dx * d, y + dy * d];
    });
    const getDelta = (start, direction) => {
        const points = getPoints(start, direction);
        return points[points.length - 1];
    };
    const canvasCoordinates = ([x, y]) => [
        (x - VISUAL_PADDING * GRID_SCALE) * VISUAL_SCALE,
        (y - VISUAL_PADDING * GRID_SCALE) * VISUAL_SCALE,
    ];
    const drawDot = (point, color) => {
        CTX.beginPath();
        CTX.fillStyle = color;
        CTX.arc(...canvasCoordinates(point), 4, 0, 2 * Math.PI);
        CTX.fill();
    };
    const drawLine = (point, direction, color) => {
        drawDot(point, color);
        drawDot(getDelta(point, direction), color);
        CTX.beginPath();
        CTX.strokeStyle = color;
        CTX.lineWidth = 1;
        CTX.moveTo(...canvasCoordinates(point));
        CTX.lineTo(...canvasCoordinates(getDelta(point, direction)));
        CTX.closePath();
        CTX.stroke();
    };
    const drawExpanse = (seed, expanse, occupied) => {
        const visitedLines = new Set();
        const visitedPoints = new Set();
        const queue = [];
        if (drawExpanseRecursive(seed, expanse, visitedLines, visitedPoints, queue, occupied)) {
            queue.forEach(([point, direction]) => {
                const color = getColor(seed);
                drawn_lines.push([point, direction, color]);
                drawLine(point, direction, color);
            });
            visitedPoints.forEach((point) => {
                occupied.add(point.toString());
            });
        }
    };
    const drawExpanseRecursive = (point, expanse, visitedLines, visitedPoints, queue, occupied) => {
        return expanse.every((steps, dir) => {
            const direction = dir; // tuple iterator indices are `number`
            if (steps > 0) {
                const next = getDelta(point, direction);
                let pathPoints = getPoints(point, direction);
                for (let i = 0; i < pathPoints.length; i++) {
                    if (occupied.has(pathPoints[i].toString())) {
                        return false;
                    }
                }
                pathPoints.forEach((pathPoint) => visitedPoints.add(pathPoint.toString()));
                if (!visitedLines.has([point, next].toString())) {
                    visitedLines.add([point, next].toString());
                    visitedLines.add([next, point].toString());
                    queue.push([point, direction]);
                    const updated = [...expanse];
                    updated[direction] -= 1;
                    return drawExpanseRecursive(next, updated, visitedLines, visitedPoints, queue, occupied);
                }
            }
            return true;
        });
    };
    function shuffle(array) {
        let currentIndex = array.length;
        let randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }
    function pop(set) {
        for (const value of set) {
            set.delete(value);
            return value;
        }
        throw new Error("Pop from empty set");
    }
    const freeSeedsArray = [];
    for (let x = 0; x < WIDTH; x++) {
        for (let y = 0; y < HEIGHT; y++) {
            freeSeedsArray.push([x * GRID_SCALE, y * GRID_SCALE]);
        }
    }
    const freeSeeds = new Set(shuffle(freeSeedsArray));
    const occupied = new Set();
    const drawRandomExpanse = (occupied) => {
        const [x, y] = pop(freeSeeds);
        const expanse = [
            randomInt(0, 2),
            randomInt(0, 2),
            randomInt(0, 2),
            randomInt(0, 2),
            randomInt(0, 2),
            randomInt(0, 2),
            randomInt(0, 2),
            randomInt(0, 2),
        ];
        drawExpanse([x, y], expanse, occupied);
    };
    let drawn_lines = [];
    const redraw = () => {
        drawn_lines.forEach(([point, direction, color]) => {
            drawDot(point, color);
            drawDot(getDelta(point, direction), color);
            drawLine(point, direction, color);
        });
    };
    for (let i = 0; i < 1000; i++) {
        drawRandomExpanse(occupied);
    }
};
addEventListener("load", _ => main());
