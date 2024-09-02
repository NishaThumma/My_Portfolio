// projects.js

// Function to load the JSON data and display it
function loadProjects() {
    fetch('projects.json') // Adjust the path if your JSON file is in a different folder
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');

            // Iterate through the projects array and create HTML elements
            data.projects.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.className = `project ${project.id}`; // Use project id for styling

                projectDiv.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <p><strong>Technologies Used:</strong> ${project.technologies.join(', ')}</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <p><strong>Outcome:</strong> ${project.outcome}</p>
                `;

                projectsContainer.appendChild(projectDiv);
            });
        })
        .catch(error => {
            console.error('Error loading projects:', error);
        });
}

// Call the function to load the projects when the window loads
window.onload = loadProjects;
