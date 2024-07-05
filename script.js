function showSection(section) {
    const contentBox = document.getElementById('content-box');
    contentBox.style.display = 'block';
    let content = '';
    
    switch(section) {
        case 'about':
            content = '<h2>About Me</h2><p>This is where you can write about yourself.</p>';
            break;
        case 'work':
            content = '<h2>Work</h2><p>Details about your work go here.</p>';
            break;
        case 'writings':
            content = generateBlogPosts();
            break;
        default:
            ;
    }
    
    contentBox.innerHTML = content;
}

function generateEmbeddedDoc() {
    return `
        <h2>writings</h2>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vTe6tPq55E6PUJ9kalBXOWHGQAtNz8ixg-4yi5z0bbJhGhbBnNtBQcNGh0iaqOTsqkjx8LyBP-WUlie/pub?embedded=true"></iframe>
    `;
}
