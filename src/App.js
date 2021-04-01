import Public from './routes/Public'
import Private from './routes/Private'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import CreateBook from './pages/CreateBook/CreateBook'
import Books from './pages/Books/Books'

function App() {
    return (
        <>
            <Public path='/' component={Home} exact />
            <Public path='/login' component={Login} exact />
            <Private path='/create-book' component={CreateBook} exact />
            <Private path='/books' component={Books} exact />
        </>
    )
}

export default App
