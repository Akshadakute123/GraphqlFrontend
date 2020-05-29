import React,{Component} from 'react'
import { Mutation } from 'react-apollo';

import { gql } from 'apollo-boost';



const ADDTutorial = gql`
mutation createTutorial($title: String!, $description: String, $author: ID!)
{
    createTutorial (
        title: $title,
        description: $description
        author: $author)
        {
          id title author { name }
        }
}
`;
class CreateTutorialss extends Component {

  state = {
    title: '',
    description: '',
    id:''
  }

  render() {
    console.log('===================', this.state)
      console.log('---------------------------------->',ADDTutorial)
    return (
      <div>


        <Mutation mutation={ADDTutorial}>
          {(createTutorial, {data}) => (

            <div>
              <div>
                <input
                  value={this.state.title}
                  name='title'
                  onChange={(e) => this.setState({ title: e.target.value })}
                  type='text'
                  placeholder='title'
                />
                <input
                  className='mb2'
                  value={this.state.description}
                  onChange={(e) => this.setState({ description: e.target.value })}
                  type='text'
                  placeholder='description'
                />
                 <input
                  className='mb2'
                  value={this.state.author}
                  onChange={(e) => this.setState({ author: e.target.value })}
                  type='text'
                  placeholder='id'
                />
              </div>
              <button onClick={(e) => {
                e.preventDefault();
                createTutorial({
                  variables: { title: this.state.title, description: this.state.description,author:this.state.author }
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
export default CreateTutorialss