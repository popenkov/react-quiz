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



ReactDOM.render(what, where);
JSX весь JS внутри тегов пишется внутри фигурных скобок {props.title}
Все компоненты должны быть обернуты в общий родительский компонент, который помещается в метод  ReactDOM.render(what, where);
Можно просто создать переменную (не как компонент)  и в нее поместить компоненты 

```sh
const App = (
  <div>
    <Car name="Ford Focus" year="2017" />
    <Car name="Audi A8" year="2015" />
    <Car name="Mazda 3" year="2010" />
  </div>
)

ReactDOM.render(
  App,
  document.querySelector('#root')
)

Package.json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

Yarn аналог  нпм, создан фэйсбуком. Может быть быстрее
App.js – это то приложение где все собирается и которое вставляется
Все есть компоненты и они могут быть вложены друг в друга.

## JSX
Снизу две одинаковые записи:
```sh
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
      </div>
    );

    // return React.createElement(
    //   'div',
    //   {
    //     className: 'App'
    //   },
    //   React.createElement(
    //     'h1',
    //     null,
    //     'Hello world!'
    //   )
    // )
  }
}
```
Важно импортировать Реакт,так как именно он занимается компиляцией ЖСХ в Джаваскрипт
### ОГРАНИЧЕНИЯ
className для задания классов
В методе render при возврате надо возвращать только один элемент. То есть несколько элементов надо оборачивать в один корневой элемент. Например, див, или пустой тег

### INLINE СТИЛИ
В фигурных скобках можно передавать объект со стилями.
```sh
class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1 style={{color: 'blue', fontSize: '20px'}}>Hello world!</h1>
      </div>
    );
  }
}
```
### Создание новых компонентов:
- в папке срс создаем файл под каждый компонент с большой буквы.
- компонент должен экспортироваться из своего файла и импортироваться в нужных файл компонента
- затем вставляем компонент как обычный тег

### ВЫВОД ДИНАМИЧЕСКИХ ДАННЫХ
Джаваскрипт оборачивается в фигурные скобки внутри ЖСХ тегов.
Пропсы передаются как атрибуты тега компонента
```sh
<Car name={'Ford'} year={2018} />
А в компоненте пропсы принимаются как ключи объекта props
export default props => (
  <div>
    <h3>Сar name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
  </div>
)
```
Мы можем передавать также данные в парный тег компонента: 
```sh
        <Car name="Audi" year={2016}>
         	 <p style={{color: 'red'}}>COLOR</p>
        </Car>
```
И обрабатывать его через ключ children:
```sh
export default props => (
  <div>
    <h3>Сar name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    { props.children }
  </div>
)
```

## ОСНОВЫ РЕАКТ
Хорошей практикой является не передача пропсов как бы напрямую, а передача их из стейта. Так данные можно изменить в одном стэйте и они поменяются везде.
```sh
class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components'
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    );
  }
}
```
### Добавление событий
обработчики записываются инлайново
<button onClick={this.changeTitleHandler}>Change title</button>
Колбэк функцию принято называть через handle / Handler. Записывает метод в корень класса в виде стрелочной функции.
  changeTitleHandler = () => {
    console.log('Clicked')
  }

 this – все элементы данного компонента, при обращении внутри него
### ИЗМЕНЕНИЕ СТЭЙТ
Реакт должен явно видеть изменение стэйта, чтобы заново отрендерить компонент (после изменения состояния метод рендер вызывается автоматически). Поэтому менять напрямую стэйт не получится и надо использовать метод setState(), в который передавать новый объект только с тем состоянием (ключем), которое мы меняем.
```sh
  changeTitleHandler = () => {
    const oldTitle = this.state.pageTitle
    const newTitle = oldTitle + ' (changed)'
    this.setState({
      pageTitle: newTitle
    })
  }
```
ПЕРЕДАЧА ПАРАМЕТРОВ В ФУНКЦИЮ
https://ru.reactjs.org/docs/faq-functions.html
Если кнопка находится в дочернем компоненте, как передать информацию вверх в родительский, чтобы в родительском произошли изменения.
 Мы передаем из родительского элемента в дочерний пропсом функцию с любым названием.
 А в дочернем компоненте пишем на кнопку событие и передаем в него эту функцию из пропса.
Дочерний элемент внутри:
```sh
export default props => (
  <div>
    <h3>Сar name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <button onClick={props.onChangeTitle}>Click</button>
  </div>
)
```
Метод в родителе:
```sh
 changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }
```
Параметры функции можно передавать несколькими способами. 
Метод bind. Мы сообщаем в нем новый контекст и новое значение в атрибутах. Этот метод лучше, так как он более производительнее.
```sh
<Car
  name={cars[0].name}
  year={cars[0].year}
  onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
/>
```sh
Либо можно параметром передать стрелочную функцию в которой прописать функцию с параметром.
```sh
<Car
  name={cars[1].name}
  year={cars[1].year}
  onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
