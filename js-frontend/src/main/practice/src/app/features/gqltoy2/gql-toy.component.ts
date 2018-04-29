import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Apollo, QueryRef} from 'apollo-angular';
import {Subject} from 'rxjs/Subject';
import {DocumentNode} from 'graphql';
import gql from 'graphql-tag';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {UsersQuery} from '../../../graphql/schema';

// import {AddUserMutation, UsersQuery} from '../../../graphql/schema';

// const UsersQueryNode: DocumentNode = require('graphql-tag/loader!../../../graphql/Users.graphql');
// const AddUserMutationNode: DocumentNode = require('graphql-tag/loader!../../../graphql/AddUser.graphql');

const UsersQueryNode = gql`
  query UsersQueryNode($name: String) {
    users(name: $name) {
      firstName
      lastName
      emails {
        address
        verified
      }
    }
  }
`;

const AddUserMutationNode: DocumentNode = gql`
  mutation addUser(
  $firstName: String!
  $lastName: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
    ) {
      firstName
      lastName
      emails {
        address
        verified
      }
    }
  }
`;


class AddUserMutation
{
}

@Component({
  moduleId: './src/app/features/gqltoy2/gql-toy.component',
  selector: 'ptf-gql-toy-one',
  templateUrl: '_gql-toy.component.html',
  styles: [
    `
      div > mat-card {
        width: 90%;
      }
    `
  ]
})
export class GqlToyComponent implements OnInit, AfterViewInit {
  // Observable with GraphQL result
  public watchUsers: QueryRef<UsersQuery>;
  public users: QueryRef<UsersQuery>;

  public firstName: string;
  public lastName: string;
  public nameControl = new FormControl();
  // Observable variable of the graphql query
  public nameFilter: Subject<string> = new Subject<string>();
  private apollo: Apollo;

  // Inject Angular2Apollo service
  constructor(apollo: Apollo) {
    this.apollo = apollo;
  }

  public ngOnInit() {
    // Query users data with observable variables
    this.watchUsers = this.apollo.use('apollo').watchQuery<UsersQuery>({
      query: UsersQueryNode,
      variables: {
        name: 'null'
      }
      // variables: {
      //   name: this.nameFilter,
      // },
    });
    // Return only users, not the whole ApolloQueryResult
    this.users = this.watchUsers
      .valueChanges
      .map(result =>
        result.data.users) as any;

    // Add debounce time to wait 300 ms for a new change instead of keep hitting the server
    this.nameControl.valueChanges.debounceTime(300).subscribe(name => {
      console.log('De-bounced to ' + name);
      this.watchUsers.refetch({name: name});
    });
  }

  public ngAfterViewInit() {
    // Set nameFilter to null after NgOnInit happened and the view has been initiated
    // this.nameFilter.next(null);
    // this.watchUsers.refetch({name: 'null'})
  }

  public newUser(firstName: string) {
    // Call the mutation called addUser
    this.apollo.use('apollo').mutate<AddUserMutation>({
      mutation: AddUserMutationNode,
      variables: {
        firstName,
        lastName: this.lastName,
      },
    })
      .take(1)
      .subscribe({
        next: ({data}) => {
          console.log('got a new user', data.addUser);

          // get new data
          this.watchUsers.refetch({name: data.addUser.name});
        },
        error: (errors) => {
          console.log('there was an error sending the query', errors);
        }
      });
  }
}
