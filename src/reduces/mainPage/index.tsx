
import { INDEX_SIDE_TYPE } from "./../../action/mainPage";

import * as Immutable from 'immutable';

const initialState = Immutable.fromJS({
    collapsed : true
});

function submitReduce(state = initialState, action) {
    switch (action.type){
        case INDEX_SIDE_TYPE: {
            return state.update('collapsed', (value) => {
                return !value
            })
        }
        default : return state
    }
}

export {submitReduce}