/>
```
В React, как правило, привязывать нужно только те методы, которые вы хотите передать другим компонентам. Например, <button onClick={this.handleClick}> передаёт this.handleClick, поэтому его нужно привязать. 
https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

ОБРАБОТКА ИНПУТ
На инпут вешаем обработчик онЧэйндж
```sh
<input type="text" onChange={this.handleInput} />
```
и обрабатываем объект ивент
```sh
handleInput = (event) => {
  this.setState({
    pageTitle: event.target.value
  })
}
```

### РАБОТА СО СПИСКОМ
Чтобы вручную не писать 3 раза компонент автомобиля, мы можем массив из стейта пропустить через метод map. В Реакте есть все методы из ЖС.
Надо помнить, что каждому элементу списка надо добавлять уникальный ключ. Реакт должен знать какие элементы есть и какие изменяются, чтобы управлять отдельными элементами списка и экономить ресурсы а не всем списком сразу.
Поэтому добавляем параметр key и заполняем его индексом из метода мап.
```sh
    return (
      <div style={divStyle}>
        { this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />
          )
        }) }
      </div>
    );
```
### РАБОТА С УСЛОВНЫМИ ОПЕРАТОРАМИ
Вывод элементов по условию
В стейте заводим новый ключ и функцию по его инвертированию
```sh
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
```
If … else …, for блочные конструкции запрещены в JSX, но мы можем использовать тернарный оператор внутри JSX.

Либо мы можем использовать блочные условия вне JSX. То есть выше return.
```sh
render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        { cars }
      </div>
    );
  }
```

### ДИНАМИЧЕСКИЕ СПИСКИ
изменяем имя компонента через инпут самого компонента
*** Весь стэйт хранится в корневом элементе, а дочерние элементы функциональные и просто отрисовывают информацию из корневого

Узнать какой элемент списка мы изменяем мы можем по индексу из метода мап, который мы записывали в ключ.

Чтобы изменять стейт, мы можем создавать дубликат массива и переписывать весь стейт
Например. 
Const cars = this.state.cars.concat()
или
Const cars = [...this.state.cars]

Удаление элемента
Стрелочная функция не создает свой контекст, поэтому создавая такой метод мы можем свободно использовать слово this внутри метода, и он будет ссылаться на компонент. 
Если мы пишем метод по старым стандартам, то передавать его в пропс для дочернего элемента надо либо обернув внутрь стрелочной функции, либо использовать метод bind(this, proprties). Иначе внутри метода родителя не получится обращаться к this.
```sh
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        )
```
Удаляет элемент из массива через метод splice(index, 1) копии массива и затем перезаписи стэйта

### СТИЛИЗАЦИЯ КОМПОНЕНТОВ
Инлайновые стили задаются через атрибут стайл, в который передается JS объект.
```sh
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
```
Подключение css
```sh
import ‘./car.css’
```
Динамические классы
Он создает массив классов и в зависимости от условий пушит туда новые классы. Затем массив через метод джон прописывает инлайново элементу
. Пропс.нэйм — это значение инпута. Если он пустой то красная граница
```sh
export default props => {
  const inputClasses = ['input']

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length > 4) {
    inputClasses.push('bold')
  }

  return (
    <div className="Car">
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}
```

RADIUM
как задавать псевдоселекторы внутри JS? То есть внутри инлайновых стилей.
Для этого нужна библиотека радиум.
https://github.com/FormidableLabs/radium
npm install -g yarn для установки йарн
yarn add radium
# or
npm install --save radium
import React from 'react'
import Radium from 'radium'
import './Car.css'

const Car = props => {
  const inputClasses = ['input']

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length > 4) {
    inputClasses.push('bold')
  }

  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    ':hover': { !!!!!!!!!!
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      cursor: 'pointer'
    }
  }

  return (
    <div className="Car" style={style}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Radium(Car)
!!!!!


Препроцессоры
npm add node-sass – после этого можно сасс использовать


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



## 07 React Router

### 059 Установка и настройка
Пакет react-router
https://reactrouter.com/web/guides/philosophy 
Yarn add react-router-dom – установка
Весь код надо обернуть в HOC компонент на странице индекс.жс
import {BrowserRouter} from 'react-router-dom'

```sh
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
```

Этот компонент BrowserRouter говорит приложению, что мы используем роутинг и надо добавить соответствующий функционал

### 060 Регистрация роута
Например, у нас есть на странице компоненты, которые хотелось бы подать, как отдельные страницы.  Для этого надо зарегистрировать роут. 
В компонент, где используем роутинг, импортируем 
import {Route} from 'react-router-dom'
Этот компонент позволяет регистрировать роуты.
Например, вот роут для домашней страницы /*localhost:3000*/
<Route path="/" exact render={() => <h1>Home Page</h1>} />
Path- обязательный параметр. Путь для страницы
Render - что будем рендерить. Передается коллбэк функция, которая что-то возвращает. Например, жсх который отрисуется на данной странице
Exact означает что рендер произойдет, только если адрес из пути полностью совпадает. Например корневой адрес / есть на всех страницах, поэтому без данного параметра заголовой Home Page будет показан на каждой странице

### 061 Роутинг и компоненты
Как зарегистрировать не отдельный жсх, как выше, а целый компонент.
```sh
<Route path="/about" component={About} />
```
Либо в методе рендер можно поместить компонент

### 062 Навигация между страницами
Чтобы избежать перезагрузки страниц надо отказаться от ссылок в пользу NavLink. To вместо href
```sh
import {Route, NavLink} from 'react-router-dom'

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cars">Cars</NavLink>

        <Route path="/" exact render={() => <h1>Home Page</h1>} />
        <Route path="/about" component={About} />
        <Route path="/cars" component={Cars} />
