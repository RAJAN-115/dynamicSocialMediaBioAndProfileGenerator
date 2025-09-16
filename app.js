const userNameInput = document.getElementById('userName');
const generateBtn = document.getElementById('generateBtn');
const bioTextInput = document.getElementById('bioText');
const interestsInput = document.getElementById('interests');

generateBtn.addEventListener('click', function () {
  const userName = userNameInput.value.trim().toUpperCase();
  const outputBio = document.getElementById('output-bio');
  let bioText = bioTextInput.value.trim();

  if (bioText.trim().includes('developer')) {
    bioText = '(This user is a verified developer)';
  }
  // Corrected line below: we get the value from the input and then split it.
  // const interestsArray = interestsInput.value.split(',').map(interest => interest.trim());
  const interestsList = interestsInput.value
    .split(',')
    .map(interest => interest.trim())
    .join('\n');

  if (userName.length <= 3) {
    outputBio.textContent = `Username must be at least 3 characters long.`;
  } else {
    const fullProfile = `
            Username: ${userName}

            Bio:
            ${bioText}

            Interests:
            ${interestsList}
        `;

    outputBio.textContent = fullProfile;
  }
});
