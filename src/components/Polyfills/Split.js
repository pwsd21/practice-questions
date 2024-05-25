if (!String.prototype.split) {
  String.prototype.split = function (separator, limit) {
    var str = this;
    var output = [];
    var lastIndex = 0;
    var match, lastMatchIndex;

    // If separator is a regex, we need to handle it differently
    if (Object.prototype.toString.call(separator) === "[object RegExp]") {
      // Handle capturing groups
      var regex = new RegExp(separator.source, separator.flags + "g");
      while ((match = regex.exec(str)) !== null) {
        lastMatchIndex = match.index;
        output.push(str.slice(lastIndex, lastMatchIndex));
        lastIndex = regex.lastIndex;

        // If there are capturing groups, add them to the output
        for (var i = 1; i < match.length; i++) {
          output.push(match[i]);
        }

        // Handle limit
        if (limit !== undefined && output.length >= limit) {
          return output.slice(0, limit);
        }
      }
    } else {
      // If separator is not a regex, just use simple string splitting
      var index;
      while ((index = str.indexOf(separator, lastIndex)) !== -1) {
        output.push(str.slice(lastIndex, index));
        lastIndex = index + separator.length;

        // Handle limit
        if (limit !== undefined && output.length >= limit) {
          return output.slice(0, limit);
        }
      }
    }

    // Add the remaining part of the string
    output.push(str.slice(lastIndex));

    // Handle limit if it's still not reached
    if (limit !== undefined) {
      return output.slice(0, limit);
    }

    return output;
  };
}
