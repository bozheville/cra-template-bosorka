import { stringify } from 'query-string';

const fetchProps = {};

export const GET = <T, P = {}>(url: string, params?: P) => {
  const uri = params ? `?${stringify(params)}` : '';

  return fetch(url + uri, {
    ...fetchProps,
    method: 'GET',
  })
    .then(response => response.json())
    .then((response) => response as T);
};
