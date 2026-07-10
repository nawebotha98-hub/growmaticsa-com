import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

/**
 * Fetches editable copy for a section of the site from Supabase, edited via
 * the GrowMatic admin portal. `fallback` is used as placeholder data so the
 * page renders immediately with the last-known-good copy and never shows a
 * loading state — it only updates in place once the live content arrives,
 * and stays on the fallback if the fetch fails for any reason.
 */
export function useSiteContent<T>(section: string, fallback: T): T {
  const { data } = useQuery({
    queryKey: ["site_content", section],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("content")
        .eq("section", section)
        .maybeSingle();
      if (error) throw error;
      return (data?.content as T) ?? fallback;
    },
    placeholderData: fallback,
    staleTime: 60_000,
    retry: 1,
  });

  return data ?? fallback;
}
