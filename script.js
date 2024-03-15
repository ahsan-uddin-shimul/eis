// JavaScript code

//function onloadSearch() {
//	document.getElementById("con-details").style.display = "none";
//}


function search_animal() {
let input = document.getElementById('searchbar').value
input = input.toLowerCase();
let x = document.getElementsByClassName('vehicles');

for (i = 0; i < x.length; i++) {
	if (!x[i].innerHTML.toLowerCase().includes(input)) {
	x[i].style.display = "none";
	}
	else {
	x[i].style.display = "list-item";
	}
}
}

function functionDetails() {
	document.getElementById("con-details").style.display = "block";
}

// ---

function onloadDateCalc() {

	// input the date  
    var dateinput = document.getElementById("dateinput").value;
    
	

    // convert the dates
    var date1 = new Date(dateinput);
    var date2 = new Date();

           
    // calculation of year difference
    var diffyrs = date2.getFullYear() - date1.getFullYear();
   


    document.getElementById("outputFinal").value = diffyrs;



}