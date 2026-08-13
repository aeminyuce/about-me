const serviceHeaders = Object.freeze({
    'apikey': process.env.API_KEY ?? '',
    'Content-Type': 'application/json',
});

const errorHandler = (status: any) => {
    const code = String(status);

    if (code === 'apiError' && window.location.pathname !== '/ApiError') {
        window.location.href = '/ApiError';
    }

    if (code.startsWith('4') && window.location.pathname !== '/NotFound') {
        window.location.href = '/NotFound';
    }

    if (code.startsWith('5') && window.location.pathname !== '/ServerError') {
        window.location.href = '/ServerError';
    }
}

export default class Service {
    get = async (url: string, params?: Record<string, string>) => {
        if (params) {
            const query = new URLSearchParams(params).toString();
            url += query;
        }

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: serviceHeaders,
            });

            if (!response.ok) errorHandler(response.status);
            return await response.json();

        } catch (err: any) {
            errorHandler('apiError');
            // run error logger (optional)
        }
    }

    post = async (url: string, body?: any, retries: number = 3) => {
        const headers = {
            ...serviceHeaders,
            ...{ 'Idempotency-Key': crypto.randomUUID() },
        };

        for (let attempt = 0; attempt < retries; attempt++) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: body ? JSON.stringify(body) : undefined,
                });

                if (!response.ok) errorHandler(response.status);
                return await response.json();

            } catch (err: any) {
                if (attempt < retries - 1 && (err.status >= 500 || !err.status)) {
                    const backoff = 2 ** attempt * 100; // 100ms, 200ms, 400ms...
                    await new Promise((r) => setTimeout(r, backoff));

                    continue;
                }

                errorHandler('apiError');
                // run error logger (optional)
            }
        }
    }
}