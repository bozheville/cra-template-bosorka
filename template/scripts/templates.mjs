export const getTestingFile = ({ type, componentName }) =>
`import React from 'react';

import { render } from 'services/test-utils';

import ${componentName} from '../${componentName}';

describe('${componentName} ${type}', () => {
  test('${componentName} ${type} renders', () => {
    render(<${componentName} />)
  });
});
`;

export const getTypesFile = ({ type, componentName }) =>
`export interface I${componentName}Props {}
${type === 'page' ? `export interface I${componentName}ContainerProps {}\n` : ``}`;

export const getIndexFile = ({ type, componentName }) =>
`export { default } from './${componentName}${type === 'page' ? '.container' : ''}';
`;

export const getContainerFile = ({ componentName }) =>
`import React from 'react';
import { I${componentName}ContainerProps } from './types';
import ${componentName} from './${componentName}';

const ${componentName}Container: React.FC<I${componentName}ContainerProps> = ({
}) => {
  return (
    <${componentName} />
  );
};

${componentName}Container.displayName = '${componentName}Container';

export default ${componentName}Container;
`;

export const getComponentFile = ({ componentName }) =>
`import React from 'react';
// import {  } from '@chakra-ui/core';
import { I${componentName}Props } from './types';

const ${componentName}: React.FC<I${componentName}Props> = ({
  children,
}) => {
  return (
    <div>
      {children}
    </div>
  );
};

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;

export const getPageFile = ({ componentName }) =>
`import React from 'react';
import { useTranslation } from 'react-i18next';

// import {  } from '@chakra-ui/core';

import { Page } from 'components';
import { I${componentName}Props } from './types';

const ${componentName}: React.FC<I${componentName}Props> = ({
  children,
}) => {
  const { t } = useTranslation('pages');

  return (
    <Page title={t('${componentName.toLowerCase()}.title')}>
      {children}
    </Page>
  );
};

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;
