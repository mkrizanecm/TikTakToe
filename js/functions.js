function setImage (element) {
    checkSet();
    document.getElementById(element).innerHTML = "<img class='image' src='icons/x.png'/>";
}

function checkSet () {
    var first_block = document.getElementById('first').innerHTML;
    var second_block = document.getElementById('second').innerHTML;
    var third_block = document.getElementById('third').innerHTML;
    var fourth_block = document.getElementById('fourth').innerHTML;
    var fifth_block = document.getElementById('fifth').innerHTML;
    var sixth_block = document.getElementById('sixth').innerHTML;
    var seventh_block = document.getElementById('seventh').innerHTML;
    var eight_block = document.getElementById('eight').innerHTML;
    var ninth_block = document.getElementById('ninth').innerHTML;

    console.log(ninth_block); return;
}
