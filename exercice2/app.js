async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:9000/api/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                console.log('File uploaded:', result.path);
                fetchFiles();
            } else {
                console.error('Failed to upload file');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function fetchFiles() {
    try {
        const response = await fetch('http://localhost:9000/api/files');
        if (response.ok) {
            const files = await response.json();
            displayFiles(files);
        } else {
            console.error('Failed to fetch files');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayFiles(files) {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    files.forEach(file => {
        const listItem = document.createElement('div');
        listItem.textContent = file;
        fileList.appendChild(listItem);
    });
}

fetchFiles();
