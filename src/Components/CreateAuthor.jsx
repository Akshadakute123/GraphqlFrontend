import React,{Component} from 'react'
import { Mutation } from 'react-apollo';

import { gql } from 'apollo-boost';



const ADDAuthor = gql`
    
mutation createAuthor($name: String!,$age:Int) {
    createAuthor(name: $name,age:$age) {
  
   name,
    age
  }
}
`;
class CreateAuthor extends Component {

  state = {
    name: '',
    age: ''
  }

  render() {
    console.log('===================', this.state)
      console.log('---------------------------------->',ADDAuthor)
    return (
      <div>


        <Mutation mutation={ADDAuthor}>
          {(createAuthor, {data}) => (

            <div>
              <div>
                <input
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type='text'
                  placeholder='name'
                />
                <input
                  className='mb2'
                  value={this.state.age}
                  onChange={(e) => this.setState({ age: e.target.value })}
                  type='text'
                  placeholder='age'
                />
              </div>
              <button onClick={(e) => {
                e.preventDefault();
                createAuthor({
                  variables: { name: this.state.name, age: this.state.age }
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
export default CreateAuthor