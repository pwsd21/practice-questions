if (!String.prototype.split) {
  String.prototype.split = function (separator, limit) {
    var str = this; // Get the string on which split is called
    var output = []; // Initialize an array to store the split substrings
    var lastIndex = 0; // Initialize the last index where splitting occurred
    var match, lastMatchIndex;

    // If separator is a regex, we need to handle it differently
    if (Object.prototype.toString.call(separator) === "[object RegExp]") {
      // Handle capturing groups
      var regex = new RegExp(separator.source, separator.flags + "g"); // Create a global regex from the provided regex
      while ((match = regex.exec(str)) !== null) {
        // Iterate over matches in the string
        lastMatchIndex = match.index; // Get the index of the last match
        output.push(str.slice(lastIndex, lastMatchIndex)); // Push the substring before the match to output
        lastIndex = regex.lastIndex; // Update lastIndex to the end of the match

        // If there are capturing groups, add them to the output
        for (var i = 1; i < match.length; i++) {
          output.push(match[i]);
        }

        // Handle limit
        if (limit !== undefined && output.length >= limit) {
          return output.slice(0, limit); // Return output sliced to the limit
        }
      }
    } else {
      // If separator is not a regex, just use simple string splitting
      var index;
      while ((index = str.indexOf(separator, lastIndex)) !== -1) {
        // Find the next occurrence of the separator
        output.push(str.slice(lastIndex, index)); // Push the substring between lastIndex and index
        lastIndex = index + separator.length; // Update lastIndex to skip the separator

        // Handle limit
        if (limit !== undefined && output.length >= limit) {
          return output.slice(0, limit); // Return output sliced to the limit
        }
      }
    }

    // Add the remaining part of the string after the last split
    output.push(str.slice(lastIndex));

    // Handle limit if it's still not reached
    if (limit !== undefined) {
      return output.slice(0, limit); // Return output sliced to the limit
    }

    return output; // Return the final array of split substrings
  };
}
