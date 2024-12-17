import { getSession } from 'next-auth/react';

export async function apiClient(
    url: string,
    options: RequestInit = {}
) {
    // Retrieve the access token from the session
    const sSession = await getSession();
    const session: any = JSON.parse(JSON.stringify(sSession));
    const accessToken = session?.token;

    if (!accessToken) {
        window.location.href = '/';  // Adjust redirect URL as necessary
        return;
    }

    // Default headers
    const defaultHeaders: Record<string, string> = {
        'Authorization': `Bearer ${accessToken}`,
    };

    // Merge default headers with custom headers
    options.headers = {
        ...defaultHeaders,
        ...options.headers as Record<string, string>,  // Ensure options.headers is treated as a Record<string, string>
    };

    // Ensure 'Content-Type' is set to 'application/json' if body is not FormData
    if (!(options.body instanceof FormData)) {
        options.headers['Content-Type'] = 'application/json';
    }

    // Make the fetch request
    const res = await fetch(url, options);

    // Handle unsuccessful responses
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    // Parse and return the response as JSON
    return res.json();
}

export async function buildQueryParams(filters: any) {
    const params = new URLSearchParams();

    for (const key in filters) {
        if (filters.hasOwnProperty(key) && filters[key] !== undefined && filters[key] !== null) {
            params.append(key, filters[key]);
        }
    }

    return params.toString();
}