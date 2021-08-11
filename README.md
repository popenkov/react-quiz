# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# react-quiz


npm install -g yarn
Для запуска yarn start

СОЗДАНИЕ LAYOUT
Это компонент высокого порядка, который будет содержать в себе всю разметку.
По сути это обертка которая для пропсчлдрен, которая оборачивает все в тег мейн и задает классы флекс для содержимого.

Для того, чтобы взаимодействовать с CSS модулями, достаточно переименовать файл с постфиксом .module
Например: App.css -> App.module.css

Как потом выглядит импорт. В стилях экспорта нет
import React, { Component } from "react"
import styles from './Layout.module.css'

export default class Layout extends Component {
    render () {
        return (
            //это корневой див всего приложения
            <div className={styles.Layout}>
                <main > 
                    {this.props.children}
                </main>
            </div>
        )
    }
}

Стили пишутся для контейнера и дальше описывается вложенность
.Layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.Layout main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}


Создание главное страниц.
Создали папку контейнерс. В ней будут компоненты, которые обладают собственным стейтом. То есть корневые контейнеры.
И папку компонентс для функциональных компонентов, которые будут просто отрисовывать чтото

Компонент ActiveQuiz.js отвечает за текущий вопрос
Можно так писать функциональный компонент. Тип  он сразу в круглых скобках возвращает что нам надо 
const ActiveQuiz = props => (
    
)

&nbsp;
Символ пробела


Обработка события
Мы записываем функцию в корневом компоненте со стэйтом и передаем по иерархии вниз до компонента, в котором будет обработчик события.
Передаем так 
onAnswerClick = { this.onAnswerClickHandler}
Если надо дальше передать, то так:
        <AnswersList
            onAnswerClick = { props.onAnswerClick}
        />

В обработчике событий пишем функцию внутри стрелочной, чтобы функция сама не вызвалась 
        <li onClick={() => props.onAnswerClick(props.answer.id)}>
        </li>

Динамическое изменение классов по клику происходит из state. Если ответ правильный мы меняем значение стэйта и пропсом передаем в компонент.
    const AnswerItem = props => {
    const cls = [classes.AnswerItem]
    if (props.state) {
        cls.push(classes[props.state])
    }
    return (
        <li className ={cls.join(' ')} 
        onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}



Использование готовых иконок
font awesome cdn
скрипты подобные можно подключать на страницу index.html в папке public

Библиотека, чтобы задавать несколько классов одновременно https://www.npmjs.com/package/classnames 
или писать так, чтобы в итоге получилась строка с пробелом className={classes.FontAwesomeIcon + ` ${classes.success}`}
