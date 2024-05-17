import { useQuery } from "@tanstack/react-query";
import { client } from "utils/hono";

/**
 * Gets the user's accounts from the database.
 */
export function useGetAccounts() {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const response = await client.api.accounts.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }

      const { data } = await response.json();

      return data;
    }
  });
}
