import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => {
  return(
    <div>Hats Page</div>
  )
}
const TopicPage = (props) => {
  console.log(props)
  return(
    <div>Topic Page {props.match.params.topicId}</div>
  )
}
function App() {
  return (
    <div>
      {/* Switch will only render the 1st path it encounters that matches */}
      <Switch> 
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/hats' component={HatsPage}></Route>
        <Route exact path='/topics/:topicId' component={TopicPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
