import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Route, Link } from 'react-router-dom';

const HatsPage = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push('/topics')} >topics</button>
      <h1>Hats Page</h1>
    </div>
  )
}
const TopicsList = (props) => {
  return(
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>to topic 13  </Link>
      <Link to={`${props.match.url}/17`}>to topic 17  </Link>
      <Link to={`${props.match.url}/21`}>to topic 21  </Link>
    </div>
  )
}
const TopicDetail = (props) => {
  return(
    <div>Topic detail Page {props.match.params.topicId}</div>
  )
}
function App() {
  return (
    <div>
      <Route exact path='/' component={HatsPage} />
      <Route exact path='/blog/asdqw/topics' component={TopicsList} />
      <Route path='/blog/asdqw/topics/:topicId' component={TopicDetail} />
      <Route path='/blog/topics' component={TopicsList} />
      <Route path='/blog/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
