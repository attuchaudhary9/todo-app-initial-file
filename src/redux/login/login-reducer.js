const loginReducer = (state = false, action) => {
  switch (action.type) {
    case 'ISLOG':
      return !state;
    default:
      return state;
  }
};

export default loginReducer;
