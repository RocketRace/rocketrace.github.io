addEventListener("load", _ => {
    const FAR_CANVAS = document.getElementById("furthest-neighbor") as HTMLCanvasElement;
    const NEAR_CANVAS = document.getElementById("nearest-neighbor") as HTMLCanvasElement;
    const FAR_CTX = FAR_CANVAS.getContext("2d")!;
    const NEAR_CTX = NEAR_CANVAS.getContext("2d")!;

    
    const antiround = (z: number) => z < 0.5 ? Math.ceil(z) : Math.floor(z);
    
    type Pixels = Uint8ClampedArray;
    
    const interpolatePointFar = (x: number, y: number, scale: number): Pixels => {
        const sx = antiround(x / scale);
        const sy = antiround(y / scale);
        return FAR_CTX.getImageData(sx, sy, 1, 1).data;
    }
    const interpolatePointNear = (x: number, y: number, scale: number): Pixels => {
        const sx = Math.round(x / scale);
        const sy = Math.round(y / scale);
        return NEAR_CTX.getImageData(sx, sy, 1, 1).data;
    }
    
    const WIDTH = 200;
    const HEIGHT = 200;
    
    const interpolateImage = (scale: number): [ImageData, ImageData] => {
        FAR_CTX.reset();
        NEAR_CTX.reset();
        const SOURCE_IMAGE = document.getElementById("furthest-neighbor-image") as HTMLImageElement;
        FAR_CTX.drawImage(SOURCE_IMAGE, 0, 0);
        NEAR_CTX.drawImage(SOURCE_IMAGE, 0, 0);
        const far_data = FAR_CTX.createImageData(WIDTH, HEIGHT);
        const near_data = NEAR_CTX.createImageData(WIDTH, HEIGHT);
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                const i = (y * WIDTH + x) * 4;
                far_data.data.set(interpolatePointFar(x, y, scale), i);
                near_data.data.set(interpolatePointNear(x, y, scale), i);
            }
        }
        return [far_data, near_data]
    }

    const SLIDER = document.getElementById("furthest-neighbor-scale") as HTMLInputElement;
    let current_scale = 1;
    const SLIDER_SCALE = 100;
    SLIDER.oninput = () => {
        const new_scale = parseInt(SLIDER.value) / SLIDER_SCALE;
        if (!isNaN(new_scale) && new_scale != current_scale) {
            const [far, near] = interpolateImage(new_scale)
            FAR_CTX.putImageData(far, 0, 0);
            NEAR_CTX.putImageData(near, 0, 0);
            current_scale = new_scale;
        }
    }
    interpolateImage(1);
});