```

### 063 Параметры ссылки
Например, мы хотим показать, на какой ссылке сейчас находимся (какая ссылка активная). НавЛинк автоматически добавляет класс active. Нам надо только описать стили. 
Но, как и ранее корневое имя ссылки есть на каждой странице и поэтому ссылка для домашней страницы всегда будет активна даже на других страницах. Надо добавить exact/
activeClassName={'wfm-active'} – изменит название класса для активной ссылки (для всех НавЛинков). 
Для описания конкретной активной ссылки. activeStyle={{ color: 'blue'}}> 
В to можно передавать не просто строку, а обьект с параметрами
```sh
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
```

### 064 Программная навигация
Например, в машинах у нас есть разные марки и при клике на ауди переход нужно сделать дальше:
/cars/audi
Динамический роут означает, что данные могут меняться. Например, с ауди на мазду и так далее.
(Программная навигация - когда не используются реакт компоненты, а реакт роутер?) Можно сделать иерархию роутов внутри страницы.
Если в классовом компоненте cars в render ввести console.log(props), то мы увидим новые свойства 
Эти параметры относятся к роутингу. Нам интересна history. Вот как можно по клику вернуться на главную страницу 
```sh
  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }


<button onClick={this.goToHomePage}>Go to home page</button>
```
Метод push принимает разные параметры: или строку, или объект с опциями.

### 065 Роутинг и функциональные компоненты
ЗАДАЧА. Делаем програмную навигацию при клике по машинам в компоненте карс.
Ниже консоль.лог внутри функционального компонента машины. 
 

Здесь нет ключей, связанных с роутингом. Чтобы добавить роутинг в функциональные компоненты есть специальная функция withRouter. Это HOC, так что используем так export default withRouter(Car). По сути эта функция оборачивает функциональные компоненты и добавляет им ключи, связанные с роутингом.
```sh
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
```

### 066 Динамические роуты
Теперь надо отрисовывать под списком машин информацию о выбранной машине. Чтобы скрывать список мaшин и по клику показывать только выбранную по клику, надо использовать компонент `switch`
Switch выдает первый попавшийся URL, который полностью совпадает с URL адресом в path
Заводим компонент отдельный CarDetail

```sh
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
```
Затем в app.js, чтобы указать динамический роут использовать name, которые совпадает с именем из <h1>{this.props.match.params.name}</h1>
```sh
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

```

### 067 Редирект и ошибка 404
Как сделать страницу 404, если использовалась ссылка, которая еще не обрабатывается (несуществующий адрес).
Роут для 404 должен идти самым последним, чтобы вызваться, если не было найдено совпадений ранее. Записывается роут так. Просто с функцией рендер:
```sh
<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
```
Второй способ обработки.
Импортируем редирект:
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

Можно писать так редирект, чтобы при клике на страницу эбаут мы переходили на страницу карс (не работае внутри Switch)
<Redirect from="/about"  to=="/cars" />
При конструкции снизу при переходе на несуществующую ссылку, мы вернемся на главную страницу.
```sh
        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>}/>
          <Route path="/about" component={About}/>
          <Route path="/cars/:name" component={CarDetail}/>
          <Route path="/cars" component={Cars}/>
          <Redirect to={'/'} />
          {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />*/}
        </Switch>
