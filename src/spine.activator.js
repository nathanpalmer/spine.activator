(function() {
  var Module, Spine, moduleKeywords, proto;
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  Spine = window.Spine;
  moduleKeywords = ['included', 'extended'];
  Module = (function() {
    Module.prototype.activators = [];
    function Module() {
      var activator, _i, _len, _ref;
      console.log("test");
      _ref = this.activators;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        activator = _ref[_i];
        if (typeof this[activator] === "function") {
          this[activator]();
        }
      }
      if (typeof this.init === "function") {
        this.init.apply(this, arguments);
      }
    }
    return Module;
  })();
  proto = Spine.Module.prototype;
  Spine.Module.prototype = Module.prototype;
  Spine.Module.include = function(obj) {
    var key, value, _ref;
    if (!obj) {
      throw 'include(obj) requires obj';
    }
    for (key in obj) {
      value = obj[key];
      if (__indexOf.call(moduleKeywords, key) < 0) {
        if (key === "activators") {
          this.prototype[key] = this.prototype[key].concat(value);
        } else {
          this.prototype[key] = value;
        }
      }
    }
    if ((_ref = obj.included) != null) {
      _ref.apply(this);
    }
    return this;
  };
}).call(this);
