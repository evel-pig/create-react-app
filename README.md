# @epig/create-react-app

## 使用说明

```bash
npx @epig/create-app my-app
cd my-app
npm start
```

*([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))*

Then open <http://localhost:8000> to see your app.
When you’re ready to deploy to production, create a minified bundle with npm run build.

## options

[@epig/luna](https://github.com/evel-pig/luna)

```bash
npx @epig/create-app my-app-m --luna
```

移动端

```bash
npx @epig/create-app my-app-m --mobile

npx @epig/create-app my-app-m --luna --mobile
```

管理后台([使用说明看这里](./docs/admin.md))

```bash
npx @epig/create-app my-admin-app --admin
```
