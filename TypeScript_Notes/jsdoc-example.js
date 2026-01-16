// jsdoc-example.js

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @param {number} id
 * @returns {Promise<User>}
 */
async function fetchUser(id) {
  // Simulate API call
  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`,
  };
}

/**
 * @param {User} user
 * @returns {string}
 */
function formatUser(user) {
  return `${user.name} (${user.email})`;
}

// Usage
async function main() {
  const user = await fetchUser(1);
  console.log(formatUser(user)); // User 1 (user1@example.com)
}

main();