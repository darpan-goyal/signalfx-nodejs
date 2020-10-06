var tracing;

try {
  var sfx = require('signalfx-tracing');
  if (sfx.withDisabledScope !== undefined) {
    tracing = sfx;
  }
} catch (err) {
}

if (!tracing) {
  tracing = {
    withDisabledScope : (callback) => {
      return callback()
    }
  }
}

module.exports = tracing;