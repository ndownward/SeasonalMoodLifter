/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMoodLifterInput = {
  id?: string | null,
  title: string,
  description: string,
  owner: string,
};

export type ModelMoodLifterConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelMoodLifterConditionInput | null > | null,
  or?: Array< ModelMoodLifterConditionInput | null > | null,
  not?: ModelMoodLifterConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type moodLifter = {
  __typename: "moodLifter",
  id: string,
  title: string,
  description: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMoodLifterInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  owner?: string | null,
};

export type DeleteMoodLifterInput = {
  id: string,
};

export type ModelMoodLifterFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelMoodLifterFilterInput | null > | null,
  or?: Array< ModelMoodLifterFilterInput | null > | null,
  not?: ModelMoodLifterFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMoodLifterConnection = {
  __typename: "ModelMoodLifterConnection",
  items:  Array<moodLifter | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMoodLifterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMoodLifterFilterInput | null > | null,
  or?: Array< ModelSubscriptionMoodLifterFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateMoodLifterMutationVariables = {
  input: CreateMoodLifterInput,
  condition?: ModelMoodLifterConditionInput | null,
};

export type CreateMoodLifterMutation = {
  createMoodLifter?:  {
    __typename: "moodLifter",
    id: string,
    title: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMoodLifterMutationVariables = {
  input: UpdateMoodLifterInput,
  condition?: ModelMoodLifterConditionInput | null,
};

export type UpdateMoodLifterMutation = {
  updateMoodLifter?:  {
    __typename: "moodLifter",
    id: string,
    title: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMoodLifterMutationVariables = {
  input: DeleteMoodLifterInput,
  condition?: ModelMoodLifterConditionInput | null,
};

export type DeleteMoodLifterMutation = {
  deleteMoodLifter?:  {
    __typename: "moodLifter",
    id: string,
    title: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMoodLifterQueryVariables = {
  id: string,
};

export type GetMoodLifterQuery = {
  getMoodLifter?:  {
    __typename: "moodLifter",
    id: string,
    title: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMoodLiftersQueryVariables = {
  filter?: ModelMoodLifterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMoodLiftersQuery = {
  listMoodLifters?:  {
    __typename: "ModelMoodLifterConnection",
    items:  Array< {
      __typename: "moodLifter",
      id: string,
      title: string,
      description: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMoodLifterSubscriptionVariables = {
  filter?: ModelSubscriptionMoodLifterFilterInput | null,
  owner?: string | null,
};

export type OnCreateMoodLifterSubscription = {
  onCreateMoodLifter?:  {
    __typename: "moodLifter",
    id: string,
    title: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMoodLifterSubscriptionVariables = {
  filter?: ModelSubscriptionMoodLifterFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMoodLifterSubscription = {
  onUpdateMoodLifter?:  {
    __typename: "moodLifter",
    id: string,
    title: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMoodLifterSubscriptionVariables = {
  filter?: ModelSubscriptionMoodLifterFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMoodLifterSubscription = {
  onDeleteMoodLifter?:  {
    __typename: "moodLifter",
    id: string,
    title: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
