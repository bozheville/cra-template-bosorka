declare module "*.json" {
  const value: any;
  export default value;
}

declare module '*.png'

declare module "*.svg" {
  const content: string;
  export default content;
}

export interface MenuItem {
  title: string;
  link: string;
}

export type TPageState = 'initial'|'loading'|'contentful'|'error'|'empty';
