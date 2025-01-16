// module.exports = {
//   extends: ['@commitlint/config-conventional'],
// }


module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-empty': [0], // Disable subject validation
      'type-empty': [0],    // Disable type validation
    },
  };
  