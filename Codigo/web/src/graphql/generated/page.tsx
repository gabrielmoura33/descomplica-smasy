import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../../lib/withApollo';


export async function getServerPageGetStudentBySlug
    (options: Omit<Apollo.QueryOptions<Types.GetStudentBySlugQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetStudentBySlugQuery>({ ...options, query: Operations.GetStudentBySlugDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetStudentBySlug = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetStudentBySlugQuery, Types.GetStudentBySlugQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetStudentBySlugDocument, options);
};
export type PageGetStudentBySlugComp = React.FC<{data?: Types.GetStudentBySlugQuery, error?: Apollo.ApolloError}>;
export const withPageGetStudentBySlug = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetStudentBySlugQuery, Types.GetStudentBySlugQueryVariables>) => (WrappedComponent:PageGetStudentBySlugComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetStudentBySlugDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetStudentBySlug = {
      getServerPage: getServerPageGetStudentBySlug,
      withPage: withPageGetStudentBySlug,
      usePage: useGetStudentBySlug,
    }
export async function getServerPageGetStudents
    (options: Omit<Apollo.QueryOptions<Types.GetStudentsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetStudentsQuery>({ ...options, query: Operations.GetStudentsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetStudents = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetStudentsQuery, Types.GetStudentsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetStudentsDocument, options);
};
export type PageGetStudentsComp = React.FC<{data?: Types.GetStudentsQuery, error?: Apollo.ApolloError}>;
export const withPageGetStudents = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetStudentsQuery, Types.GetStudentsQueryVariables>) => (WrappedComponent:PageGetStudentsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetStudentsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetStudents = {
      getServerPage: getServerPageGetStudents,
      withPage: withPageGetStudents,
      usePage: useGetStudents,
    }