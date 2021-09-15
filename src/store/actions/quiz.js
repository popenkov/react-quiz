import axios from "../../axios/axios-quiz";
import {
    FETCH_QUIZES_START, 
    FETCH_QUIZES_SUCCESS, 
    FETCH_QUIZES_ERROR, 
    FETCH_QUIZ_SUCCESS,
    QUIZ_SET_STATE,
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTION,
    START_NEW_GAME
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

export function quizSetState (answerState, results) {
    return {
        type: QUIZ_SET_STATE,
        answerState,
        results
    }
}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ
    }
}

export function quizNextQuestion (number) {
    return {
        type: QUIZ_NEXT_QUESTION,
        number
    }
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz
        if (state.answerState) {
            //Метод Object.keys() возвращает массив из собственных 
            //перечисляемых свойств переданного объекта
            const key = Object.keys(state.answerState)[0];
            //проверка чтобы не завершать игру несколькими кликами по правильному ответу старого вопроса
            if (state.answerState[key] === 'success') {
                return;
            }
        }

        const question = state.quiz[state.activeQuestion]
        const results = state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) { //если объект пустой
                results[question.id] = 'success';
            } 
            dispatch(quizSetState({[answerId]: 'success'}, results))    

            //чтобы в течение секунды показать, что ответ правильный
            const timeout = window.setTimeout(() => {
                //проверка, закончились ли вопросы
                if (isQuizFinished(state)) {
                    dispatch(finishQuiz())

                } else {
                    dispatch(quizNextQuestion(state.activeQuestion + 1,))

                }

                window.clearTimeout(timeout);
            }, 1000)

        } else {
            results[question.id] = 'error';
            dispatch(quizSetState({[answerId]: 'error'}, results))
        } 
    }
}

function isQuizFinished(state) {

    return state.activeQuestion + 1 === state.quiz.length;
 
}

export function startNewGame() {
    return {
        type: START_NEW_GAME
    }
}