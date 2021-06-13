function calculatingAkanname (day, month, year, century) {
    let dd = day;
    let mm =  month;
    let yy = year;
    let cc = century;
    return ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
}

function getDayandName () {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    let femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'] 
    let gender = "";
    let index = calculatingAkanname ();
    let day = days [index];
    let name = '';
    if (gender === 'Male') {
        name = maleName [index];
    }
    else {
        name = femaleName [index];
    }
}