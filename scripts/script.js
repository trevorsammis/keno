// declare global variables so you can use them in any function

var timePerSpot = 1000;
var pauseBtwnScenes = 3000;
var kNum = [];
var generatedNums;
var chosenNums = [];
var randomX;
var randomY;
var pointAX;
var pointAY;
var pointBX;
var pointBY;
var kNumIterator = 0;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20;
var spot_holder;
var intervalID;
var intervalID2;
var orderedNums;
var b;

window.onload = function(){

	// string of winning numbers - pulled from LIMS
	generatedNums = "4-15-45-65-62-38-46-35-36-37-52-12-40-7-59-80-17-77-72-10";

	// generatedNums = "1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20";

	// create an array (chosenNums) of winning numbers and remove dashes ("-")
	chosenNums = generatedNums.split("-");

	//kNum is the array of final positions of animations (positions of "numbers")

	// kNum[0] is a dummy
	kNum[0] = {x:0, y:0}

    //=======ROW 1===========
    kNum[1] = { x: 20, y: 32 };
    kNum[2] = { x: 71, y: 32 };
    kNum[3] = { x: 121, y: 32 };
    kNum[4] = { x: 171, y: 32 };
    kNum[5] = { x: 222, y: 32 };
    kNum[6] = { x: 272, y: 32 };
    kNum[7] = { x: 322, y: 32 };
    kNum[8] = { x: 372, y: 32 };
    kNum[9] = { x: 424, y: 32 };
    kNum[10] = { x: 474, y: 32 };
    //====ROW 2 =============
    kNum[11] = { x: 20, y: 72 };
    kNum[12] = { x: 71, y: 72 };
    kNum[13] = { x: 121, y: 72 };
    kNum[14] = { x: 171, y: 72 };
    kNum[15] = { x: 222, y: 72 };
    kNum[16] = { x: 272, y: 72 };
    kNum[17] = { x: 322, y: 72 };
    kNum[18] = { x: 372, y: 72 };
    kNum[19] = { x: 424, y: 72 };
    kNum[20] = { x: 474, y: 72 };
    //======ROW 3============
    kNum[21] = { x: 20, y: 111 };
    kNum[22] = { x: 71, y: 111 };
    kNum[23] = { x: 121, y: 111 };
    kNum[24] = { x: 171, y: 111 };
    kNum[25] = { x: 222, y: 111 };
    kNum[26] = { x: 272, y: 111 };
    kNum[27] = { x: 322, y: 111 };
    kNum[28] = { x: 372, y: 111 };
    kNum[29] = { x: 424, y: 111 };
    kNum[30] = { x: 474, y: 111 };
    //======ROW 4============
    kNum[31] = { x: 20, y: 152 };
    kNum[32] = { x: 71, y: 152 };
    kNum[33] = { x: 121, y: 152 };
    kNum[34] = { x: 171, y: 152 };
    kNum[35] = { x: 222, y: 152 };
    kNum[36] = { x: 272, y: 152 };
    kNum[37] = { x: 322, y: 152 };
    kNum[38] = { x: 372, y: 152 };
    kNum[39] = { x: 424, y: 152 };
    kNum[40] = { x: 474, y: 152 };
    //======ROW 5============
    kNum[41] = { x: 20, y: 192 };
    kNum[42] = { x: 71, y: 192 };
    kNum[43] = { x: 121, y: 192 };
    kNum[44] = { x: 171, y: 192 };
    kNum[45] = { x: 222, y: 192 };
    kNum[46] = { x: 272, y: 192 };
    kNum[47] = { x: 322, y: 192 };
    kNum[48] = { x: 372, y: 192 };
    kNum[49] = { x: 424, y: 192 };
    kNum[50] = { x: 474, y: 192 };
    //======ROW 6============
    kNum[51] = { x: 20, y: 232 };
    kNum[52] = { x: 71, y: 232 };
    kNum[53] = { x: 121, y: 232 };
    kNum[54] = { x: 171, y: 232 };
    kNum[55] = { x: 222, y: 232 };
    kNum[56] = { x: 272, y: 232 };
    kNum[57] = { x: 322, y: 232 };
    kNum[58] = { x: 372, y: 232 };
    kNum[59] = { x: 424, y: 232 };
    kNum[60] = { x: 474, y: 232 };
    //======ROW 7============
    kNum[61] = { x: 20, y: 272 };
    kNum[62] = { x: 71, y: 272 };
    kNum[63] = { x: 121, y: 272 };
    kNum[64] = { x: 171, y: 272 };
    kNum[65] = { x: 222, y: 272 };
    kNum[66] = { x: 272, y: 272 };
    kNum[67] = { x: 322, y: 272 };
    kNum[68] = { x: 372, y: 272 };
    kNum[69] = { x: 424, y: 272 };
    kNum[70] = { x: 474, y: 272 };
    //======ROW 8============
    kNum[71] = { x: 20, y: 311 };
    kNum[72] = { x: 71, y: 311 };
    kNum[73] = { x: 121, y: 311 };
    kNum[74] = { x: 171, y: 311 };
    kNum[75] = { x: 222, y: 311 };
    kNum[76] = { x: 272, y: 311 };
    kNum[77] = { x: 322, y: 311 };
    kNum[78] = { x: 372, y: 311 };
    kNum[79] = { x: 424, y: 311 };
    kNum[80] = { x: 474, y: 311 };

	// grab a reference to each spot
	s1 = document.getElementById("spot_one");
	s2 = document.getElementById("spot_two");
	s3 = document.getElementById("spot_three");
	s4 = document.getElementById("spot_four");
	s5 = document.getElementById("spot_five");
	s6 = document.getElementById("spot_six");
	s7 = document.getElementById("spot_seven");
	s8 = document.getElementById("spot_eight");
	s9 = document.getElementById("spot_nine");
	s10 = document.getElementById("spot_ten");
	s11 = document.getElementById("spot_eleven");
	s12 = document.getElementById("spot_twelve");
	s13 = document.getElementById("spot_thirteen");
	s14 = document.getElementById("spot_fourteen");
	s15 = document.getElementById("spot_fifteen");
	s16 = document.getElementById("spot_sixteen");
	s17 = document.getElementById("spot_seventeen");
	s18 = document.getElementById("spot_eighteen");
	s19 = document.getElementById("spot_nineteen");
	s20 = document.getElementById("spot_twenty");
	
	// put the references to the spots in an array (spot_holder)
	spot_holder = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20,];
	
	// set up timer - controls timing of createSpot() 1000ms / second
	// was 3000
	intervalID = window.setInterval(createSpot, timePerSpot);

	s1.innerHTML = chosenNums[0];
	s2.innerHTML = chosenNums[1];
	s3.innerHTML = chosenNums[2];
	s4.innerHTML = chosenNums[3];
	s5.innerHTML = chosenNums[4];
	s6.innerHTML = chosenNums[5];
	s7.innerHTML = chosenNums[6];
	s8.innerHTML = chosenNums[7];
	s9.innerHTML = chosenNums[8];
	s10.innerHTML = chosenNums[9];
	s11.innerHTML = chosenNums[10];
	s12.innerHTML = chosenNums[11];
	s13.innerHTML = chosenNums[12];
	s14.innerHTML = chosenNums[13];
	s15.innerHTML = chosenNums[14];
	s16.innerHTML = chosenNums[15];
	s17.innerHTML = chosenNums[16];
	s18.innerHTML = chosenNums[17];
	s19.innerHTML = chosenNums[18];
	s20.innerHTML = chosenNums[19];

} // end of window.onload = function()

