function setImage(element) {
    var image = document.getElementById(element).innerHTML;
    if (image == '') {
        var startImage = document.getElementById('start-image').src;
        var fileName = startImage.replace(/^.*[\\\/]/, '');  

        document.getElementById(element).innerHTML = "<img id='image' class='image' src='icons/" + fileName + "'/>";
        checkSet();

        if (fileName == 'o.png') {
            document.getElementById('start-image').outerHTML = "<img id='start-image' class='start-image' src='icons/x.png'/>"
        } else {
            document.getElementById('start-image').outerHTML = "<img id='start-image' class='start-image' src='icons/o.png'/>"
        }
    }
}

function checkSet() {
    var first_block = document.getElementById('first').innerHTML;
    var second_block = document.getElementById('second').innerHTML;
    var third_block = document.getElementById('third').innerHTML;
    var fourth_block = document.getElementById('fourth').innerHTML;
    var fifth_block = document.getElementById('fifth').innerHTML;
    var sixth_block = document.getElementById('sixth').innerHTML;
    var seventh_block = document.getElementById('seventh').innerHTML;
    var eight_block = document.getElementById('eight').innerHTML;
    var ninth_block = document.getElementById('ninth').innerHTML;

    if ((first_block == second_block && first_block == third_block) && (first_block != '' && second_block != '' && third_block != '')) {
        getWinner('first');
    } 

    if ((first_block == fourth_block && first_block == seventh_block) && (first_block != '' && fourth_block != '' && seventh_block != '')) {
        getWinner('first');
    } 

    if ((first_block == fifth_block && first_block == ninth_block) && (first_block != '' && fifth_block != '' && ninth_block != '')) {
        getWinner('first');
    } 
    
    if ((second_block == fifth_block && second_block == eight_block) && (second_block != '' && fifth_block != '' && eight_block != '')) {
        getWinner('second');
    } 

    if ((third_block == fifth_block && third_block == seventh_block) && (third_block != '' && fifth_block != '' && seventh_block != '')) {
        getWinner('third');
    } 

    if ((third_block == sixth_block && third_block == ninth_block) && (third_block != '' && sixth_block != '' && ninth_block != '')) {
        getWinner('third');
    } 

    if ((fourth_block == fifth_block && fourth_block == sixth_block) && (fourth_block != '' && fifth_block != '' && sixth_block != '')) {
        getWinner('fourth');
    } 

    if ((seventh_block == eight_block && seventh_block == ninth_block) && (seventh_block != '' && eight_block != '' && ninth_block != '')) {
        getWinner('seventh');
    }
    
    if (first_block != '' && second_block != '' && third_block != '' && fourth_block != '' && fifth_block != '' && sixth_block != '' && seventh_block != '' && eight_block != '' && ninth_block != '') {
        document.getElementById('result-text').innerHTML = 'The game is tied!';
    }
}

function getWinner(element) {
    if (document.getElementById(element).innerHTML.includes('o.png')) {
        document.getElementById('result-text').innerHTML = 'Letter O won!';
    } else {
        document.getElementById('result-text').innerHTML = 'Letter X won!';
    }
}

function resetGame() {
    document.getElementById('result-text').innerHTML = '';
    document.getElementById('first').innerHTML = '';
    document.getElementById('second').innerHTML = '';
    document.getElementById('third').innerHTML = '';
    document.getElementById('fourth').innerHTML = '';
    document.getElementById('fifth').innerHTML = '';
    document.getElementById('sixth').innerHTML = '';
    document.getElementById('seventh').innerHTML = '';
    document.getElementById('eight').innerHTML = '';
    document.getElementById('ninth').innerHTML = '';
}
