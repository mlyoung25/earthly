import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from './comps/Nav';
import { supabase } from './supabaseClient';
import React, { useState, useEffect } from "react";
import Auth from './pages/Auth'
import pages from './pages/routes';
import Home from './pages/Home';

function App() {
  const [session, setSession] = useState(null)
  const logout = () => supabase.auth.signOut().then(() => setSession(null))
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <main className="container">
          <Nav>
            {session && <button onClick={logout}>Logout</button>}
          </Nav>
          <article className="container">
            {!session ? <Auth /> :
              <Routes>
                {pages.map(({ location, comp }) =>
                  <Route exact element={comp} path={'/' + location.split('/').pop()} />)}
              </Routes>
            }
          </article>
        </main>
      </div>
    </Router>
  );
}

export default App;
