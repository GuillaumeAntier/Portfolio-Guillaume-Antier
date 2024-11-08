document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.projet-list a');
    const welcomeSection = document.querySelector('.frame-content-left .welcome');
    const projectSections = document.querySelectorAll('.projet-content');
    const frameContentLeft = document.querySelector('.frame-content-left');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            projectSections.forEach(section => section.style.display = 'none');
            welcomeSection.style.display = 'none';

            const projectId = this.getAttribute('data-id');
            const projectContent = document.getElementById(projectId);

            if (projectContent) {
                frameContentLeft.classList.add('fade-out');

                setTimeout(() => {
                    projectContent.style.display = 'block';
                    frameContentLeft.classList.remove('fade-out');
                }, 500);
            } else {
                welcomeSection.style.display = 'block';
            }
        });
    });
});
