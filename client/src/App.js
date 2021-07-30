import  './css/main.sass';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useRoutes } from './routes';
import { Transition } from 'react-transition-group'
import Navbar from './components/Navbar';

const duration = 1000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
}

function App() {
  const routes = useRoutes()
  const location = useLocation
  return (
    <Router>
      <Transition in={location} timeout={duration}>
        {state => (
          <div id="app" style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <div className="container">
              {routes}
            </div>
          <Navbar />
          </div>
        )}
      </Transition>
          
      
    </Router>
  );
}

export default App;
