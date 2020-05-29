import React, { Component } from 'react';
import { Card, Button } from '@material-ui/core'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GETTUTORIALS = gql`
{
findAllTutorials
    {
      id, 
      title,
      description
      author{
        id,
        name
      }
     }
}
`;

class TutorialList extends Component {
  render() {
    return (
      <Query query={GETTUTORIALS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading</div>
          }

          if (error) {
            return <div>Error: {error.toString()}</div>
          }

          console.log("books data ",data);

          return (
            <ul>
              
              {
                data.findAllTutorials.map((b) => {
                  return <div >
                <Card style={{ height: "200px", alignItems: "center", padding: "10px",width:"500px" ,backgroundColor: "" }}>
                                      <div> 
                          <label>id=</label>
                      {b.id}
                      </div>
                      <div>
                      <label>name=</label>
                          {b.title}
                      </div>
                      <div>
                      <label>description=</label>
                          {b.description}
                      </div>
                      <div>
                      <label>name=</label>
                          {b.author.name}
                      </div>
                      <Button >Update</Button>
                      <Button >DELETE</Button>
                      </Card>

                      </div>
                })
              }
            </ul>
          )
        }}
      </Query>
    );
  }
}

export default TutorialList;