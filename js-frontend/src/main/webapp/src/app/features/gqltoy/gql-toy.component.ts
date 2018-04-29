import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Apollo, QueryRef} from 'apollo-angular';
import {Subject} from 'rxjs/Subject';
import {DocumentNode} from 'graphql';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {NewUserMutation, UserByUserIdQuery, UserByUserIdQueryVariables} from '../../../graphql2/schema';

const UserByUserIdQueryNode: DocumentNode = require(
  'graphql-tag/loader!../../../graphql2/UserByUserId.graphql');
const NewUserMutationNode: DocumentNode = require('graphql-tag/loader!../../../graphql2/NewUser.graphql');


@Component({
  moduleId: './src/app/features/gqltoy/gql-toy.component',
  selector: 'ptf-gql-toy',
  templateUrl: '_gql-toy.component.html',
  styles: [
      `
      div > mat-card {
        width: 90%;
      }
    `
  ]
})
export class GqlToyComponent implements OnInit, AfterViewInit
{
  // Observable with GraphQL result
  public watchUser: QueryRef<UserByUserIdQuery>;

  public user: QueryRef<UserByUserIdQuery>;

  // Observable variable of the graphql query
  public id: string;

  public idControl = new FormControl();

  public idFilter: Subject<UserByUserIdQueryVariables> = new Subject<UserByUserIdQueryVariables>();

  private apollo: Apollo;

  // Inject Angular2Apollo service
  constructor(apollo: Apollo)
  {
    this.apollo = apollo;
  }

  public ngOnInit()
  {
    // Query users data with observable variables
    this.watchUser = this.apollo.use('neo4j')
      .watchQuery<UserByUserIdQuery>({
        query: UserByUserIdQueryNode,
        variables: {
          id: 'null'
        }
        // variables: this.idFilter.asObservable()
        // variables: {
        //   id: this.idFilter.asObservable(),
        // },
      });
    // Return only users, not the whole ApolloQueryResult
    this.user = this.watchUser
      .valueChanges
      .map(result =>
        result.data.userByUserId) as any;

    // Add debounce time to wait 300 ms for a new change instead of keep hitting the server
    this.idControl.valueChanges.debounceTime(300)
      .subscribe(name => {
        console.log('Debouncing for ' + name);
        this.watchUser.refetch({id: name});
      });
  }

  public ngAfterViewInit()
  {
    // Set idFilter to null after NgOnInit happened and the view has been initialized
    // this.idFilter.next(null);
  }

  public newUser(id: string)
  {
    // Call the mutation called addUser
    this.apollo.use('neo4j')
      .mutate<NewUserMutation>({
        mutation: NewUserMutationNode,
        variables: {id: id},
      })
      .take(1)
      .subscribe({
        next: ({data}) => {
          console.log('got a new user', data);

          // get new data
          // this.idFilter.next({id: id});
          this.watchUser.refetch({id: id});
        },
        error: (errors) => {
          console.log('there was an error sending the query', errors);
        }
      });
  }
}
