function calculatingAkanname () {

    let dd = parseInt(document.getElementById('birthday').value);
    let mm = parseInt(document.getElementById('birthmonth').value);
    let yy = parseInt(document.getElementById('birthyear').value);
    let cc = parseInt(document.getElementById('birthcentury').value);
    let gender = document.getElementById('gender').value;

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let maleName = ['Kwasi''Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let femaleName = ['Akosua''Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    let dayoftheweek = parseInt( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);


    if (dd <=0 || dd > 31) {
        alert('Invalid Entry!!');
    }
    if (mm <= 0 || mm > 12) {
        alert('Invalid Entry!!');
    }
    
    if (gender = 'male') {

        if (dayoftheweek ===0) {
            alert('Heey you were born; ' + days[0]);
            alert ('Your Akan name is; ' + maleName[0]);
        }
        else if (dayoftheweek ===1) {
            alert('Heey you were born; '+ days[1]);
            alert ('Your Akan name is; ' + maleName[1]);
        }
        else if (dayoftheweek ===2) {
            alert('Heey you were born in '+ days[2]);
            alert ('Your Akan name is ' + maleName[2]);
        }
        else if (dayoftheweek ===3) {
            alert('Heey you were born in '+ days[3]);
            alert ('Your Akan name is ' + maleName[3]);
        }
        else if (dayoftheweek ===4) {
            alert('Heey you were born in '+ days[4]);
            alert ('Your Akan name is ' + maleName[4]);
        }
        else if (dayoftheweek ===5) {
            alert('Heey you were born in '+ days[5]);
            alert ('Your Akan name is; ' + maleName[5]);
        }
        else if (dayoftheweek ===6) {
            alert('Heey you were born in '+ days[6]);
            alert ('Your Akan name is ' + maleName[6]);
        }
        else if (dayoftheweek ===7) {
            alert('Heey you were born in '+ days[7]);
            alert ('Your Akan name is; ' + maleName[7]);
        } 
    }
    else {
        if (dayoftheweek ===0) {
            alert('Heey you were born in '+ days[0]);
            alert ('Your Akan name is ' + femaleName[0]);
        }
        else if (dayoftheweek ===1) {
         alert('Heey you were born in '+ days[1]);
            alert ('Your Akan name is ' + femaleName[1]);
        }
        else if (dayoftheweek ===2) {
            alert('Heey you were born in '+ days[2]);
            alert ('Your Akan name is ' + femaleName[2]);
        }
        else if (dayoftheweek ===3) {
            alert('Heey you were born in '+ days[3]);
            alert ('Your Akan name is ' + femaleName[3]);
        }
        else if (dayoftheweek ===4) {
            alert('Heey you were born in '+ days[4]);
            alert ('Your Akan name is ' + femaleName[4]);
        }
        else if (dayoftheweek ===5) {
            alert('Heey you were born in '+ days[5]);
            alert ('Your Akan name is ' + femaleName[5]);
        }
        else if (dayoftheweek ===6) {
            alert('Heey you were born in '+ days[6]);
            alert ('Your Akan name is ' + femaleName[6]);
        }
        else if (dayoftheweek ===7) {
            alert('Heey you were born in '+ days[7]);
            alert ('Your Akan name is ' + femaleName[7]);
        } 
    }
} 
alert (calculatingAkanname());