document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button')
    let btnText = document.createTextNode('Sing!')
    button.appendChild(btnText);
    button.className = ('btn btn-outline-success')
    document.body.appendChild(button);


   
    function codeSong() {
        let friends = ['Sean', 'Paul', 'Erik', 'Scott', 'Ryan']
        for (f = 0; f < friends.length; f++) {
            let friendsDiv = document.createElement('div');
            friendsDiv.className = ('friends');
            let friendsHeader = document.createElement('h3');
            friendsHeader.innerText = friends[f] + (' ');
            document.body.appendChild(friendsDiv);
            let paragraph = document.getElementsByClassName('friends');
            paragraph[f].appendChild(friendsHeader);
            for (var i = 99; i >= 0; i--) {
                var song = document.createElement('p')
                song.className = ('justify-content-md-center')
                if (i > 2) {
                    song.innerText = (i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file.');
                }
                else if (i === 2) {
                    song.innerText = (i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out, ' + (i - 1) + ' line of code in the file.');
                }
                else {
                    song.innerText = (i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out, ' + ' no more lines of code in the file');
                }
                paragraph[f].appendChild(song)
            }
        }
    }

    button.addEventListener('click', function() {
        codeSong();
    })
})

