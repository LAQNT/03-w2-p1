// -----footerTotalAlbums---------

function totalAlbums() {
    let arrayAlbums = document.querySelectorAll('.carousel img');
    console.log(arrayAlbums);
    let totalAlbums = arrayAlbums.length;
    console.log(totalAlbums);
    
    let spanText = document.querySelector('footer span');
    console.log(spanText);

    return spanText.innerText = 'You listened a total of ' + totalAlbums +' albums';
}


// -----buttonText---------

function buttonText(btn) {
    
    if (btn.innerHTML == 'Show') {
        btn.innerHTML = 'Hide';
            
    } else if (btn.innerHTML == 'Hide'){
        btn.innerHTML = 'Show';
    }
    

    return btn
}
console.log(totalAlbums());



// -----addGen---------

function albumGenre() {

    let favAlbumCard = document.querySelectorAll('#topAlbums .card-img');

    let genre = 'new';

    
    for (card of favAlbumCard) {
        let nSpan = document.createElement('span');
        nSpan.innerHTML=genre;
        card.appendChild(nSpan);
    }

    return 
}

console.log(albumGenre());



// -----removeSong---------

function deleteTableRow(btn) {
    btn.parentNode.parentNode.remove()
} 


// -----addSong---------

function addSong() {

}



    


