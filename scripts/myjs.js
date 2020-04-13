/*
var person = {
	name: "Dwayne",
	age: 59
	}
person = JSON.stringify(person);
person = JSON.parse(person);

console.log(person.name);
var people = [
	{
		name: "Dwayne",
		age: 59
	},
	{
		name: "Carrie",
		age: 54
	},
	{
		name: "Davis",
		age: 24
	}
];

var output = '';
for (var i = 0; i < people.length; i++){
	//console.log(people[i].name);
	output += '<li>'+people[i].name+'</li>';             
}
document.getElementById('people').innerHTML = output;
*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var response = JSON.parse(xhttp.responseText);
    	var people = response.people;

    	var output = '';
			for (var i = 0; i < people.length; i++){
			//console.log(people[i].name);
			output += '<li>'+people[i].name+'</li>';             
		}
		document.getElementById('people').innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();