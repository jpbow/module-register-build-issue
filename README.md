# module-register-build-issue

Minimal reproduction for [#7894](https://github.com/zeit/next.js/issues/7894)

Weirdly, the build will succeed if there are only two pages that import `firebase/firestore`, but fails on three or more.

Environment: macOS 10.13.6, Node v10.15.0, Yarn 1.16.0

## Steps

1. Clone repository
2. Run `yarn`
3. Run `yarn build`
4. See error as below

```
$ next build
Creating an optimized production build ...

Compiled successfully.

> Build error occurred
{ Error: Failed to load /Users/jamiebowley/Documents/repos/module-register-build-issue/node_modules/grpc/src/node/extension_binary/node-v64-darwin-x64-unknown/grpc_node.node. Module did not self-register.
    at Object.Module._extensions..node (internal/modules/cjs/loader.js:718:18)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Object.<anonymous> (/Users/jamiebowley/Documents/repos/module-register-build-issue/node_modules/grpc/src/grpc_extension.js:32:13)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32) type: 'Error', '$error': '$error' }
error Command failed with exit code 1.

```
