import { StringifiableRecord, stringify } from 'query-string';

const fetchProps = {};

export const GET = <T>(url: string, params?: StringifiableRecord) => {
  const uri = params ? `?${stringify(params)}` : '';

  return fetch(url + uri, {
    ...fetchProps,
    method: 'GET',
  })
    .then(response => response.json())
    .then((response) => response as T);
};
