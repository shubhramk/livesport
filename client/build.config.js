/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: '../public',
  compile_dir: '../public',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/modules/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    json: [ 'src/**/*.json', '!src/**/*.spec.json', '!src/assets/**/*.json' ],

    html: [ 'src/index.html' ],
    cache: ['src/*.appcache'],
    less: [
      'less/main.less',
      'modules/home/home.less',
      'modules/channels/channels.less',
      'modules/events/events.less',
      'modules/favorites/favorites.less'
    ]
  },

  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  vendor_files: {
    js: [
      'libs/jquery/dist/jquery.min.js',
      'libs/angular/angular.min.js',
      'libs/slick-carousel/slick/slick.js',
      'libs/angular-slick-carousel/dist/angular-slick.min.js',
      'libs/bootstrap/dist/js/bootstrap.min.js',
      'libs/video.js/dist/video.min.js',
      'libs/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'libs/angular-ui-router/release/angular-ui-router.min.js',
      'libs/oclazyload/dist/oclazyload.min.js',
      'libs/boxes-effects/modernizr.custom.js',
      'libs/boxes-effects/masonry.pkgd.min.js',
      'libs/boxes-effects/imagesloaded.pkgd.min.js',
      'libs/boxes-effects/classie.js',
      'libs/boxes-effects/colorfinder-1.1.js',
      'libs/boxes-effects/gridScrollFx.js',
      'libs/boxes-effects/modernizr.caption.custom.js',
      'libs/boxes-effects/toucheffects.js'
    ],
    lazyLoadLibs:[

    ],
    css: [
        'libs/bootstrap/dist/css/bootstrap.min.css',
        'libs/slick-carousel/slick/slick.css',
        'libs/slick-carousel/slick/slick-theme.css',
        'libs/angular-slick-carousel/examples/css/app.dist.css',
        'libs/boxes-effects/normalize.css',
        'libs/boxes-effects/demo.css',
        'libs/boxes-effects/component.css'
    ],
    assets: [
    ]
  }
};
