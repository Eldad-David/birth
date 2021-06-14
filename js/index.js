function calculatingAkanname () {

    let dd = parseInt(document.getElementById('birthday').value);
    let mm = parseInt(document.getElementById('birthmonth').value);
    let yy = parseInt(document.getElementById('birthyear').value);
    let cc = parseInt(document.getElementById('birthcentury').value);

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    if (dd.value == '' || mm.value == ''|| yy.value == ''|| cc.value == '') {
        alert ('No blank values allowed.');
    }

    let gender = document.querySelector('input[]')
    
}

function getDayandName () {
    
    
    let index = calculatingAkanname ();
    let day = days [index];
    let name = '';
    