const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_LOADING = 'REQUEST_LOADING';
const REQUEST_ERROR = 'REQUEST_ERROR';


const defaultState = {
  data: null,
  loading: true,
  error: null,
}


export const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return {...state, loading: false, error: null, data: action.payload}
    case REQUEST_LOADING:
      return {...state, loading: true, error: null, data: null}
    case REQUEST_ERROR:
      return {...state, loading: false, error: action.payload}

    default:
      return state
  }
}


export const actionRequestSuccess = data => ({type: REQUEST_SUCCESS, payload: data})
export const actionRequestLoading = () => ({type: REQUEST_LOADING})
export const actionRequestError = error => ({type: REQUEST_ERROR, payload: error})