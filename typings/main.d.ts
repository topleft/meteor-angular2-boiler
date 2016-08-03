/// <reference path="main/ambient/es6-shim/index.d.ts" />
/// <reference path="main/ambient/meteor/index.d.ts" />
/// <reference path="main/definitions/es6-promise/index.d.ts" />

declare module "*.html" {
  const value: any;
  export default value;
}
