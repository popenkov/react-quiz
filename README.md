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


в лэйауте описывать стэйт для пока и скрытия меню гамбургера. this.state.isOpen
Для закрытия по клику вне меню создавать компонент затемнения, который занимает все свободное пространство и изменяет стейт по клику на себе
    return (
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
            {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
        </>            
    )



07 React Router

059 Установка и настройка
Пакет react-router
https://reactrouter.com/web/guides/philosophy 
Yarn add react-router-dom – установка
Весь код надо обернуть в HOC компонент на странице индекс.жс
import {BrowserRouter} from 'react-router-dom'

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

Этот компонент говорит приложению, что мы используем роутинг и надо добавить соответствующий функционал

060 Регистрация роута
Например, у нас есть на странице компоненты, которые хотелось бы подать, как отдельные страницы.  Для этого надо зарегистрировать роут. 
В компонент, где используем роутинг, импортируем 
import {Route} from 'react-router-dom'
Этот компонент позволяет регистрировать роуты.
Например, вот роут для домашней страницы /*localhost:3000*/
<Route path="/" exact render={() => <h1>Home Page</h1>} />
Path- обязательный параметр. Путь для страницы
Render - что будем рендерить. Передается коллбэк функция, которая что-то возвращает. Например, жсх который отрисуется на данной странице
Exact означает что рендер произойдет, только если адрес из пути полностью совпадает. Например корневой адрес / есть на всех страницах, поэтому без данного параметра заголовой хом пэйдж будет показан на каждой странице

061 Роутинг и компоненты
Как зарегистрировать не отдельный жсх, как выше, а целый компонент.
<Route path="/about" component={About} />
Либо в методе рендер можно поместить компонент

062 Навигация между страницами
Чтобы избежать перезагрузки страниц надо отказаться от ссылок в пользу NavLink. To вместо href
import {Route, NavLink} from 'react-router-dom'

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cars">Cars</NavLink>

        <Route path="/" exact render={() => <h1>Home Page</h1>} />
        <Route path="/about" component={About} />
        <Route path="/cars" component={Cars} />

063 Параметры ссылки
Например, мы хотим показать, на какой ссылке сейчас находимся (какая ссылка активная). НавЛинк автоматически добавляет класс active. Нам надо только описать стили. 
Но, как и ранее корневое имя ссылки есть на каждой странице и поэтому ссылка для домашней страницы всегда будет активна даже на других страницах. Надо добавить exact/
activeClassName={'wfm-active'} – изменит название класса для активной ссылки (для всех НавЛинков). 
Для описания конкретной активной ссылки. activeStyle={{ color: 'blue'}}> 
В to можно передавать не просто строку, а обьект с параметрами
to={{
                pathname: '/cars',
                search: '?a=1&b=2', // гет параметры
                hash: 'wfm-hash' //название хэша, чтобы скроллить для определенного элемента. Якорная ссылка?
              }}>

        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={'wfm-active'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{
                color: 'blue'
              }}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
                search: '?a=1&b=2',
                hash: 'wfm-hash'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

064 Программная навигация
Например, в машинах у нас есть разные марки и при клике на ауди переход нужно сделать дальше:
/cars/audi
Динамический роут означает, что данные могут меняться. Например, с ауди на мазду и так далее.
(Программная навигация - когда не используются реакт компоненты, а реакт роутер?) Можно сделать иерархию роутов внутри страницы.
Если в классовом компоненте cars в render ввести console.log(props), то мы увидим новые свойства 
Эти параметры относятся к роутингу. Нам интересна history. Вот как можно по клику вернуться на главную страницу 
  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }


<button onClick={this.goToHomePage}>Go to home page</button>

Метод push принимает разные параметры: или строку, или объект с опциями.

065 Роутинг и функциональные компоненты
ЗАДАЧА. Делаем програмную навигацию при клике по машинам в компоненте карс.
Ниже консоль.лог внутри функционального компонента машины. 
 

Здесь нет ключей, связанных с роутингом. Чтобы добавить роутинг в функциональные компоненты есть специальная функция withRouter. Это HOC, так что export default withRouter(Car). По сути эта функция оборачивает функциональные компоненты и добавляет им ключи, связанные с роутингом.
import React from 'react'
import './Car.scss'
import {withRouter} from 'react-router-dom'

const Car = props => {
  return (
    <div
      className={'Car'}
      onClick={() => props.history.push('/cars/' + props.name.toLowerCase())}
    >
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default withRouter(Car)


066 Динамические роуты
Теперь надо отрисовывать под списком машин информацию о выбранной машине. Чтобы скрывать список мaшин и по клику показывать только выбранную по клику, надо использовать компонент switch
Switch выдает первый попавшийся URL, который полностью совпадает с URL адресом в path
Заводим компонент отдельные CarDetail

import React from 'react'

export default class CarDetail extends React.Component {
  render() {

    return (
      <div style={{textAlign: 'center'}}>
        <h1>{this.props.match.params.name}</h1>
      </div>
    )

  }
}

Затем в app.js, чтобы указать динамический роут использовать name, которые совпадает с именем из <h1>{this.props.match.params.name}</h1>

import {NavLink, Route, Switch} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={'wfm-active'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{
                color: 'blue'
              }}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars/'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>}/>
          <Route path="/about" component={About}/>
          <Route path="/cars/:name" component={CarDetail}/>
          <Route path="/cars" component={Cars}/>
        </Switch>

      </div>
    );
  }
}

export default App



067 Редирект и ошибка 404
Как сделать страницу 404, если использовалась ссылка, которая еще не обрабатывается (несуществующий адрес).
Роут для 404 должен идти самым последним, чтобы вызваться, если не было найдено совпадений ранее. Записывается роут так. Просто с функцией рендер:
<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />

Второй способ обработки.
Импортируем редирект:
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

Можно писать так редирект, чтобы при клике на страницу эбаут мы переходили на страницу карс (не работае внутри Switch)
<Redirect from="/about"  to=="/cars" />
При конструкции снизу при переходе на несуществующую ссылку, мы вернемся на главную страницу.
        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>}/>
          <Route path="/about" component={About}/>
          <Route path="/cars/:name" component={CarDetail}/>
          <Route path="/cars" component={Cars}/>
          <Redirect to={'/'} />
          {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />*/}
        </Switch>



068 Защита роутов
Например, мы хотим скрывать страницу about, если пользователь не залогинен. В Реакте для такого можно просто писать условные конструкции, чтобы регистрировать роут или нет в зависимости от условий
{ this.state.isLoggedIn ? <Route path="/about" component={About}/> : null }


