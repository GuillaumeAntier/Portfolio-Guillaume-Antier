document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.projet-list a');
    const welcomeSection = document.querySelector('.frame-content-left .welcome');
    const projectSections = document.querySelectorAll('.projet-content');
    const frameContentLeft = document.querySelector('.frame-content-left');

    let currentProject = null;

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const projectId = this.getAttribute('data-id');

            if (currentProject === projectId) {
                frameContentLeft.classList.add('fade-out');

                setTimeout(() => {
                    projectSections.forEach(section => section.style.display = 'none');
                    welcomeSection.style.display = 'block';
                    frameContentLeft.classList.remove('fade-out');
                }, 500);

                currentProject = null;
            } else {
                frameContentLeft.classList.add('fade-out');

                setTimeout(() => {
                    projectSections.forEach(section => section.style.display = 'none');
                    welcomeSection.style.display = 'none';

                    const projectContent = document.getElementById(projectId);

                    if (projectContent) {
                        projectContent.style.display = 'block';
                    }

                    frameContentLeft.classList.remove('fade-out');
                }, 500);

                currentProject = projectId;
            }
        });
    });
});