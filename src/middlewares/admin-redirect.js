const { NODE_ENV } = process.env

module.exports = (_config, { strapi }) => {
  if (NODE_ENV === 'production') {
    const redirects = ['/', '/index.html'].map((path) => ({
        method: 'GET',
        path,
        handler: (ctx) => ctx.redirect('/admin'),
        config: { auth: false },
    }));

    strapi.server.routes(redirects);
  }
};
