
export const INDEX_SIDE_TYPE = 'INDEX_SIDE_TYPE';

export function getShowType(key) {
    return {
        type: INDEX_SIDE_TYPE,
        key
    }
}