/*
ty on purpose! Your code to build the resume will go here
*/
var bio = {
	"name" : "Swati",
	"role"  :  "Web developer" ,
	"contact" : {
	  "mobile" : "408-678-567",
	  "email"   : "swati.tattoo@gmail.com",
	   "github"  : "stattoo",
	   "location" : "San Francisco"

	},

	"welcomeMessage": "I am Swati , excited to start a career",
	"skills": [ "awesomeness", "delivering", "cryogrnic sleep", "fun"],
	"photo": "images/fry.jpg"



}

var education = {
	"schools": [
	{
		"name": "Nova University",
		"city":  "Fort FL",
		"degree":  "Masters",
		"majors" :  ["CS"],
		"dates":   2003,
		"url" : "http://example.com"

	}
	],
	"onlineCourses": [
	{
		"title": "JavaScript Crash Course",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com/course/ud804"

	}
	]
}

var work = {
	"jobs": [

	{
		 "employer": "Planet Express",
		 "title": "Delivery Boy",
		 "dates": "January 3000 - future",
		 "city" : "Brookyln",
		 "description": "who moved ddffsfs sdhgdshgsg hjkfdsfdsffd"
	},
	{
		"employer": "Panuccis Pizza",
		"title": "Delivery boy",
		"dates" : "1998 - December 31 , 1999",
		"city"  : "London",
		"description": "who moved my pizza hdfjhsfhjdsfh"

	}
	]
}
var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates" : "2014",
		"description" : "who moved zjdjfh jmhdsjkhsfs hfhdsfds",
		"images" : "images/pizza7.jpg",

	}
	]
}



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedemail  = HTMLemail.replace("%data%",bio.contact.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedPic  =  HTMLbioPic.replace("%data%", bio.photo);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);







$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);

$("#header").append([formattedPic]);





$("#header").append([formattedWelcomeMsg]);



$("#topContacts").prepend([formattedemail]);
$("#topContacts").prepend([formattedgithub]);
$("#topContacts").prepend([formattedmobile]);
$("#topContacts").append([formattedlocation]);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
     $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);


}

function displayWork(){
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].city);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);


	$(".work-entry:last").append(formattedEmployerTitle);


     $(".work-entry:last").append(formattedDates);

     	$(".work-entry:last").append(formattedLocation);
     	$(".work-entry:last").append(formattedDescription);


}
}

displayWork();




projects.display = function() {

for (project in projects.projects) {

	$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	var formattedprojImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
	$(".project-entry:last").append(formattedTitle);
	$(".project-entry:last").append(formattedDates);
	$(".project-entry:last").append(formattedDescription);
	$(".project-entry:last").append(formattedprojImage);

}
}


projects.display();


education.display = function(){
	for (school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedCity = HTMLschoolLocation.replace("%data%",education.schools[school].city);
	   	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
	    var formattedDates  = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedName);
	    $(".education-entry:last").append(formattedCity);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedMajors);
		$(".education-entry:last").append(formattedDates);

	}


	$("#education").append(HTMLonlineClasses);

	for (onlineCourse in  education.onlineCourses)
	{
	 	$("#education").append(HTMLschoolStart);
	    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
	    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
	    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
	    $(".education-entry:last").append(formattedTitle);
	    $(".education-entry:last").append(formattedSchool);
	    $(".education-entry:last").append(formattedDates);
	}
}

education.display();


$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});






<div id = "mapDiv”>


$("#mapDiv").append(googleMap);



