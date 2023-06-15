// Coloque aqui suas actions
export const addUser = (email/* , password */) => (
  {
    type: 'ADD_USER',
    email,
    // password,
  }
);

export const searchSuccess = (coins) => (
  { type: 'SEARCH_SUCCESS', coins }
);

export function thunkCurrencies() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const coins = Object.keys(data);
      coins.splice(1, 1);
      dispatch(searchSuccess(coins));
    } catch (error) {
      dispatch(searchFailure(error));
    }
  };
}
