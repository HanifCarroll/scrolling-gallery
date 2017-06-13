var pictures = ["assets/images/1.jpg",
								"assets/images/2.jpg",
								"assets/images/3.jpg",
								"assets/images/4.jpg",
								"assets/images/5.jpg",
								"assets/images/6.jpg",
								"assets/images/7.jpg",
								"assets/images/8.jpg",
								"assets/images/10.jpg",
								"assets/images/11.jpg",
								"assets/images/12.jpg",
								"assets/images/13.jpg",
								"assets/images/14.jpg",
								"assets/images/15.jpg",
								"assets/images/16.jpg",
								"assets/images/17.jpg",
								"assets/images/18.jpg",
								"assets/images/19.jpg",
								"assets/images/20.jpg",
								"assets/images/21.jpg",
								"assets/images/22.jpg",
								"assets/images/23.jpg",
								"assets/images/24.jpg",
								"assets/images/25.jpg",
								"assets/images/26.jpg",
								"assets/images/27.jpg",
								"assets/images/28.jpg",
								"assets/images/29.jpg"];

var picture = document.querySelector("img");

var index = 0;

function slide() {
	picture.setAttribute("src", pictures[index]);
	index++;
	if(index == pictures.length) {
		index = 0;
	}
}

setInterval("slide()", 3000);
