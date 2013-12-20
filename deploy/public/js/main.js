
 /**
* configure RequireJS
* prefer named modules to long paths, especially for version mgt
* or 3rd party libraries
*/
require.config({

paths: {
  'angular'         : './libs/angular/angular',
  'angular-resource': './libs/angular-resource/angular-resource',
  'async'           : './libs/requirejs-plugins/src/async',
  'domReady'        : './libs/requirejs-domready/domReady'
},

/**
 * for libs that either do not support AMD out of the box, or
 * require some fine tuning to dependency mgt'
 */
shim: {
  'angular'         : {
    exports: 'angular'
  },
  'angular-mocks'   : {
    deps: ['angular']
  },
  'angular-resource': {
    deps: ['angular']
  }
}
});
  
require(['./bootstrap'], function () {
  //nothing to do here...see bootstrap.js
});
