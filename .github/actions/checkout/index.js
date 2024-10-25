// .github/actions/checkout/index.js
const { execSync } = require('child_process');

try {
  execSync('git checkout main', { stdio: 'inherit' });
} catch (error) {
  console.error(`Error checking out the repository: ${error.message}`);
  process.exit(1);
}