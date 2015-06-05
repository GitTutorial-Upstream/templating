define(['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  exports.__esModule = true;

  var ElementConfigResource = (function () {
    function ElementConfigResource() {
      _classCallCheck(this, ElementConfigResource);
    }

    ElementConfigResource.prototype.load = function load(container, target) {
      var config = new target(),
          eventManager = container.get(_aureliaBinding.EventManager);

      eventManager.registerElementConfig(config);
      return Promise.resolve(this);
    };

    ElementConfigResource.prototype.register = function register() {};

    return ElementConfigResource;
  })();

  exports.ElementConfigResource = ElementConfigResource;
});