// determines pointAX and pointAY - starting point of spot animation
// alter numbers here based on dimension of #container old dimensions were width = 1280 height = 640
// new dimensions are width = 640 height = 333
function chooseRandomNums() {
    // each time this function is called, create a new randomX and randomY
    randomX = Math.ceil(Math.random() * 125);
    randomY = Math.ceil(Math.random() * 125);

    // creates random pointA positions.  If ending position (pointB) is on one side of the screen,
    // pointA should be a the other side to ensure animation across the screen.
    if (kNum[chosenNums[kNumIterator]].x < 320) {
        pointAX = randomX + 640;
        //alert("right");
    } else if (kNum[chosenNums[kNumIterator]].x >= 320) {
        pointAX = randomX * -1;
        //alert("left");
    }

    if (kNum[chosenNums[kNumIterator]].y < 166) {
        pointAY = randomY + 333;
        //alert("bottom");
    } else if (kNum[chosenNums[kNumIterator]].y >= 166) {
        //alert("top");
        pointAY = randomY * -2;
    }
}// end chooseRandomNums()

// generate spot -
function createSpot() {
	// get random pointA values
		chooseRandomNums();
		// get X and Y values for PointB
		pointBX = kNum[chosenNums[kNumIterator]].x;
	pointBY = kNum[chosenNums[kNumIterator]].y;
	// turn on visibility of this particular spot
		spot_holder[kNumIterator].style.display = "block";
		// Tween this spot from pointA to pointB
		TweenLite.fromTo(spot_holder[kNumIterator], 2, {left:pointAX, top:pointAY}, {left:pointBX, top:pointBY, immediateRender:false});
	// Iterate kNumInterator
	kNumIterator++;
	// after createSpot() has run 20 times, kill the timer
	// and trigger the second scene after a 10 second delay
	if(kNumIterator > 19)
	{
		window.clearInterval(intervalID);
		intervalID2 = window.setInterval(secondScene, pauseBtwnScenes);
	}
}

