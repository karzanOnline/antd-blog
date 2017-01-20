
import { INDEX_SIDE_TYPE, INDEX_CANVAS_TYPE } from "./../../action/mainPage";

import * as Immutable from 'immutable';

const initialState = Immutable.fromJS({
    collapsed : true,
    canvasOption: 1
});

function submitReduce(state = initialState, action) {
    switch (action.type){
        case INDEX_SIDE_TYPE: {
            return state.update('collapsed', (value) => {
                return !value
            })}
        case INDEX_CANVAS_TYPE: {
            return state.update('canvasOption', (value) => {
                return action.option
            })
        }
        default : return state
    }
}

export {submitReduce}