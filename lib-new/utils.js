// Generated by CoffeeScript 1.11.1
(function() {
  this.parseId = function(url) {
    var match;
    match = url.match(/(?:commit|\/)db\/data\/\w+\/(\d+)($|\/)/);
    if (!match) {
      return null;
    }
    return parseInt(match[1], 10);
  };

}).call(this);

//# sourceMappingURL=utils.js.map
