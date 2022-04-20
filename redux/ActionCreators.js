import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../baseUrl';

export const postFavorite = animalId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(animalId));
    }, 50);
};

export const addFavorite = animalId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: animalId
});

export const deleteFavorite = animalId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: animalId
}); 