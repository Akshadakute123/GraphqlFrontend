import React, { Component } from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET = gql`
{
findAllAuthors
    {
      id, 
      name,
      age
     }
}
`;

class AuthorList extends Component {
  render() {
    return (
      <Query query={GET}>
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
                data.findAllAuthors.map((b) => {
                  return <div >
                    <div>
                    {/* {b.id} */}
                  </div>
                      <div> 
                          <label>id=</label>
                      {b.id}
                      </div>
                      <div>
                      <label>name=</label>
                          {b.name}
                      </div>
                      <div>
                      <label>age=</label>
                          {b.age}
                      </div>
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

export default AuthorList;