```


### 068 Защита роутов
Например, мы хотим скрывать страницу about, если пользователь не залогинен. В Реакте для такого можно просто писать условные конструкции, чтобы регистрировать роут или нет в зависимости от условий
```sh
{ this.state.isLoggedIn ? <Route path="/about" component={About}/> : null }
```

### 073 Ссылка через кастомный компонент
import {Link} from 'react-router-dom'
по сути этот компонент тоже самое, что и навлинк, но не содержит дополнительных параметров как активная ссылка. Компонент позволяет просто оборачивать ссылкой нужный нам компонент.
Теперь кнопка ведет на главную страницу:
                <Link to='/'>
                    <Button onClick={props.startNewGame} type='success'>
                        Go to tests list
                    </Button>
                </Link>



Валидация формы 
Создать state  для контроля форм. В нем базовые конфигурации инпутов и параметры валидации.
    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Please enter valid email',
                valid: false, //базовое состояние контрола, но тогда ошибка будет всегда
                touched: false, // для этого стэйт, чтобы выводить ошибку, только если инпут в фокусе и введены неверные данные.
                validation: { //правила для валидации контрола
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Please enter valid password',
                valid: false,
                touched: false,
                validation: { 
                    required: true,
                    minLenth: 6
                }
            }
        }
    }

по этому образцу будут создаваться компоненты инпутов. Для этого заведем функцию и вызовем ее в рендере:
 {this.renderInputs()}

Сама функция возвращает массив инпутов для отрисовки из объекта formControls.


    renderInputs = () => {
        const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
            const control=this.state.formControls[controlName];
            return (
                <Input
                    key={controlName+index}
                    type={control.type}
                    value={control.value}
                    required={control.required}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate= {!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event)=>{this.onChangeHandler(event, controlName)}}
                />
            )
        })
        console.log(inputs)
        return inputs;
    }


Функция валидации и обработчика onChange
    validateControl = (value, validation) => {
        if(!validation) { // если параметров для валидации нет, то она пройдена
            return true;
        }

        let isValid = true; //по умолчанию все ок
        if (validation.required) {
            isValid = value.trim() !== '' && isValid; 
            //&& isValid - вернет фолс, если первая проверка фолс, а текущая тру.
        }

        if (validation.email) {
            //в гугле найти email js regex. перенес функцию наверх (или библиотека is js)
            isValid = validateEmail(value) && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid; 
        }
        return isValid;
 
    }

    onChangeHandler = (event, controlName) => {
        //нельзя мутировать исходный стэйт. создаем копию formControls
        const formControls = {...this.state.formControls} // спрэд оператор делает независимый объект с копией. так стэйт точно не будет мутировать
        const control = {...formControls[controlName]} //копия текущего инпута (контрола)
        //теперь изменяем значения копии, чтобы потом через сетСтэйт изменить настоящий контрол
        control.value = event.target.value;
        control.touched = true;
        //функция валидации
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;
        this.setState({
            formControls
        })
    }


    ### 080 Создание контролов
    Задача сгенировать инпуты на основе стэйта 
    Раньше мы запускали метод, который из ключей стейта собирал контролы. для отрисовки и изменения контролов нам надо было просто изменять state. В прошлом проекте у нас в стейте для каждого контрола было много повторяющихся ключей. ПОэтому сейчас сделаем все через свой фреймворк.у нас будет функция, которая будет создавать контрол, чтобы в каждом контроле не писать много повторяющихся ключей.
    //Внутри фреймворка будет набор функций для создангия контролов, функция вернет объект, похожий, что мы делали в блоке авторизации.
  функция принимает настройки контрола и правила валидации
export function createControl(config, validation) {
    return {
        ...config,
        validation, //обьект с параметрами валидации
        valid: !validation, //если передали объект с параметрами валидации, то по умолчанию вэлид = фолс
        touched: false,
        value: ''
    }
}

затем мы эту функцию будет использовать внутри state 
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым'
    }, {required: true}),
  
затем надо создать 4 варианта ответа, но так как параметры одинаковы, мы создадим функцию для заполнения объекта ответа
function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Значение не может быть пустым',
    id: number
  }, {required: true})
}

затем мы написали функцию для заполнения стэйта, так как после сохранения стэйта, его надо очищать, ятобы при новом вопросе можно было заново заполнить. (все это обычные функции и располагаются выше классового компонента)
function createFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

и стэйт выглядит так
  state = {
    quiz: [], //вопросов может быть несколько, они будут добавляться сюда
    formControls: createFormControls()
  }

  для отрисвки инпутов или контроллов мы в ЖСХ вызываем {this.renderControls()} 
  Метод проходится по стэйту и отрисовывает нам инпуты
    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control=this.state.formControls[controlName];
            return (
                <Input
                    value={control.value}
                    required={control.required}
                    touched={control.touched}
                    valid={control.valid}
                    label={control.label}
                    shouldValidate= {!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event)=>{this.changeHandler(event.target.value, controlName)}}
                />
            )
        })
    }


    ЗАДАЧА: нам надо вернуть два элемента в жсх, но это не возможно, поэтому нам надо добавить обертку, которая сама не будет добавлять никаких тэгов. например React.Fragment или пустой тег
    Но он создал обычный функциональный компонент Auxiliary, которые возвращает пропс чилдрен. по сути тоже самое

    081 Создание компонента Select
    Так выглядит компонент:
    const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`;//id  для каждого селект
    return (
        <div className={classes.Select}>
            <label 
                htmlFor={htmlFor}
                value={props.value}
                onChange={props.onChange}
            ></label>
            { props.option.map((option, index) => {
                <option
                    value={option.value}
                    key={option.value+index}
                >{option.text}</option>
            })}
            <select id={htmlFor}></select>

        </div>
    ) 
}

export default Select


082 Изменение контролов 
все также клонируем стэйт, проверяем валидацию и вносим изменения, если все ок

функцию валидации теперь заводим в нашем фреймворке. у нас сейчас только требование для required, так что функцию можно будет потом видоизменить, добавив новые проверки, как уже делали раньше
export function validate (value, validation = null) {
    if(!validation) {
        return true;
    }

    let isValid = true;

    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    }
}


