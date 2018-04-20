// TODO: Use String or string??

import casual_impl = require('casual');

class Casual
{
  get first_name(): String
  {
    return casual_impl.first_name;
  }

  get last_name(): String
  {
    return casual_impl.last_name;
  }

  get email(): String
  {
    return casual_impl.email;
  }

  user(): {
    id: String;
    firstName: String;
    lastName: String;
    emails: Array<{
      id: String;
      address: String;
      verified: boolean
    }>
  }
  {
    return {
      id: casual_impl.uuid,
      firstName: this.first_name,
      lastName: this.last_name,
      emails: [
        {
          id: casual_impl.uuid,
          address: this.email,
          verified: true
        }
      ]
    };
  }
}

const casual = new Casual();

export const schema = [
  `
type Email {
  id: String!
  address: String
  verified: Boolean
}
type User {
  id: String!
  emails: [Email]
  firstName: String
  lastName: String
}
type Query {
  users(name: String): [User]
}
type Mutation {
  addUser(
    id: String!
    firstName: String!
    lastName: String!
  ): User
}
schema {
  query: Query
  mutation: Mutation
}
`
];

export const resolvers = {
    Query: {
      users: (root: any, args: any) =>
      {
        const data = [];
        for (let i = 0; i < 10; i++) {
          data.push(casual.user());
        }
        return data;
      },
    },
    User: {
      id: (input: String) => input ? input : casual_impl.uuid,
      emails: () => casual.user().emails,
      firstName: (input: any) => input.firstName ? input.firstName : casual_impl.first_name,
      lastName: (input: any) => input.lastName ? input.lastName : casual_impl.last_name,
    },
    Mutation: {
      addUser: (_: any, input: any) => {
        const user = casual.user();

        user.id = casual_impl.uuid;
        user.firstName = input.firstName;
        user.lastName = input.lastName;

        return user;
      }
    }
  };
