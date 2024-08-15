import { fetcher } from "./../utils";
import useSWR from 'swr';
import { API_HOST } from '../constants';

export function useAnySmartphones() {
   const url = `${API_HOST}/phones`;

   const { data, isLoading, error } = useSWR(url, fetcher)
   return {
      Smartphones: data,
      isLoading,
      isError: error
   }

}