083 Добавление вопроса
дорабатываем функцию addQuestionHandler, которая добавит объект вопроса в массив quiz и очищает стэйт, чтобы потом можно было задать новый вопрос.
    addQuestionHandler = evt => {
        //после добавиления вопроса надо обнулить форму, чтобы новый вопрос задавать с новыми данными.
        evt.preventDefault();
        //нам надо сформировать объект из всех вопросов и сложить его в quiz
        const quiz = this.state.quiz.concat();//конкат без параметров возвращает копию массива
        const index = quiz.length +1;
        /* так как подобная запись слишком объемна, обращаемся к синтаксису деструктуризации
          answers: [
                {text: this.state.formControls.option1.value, id: this.state.formControls.option1.id},
            ]
             */
        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        }

        //теперь когда у нас есть массив ответов, нам надо просто добавить все в массив пуш и обнулить стейт для нового вопроса
        quiz.push(questionItem);
        this.setState({
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()
        })
        
    }

    10 Практика. Работа с сервером

    084 Настройка проекта
  
    В реакте нет ничего для работы с сервером, поэтому используют сторонние библиотеки.
  Firebase https://firebase.google.com/ 
  От Firebase мы будем использовать базы данных, методы авторизации и хостинг
  popenkovdev@gmail.com
  создаем проект - нажимаем Go to console - Create a project

Вкладка develop - database (Realtime Database). СОздаем бд в тестовом режиме, чтобы можно было править
И мы получаем ссылку на нашу БД
https://react-quiz-8bce4-default-rtdb.europe-west1.firebasedatabase.app/

Для обращения к серверу можно использовать и встроенный fetch,но удобнее воспользоваться axios
npm install axios

в квизЛист
import axios from 'axios'

и для теста
    componentDidMount () {
        axios.get('https://react-quiz-8bce4-default-rtdb.europe-west1.firebasedatabase.app/Quiz.json')//надо обязательно заканчивать JSON
            .then(answer => console.log(answer))
    }

085 Создание теста
сейчас будем работать в квизКриэйтор над методом
    createQuizHandler = evt => {
        evt.preventDefault();
        console.log(this.state.quiz)

    }

Здесь мы сохраним наш стэйт в БД

    createQuizHandler = evt => {
        evt.preventDefault();
        axios.post('https://react-quiz-8bce4-default-rtdb.europe-west1.firebasedatabase.app/Quizes.json', this.state.quiz)
            .then(response=> console.log(response))
            .then(error=> console.log(error))
    }

А можно использовать такой синтаксис для работы с асинхонными событями

    createQuizHandler = async evt => {
        evt.preventDefault();
        try { //с помощью эвэйт мы дождемся ответа и распарсим промис в переменную респонс
            const response = await axios.post('https://react-quiz-8bce4-default-rtdb.europe-west1.firebasedatabase.app/Quizes.json', this.state.quiz)
            //обнуляем стэйт
            this.setState({
                quiz: [],
                isFormValid: false,
                rightAnswerId: 1,
                formControls: createFormControls()
            })    
        } catch (e){
            console.log(e)

        }
    }

086 Загрузка списка тестов
список тестов мы выводим в квизлист
Запрашивать данные мы должны тогда, когда у нас уже есть ДОМ дерево
componentDidMount используется в 99% случаев

заводим стэйт для всех квизов
    state ={
        quizes: []
    }

    и записать в него в нужном формате информацию о тестах

    async componentDidMount () {
        try {
            const response = await axios.get('https://react-quiz-8bce4-default-rtdb.europe-west1.firebasedatabase.app/Quizes.json')//надо обязательно заканчивать JSON
            //ключи объекта это уникальные ид наших квизов
            //сделаем мапу,чтобы данные можно было использовать внутри реакт компонентов
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Quiz #${index+1}`
                })
            })

            this.setState({
                quizes
            })
        } catch (e) {
            console.log(e)
        }
    }

    теперь в методе рендера квизов наджо использовать стэйт. тут формируется только список квизов
        renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink
                    to={'/quiz/' + quiz.id}
                    >
                       {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

087 Компонент прогресса загрузки
берем готовые спиннеры с ресурса https://loading.io/css
ДОбавляем лоадер через через стэйт. по умолчанию лоадинг тру, а когда загрузилось все меняем на фолс. 
Тернарным оператором по данному ключу отрисовываем при тру лоадер, при фолс наш компонент

088 Загрузка теста
закончим компонент, который показывает тест Квиз.жс
нам надо сделать загрузку теста по его ИД this.props.match.params.id)

создал отдельный компонент под аксиос. в нем записал урл в константу
import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-8bce4-default-rtdb.europe-west1.firebasedatabase.app/'
}) 

теперь мы можем импортировать библиотеку в другие компоненты так 
import axios from '../../axios/axios-quiz';

и теперь строчка запроса будет короче
axios.post('Quizes.json', this.state.quiz)

