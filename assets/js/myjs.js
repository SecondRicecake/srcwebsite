//click on button to slide side nav in 
$("#openbtn").on("click", function(){
	$("#sidenav").css("width", "250px");
	
});

//click on button to slide side nav out
$(".closebtn").on("click", function(){
	$("#sidenav").css("width", "0px");
});


//get number of projects
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1dMw8_WzMNQ49-a9MZ0tcZgizis0aPpSYfffbsiLV-t8/pubhtml';
var num;


function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
}

function showInfo(data, tabletop) {
    num = data;
    console.log(num[0]["Total"]);
	var numBacklog = num[0]["Backlog"];
	var numPlanning = num[0]["Planning"];
	var numProgress = num[0]["Progress"];
	var numComplete = num[0]["Complete"];
	//change value in Progress bar
	$("#barBacklog").attr("aria-valuenow", numBacklog * 20).css("width", numBacklog*20+"%");
	$("#barBacklog>span").text(numBacklog);
	$("#barPlanning").attr("aria-valuenow", numPlanning * 20).css("width", numPlanning*20+"%");
	$("#barPlanning>span").text(numPlanning);
	$("#barProgress").attr("aria-valuenow", numProgress * 20).css("width", numProgress*20+"%");
	$("#barProgress>span").text(numProgress);
	$("#barComplete").attr("aria-valuenow", numComplete * 20).css("width", numComplete*20+"%");
	$("#barComplete>span").text(numComplete);
	
}


window.addEventListener('DOMContentLoaded', init);




