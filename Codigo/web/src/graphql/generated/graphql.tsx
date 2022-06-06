import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateStudentInput = {
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createStudent: Student;
  removeStudent: Student;
  updateStudent: Student;
};


export type MutationCreateStudentArgs = {
  data: CreateStudentInput;
};


export type MutationRemoveStudentArgs = {
  id: Scalars['String'];
};


export type MutationUpdateStudentArgs = {
  data: UpdateStudentInput;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  studentBySlug: Student;
  students: Array<Student>;
};


export type QueryStudentBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryStudentsArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  cpf: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type UpdateStudentInput = {
  cpf?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type CreateStudentMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  cpf: Scalars['String'];
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent: { __typename?: 'Student', name: string, id: string } };

export type UpdateStudentMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  cpf: Scalars['String'];
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent: { __typename?: 'Student', name: string, id: string } };

export type RemoveStudentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveStudentMutation = { __typename?: 'Mutation', removeStudent: { __typename?: 'Student', id: string } };

export type GetStudentBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetStudentBySlugQuery = { __typename?: 'Query', studentBySlug: { __typename?: 'Student', id: string, name: string, email: string, cpf: string, slug: string, createdAt: any } };

export type GetStudentsQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type GetStudentsQuery = { __typename?: 'Query', students: Array<{ __typename?: 'Student', id: string, name: string, email: string, cpf: string, slug: string, createdAt: any }> };


export const CreateStudentDocument = gql`
    mutation CreateStudent($name: String!, $email: String!, $cpf: String!) {
  createStudent(data: {name: $name, cpf: $cpf, email: $email}) {
    name
    id
  }
}
    `;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      cpf: // value for 'cpf'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation UpdateStudent($id: String!, $name: String!, $email: String!, $cpf: String!) {
  updateStudent(data: {id: $id, name: $name, cpf: $cpf, email: $email}) {
    name
    id
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      cpf: // value for 'cpf'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const RemoveStudentDocument = gql`
    mutation RemoveStudent($id: String!) {
  removeStudent(id: $id) {
    id
  }
}
    `;
export type RemoveStudentMutationFn = Apollo.MutationFunction<RemoveStudentMutation, RemoveStudentMutationVariables>;

/**
 * __useRemoveStudentMutation__
 *
 * To run a mutation, you first call `useRemoveStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStudentMutation, { data, loading, error }] = useRemoveStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveStudentMutation(baseOptions?: Apollo.MutationHookOptions<RemoveStudentMutation, RemoveStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveStudentMutation, RemoveStudentMutationVariables>(RemoveStudentDocument, options);
      }
export type RemoveStudentMutationHookResult = ReturnType<typeof useRemoveStudentMutation>;
export type RemoveStudentMutationResult = Apollo.MutationResult<RemoveStudentMutation>;
export type RemoveStudentMutationOptions = Apollo.BaseMutationOptions<RemoveStudentMutation, RemoveStudentMutationVariables>;
export const GetStudentBySlugDocument = gql`
    query GetStudentBySlug($slug: String!) {
  studentBySlug(slug: $slug) {
    id
    name
    email
    cpf
    slug
    createdAt
  }
}
    `;

/**
 * __useGetStudentBySlugQuery__
 *
 * To run a query within a React component, call `useGetStudentBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetStudentBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetStudentBySlugQuery, GetStudentBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentBySlugQuery, GetStudentBySlugQueryVariables>(GetStudentBySlugDocument, options);
      }
export function useGetStudentBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentBySlugQuery, GetStudentBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentBySlugQuery, GetStudentBySlugQueryVariables>(GetStudentBySlugDocument, options);
        }
export type GetStudentBySlugQueryHookResult = ReturnType<typeof useGetStudentBySlugQuery>;
export type GetStudentBySlugLazyQueryHookResult = ReturnType<typeof useGetStudentBySlugLazyQuery>;
export type GetStudentBySlugQueryResult = Apollo.QueryResult<GetStudentBySlugQuery, GetStudentBySlugQueryVariables>;
export const GetStudentsDocument = gql`
    query GetStudents($search: String!) {
  students(search: $search) {
    id
    name
    email
    cpf
    slug
    createdAt
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;