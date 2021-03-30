import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { postElement } from './apiCalls/apiCalls';
import './App.css';
import { LoadingContext } from './contextProviders/LoadingProvider';
import { MoviesContext } from './contextProviders/MoviesProvider';
import Home2 from './pages/Home2';

function App() {
  const [state, dispatch] = useContext(MoviesContext);
  const [loading, setLoading] = useState(true);


  const MoviesEndpoint = 'https://akelab-server-node.herokuapp.com/movies';
  const getMoviesInfo = postElement

  useEffect(() => {
      getMoviesInfo(
          { akelab: 123456789 },
          'SHOW_MOVIES',
          MoviesEndpoint,
          dispatch,
          setLoading,
      )

  }, [0]);
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home2 loading={loading}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
