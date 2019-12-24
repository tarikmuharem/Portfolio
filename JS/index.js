function startTheColors(){

	setTimeout("stopTheColors()", 2200);
}
function stopTheColors(){
	var elements = document.getElementsByClassName('text');
	for (var i=0;i<elements.length;i+=1){
  		elements[i].style.display = 'block';
	}
}
function switchToAboutMe(){
	var lines = document.getElementsByTagName("svg");
	var home = document.getElementsByClassName('home-home');
	var about = document.getElementsByClassName('about-me');
	var education = document.getElementsByClassName('education');
	var skills = document.getElementsByClassName('skills');
	var projects = document.getElementsByClassName('projects');
	var contact = document.getElementsByClassName('contact-me');
	
	for(var i=0; i<lines.length;i+=1){
		lines[i].style.display = 'none';
	}
	home[0].style.display = 'none';
	about[0].style.display = 'block';
	education[0].style.display = 'none';
	skills[0].style.display = 'none';
	projects[0].style.display = 'none';
	contact[0].style.display = 'none';
}
function switchToEducation(){
	var lines = document.getElementsByTagName("svg");
	var home = document.getElementsByClassName('home-home');
	var about = document.getElementsByClassName('about-me');
	var education = document.getElementsByClassName('education');
	var skills = document.getElementsByClassName('skills');
	var projects = document.getElementsByClassName('projects');
	var contact = document.getElementsByClassName('contact-me');
	
	for(var i=0; i<lines.length;i+=1){
		lines[i].style.display = 'none';
	}
	home[0].style.display = 'none';
	about[0].style.display = 'none';
	education[0].style.display = 'block';
	skills[0].style.display = 'none';
	projects[0].style.display = 'none';
	contact[0].style.display = 'none';
}
function switchToSkills(){
	var lines = document.getElementsByTagName("svg");
	var home = document.getElementsByClassName('home-home');
	var about = document.getElementsByClassName('about-me');
	var education = document.getElementsByClassName('education');
	var skills = document.getElementsByClassName('skills');
	var projects = document.getElementsByClassName('projects');
	var contact = document.getElementsByClassName('contact-me');
	
	for(var i=0; i<lines.length;i+=1){
		lines[i].style.display = 'none';
	}
	home[0].style.display = 'none';
	about[0].style.display = 'none';
	education[0].style.display = 'none';
	skills[0].style.display = 'block';
	projects[0].style.display = 'none';
	contact[0].style.display = 'none';
}
function switchToProjects(){
	var lines = document.getElementsByTagName("svg");
	var home = document.getElementsByClassName('home-home');
	var about = document.getElementsByClassName('about-me');
	var education = document.getElementsByClassName('education');
	var skills = document.getElementsByClassName('skills');
	var projects = document.getElementsByClassName('projects');
	var contact = document.getElementsByClassName('contact-me');
	
	for(var i=0; i<lines.length;i+=1){
		lines[i].style.display = 'none';
	}
	home[0].style.display = 'none';
	about[0].style.display = 'none';
	education[0].style.display = 'none';
	skills[0].style.display = 'none';
	projects[0].style.display = 'block';
	contact[0].style.display = 'none';
}
function switchToContactMe(){
	var lines = document.getElementsByTagName("svg");
	var home = document.getElementsByClassName('home-home');
	var about = document.getElementsByClassName('about-me');
	var education = document.getElementsByClassName('education');
	var skills = document.getElementsByClassName('skills');
	var projects = document.getElementsByClassName('projects');
	var contact = document.getElementsByClassName('contact-me');
	
	for(var i=0; i<lines.length;i+=1){
		lines[i].style.display = 'none';
	}
	home[0].style.display = 'none';
	about[0].style.display = 'none';
	education[0].style.display = 'none';
	skills[0].style.display = 'none';
	projects[0].style.display = 'none';
	contact[0].style.display = 'block';
}
	var position1 = $('li:nth-child(2)').position();
	var left1 = position1.left;
	var position2 = $('li:nth-child(3)').position();
	var left2 = position2.left;
	var sum1 = left1 + left2;
	var middle1 = sum/2;

