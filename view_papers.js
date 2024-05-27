document.addEventListener('DOMContentLoaded', function() {
    const departmentName = document.getElementById('department-name');
    const papersList = document.getElementById('papers-list');
    const authButtons = document.getElementById('auth-buttons');

    // Get department name from query parameter (you need to implement this logic)
    const department = 'Computer Science'; // Example department name

    // Set department name in the header
    departmentName.textContent = department + ' Papers';

    // Sample list of uploaded papers (replace this with your data)
    const uploadedPapers = [
        { imageUrl: 'paper1.jpg', caption: 'Paper 1 Caption' },
        { imageUrl: 'paper2.jpg', caption: 'Paper 2 Caption' },
        // Add more papers as needed
    ];

    // Display uploaded papers
    uploadedPapers.forEach(paper => {
        displayPaper(paper.imageUrl, paper.caption);
    });

    // Function to display paper
    function displayPaper(imageUrl, caption) {
        const paperItem = document.createElement('div');
        paperItem.classList.add('paper-item');
        paperItem.innerHTML = `
            <img src="${imageUrl}" alt="Paper Image">
            <p><strong>Caption:</strong> ${caption}</p>
        `;
        papersList.appendChild(paperItem);
    }

    // Sample logic to check if user is logged in (you need to implement this logic)
    const isLoggedIn = true; // Example: Assume user is logged in

    // Add login and signup buttons if user is not logged in
    if (!isLoggedIn) {
        const loginButton = document.createElement('button');
        loginButton.textContent = 'Login';
        loginButton.addEventListener('click', function() {
            window.location.href = 'login.html'; // Redirect to login page
        });
        authButtons.appendChild(loginButton);

        const signupButton = document.createElement('button');
        signupButton.textContent = 'Signup';
        signupButton.addEventListener('click', function() {
            window.location.href = 'signup.html'; // Redirect to signup page
        });
        authButtons.appendChild(signupButton);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const departmentName = document.getElementById('department-name');
    const papersList = document.getElementById('papers-list');

    // Get department name from query parameter (you need to implement this logic)
    const department = 'Computer Science'; // Example department name

    // Set department name in the header
    departmentName.textContent = department + ' Papers';

    // Retrieve uploaded papers from local storage
    const uploadedPapers = JSON.parse(localStorage.getItem('uploadedPapers')) || [];

    // Display uploaded papers
    uploadedPapers.forEach(paper => {
        displayPaper(paper.imageUrl, paper.caption);
    });

    // Function to display paper
    function displayPaper(imageUrl, caption) {
        const paperItem = document.createElement('div');
        paperItem.classList.add('paper-item');
        paperItem.innerHTML = `
            <img src="${imageUrl}" alt="Paper Image">
            <p><strong>Caption:</strong> ${caption}</p>
        `;
        papersList.appendChild(paperItem);
    }
});
