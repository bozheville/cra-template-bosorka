import { useCallback, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'query-string';

const useLink = <T>() => {
  const history = useHistory();
  const location = useLocation();

  const [ data, setData ] = useState<T>(parse(location.search) as unknown as T);

  const setURL = useCallback((urlProps: T) => {
    history.push(`?${stringify(urlProps || {})}`);
  }, [history]);

  const updateURL = useCallback((update: T) => {
    const urlProps = {
      ...parse(location.search),
      ...update,
    };

    history.push(`?${stringify(urlProps)}`);
  }, [location.search, history]);

  useEffect(() => {
    const urlProps = parse(location.search) as unknown as T;
    setData(urlProps);
  }, [location.search]);

  return {
    setURL,
    updateURL,
    queryParams: data,
  };
};

export default useLink;
