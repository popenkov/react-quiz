import axios from 'axios'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes'
export function auth (email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email, password, returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmSEbUiK5KfPbs7TxShOxYJk1eFlqVJtw';
        if (isLogin) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDmSEbUiK5KfPbs7TxShOxYJk1eFlqVJtw';
        }
        const response = await axios.post(url, authData);
        const data = response.data;

        //обычно сессия длиться час, и нам надо через час заново автоматически авторизоваться
        const expirationDate = new Date(new Date().getTime + data.expiresIn * 1000)
        //чтобы поддерживать сессию, надо токен из ответа положить в localStorage
        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(autoLogout(data.expiresIn))
    }
}

export function authSuccess (token) {
    return {
        type: AUTH_SUCCESS,
        token
    }

}

export function logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT,
    }
}

export function autoLogout (time) {
    return dispatch => {
        setTimeout(dispatch(logout()), time*1000)
    }
}