/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "..\API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMoodLifter = /* GraphQL */ `query GetMoodLifter($id: ID!) {
  getMoodLifter(id: $id) {
    id
    title
    description
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMoodLifterQueryVariables,
  APITypes.GetMoodLifterQuery
>;
export const listMoodLifters = /* GraphQL */ `query ListMoodLifters(
  $filter: ModelMoodLifterFilterInput
  $limit: Int
  $nextToken: String
) {
  listMoodLifters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMoodLiftersQueryVariables,
  APITypes.ListMoodLiftersQuery
>;
