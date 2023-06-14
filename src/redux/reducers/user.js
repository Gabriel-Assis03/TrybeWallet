// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
  // password: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_USER':
    return {
      ...state,
      email: action.email,
      // password: action.password,
    };
  default:
    return state;
  }
}

export default userReducer;
