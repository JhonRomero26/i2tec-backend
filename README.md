# 🚀 Getting started with I2TEC Backend

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

For build, you will need to build the project from a Docker image. To build the image, you can run:

```
docker build --build-arg NODE_ENV=production -f Dockerfile.prod -t JhonRomero26/i2tec-backend .
```

Once you finish building the image, push it to the repository located in the GitHub Container Registry with the URL `ghcr.io/JhonRomero26/i2tec-backend`. You can push the image using the following command:

```
docker push ghcr.io/JhonRomero26/i2tec-backend:<VERSION>
```
