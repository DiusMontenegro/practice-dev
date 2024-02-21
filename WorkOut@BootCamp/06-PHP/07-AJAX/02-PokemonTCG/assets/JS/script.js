// Programmer: Dius Montenegro
// Date: 02/21/2024

// Document ready function
$(document).ready(function () {
    // Loop to fetch and display Pokémon cards
    for (let i = 1; i < 60; i++) {

        // AJAX request to get Pokémon card data
        $.get(`https://api.pokemontcg.io/v2/cards/ex11-${i}`, function (data) {
            // Extracting relevant data from the API response
            const { id, images, name } = data.data;
            const pokemon = $('#pokemon');

            // Appending Pokémon card and modal to the container
            pokemon.append(`
                <img id="modal_${id}" src="${images.small}" alt="${name}" data-open-modal>
                <dialog id="dialog_${id}" class="pokemon_modal" title="${name}" data-modal>
                    <img id="${id}" src="${images.small}" alt="${name}" data-close-modal>
                </dialog>
            `);

            // Getting references to the modal elements
            const openModal = document.getElementById(`modal_${id}`);
            const closeModal = document.getElementById(`${id}`);
            const modal = document.getElementById(`dialog_${id}`);

            // Event listener to open the modal
            openModal.addEventListener("click", function () {
                modal.showModal();
            });

            // Event listener to close the modal
            closeModal.addEventListener("click", function () {
                modal.close();
            });
        }, 'json');
    }
});
