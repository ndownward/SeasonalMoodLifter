/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "..\API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMoodLifter = /* GraphQL */ `mutation CreateMoodLifter(
  $input: CreateMoodLifterInput!
  $condition: ModelMoodLifterConditionInput
) {
  createMoodLifter(input: $input, condition: $condition) {
    id
    title
    description
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMoodLifterMutationVariables,
  APITypes.CreateMoodLifterMutation
>;
export const updateMoodLifter = /* GraphQL */ `mutation UpdateMoodLifter(
  $input: UpdateMoodLifterInput!
  $condition: ModelMoodLifterConditionInput
) {
  updateMoodLifter(input: $input, condition: $condition) {
    id
    title
    description
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMoodLifterMutationVariables,
  APITypes.UpdateMoodLifterMutation
>;
export const deleteMoodLifter = /* GraphQL */ `mutation DeleteMoodLifter(
  $input: DeleteMoodLifterInput!
  $condition: ModelMoodLifterConditionInput
) {
  deleteMoodLifter(input: $input, condition: $condition) {
    id
    title
    description
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMoodLifterMutationVariables,
  APITypes.DeleteMoodLifterMutation
>;
