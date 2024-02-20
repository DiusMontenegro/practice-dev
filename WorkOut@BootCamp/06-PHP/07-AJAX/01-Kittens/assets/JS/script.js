$(document).ready(function(){

    $.get('https://fakerapi.it/api/v1/images?_quantity=100&_type=kittens', function (data) {
        let kittens = document.getElementById('kittens');

        if (kittens) {
            for (let i = 0; i < data.data.length; i++) {
                kittens.innerHTML += `
                    <div class="card">
                        <img src="${data.data[i].url}" alt="${data.data[i].title}">
                        <h2>${data.data[i].title}</h2>
                        <p>${data.data[i].description}</p>
                    </div>
                `;
            }
        }
    }, "json")
});
