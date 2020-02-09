import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        'Docker to zero for mastery',
        'Full Stack Django with ANgularJS',
        'Docker to zero for mastery',
        'Full Stack Django with ANgularJS',
    ],
}

function courses(state = INITIAL_STATE, action) {
    // MY REDUCER
    switch (action.type) {
        case 'ADD_COURSE': 
            return { ...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}
const store = createStore(courses);

export default store;