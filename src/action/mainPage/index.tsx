
export const INDEX_SIDE_TYPE = 'INDEX_SIDE_TYPE';
export const INDEX_CANVAS_TYPE = 'INDEX_CANVAS_TYPE';

export function getShowType(key) {
    return {
        type: INDEX_SIDE_TYPE,
        key
    }
}

export function changeCanvas(option) {
    return {
        type: INDEX_CANVAS_TYPE,
        option
    }
}