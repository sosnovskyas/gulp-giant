//var prod = './build/prod';
var dev = './build/dev';
var src = './src';
var jsFileList = '/**/*.{js,coffee}';

module.exports = {
  devClean: {
    dest: dev
  },
  devFonts: {
    src: [
      'src/fonts/**/*'
    ],
    dest: dev + 'fonts'
  },
  devScss: {
    src: src + '/custom.scss',
    watch: src + '/**/*.scss',
    dest: dev,
    concatFile: 'custom.css',
    runTasks: [
      'dev-scss'
    ],
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'img' // Used by the image-url helper
    }
  },
  devCompass: {
    src: src + '/custom.scss',
    watch: src + '/**/*.scss',
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
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
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
    src: src + jsFileList,
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