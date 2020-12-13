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

export const getTypesFile = ({ type, componentName, params = [] }) =>
`${type === 'page' ? `import { RouteComponentProps } from 'react-router-dom';

interface I${componentName}RouteProps {
  ${params.map(param => `${param}: string;`).join('\n  ')}
}

export interface I${componentName}ContainerProps extends RouteComponentProps<I${componentName}RouteProps> {}

` : ``}export interface I${componentName}Props {}
`;

export const getIndexFile = ({ type, componentName }) =>
`export { default } from './${componentName}${type === 'page' ? '.container' : ''}';
`;

export const getContainerFile = ({ componentName, params }) =>
`import React from 'react';
import { I${componentName}ContainerProps } from './types';
import ${componentName} from './${componentName}';

const ${componentName}Container: React.FC<I${componentName}ContainerProps> = ({
  match,
}) => {
  const { ${params.join(', ')} } = match.params;

  return (
    <${componentName} />
  );
};

${componentName}Container.displayName = '${componentName}Container';

export default ${componentName}Container;
`;

export const getComponentFile = ({ componentName }) =>
`import React from 'react';
// import {  } from '@chakra-ui/react';
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

// import {  } from '@chakra-ui/react';

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