удаляем все статичные данные из стэйт

            {
                question: 'What color is the sky?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Purple', id: 3},
                    {text: 'Green', id: 4}
                ]
            },
            {
                question: 'What year was Saint-Petersburg founded?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }

 и заменяем настоящими

 
    async componentDidMount() {      
        try {
            const response = await axios.get(`Quizes/${this.props.match.params.id}.json`);
            const quiz = response.data;
            this.setState({
                quiz,
                loading: false
            })
            console.log(this.state)
        } catch (err) {
            console.log(err)
        }
        console.log('Quiz id = ', this.props.match.params.id)
        console.log(this.props)
    }
089 Авторизация
Страница авторизации. при нажатии на войти мы будем отправлять запрос в наш firebase
в гугле firebase rest auth https://firebase.google.com/docs/reference/rest/auth 
мы не устанавливали firebase и поэтому можем работать просто с ссылками, которые предоставляет рест апи firebase
нас интересует поле https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password 
ЗДесь мы получим ссылку https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
апи ключ мы можем взять в сервисе firebase 
мы переходим в наш проект и выбираем authentication и там в настройках (у меня шестеренка можно найти код)

В настройках аутенфикации надо включить вход по логину и паролю

в статье по рест апи есть обязательные поля для отправки формы "Тело запроса Payload"
сформируем объект для этих данных

так выглядят функция авторизации и регистрации

    loginHandler = async () => {
        const authData = {
          email: this.state.formControls.email.value,
          password: this.state.formControls.password.value,
          returnSecureToken: true
        }
        try {
          const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDmSEbUiK5KfPbs7TxShOxYJk1eFlqVJtw', authData)
    
          console.log(response.data)
        } catch (e) {
          console.log(e)
        }
      }

    registerHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        
        try {
            const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmSEbUiK5KfPbs7TxShOxYJk1eFlqVJtw", authData);
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }

    }



REDUX под капотом
function createStore(reducer, initialState) {
    let state = initialState
    return {
        dispatch: action => { state = reducer(state, action) },
        getState: () => state,
    }
}

REDUX
Это абстракция для работы с данными. Это идеология формирования данных на фронтенде, никак не связанная с реакт.
npm install redux

создал отдельный файл под редакс
const redux = require('redux')
Составляющие части редакс

//мы можем создать изначальный стэйт
const initialState = {
  counter: 0
}

//Reducer - это жc функция, которая делает преобразования стэйта по описанным внутри правилам
//аргумент под названием state - объект, который описывает состояние всего нашего приложения (то есть стор?)
const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter + action.value
    }
  }
  //reducer всегда должен возвращать новый стэйт
  return state;
}

//Store - место, где хранятся все данные ВСЕГО приложения. Стэйт для всего приложения
const store = redux.createStore(reducer) //внутрь передаем reducer
console.log(store.getState()) // посмотреть состояние стора.

//Actions - для изменения состояния стора. объект с обязательным полем type
const addCounter = {
  type: 'ADD',//придумываем название сами. помогает определить, какое действие мы сейчас совершаем

}

//как вызывать действие? для этого есть метод dispatch, куда мы передаем action

store.dispatch(addCounter)

*** чтобы запустить код конкретного файла надо написать в консоли
node fileName


ИТАК:
мы создаем стор и передаем туда функцию, которая изменяет стор - редусер.
в редюсере мы передали изначальное состояние стэйта.
в редусере мы пишем условия, что если выполняется какой-то экшн через диспатч, мы проверяем его тип и соответственно изменяем стэйт

можно и так экшн передавать
store.dispatch({type: "SUBTRACT"})//вычитание

Например, нам надо добавить кастомное число, не 1, а 10
store.dispatch({type: "ADD_NUMBER", value: 10})

Можно подписываться на изменения стора
ОБЯЗАТЕЛЬНО ПЕРЕД ДИСПАТЧАМИ (подписываться надо перед всеми изменениями)
store.subscribe(()=> {
  console.log('Subscribe', store.getState()) //так при любом изменении будет консоль лог выводиться
})
так на изменения могут реагировать другие компоненты и перерисовываться


