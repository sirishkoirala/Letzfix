import { API_HOST } from "../constants";
import { fetcher } from "../utils";
import useSWR from "swr";

export function useRepairDevices() {
   const url = `${API_HOST}/repairDevices`;

   const { data, isLoading, errorm } = useSWR(url, fetcher)

   return {
      repairDevices: data,
      isLoading,
      isError: errorm
   }
}