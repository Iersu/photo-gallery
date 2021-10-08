import './App.css'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import Favorites from './pages/favorites'
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  )
}
export default App
