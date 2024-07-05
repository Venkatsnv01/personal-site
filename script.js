function showSection(event, section) {
    if (event) event.preventDefault();  // Prevent the default link behavior if event is passed
    const contentBox = document.getElementById('content-box');
    contentBox.style.display = 'block';
    let content = '';
    
    switch(section) {
        case 'about':
            content = '<h2>about me</h2><p>write about yourself.</p>';
            break;
        case 'work':
            content = '<h2>work</h2><p>Worked at <a href="https://www.uc.com" target="_blank">uc</a> as a Software Development Engineer.</p>';
            break;
        case 'writings':
            content = generateEmbeddedDoc();
            break;
        default:
            content = '';
    }
    
    contentBox.innerHTML = content;

    // Update the URL without reloading the page
    if (event) {
        history.pushState({section: section}, '', `#${section}`);
    }
}

function generateEmbeddedDoc() {
    return `
        <h2>writings</h2>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vTe6tPq55E6PUJ9kalBXOWHGQAtNz8ixg-4yi5z0bbJhGhbBnNtBQcNGh0iaqOTsqkjx8LyBP-WUlie/pub?embedded=true"></iframe>
    `;
}

// Handle back/forward navigation
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
        showSection(null, event.state.section);
    }
});

// Initial page load: handle the URL path
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.hash.substring(1); // Remove leading '#'
    // Load the corresponding section if path exists
    if (path) {
        showSection(null, path);
    }
});
