const simpleGit = require('simple-git');
const git = simpleGit();

document.getElementById('save-note').addEventListener('click', async () => {
  const note = document.getElementById('daily-note').value;

  // For simplicity, let's assume we're committing to a file called `daily-log.txt`
  const fs = require('fs');
  fs.appendFileSync('daily-log.txt', `\n${new Date().toLocaleString()}: ${note}`);

  try {
    // Add, commit, and push changes
    await git.add('./daily-log.txt');
    await git.commit(`Daily log: ${new Date().toLocaleDateString()}`);
    await git.push();
    alert('Note committed and pushed to GitHub!');
  } catch (error) {
    console.error('Error committing or pushing:', error);
    alert('There was an error. Check the console for details.');
  }
});
