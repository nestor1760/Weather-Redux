import axios from 'axios'
import { actionRequestError, actionRequestLoading, actionRequestSuccess } from '../store/weatherReducer'

 

export const dataApiFunc = (city) => async (dispatch) => {
    dispatch(actionRequestLoading())
    try {
      const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city || 'London'}&appid=1ac648ca88253d60c5f826167094b9d1`)
      dispatch(actionRequestSuccess(responce.data))
    } catch (error) {
      dispatch(actionRequestError(error))
    }
}