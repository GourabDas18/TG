function brightness(x){
    return "brightness(x)";
}
function fstpage(){
    document.getElementById('fst').style.filter = 'brightness(1)';
    document.getElementById('sec').style.filter = 'brightness(0.7)';
    document.getElementById('thr').style.filter = 'brightness(0.7)';
    document.getElementById('frth').style.filter = 'brightness(0.7)';
    document.getElementById('fifth').style.filter = 'brightness(0.7)';
    document.getElementById('six').style.filter = 'brightness(0.7)';
    document.getElementById('item').innerText = 'Step 1';
    document.getElementById('item').style.backgroundColor = '#7f4ec4';
    document.getElementById('name').innerText = 'Enter The Details';
}
function secpage(){
    document.getElementById('fst').style.filter = 'brightness(0.7)';
    document.getElementById('sec').style.filter = 'brightness(1)';
    document.getElementById('thr').style.filter = 'brightness(0.7)';
    document.getElementById('frth').style.filter = 'brightness(0.7)';
    document.getElementById('fifth').style.filter = 'brightness(0.7)';
    document.getElementById('six').style.filter = 'brightness(0.7)'; 
    document.getElementById('item').innerText = 'Step 2';
    document.getElementById('item').style.backgroundColor = '#00a0e3';
    document.getElementById('name').innerText = 'Select Chapters';
}
function thirdpage(){
    document.getElementById('fst').style.filter = 'brightness(0.7)';
    document.getElementById('sec').style.filter = 'brightness(0.7)';
    document.getElementById('thr').style.filter = 'brightness(1)';
    document.getElementById('frth').style.filter = 'brightness(0.7)';
    document.getElementById('fifth').style.filter = 'brightness(0.7)';
    document.getElementById('six').style.filter = 'brightness(0.7)';
    document.getElementById('item').innerText = 'Step 3';
    document.getElementById('item').style.backgroundColor = '#22ab63';
    document.getElementById('name').innerText = 'Select Questions';
}
function forthpage(){
    document.getElementById('fst').style.filter = 'brightness(0.7)';
    document.getElementById('sec').style.filter = 'brightness(0.7)';
    document.getElementById('thr').style.filter = 'brightness(0.7)';
    document.getElementById('frth').style.filter = 'brightness(1)';
    document.getElementById('fifth').style.filter = 'brightness(0.7)';
    document.getElementById('six').style.filter = 'brightness(0.7)';
    document.getElementById('item').innerText = 'Step 4';
    document.getElementById('item').style.backgroundColor = '#fcbf00';
    document.getElementById('infomarks').style.backgroundColor = '#8fcbff';
    document.getElementById('name').innerText = 'Validate Marks';
}
function fifthpage(){
    document.getElementById('fst').style.filter = 'brightness(0.7)';
    document.getElementById('sec').style.filter = 'brightness(0.7)';
    document.getElementById('thr').style.filter = 'brightness(0.7)';
    document.getElementById('frth').style.filter = 'brightness(0.7)';
    document.getElementById('fifth').style.filter = 'brightness(1)';
    document.getElementById('six').style.filter = 'brightness(0.7)';
    document.getElementById('item').innerText = 'Step 5';
    document.getElementById('item').style.backgroundColor = '#ec6a4b';
    document.getElementById('name').innerText = 'Preview Test';
}
function sixpage(){
    document.getElementById('fst').style.filter = 'brightness(0.7)';
    document.getElementById('sec').style.filter = 'brightness(0.7)';
    document.getElementById('thr').style.filter = 'brightness(0.7)';
    document.getElementById('frth').style.filter = 'brightness(0.7)';
    document.getElementById('fifth').style.filter = 'brightness(0.7)';
    document.getElementById('six').style.filter = 'brightness(1)';
    document.getElementById('item').innerText = 'Step 6';
    document.getElementById('item').style.backgroundColor = '#e41c3e';
    document.getElementById('name').innerText = 'Finalize and Save';
}