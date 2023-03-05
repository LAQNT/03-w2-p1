
function totalAlbums() {
    let arrayAlbums = document.querySelectorAll('.carousel img');
    console.log(arrayAlbums);
    let totalAlbums = arrayAlbums.length;
    console.log(totalAlbums);
    
    let spanText = document.querySelector('footer span');
    console.log(spanText);

    return spanText.innerText = 'You listened a total of ' + totalAlbums +' albums';
}

console.log(totalAlbums());