import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const DELETE = gql`
mutation deleteTutorial($id: ID!) {
    deleteTutorial(id: $id) 
}
`;

class DeleteTutorialss extends Component {
 
    state = {
        id:''
      }
    
      render() {
        console.log('===================', this.state)
          console.log('---------------------------------->',DELETE)
        return (
          <div>
    
    
            <Mutation mutation={DELETE}>
              {(deleteTutorial, {data}) => (
    
                <div>
                  <div>
                    <input
                      value={this.state.id}
                      onChange={(e) => this.setState({ id: e.target.value })}
                      type='text'
                      placeholder='id'
                    />
                   
                  </div>
                  <button onClick={(e) => {
                    e.preventDefault();
                    deleteTutorial({
                      variables: { id:this.state.id }
                    })
                  }}>
                    ADD </button>
                </div>
              )}
            </Mutation>
    
          </div>
        )  
    }
    }

export default DeleteTutorialss;