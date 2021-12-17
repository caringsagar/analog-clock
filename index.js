
const minHand = document.querySelector(".minHand");
const secHand = document.querySelector(".secHand");
const hrHand = document.querySelector(".hrHand");




// setInterval(() => {
    
//     const date = new Date();
//     const s = date.getSeconds();
//     const h = date.getHours() - 12;
//     const m = date.getMinutes();
  




// }, 1000);


setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
    console.log(hr_rotation);
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hrHand.style.transform = `rotate(${hr_rotation}deg)`;
	minHand.style.transform = `rotate(${min_rotation}deg)`;
	secHand.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
