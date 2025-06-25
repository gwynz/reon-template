export const isProd = process.env.NODE_ENV === "production";
export const isLocal = process.env.NODE_ENV === "development";
export const origin_url =
	process.env.NEXT_PUBLIC_ORIGIN || "http://localhost:3000";

export const showLogger = isLocal
	? true
	: process.env.NEXT_PUBLIC_SHOW_LOGGER === "true";
export const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
