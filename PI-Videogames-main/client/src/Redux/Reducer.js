/* eslint-disable no-case-declarations */
import {
  DELETE_BY_NAME,
  GET_API_VIDEO_GAME,
  GET_GAME_BY_NAME_API,
} from "./Actions";

const initialState = {
  videoGameApi: [],
  videoGameByName: [],
};

const videoGamesReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_API_VIDEO_GAME:
      return {
        ...state,
        videoGameApi: actions.payload,
      };
    case GET_GAME_BY_NAME_API:
      const gameByName = state.videoGameApi.filter(
        (game) => game.nombre === actions.payload
      );
      return {
        ...state,
        videoGameByName: gameByName,
      };
    case DELETE_BY_NAME:
      return {
        ...state,
        videoGameByName: actions.payload,
      };
    default:
      return state;
  }
};

export default videoGamesReducer;
