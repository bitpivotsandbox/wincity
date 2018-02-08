module.exports = {
  RESOLVE_PATHS: {
    actions: 'src/actions',
    components: 'src/components',
    constants: 'src/constants',
    containers: 'src/containers',
    lib: 'src/lib',
    reducers: 'src/reducers',
    routes: 'src/routes',
    store: 'src/store',
    support: 'support',
  },
  JS_LOADERS: {
    use: [
      { loader: 'babel-loader' },
    ],
  },
  CSS_LOADERS: {
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
        },
      },
      { loader: 'postcss-loader' },
      { loader: 'sass-loader' },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: './src/scss/*.scss',
        },
      },
    ],
  },
  FILE_LOADERS: {
    use: [
      { loader: 'file-loader' },
    ],
  },
};
