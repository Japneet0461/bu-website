document.addEventListener('DOMContentLoaded', function() {
    const departmentName = document.getElementById('department-name');
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const captionInput = document.getElementById('caption');
    const papersList = document.getElementById('papers-list');

    // Get department name from query parameter (you need to implement this logic)
    const department = 'Computer Science'; // Example department name

    // Set department name in the header
    departmentName.textContent = department + ' Papers';

    // Listen for form submission
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const file = fileInput.files[0];
        const caption = captionInput.value;

        if (file && caption) {
            // Call function to upload paper (you need to implement this logic)
            uploadPaper(file, caption);
        } else {
            alert('Please select an image file and enter a caption.');
        }
    });

    // Function to upload paper
    function uploadPaper(file, caption) {
        // Implement logic to upload paper to server (e.g., using AJAX)
        // After successful upload, call function to display the paper
        // In this example, we'll directly display the uploaded image
        const imageUrl = URL.createObjectURL(file);
        displayPaper(imageUrl, caption);
    }

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
document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const captionInput = document.getElementById('caption');

    // Listen for form submission
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const file = fileInput.files[0];
        const caption = captionInput.value;

        if (file && caption) {
            // Call function to upload paper
            uploadPaper(file, caption);
        } else {
            alert('Please select an image file and enter a caption.');
        }
    });

       // Function to save paper data to local storage
    function savePaperData(paperData) {
        let uploadedPapers = JSON.parse(localStorage.getItem('uploadedPapers')) || [];
        uploadedPapers.push(paperData);
        localStorage.setItem('uploadedPapers', JSON.stringify(uploadedPapers));
        alert('Paper uploaded successfully!');
    }
});
