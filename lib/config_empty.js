var prod = './build/prod';
var dev = './build/dev';
var src = './src';

module.exports = {
  developer: {
    sequencePre: [
      'empty'
    ],
    sequenceClean: [
      'empty'
    ],
    sequenceBuild: [
      'empty'
    ],
    sequenceServer: [
      'empty'
    ],
    sequenceWatch: [
      'empty'
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
    runTasks: [
      'dev-img'
    ]
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