// load up winning numbers screen
function secondScene(){
	// organize chosenNums into a numerically ordered array (orderedNums)
	orderedNums = chosenNums.sort(function(a, b){return a-b});
	// get a reference to the whole body
	b = document.getElementById("bod");
	// replace all existing HTML with content for "winning numbers screen"

	b.innerHTML = 
	'<div id="secondScene">' +
	'<p id="win1" class="winningNum">' + orderedNums[0] + '</p>' + 
	'<p id="win2" class="winningNum">' + orderedNums[1] + '</p>' + 
	'<p id="win3" class="winningNum">' + orderedNums[2] + '</p>' + 
	'<p id="win4" class="winningNum">' + orderedNums[3] + '</p>' + 
	'<p id="win5" class="winningNum">' + orderedNums[4] + '</p>' + 
	'<p id="win6" class="winningNum">' + orderedNums[5] + '</p>' + 
	'<p id="win7" class="winningNum">' + orderedNums[6] + '</p>' + 
	'<p id="win8" class="winningNum">' + orderedNums[7] + '</p>' +
	'<p id="win9" class="winningNum">' + orderedNums[8] + '</p>' + 
	'<p id="win10" class="winningNum">' + orderedNums[9] + '</p>' + 
	'<p id="win11" class="winningNum">' + orderedNums[10] + '</p>' + 
	'<p id="win12" class="winningNum">' + orderedNums[11] + '</p>' + 
	'<p id="win13" class="winningNum">' + orderedNums[12] + '</p>' + 
	'<p id="win14" class="winningNum">' + orderedNums[13] + '</p>' + 
	'<p id="win15" class="winningNum" >' + orderedNums[14] + '</p>' + 
	'<p id="win16" class="winningNum">' + orderedNums[15] + '</p>' + 
	'<p id="win17" class="winningNum">' + orderedNums[16] + '</p>' + 
	'<p id="win18" class="winningNum">' + orderedNums[17] + '</p>' + 
	'<p id="win19" class="winningNum">' + orderedNums[18] + '</p>' + 
	'<p id="win20" class="winningNum">' + orderedNums[19] + '</p>' +
	'</div>';

	// kill timer used to delay before second scene arrives
	window.clearInterval(intervalID2);
	
}