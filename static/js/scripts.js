document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.projet-list a');
    const frameContentLeft = document.querySelector('.frame-content-left');
    const frameContentLeftTitle = frameContentLeft.querySelector('h1');
    const frameContentLeftParagraph = frameContentLeft.querySelector('p');

    let currentProject =null;
    const defaultTitle = 'Bienvenue';
    const defaultContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh ante, placerat et vestibulum ultrices, portasit amet neque.\n
    Etiam vestibulum nisi tristique diam sollicitudin, aultrices felis laoreet. Pellentesque semper interdum posuere. Morbi lobortis hendrerit`;

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const title = this.getAttribute('data-title');
            const content = this.getAttribute('data-content');

            frameContentLeftTitle.classList.add('fade-out');
            frameContentLeftParagraph.classList.add('fade-out');

            setTimeout(() => {
                if (currentProject === this) {
                    frameContentLeftTitle.textContent = defaultTitle;
                    frameContentLeftParagraph.innerHTML = defaultContent;
                    currentProject = null;
                } else {
                    frameContentLeftTitle.textContent = title;
                    frameContentLeftParagraph.innerHTML = content;
                    currentProject = this;
                }

                frameContentLeftTitle.classList.remove('fade-out');
                frameContentLeftParagraph.classList.remove('fade-out');
            }, 500);
        });
    });
});