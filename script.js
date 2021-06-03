var myMainText = document.getElementById("plot");

function changeText(){
	myMainText.innerText = "It is very difficult to push our creative juices out in a time-constrained, online environment where there is a certain limit to our interactions with one another. While brainstorming ideas for the film, we came up with an idea to capture our thought process at the time. We decided to choose random objects to represent each one of us and we recorded a zoom meeting in which we shared our ideas and  agreed on what we wanted to do for the 30-Minute Film Festival. Thus, it is a film that shows our journey of filming a film."
}

myMainText.addEventListener("click", changeText);