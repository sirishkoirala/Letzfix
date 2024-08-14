import useSWR from 'swr';
import { API_HOST } from '../constants';
import { fetcher } from '../utils';

export function useLogos(){
   const url = `${API_HOST}/logos`;

   const { data , error , isLoading} = useSWR(url, fetcher)

   return {
      logos: data,
      isLoading,
      isError : error
   }
}
