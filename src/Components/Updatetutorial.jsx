import React,{Component} from 'react'
import { Mutation } from 'react-apollo';

import { gql } from 'apollo-boost';



const UPDATE = gql`
mutation updateTutorial($title: String!, $description: String, $id: ID!)
{
    updateTutorial(
        title: $title,
        description: $description
        id:$id)
        {
          id title description author { name }
        }
}
`;
class UpdateTutorials extends Component {

  state = {
    title: '',
    description: '',
    id:''
  }

  render() {
    console.log('===================', this.state)
      console.log('---------------------------------->', UPDATE)
    return (
      <div>


        <Mutation mutation={ UPDATE}>
          {(updateTutorial, {data}) => (

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
                  value={this.state.id}
                  onChange={(e) => this.setState({ id: e.target.value })}
                  type='text'
                  placeholder='id'
                />
              </div>
              <button onClick={(e) => {
                e.preventDefault();
                updateTutorial({
                  variables: { title: this.state.title, description: this.state.description,id:this.state.id }
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
export default UpdateTutorials