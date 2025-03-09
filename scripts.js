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

    // Get the modal
    var modal = document.getElementById("video-modal");

    // Get the link that opens the modal
    var link = document.getElementById("video-link");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the link, open the modal
    if (link) {
        link.onclick = function(event) {
            event.preventDefault();
            modal.style.display = "block";
        }
    }

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});