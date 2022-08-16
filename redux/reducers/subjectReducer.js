import * as types from "../types";

const initialState = {
  checkChange: true,
  subject: [],
  subjectDetails: [],
  pastQuestion:[],
  pastQuestionQue:[],
};

const subjectCourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SUBJECT_START:
      return {
        ...state,
      };
    case types.FETCH_SUBJECT_SUCCESS:
      return {
        ...state,
        subject: payload,
      };
    case types.FETCH_SUBJECTDETAILS_SUCCESS:
      return {
        ...state,
        subjectDetails: payload,
      };
    case types.FETCH_CHECKCHANGE_SUCCESS:
      return {
        ...state,
        checkChange: payload,
      };
    case types.FETCH_PASTQUESTION_SUCCESS:
      return {
        ...state,
        pastQuestion: payload,
      };
    case types.FETCH_PASTQUESTIONQUE_SUCCESS:
      return {
        ...state,
        pastQuestionQue: payload,
      };
    case types.FETCH_SUBJECT_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default subjectCourseReducer;
