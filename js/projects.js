// Array of project objects
const projects = [
    {
        title: "RakuMon",
        description: "Multi-agent framework for hyper-personalized e-commerce shopping. Customised description and product recommendations.",
        tags: ["Pinecone", "FastAPI", "MistralAI", "RAG", "AI Agents"]
    },
    {
        title: "T_Lib",
        description: "PyTorch without Python. C++ library to perform linear algebra with strided tensors. Supports Auto Differentiation. ",
        tags: ["C++", "CUDA"]
    },
    {
        title: "Quantum Code Editor",
        description: "A futuristic code editor with space-themed syntax highlighting and an integrated terminal for seamless development.",
        tags: ["Electron", "Node.js", "CSS"]
    },
    {
        title: "Stellar Navigation System",
        description: "A mobile app that uses AR to overlay constellations and celestial information when pointed at the night sky.",
        tags: ["React Native", "AR", "GPS"]
    }
];

// Function to load projects into the DOM
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Clear any existing projects
    projectsGrid.innerHTML = '';
    
    // Add each project to the grid
    projects.forEach(project => {
        // Create project tile
        const projectTile = document.createElement('div');
        projectTile.className = 'project-tile';
        
        // Create project content
        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';
        
        // Add title
        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;
        
        // Add description
        const projectDescription = document.createElement('p');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;
        
        // Add tags container
        const projectTags = document.createElement('div');
        projectTags.className = 'project-tags';
        
        // Add individual tags
        project.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'project-tag';
            tagSpan.textContent = tag;
            projectTags.appendChild(tagSpan);
        });
        
        // Assemble the project tile
        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(projectTags);
        projectTile.appendChild(projectContent);
        
        // Add to the grid
        projectsGrid.appendChild(projectTile);
    });
    
    // Apply floating animation to the project tiles
    const projectTiles = document.querySelectorAll('.project-tile');
    projectTiles.forEach((tile, index) => {
        const animDelay = index * 0.1;
        tile.style.animation = `float 4s ease-in-out ${animDelay}s infinite`;
    });
}

// Export the function to be used in other files
// You can call this function from your main JavaScript
if (typeof module !== 'undefined') {
    module.exports = { projects, loadProjects };
}