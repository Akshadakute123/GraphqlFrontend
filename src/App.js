import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// import createTutorialss from './Components/CreateTutorial'
import CreateAuthor from './Components/CreateAuthor'
import AuthorList from './Components/AutherList';
import CreateTutorialss from './Components/CreateTutorial';
import UpdateTutorials from './Components/Updatetutorial';
import DeleteTutorialss from './Components/Deletetutorial';
import TutorialList from './Components/TutorialList';


const client = new ApolloClient({
  uri: 'http://localhost:8080/apis/graphql',
});

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <h1>hiiiii</h1>
        <ApolloProvider client={client}>
          {/* <CreateAuthor /> */}
          {/* <AuthorList /> */}
          <TutorialList />
          {/* <DeleteTutorialss /> */}
        {/* < CreateTutorialss /> */}
        {/* <UpdateTutorials /> */}
          {/* <AddTodo /> */}
        </ApolloProvider>
      </div>
    );
  }
}

export default App;