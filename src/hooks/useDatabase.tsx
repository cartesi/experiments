'use client';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

let cachedSupabaseClient: SupabaseClient | null = null;

export const useDatabase = () => {
  const { siteConfig } = useDocusaurusContext();

  const createOrGetSupabaseClient = () => {
    if (cachedSupabaseClient !== null) {
      return cachedSupabaseClient;
    }

    const supabase = createClient(
      siteConfig.customFields.supabase_url as string,
      siteConfig.customFields.supabase_key as string
    );

    cachedSupabaseClient = supabase;
    return supabase;
  };

  const fetchProject = async (id: string): Promise<any> => {
    const { data, error } = await createOrGetSupabaseClient()
      .from('projects')
      .select('likes')
      .eq('id', id);

    if (error) console.log('Supabase Error: ', error);
    if (data && data.length) return data[0];
    return null;
  };

  const upsertProject = async (params: any): Promise<any> => {
    /*
      create or replace function upsert_project_likes(project_id text) returns integer language plpgsql as $$
      declare
          likes_count integer;
      begin
          update projects set likes = likes + 1 where id = project_id;
          
          if not found then
              insert into projects (id, likes) values (project_id, 1);
          end if;

          select likes into likes_count from projects where id = project_id;
          return likes_count;
      end;
      $$;
    */

    const { data, error } = await createOrGetSupabaseClient().rpc(
      'upsert_project_likes',
      {
        project_id: params.id,
      }
    );

    if (error) console.log('Supabase Error: ', error);
    if (data) return data;
    return null;
  };

  return {
    fetchProject,
    upsertProject,
  };
};
