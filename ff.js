document.addEventListener('DOMContentLoaded', function() {
    // Selecting buttons and sections
    const homeButton = document.querySelector('.home');
    const aboutButton = document.querySelector('.about');
    const contButton = document.querySelector('.cont');
    const worButton = document.querySelector('.works');

    const fstButton = document.querySelector('.fst');
    const sndButton = document.querySelector('.snd');
    const trdButton = document.querySelector('.trd');
    const fthButton = document.querySelector('.fth');

    const fstSection = document.querySelector('.fst');
    const sndSection = document.querySelector('.snd');
    const trdSection = document.querySelector('.trd');
    const fthSection = document.querySelector('.fth');

    const fstParagraphs = fstSection.querySelectorAll('p');
    const sndParagraphs = sndSection.querySelectorAll('p');
    const trdParagraphs = trdSection.querySelectorAll('p');
    const fthParagraphs = fthSection.querySelectorAll('p');

    // Function to handle button clicks in button container
    function handleContainerButtonClick(containerButton, targetButton) {
        containerButton.addEventListener('click', function() {
            // Reset all buttons in button container and section buttons
            resetButtons();

            // Highlight the target button in button container
            containerButton.classList.add('highlighted');

            // Highlight the corresponding section button
            if (targetButton) {
                targetButton.classList.add('highlighted');
                targetButton.scrollIntoView({ behavior: 'smooth' });
            }

            // Hide all sections except the corresponding one
            hideSectionsExcept(targetButton);
        });
    }

    // Function to handle section button clicks
    function handleSectionButtonClick(sectionButton, paragraphs) {
        sectionButton.addEventListener('click', function() {
            // Reset all buttons
            resetButtons();

            // Highlight the section button
            sectionButton.classList.add('highlighted');

            // Toggle visibility of paragraphs
            toggleParagraphsVisibility(paragraphs);
        });
    }

    // Function to reset all buttons
    function resetButtons() {
        const allButtons = document.querySelectorAll('.button-container button, .mathi button');
        allButtons.forEach(btn => btn.classList.remove('highlighted'));
    }

    // Function to toggle visibility of paragraphs
    function toggleParagraphsVisibility(paragraphs) {
        paragraphs.forEach(p => {
            if (p.style.display === 'block') {
                p.style.display = 'none'; // Hide paragraph
            } else {
                p.style.display = 'block'; // Show paragraph
            }
        });
    }

    // Function to hide all sections except the specified one
    function hideSectionsExcept(targetButton) {
        const allParagraphs = document.querySelectorAll('.mathi p');
        allParagraphs.forEach(p => {
            if (!targetButton.contains(p)) {
                p.style.display = 'none';
            }
        });
    }

    // Event listeners for each button in button container
    handleContainerButtonClick(homeButton, sndButton);
    handleContainerButtonClick(aboutButton, fstButton);
    handleContainerButtonClick(contButton, trdButton);
    handleContainerButtonClick(worButton, fthButton);

    // Event listeners for each section button
    handleSectionButtonClick(fstButton, fstParagraphs);
    handleSectionButtonClick(sndButton, sndParagraphs);
    handleSectionButtonClick(trdButton, trdParagraphs);
    handleSectionButtonClick(fthButton, fthParagraphs);

    // Initialize paragraphs to be hidden initially
    fstParagraphs.forEach(p => p.style.display = 'none');
    sndParagraphs.forEach(p => p.style.display = 'none');
    trdParagraphs.forEach(p => p.style.display = 'none');
    fthParagraphs.forEach(p => p.style.display = 'none');
});
