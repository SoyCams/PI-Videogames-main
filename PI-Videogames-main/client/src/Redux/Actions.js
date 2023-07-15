/* eslint-disable no-undef */
import axios from 'axios';
import {Server} from '../conexion/consultas';

export const GET_API_VIDEO_GAME = 'GET_API_VIDEO_GAME';
export const GET_GAME_BY_NAME_API = 'GET_GAME_BY_NAME_API';
export const DELETE_BY_NAME = "DELETE_BY_NAME"

export const getApiVideoGame = () => {
  return async (dispacht) => {
    try {
      const {data} = await axios.get(`${Server.serverBack.baseURL}/api`);
      return dispacht({
        type: 'GET_API_VIDEO_GAME',
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getGameByNameApi = (name) => {
  return {
    type: GET_GAME_BY_NAME_API,
    payload: name,
  };
};

export const deleteByName = ()=>{
  return {
    type: DELETE_BY_NAME,
    payload: []
  }
}
