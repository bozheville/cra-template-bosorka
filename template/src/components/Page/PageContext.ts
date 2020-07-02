import React from 'react';

const PageDataContext = React.createContext({
  title: '',
  setTitle: (newTitle: string) => {},
});

export default PageDataContext;
