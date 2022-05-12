// create action type for action
const ACTION_TYPE = 'ACTION_TYPE';
// action creator function
const actionCreator = (payload) => {
    return {
        type: ACTION_TYPE ,// action type
        payload : payload,
    };
}
// export action creator
export default actionCreator;

