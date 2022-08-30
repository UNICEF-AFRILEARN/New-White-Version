import * as types from '../types/parent'

const initialState = {
    loading: false,
    childData: [],
    error: [],
    children: [],
    unlinkedChild: []
}

export const parentReducer = (state = initialState, { type, payload} ) => {
    switch (type) {
        case types.SIGN_UP_FOR_A_CHILD_START:
            return {
                ...state,
                loading: true
            };
        case types.SIGN_UP_FOR_A_CHILD_SUCCESS:
            return {
                ...state,
                childData: payload,
                loading: false
            };
        case types.SIGN_UP_FOR_A_CHILD_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case types.UNLINK_CHILD_ACCOUNT_START:
            return {
                ...state,
                loading: true
            };
        case types.UNLINK_CHILD_ACCOUNT_SUCCESS:
            return {
                ...state,
                unlinkedChild: payload,
                loading: false
            };
        case types.UNLINK_CHILD_ACCOUNT_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case types.FETCH_CHILDREN_START:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_CHILDREN_SUCCESS:
            return {
                ...state,
                children: payload,
                loading: false
            };
        case types.FETCH_CHILDREN_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };
    
        default:
            return state;
    }

}