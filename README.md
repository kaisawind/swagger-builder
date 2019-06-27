<h1 align="center">
  <br>
  <img src="https://repository-images.githubusercontent.com/167809029/27811780-98cd-11e9-9d47-18889b196016" alt="Kaisawind's character" width="400">
  <br>
</h1>

<p align="center">
  <a href="https://github.com/kaisawind/swagger-builder/releases">
    <img src="https://img.shields.io/github/release/kaisawind/swagger-builderr.svg" alt="GitHub release">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D8.9-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D%203.0.0-blue.svg" />
  <a href="https://travis-ci.com/kaisawind/swagger-builder">
    <img src="https://travis-ci.com/kaisawind/swagger-builder.svg?token=zAYkhFNqwBwmfWpeEt2s&branch=master">
  </a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fkaisawind%2Fswagger-builder?ref=badge_shield">
    <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkaisawind%2Fswagger-builder.svg?type=shield">
  </a>
</p>

<p align="center">
  <a href="#getting-started">Getting started</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

## Getting started

Modify `package.json`, the `definition` is the input swagger file, the `dist` is the js where to output.

```json
{
  "swagger": {
    "definition": "./example/swagger/swagger.json",
    "className": "API",
    "moduleName": "apis",
    "dist": "./example/dist"
  }
}
```

```bash
yarn
yarn build:swagger
```

## TODO

- support npm package

## Contributors
- [kaisawind](https://github.com/kaisawind) - creator, maintainer

## License

All original code in this repository is licensed under [MIT](https://github.com/kaisawind/swagger-builder/blob/master/LICENSE) license.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkaisawind%2Fswagger-builder.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkaisawind%2Ffile-manager?ref=badge_large)

