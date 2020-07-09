/* global document */
var oppo = document.getElementById("message");

document.getElementById("hour").style.display = "none";
document.getElementById("hour-but-a-quarter").style.display = "none";
document.getElementById("quarter-an-hour").style.display = "none";
document.getElementById("half-hour").style.display = "none";


function myFunction() {
	'use strict';
    var x = document.getElementById("duration").selectedIndex,
	    y = document.getElementById("duration").options;
     /*  h = document.getElementById("hour").selectedIndex.options,
      hb = document.getElementById("hour-but-a-quarter").selectedIndex.options,
      half = document.getElementById("half-hour"),
      selected = half.options[half.selectedIndex].value,
      quart = document.getElementById("quarter-an-hour").selectedIndex.options;*/
    if (y[x].index === 1) {
	    document.getElementById("hour").style.display = "none";
	    document.getElementById("hour-but-a-quarter").style.display = "none";
	    document.getElementById("quarter-an-hour").style.display = "none";
	    document.getElementById("half-hour").style.display = "block";
	  //spacificTimeHalf();
      //oppo.textContent = document.getElementById("datepicker").value + " at: ";
		  
       
	} else if (y[x].index === 2) {
		document.getElementById("hour").style.display = "none";
		document.getElementById("half-hour").style.display = "none";
		document.getElementById("quarter-an-hour").style.display = "none";
		document.getElementById("hour-but-a-quarter").style.display = "block";
		// spacificTimeHalfWithQuarter();
		// oppo.textContent = document.getElementById("datepicker").value + " at: " ;
		   
		   
	} else if (y[x].index === 3) {
	    document.getElementById("hour-but-a-quarter").style.display = "none";
	    document.getElementById("half-hour").style.display = "none";
	    document.getElementById("quarter-an-hour").style.display = "none";
	    document.getElementById("hour").style.display = "block";
	   //spacificTimeHoure();
	  //oppo.textContent = document.getElementById("datepicker").value + " at: ";
		      
	} else if (y[x].index === 0) {
		document.getElementById("hour").style.display = "none";
		document.getElementById("hour-but-a-quarter").style.display = "none";
		document.getElementById("half-hour").style.display = "none";
	    document.getElementById("quarter-an-hour").style.display = "block";
		// spacificTimeQuarter();
		// oppo.textContent = document.getElementById("datepicker").value + " at: " ;	   
	}
}

function spacificTimeHalf() {
	'use strict';
    var half = document.getElementById("half-hour"),
        selected1 = half.options[half.selectedIndex].value;
    // alert(selected1)
    oppo.textContent = "In: " + document.getElementById("datepicker").value + " , at: " + selected1;
}
function spacificTimeHour() {
	'use strict';
    var h = document.getElementById("hour"),
        selected2 = h.options[h.selectedIndex].value;
    // alert(selected2)
    oppo.textContent =  "In: " + document.getElementById("datepicker").value + " , at: " + selected2;
}
function spacificTimeHalfWithQuarter() {
	'use strict';
    var  hb = document.getElementById("hour-but-a-quarter"),
        selected3 = hb.options[hb.selectedIndex].value;
    // alert(selected3)
    oppo.textContent = "In: " + document.getElementById("datepicker").value + " , at: " + selected3;
}
function spacificTimeQuarter() {
	'use strict';
    var   quart = document.getElementById("quarter-an-hour"),
        selected4 = quart.options[quart.selectedIndex].value;
    // alert(selected4)
    oppo.textContent = "In: " + document.getElementById("datepicker").value + " , at: " +  selected4;
}
