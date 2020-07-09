import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import {
  getIndexFile,
  getTypesFile,
  getComponentFile,
  getTestingFile,
  getContainerFile,
  getPageFile,
} from './templates.mjs';

const [_0, _1, ...argv] = Array.from(process.argv);

const argvString = argv.join(' ');
let moduleType = null;
let moduleName = null;
let pagePath = null;
let addToMenu = null;

try {
  moduleType = argvString.match(/--type(\s+|=)(\S+)/)[2];
  try {
    pagePath = argvString.match(/--path(\s+|=)(\S+)/)[2];
  } catch(error) {
    console.error('"path" prop is required for page components')
    process.exit(1);
  }

  addToMenu = /--menu/.test(argvString);
} catch(err) {
  console.error('"type" prop is required')
  process.exit(1);
}

try {
  moduleName = argvString.match(/--name(\s+|=)(\S+)/)[2];
} catch(err) {
  console.error('"name" prop is required')
  process.exit(1);
}

const addComponent = (componentName) => {
  const componentPath = `./src/components/${componentName}`;

  mkdirSync(`${componentPath}`);
  mkdirSync(`${componentPath}/__tests__`);

  const files = [
    {
      filename: `${componentPath}/types.ts`,
      content: getTypesFile({ type: 'component', componentName }),
    },
    {
      filename: `${componentPath}/index.ts`,
      content: getIndexFile({ type: 'component', componentName }),
    },
    {
      filename: `${componentPath}/${componentName}.tsx`,
      content: getComponentFile({ componentName }),
    },
    {
      filename: `${componentPath}/__tests__/${componentName}.test.tsx`,
      content: getTestingFile({ type: 'component', componentName }),
    },
  ];

  for (const { filename, content } of files) {
    writeFileSync(filename, content);
    console.log(`${filename} created`);
  }
};

const addPage = (componentName) => {
  const componentPath = `./src/pages/${componentName}`;
  const enPath = './src/en.json';
  const appPath = './src/pages/App.tsx';
  const menuPath = './src/services/menu-items.json';

  mkdirSync(`${componentPath}`);
  mkdirSync(`${componentPath}/__tests__`);

  const files = [
    {
      filename: `${componentPath}/types.ts`,
      content: getTypesFile({ type: 'page', componentName })
    },
    {
      filename: `${componentPath}/index.ts`,
      content: getIndexFile({  type: 'page', componentName })
    },
    {
      filename: `${componentPath}/${componentName}.container.tsx`,
      content: getContainerFile({ componentName }),
    },
    {
      filename: `${componentPath}/${componentName}.tsx`,
      content: getPageFile({ componentName })
    },
    {
      filename: `${componentPath}/__tests__/${componentName}.test.tsx`,
      content: getTestingFile({ type: 'page', componentName })
    },
  ];

  for (const { filename, content } of files) {
    writeFileSync(filename, content);
    console.log(`${filename} created`);
  }

  const en = JSON.parse(readFileSync(enPath, {encoding:'utf8', flag:'r'}));
  en.pages[componentName.toLowerCase()] = { title: componentName };

  writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n');
  console.log(`${enPath} updated`);

  const app = readFileSync(appPath, {encoding:'utf8', flag:'r'})
      .replace(
        /(\s+)(?=<Route component={Page404} \/>)/,
        `$1<Route path="${pagePath}" exact component={${componentName}Page} />$1`
      )
      .replace(
        /(\s+)(?=const Page404)/,
        `$1const ${componentName}Page = React.lazy(() => import('pages/${componentName}'));$1`
      );

  writeFileSync(appPath, app);
  console.log(`${appPath} updated`);

  if (addToMenu) {
    const menu = JSON.parse(readFileSync(menuPath, {encoding:'utf8', flag:'r'}));

    menu.push({
      title: componentName,
      link: pagePath,
    });


    writeFileSync(menuPath, JSON.stringify(menu, null, 2) + '\n');
    console.log(`${menuPath} updated`);
  }
};


if (moduleType === 'component') {
  addComponent(moduleName);
} else if (moduleType === 'page') {
  addPage(moduleName)
} else {
  console.error('only "component" and "page" types allowed')
  process.exit(1);
}
