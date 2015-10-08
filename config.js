//var prod = './build/prod';
var dev = './build/dev';
var src = './src';

module.exports = {
  developer: {
    sequencePre: [
      'empty'
    ],
    sequenceClean: [
      'dev-clean'
    ],
    sequenceBuild: [
      'dev-jade',
      'dev-js-direct',
      'dev-js-vendor',
      'dev-js-custom',
      'dev-compass',
      'dev-fonts',
      'dev-img'
    ],
    sequenceServer: [
      'dev-browsersync'
    ],
    sequenceWatch: [
      'dev-watch-jade',
      'dev-watch-compass',
      'dev-watch-js-custom',
      'dev-watch-img'
    ],
    sequencePost: [
      'empty'
    ]
  },
  devClean: {
    dest: dev
  },
  devFonts: {
    src: [
      'src/fonts/**/*'
    ],
    dest: dev + 'fonts'
  },
  devSass: {
    src: src + '/custom.{sass,scss}',
    watch: src + '/**/*.{sass,scss}',
    dest: dev,
    concatFile: 'custom.css',
    runTasks: [
      'dev-sass'
    ],
    settings: {
      indentedSyntax: true,
      imagePath: 'img'
    }
  },
  devCompass: {
    src: src + '/custom.{sass,scss}',
    watch: src + '/**/*.{sass,scss}',
    dest: dev,
    runTasks: [
      'dev-compass'
    ],
    concatFile: 'custom.css'
  },
  devSassSprites: {
    src: src + '/sprite/*.png',
    exportImg: 'img/_sprite.png',
    exportCss: 'sprite/_sprite.scss',
    dest: src
  },
  devCssVendor: {
    src: [
      './bower_components/normalize-css/normalize.css'
    ],
    dest: dev,
    concatFile: 'vendor.css',
    settings: {
      indentedSyntax: true,
      imagePath: 'images'
    }
  },
  devJsDirect: {
    src: [
      'bower_components/html5shiv/dist/html5shiv.js',
      'bower_components/respond/dest/respond.min.js'
    ],
    dest: dev
  },
  devJsCustom: {
    src: src + '/**/*.{js,coffee}',
    dest: dev,
    watch: src + '/**/*.{js,coffee}',
    runTasks: [
      'dev-js-custom'
    ]
  },
  devJsVendor: {
    src: [],
    concatFile: 'vendor.js',
    dest: dev
  },
  devImage: {
    src: src + '/img/*',
    dest: dev + '/i',
    watch: src + '/img/**/*',
    runTasks: ['dev-img']
  },
  devJade: {
    src: src + '/*.jade',
    dest: dev,
    watch: src + '/**/*.jade',
    runTasks: [
      'dev-jade'
    ]
  },
  devBrowsersync: {
    dest: dev
  }
};