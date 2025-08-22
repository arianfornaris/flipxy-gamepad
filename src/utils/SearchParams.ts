const params = new URLSearchParams(window.location.search);

export function hasQueryParam(key: string) {

    return params.has(key);
}

export function getQueryParam(key: string) {

    return params.get(key);
}