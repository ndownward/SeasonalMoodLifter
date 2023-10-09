/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "..\API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMoodLifter = /* GraphQL */ `subscription OnCreateMoodLifter(
  $filter: ModelSubscriptionMoodLifterFilterInput
  $owner: String
) {
  onCreateMoodLifter(filter: $filter, owner: $owner) {
    id
    title
    description
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMoodLifterSubscriptionVariables,
  APITypes.OnCreateMoodLifterSubscription
>;
export const onUpdateMoodLifter = /* GraphQL */ `subscription OnUpdateMoodLifter(
  $filter: ModelSubscriptionMoodLifterFilterInput
  $owner: String
) {
  onUpdateMoodLifter(filter: $filter, owner: $owner) {
    id
    title
    description
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMoodLifterSubscriptionVariables,
  APITypes.OnUpdateMoodLifterSubscription
>;
export const onDeleteMoodLifter = /* GraphQL */ `subscription OnDeleteMoodLifter(
  $filter: ModelSubscriptionMoodLifterFilterInput
  $owner: String
) {
  onDeleteMoodLifter(filter: $filter, owner: $owner) {
    id
    title
    description
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMoodLifterSubscriptionVariables,
  APITypes.OnDeleteMoodLifterSubscription
>;
