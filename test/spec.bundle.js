// require all modules follwing spec pattern
// pass `true` for recursive
let context = require.context("../src", true, /\.spec\.(js|jsx)$/);

context.keys().forEach(context);
