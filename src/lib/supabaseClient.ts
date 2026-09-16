/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@supabase/supabase-js';

// These are read at build time by Vite from env vars prefixed VITE_ — set
// them in AI Studio's Secrets panel (or a local .env file) as:
//   VITE_SUPABASE_URL=https://qeidlyhxawwoicsdurfi.supabase.co
//   VITE_SUPABASE_ANON_KEY=<your anon/public key>
// The anon key is safe to ship in client code — it can only do what the
// database's Row Level Security policies allow (public read of published
// articles; nothing else, unless the caller is signed in as an admin).
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fail loudly in the console rather than silently rendering an empty blog —
  // easier to diagnose a missing secret than a mysteriously empty page.
  // eslint-disable-next-line no-console
  console.error(
    'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. The blog cannot load articles until these are set in AI Studio\'s Secrets panel.',
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');
