import axios from "../../axios/axios-quiz";
import {
    FETCH_QUIZES_START, 
    FETCH_QUIZES_SUCCESS, 
    FETCH_QUIZES_ERROR, 
    FETCH_QUIZ_SUCCESS
} from './actionTypes'

export function fetchQuizes () {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get('Quizes.json')//надо обязательно заканчивать JSON
            //ключи объекта это уникальные ид наших квизов
            //сделаем мапу,чтобы данные можно было использовать внутри реакт компонентов
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Quiz #${index+1}`
                })
            })

         /*    this.setState({
                quizes,
                loading: false
            }) */
            dispatch(fetchQuizesSuccess(quizes))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizById (quizId) {
    return async dispatch => {
        dispatch(fetchQuizesStart())

        try {
            const response = await axios.get(`Quizes/${quizId}.json`);
            const quiz = response.data;
            dispatch(fetchQuizSuccess(quiz))
          
        } catch (e) {
            dispatch(fetchQuizesError(e))
        } 

    }
}

export function fetchQuizSuccess (quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export function fetchQuizesStart () {
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSuccess (quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizesError (e) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: e
    }
}