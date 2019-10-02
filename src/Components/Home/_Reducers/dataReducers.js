const initialState = {
    data: []
};

const uploadedDatas = (state = initialState, action) => {
    switch (action.type) {
    case 'SELECTED_DATA': {
        const { data } = action;
        return {
            ...state,
            data
        };
    }
    default:
        return state;
    }
};
export default uploadedDatas;