ULBI
Это библиотека для работы с состоянием приложения. Решает проблемы проброса данных состояния через несколько компонентов пропсами
Хорошая практика: хранить данные и логику отдельно.
пример 
state - это данные. например банк с деньгами
action - то как мы изменяем данные. набор действий по изменению данных. например, можно класть и снимать деньги со счета
мы не можем выполнять действия напрямую, нам нужен работник банка - диспетчер
dispatch - принимает эти действия - action`ы
Диспетчер сам не может снять деньги и обращается к компьютеру- reducer
Reducer - в нем содержиться вся логика работы с данными, он знает какие экшены при каких условиях могут быть и reducer уже сам изменяет состояния. 
Установка mpm i redux react-redux 
второй модуль нужен, чтобы связать редакс с нашими реакт компонентами

создаем store
у него есть несколько методов getState (получить состояние), dispatch (изменить состояние) и subscribe (подписаться на изменения состояния)
import {createStore} from 'redux'

const store = createStore(reducer)
Параметром он принимает reducer, который надо написать перед store. reducer это просто функция. она принимает два параметра state (состояние) и action
const reducer = (state, action) => {
  //внутри редбюсера описывается логика в зависимости от того, какой экшн был проброшен
  switch (action.type) {

    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}

    case "GET_CASH":

    default: return state
  }
}

action - это просто JS объект с обязательным ключем type. МОжет также описывать сколько угодно данных. Которые чаще всего описывают в ключе payload.

state = хранилище информации. может быть любым типом данных, но чаще всего объект. стэйт по умолчанию загружается со страницей и обнуляется при закрытии или обновлении страницы.
Как изменять состояние? по умолчанию оно не изменяемо, поэтому в редьюсере каждый раз надо возвращать новый объект. Мы разворачиваем в редьюсере наш стэйт и затем меняем конкретное поле добавляя к нему значение из экшн (чаще всего называется payload)
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}

Теперь можно соединить с реактом
из редакс-дома мы импортируем провайдер и при отрисовке оборачваем App в Provider. Provider параметром принимает наш store
<Provider store={store}>
  <App/>
<Provider/>



092 React и Redux
Чтобы связать реакт и редакс надо установить библиотеку npm install react-redux
Чтобы сообщить реакту что работаем с редаксом надо импортировать Provider и обернуть в него все приложение при отрисовке
Чтобы передать стор надо провайдеру параметром передать store={store}

index.js хорошее место, чтобы завести стор

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer'
//создал редьюсер в отдельном файле. там просто функция, которая принимает стэйт, экшн и возвращает стэйт
// в rootReducer объявил также initialState где задал изначальное значение каунтер=0


const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

093 Подключение компонента
Есть функция для связи реакта и редакса. она называется коннект и импортируется из реакт-редакс

import {connect} from 'react-redux'

Эта функция HOC

экспорт выглядит так (это не опечатка)
export default connect()(App)
то есть мы вызвали функцию connect, она нам возвращает новую функцию, в которую мы передаем App

connect может принимать в себя два опциональных параметра (две функции).  Эти функции пишутся вне класса (после него), если у нас классовый компонент.
Порядок функций также важен. Сначала передается первая функция, затем вторая. Если мы хотим передать только вторую функцию, то первым параметром передается null.
1. Делаем из стэйта параметры для передачи в компонент 
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App)

Теперь в компонент App (!!!) будто бы передали пропс counter, хотя обычным способом ничего передано не было.
Теперь можно удалить из апп стэйт и обращаться к свойствам инишл стэйта как this.props.counter

094 Изменение State

Нам надо через компонент App через roodReducer изменять состояние. Для этого создаем вторую функцию, которую передадим в коннект при экспорте.
Эта функция позволит нам манипулировать стором.
Параметр dispatch - это и есть та функция dispatch, которая вызывает экшны.
!!! Внутри mapDispatchToProps мы можем создавать кастомные функции как параметры для объекта, который мы оборачиваем в коннект.


2. function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'})
  }
}


В итоге: 

<button onClick={this.props.onAdd}>Добавить 1</button>
<button onClick={this.props.onSub}>Вычесть 1</button>

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


### 097 Как работает Middleware

это функция, которая добавляет определенный функционал чему-то.
Например, необходимо создать функцию, которая при изменении стора будет выводить в лог что-то.

Такая функция принимает параметром стор, с которым мы будем работать.
функция возвращает другую функцию, которая возвращает другую функцию, которая уже вернет результат после использования экшна.
// function loggerMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       const result = next(action)
//       console.log('Middleware', store.getState())
//       return result
//     }
//   }
// }

Чтобы применить миддлевэр в редаксе есть функция applyMiddleware
import {createStore, applyMiddleware} from 'redux'
И эта функция передается в createStore, в которой мы перечисляем используемые миддлвэр

Второй вариант написания с ес6 синтаксисом.
const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState())
  return result
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))

### 098 Что такое Action Creator
это функция, которая создает новый экшн. их смысл в том, что мы можем описывать и изменять экшн тайпы в одном месте и теперь не надо задумываться, что указано в разных документах (в редьюсере, в экшнах). все занесено в константы в одном документе. а в других местах просто вызывается функция. 
в папке редакс создает папку экщнс и там два документа


#### actionTypes.js
ЗДесь мы создаем экшн тайпы, которые существуют для нашего приложения. То есть записываем в константы те экшн тайпы, которые есть у нас в приложении, и экспортируем.
Главное, чтобы экшнтайпы имели уникальное название и не пересекались друг с другом.

export const ADD = 'ADD'
export const SUB = 'SUB'
export const ADD_NUMBER = 'ADD_NUMBER'
export const ADD2 = 'ADD2'

#### actions.js
ЗДесь мы создаем экшнкреаторы. экшнкреаторы - это функции, которые выдают определенный экшн

import {ADD, ADD2, ADD_NUMBER, SUB} from './actionTypes'

export function add() {
  return {
    type: ADD
  }
}

export function sub() {
  return {
    type: SUB
  }
}

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    payload: number
  }
}

export function add2(number) {
  return {
    type: ADD2,
    payload: number
  }
}


Также заменяем строки на константы в редьюсере
import {ADD, ADD_NUMBER, SUB} from '../actions/actionTypes';

const initialState = {
  counter: 0
}

export default function counter1(state = initialState, action) {
  switch(action.type) {
    case ADD:
      return {
        counter: state.counter + 1
      }
    case SUB:
      return {
        counter: state.counter - 1
      }
    case ADD_NUMBER:
      return {
        counter: state.counter + action.payload
      }
    default:
      return state
  }
}


Теперь мы можем так пользоваться экшенами в компонентах 
import {add, sub, addNumber} from './redux/actions/actions';


  <div className="Actions">
    <button onClick={this.props.onAdd}>Добавить 1</button>
    <button onClick={this.props.onSub}>Вычесть 1</button>
  </div>

  <div className="Actions">
    <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
    <button onClick={() => this.props.onAddNumber(-17)}>Вычесть 17</button>
  </div>


function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


### 099 Асинхронное изменение State 
как диспатчить асинхронные экшны, используя редакс
099 Асинхронное изменение State
как диспатчить асинхронные экшны через редакс
библиотека redux thunk https://github.com/reduxjs/redux-thunk
это миддлвэр, который можно использовать наравне с другими  миддлвэр.
Импортируем библиотеку и вставляет в функцию applyMiddleware

import reduxThunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware,
  reduxThunk
))

Данная библиотека позволяет в экшн креатор вернуть не объект, а вернуть новую функцию, которая принимает параметр диспатч. И теперь в функции можно запускать асинхронный код. Dispatch — это тот же самый диспатч, чтобы используем для диспатча экщна, только мы теперь имеем к нему доступ в асинхронном коде.
export function asyncAdd(number) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNumber(number))
    }, 3000)
  }
}




100 Devtools

redux devtools
использует этот https://github.com/zalmoxisus/redux-devtools-extension 
Устанавливается в браузер

Дальше надо произвести настройку инструмента:
Вставил в индекс.жс перед определением стора.

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

Здесь описано, что если у нас есть объект виндоу и объект расширения, то мы будем его использовать, или функцию compose, которую надо импортировать из редакса
import {createStore, applyMiddleware, compose} from 'redux'


и затем в функцию композЕнансер надо сложить весь мидлвэр
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
)))

девтулс может возвращаться на определенные состояния, отслеживать разницу, показывать какие экшны были вызваны.


# 12 Практика. Redux
### 101 Настройка приложения
npm install redux react-redux redux-thunk

- создаем стор в индекс.жс
-- импортируем криэйтСтор
import {createStore} from 'redux'
--импортируем провайдер из реакт-редакс
import {Provider} from 'react-redux'
--оборачиваем компонент апп в провайдер
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
-- формируем стор
const store = createStore(rootReducer);

-- в папке src создаем папку store, где будем хранить все, что относится к редаксу. В сторе создаем папку actions, reducers.
-- в редьюсерс создадим файл rootReducer
import {combineReducers} from 'redux'

export default combineReducers ({
    
})
-- импортируем rootReducer в индексжс и передаем в криэйтСтор

-- подключаем девтулз, композ импортируем из редакс и applyMiddleware

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

-- передаем composeEnhancers вторым параметром в криэйтСтор, в которую передадим applyMiddleware
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    )
  );

-- в папку actions создаем файл actionTypes.js


102 Список тестов
QuizList.js
В этом компоненте мы получаем тесты с сервера
-- добавляем коннект в компонент
import { connect } from 'react-redux';
export default connect()(QuizList)
-- в папке редьюсерс создаем файл quiz.js, который будет отвечать за редьюсер для данного компонента и для активного теста
const initialState = {
    quizes: [],
    loading: true
}

export default quizReducer (state=initialState, action) {
    switch(action.type) {

        default:
            return state;
    }
}
    
-- пишем в mapStateToProps и в mapDispatchToProps что нам надо получить в компонент пропсами. это содержимое стэйта (массив с квизами и статус лоадинг). В mapDispatchToProps нам нужно получить функцию для загрузки квизов с сервера renderQuizes.
Эту функцию мы объявим в файле quiz.js в папке actions

ДЛя всего используем actionCreator. в запросах если успешно данные загрузились диспатчим один экшн, если ошибка, то другой. все на экшнах


так выглядит редьюсер
import { FETCH_QUIZES_ERROR, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_START } from "../actions/actionTypes";

const initialState = {
    quizes: [],
    loading: false,
    error: null
}

export default function quizReducer (state=initialState, action) {
    switch(action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state, loading: false, quizes: action.quizes
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        default:
            return state;
    }
}
  

### 103 Страница теста. Часть 1
компонент Quiz.js
мы будем рефакторить только контейнеры, обладающие стэйтом. функциональные компоненты не трогаем.
Состояния Quiz.js описывает в том же сторе и редьюсере что и квизлист

использует один ключ стэйта лоадинг на 2 страницы, так как они не пересекаются.