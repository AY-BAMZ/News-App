import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserRender from './components/user/UserRender';
import PostProvider from './components/PostContext';
import MainDashboard from './components/admin/MainDashboard'
import LandingPost from './components/user/LandingPost';



function App() {
  return (
    <Router>
      <PostProvider>
        <div className="App">
          <Switch>
            <Route path="/" component={UserRender} exact />
            <Route path="/about" component={MainDashboard} exact />
            <Route path="/landing/:id" component={LandingPost} exact />
          </Switch>
        </div>
      </PostProvider>
    </Router>
  );
}

export default App;
