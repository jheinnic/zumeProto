/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type addUserMutationVariables = {
  firstName: string,
  lastName: string,
};

export type addUserMutation = {
  addUser:  {
    firstName: string | null,
    lastName: string | null,
    emails:  Array< {
      address: string | null,
      verified: boolean | null,
    } | null > | null,
  } | null,
};

export type UsersQueryVariables = {
  name?: string | null,
};

export type UsersQuery = {
  users:  Array< {
    firstName: string | null,
    lastName: string | null,
    emails:  Array< {
      address: string | null,
      verified: boolean | null,
    } | null > | null,
  } | null > | null,
};
