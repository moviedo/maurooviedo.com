'use strict';

var angular = require('angular'),
    config = require('config');
require('angular-ui-router')

angular
  .module('mauro', [
    'ui.router',
  ])
  .config(config.location)
  .config(config.routes);

  
