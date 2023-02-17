import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useContext, useEffect, useReducer} from 'react';
import {getError} from '../util';



const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, product: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

function DetailScreen(){
    const params = useParams();
    const {Id} = params;

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
      });
      useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: 'FETCH_REQUEST' });
          try {
            const result = await axios.get(`http://localhost:4000/getProductById`);
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
          }
        };
        fetchData();
      }, [Id]);
    return (
      loading? <div>Loading...</div>
      :error? <div>{error}</div>
      :
       <div>{product.Name}</div>
   
    );
} 
export default DetailScreen;