// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// fetch('https://economia.awesomeapi.com.br/json/all')
//   .then((response) => response.json())
//   .then((data) => {
//     const coins = Object.keys(data);
//     console.log(data);
//     console.log(coins);});

const initialState = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  loading: true,
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case 'SEARCH_SUCCESS':
    return {
      ...state,
      currencies: action.coins,
    };
  case 'SAVE_DATA':
    return {
      ...state,
      expenses: action.data,
    };
  case 'LOADING_TRUE':
    return {
      ...state,
      loading: true,
    };
  case 'LOADING_FALSE':
    return {
      ...state,
      loading: false,
    };
  default:
    return state;
  }
}

export default walletReducer;
