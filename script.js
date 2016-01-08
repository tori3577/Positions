window.onload = function() {
	console.log('song started');
	playOnloadSound();
}

var positionsPics = [
	{picture:'Pictures/69.gif',nam:'поза 69'},
	{picture:'Pictures/position_1.gif',nam:'вариант миссионерской позы'},
	{picture:'Pictures/position_2.gif',nam:'вариант наездницы сидя'},
	{picture:'Pictures/position_3.gif',nam:'тачка с упором'},
	{picture:'Pictures/position_4.gif',nam:'сидя с переворотом'},
	{picture:'Pictures/position_5.gif',nam:'вариация на тему секса спереди сидя'},
	{picture:'Pictures/position_6.gif',nam:'в позе лотоса'},
	{picture:'Pictures/position_7.gif',nam:'давление на клитор'},
	{picture:'Pictures/position_8.gif',nam:'женщина сверху лежа на спине'},
	{picture:'Pictures/position_9.gif',nam:'наездница классическая'},
	{picture:'Pictures/position_10.gif',nam:'крест-накрест сзади'},
	{picture:'Pictures/position_11.gif',nam:'классическая на боку сзади'},
	{picture:'Pictures/position_12.gif',nam:'крестообразная сзади'},
	{picture:'Pictures/position_13.gif',nam:'миссионерская'},
	{picture:'Pictures/position_14.gif',nam:'мужчина сверху, сзади, лежа'},
	{picture:'Pictures/position_15.gif',nam:'мужчина сзади стоя стоя на коленях'},
	{picture:'Pictures/position_16.gif',nam:'вариант позиции сидя'},
	{picture:'Pictures/position_17.gif',nam:'нескладная поза для секса'},
	{picture:'Pictures/position_18.gif',nam:'облегченный вариант классической позы'},
	{picture:'Pictures/position_19.gif',nam:'наездница с разворотом'},
	{picture:'Pictures/position_20.gif',nam:'сидя с разворотом'},
	{picture:'Pictures/position_21.gif',nam:'обратная наездница сидя'},
	{picture:'Pictures/position_22.gif',nam:'офицерская поза'},
	{picture:'Pictures/position_23.gif',nam:'приподнятые ноги'},
	{picture:'Pictures/position_24.gif',nam:'на кресле'},
	{picture:'Pictures/position_25.gif',nam:'из категории Х'},
	{picture:'Pictures/position_26.gif',nam:'полу-Х'},
	{picture:'Pictures/position_27.gif',nam:'раком с переворотом'},
	{picture:'Pictures/position_28.gif',nam:'полу-Х спереди стоя'},
	{picture:'Pictures/position_29.gif',nam:'по-собачьи'},
	{picture:'Pictures/position_30.gif',nam:'ракообразный Х'},
	{picture:'Pictures/position_31.gif',nam:'лежа с переворотом'},
	{picture:'Pictures/position_32.gif',nam:'раком с упором'},
	{picture:'Pictures/position_33.gif',nam:'тандем'},
	{picture:'Pictures/position_34.gif',nam:'тачка'},
	{picture:'Pictures/position_35.gif',nam:'наездница с упором на руки'},
	{picture:'Pictures/position_36.gif',nam:'вариант позы с боку'}
];



function getRandomImage() {
	var index = Math.floor(Math.random() * positionsPics.length);
	  console.log('Current index is ' + index);
	     return positionsPics[index];

}


function playOnloadSound() {
	var startAudio = new Audio('Audiofiles/Winston Jazz Guitar Quartet - Falling in Love (Relaxing Jazz).mp3');
	startAudio.play();
}




function playStartSound() {
	var audio = new Audio('Audiofiles/21522.mp3');
	audio.play();
}



function displayPositions() {
	var image = getRandomImage();
	 var img = image.picture;
	  var name = image.nam;
        document.getElementById('left-pic').setAttribute('src', img);

        document.getElementById('left-text').innerHTML = name;

    var pic = getRandomImage();
        var pose = pic.picture;
            var sexyNam = pic.nam;
        document.getElementById('middle-pic').setAttribute('src', pose);

        document.getElementById('middle-text').innerHTML = sexyNam;

    var sexy = getRandomImage();
       var sexyPic = sexy.picture;
           var text = sexy.nam;
        document.getElementById('right-pic').setAttribute('src', sexyPic);

        document.getElementById('right-text').innerHTML = text;

        playStartSound();  
}

document.getElementById('pause').onclick = function() { changeClass(); }
function changeClass() {
	var butId = document.getElementById('pause');
	var butClass = butId.getAttribute('class');
	    if (butClass == 'colorBut') {
	    	butId.setAttribute('class','pressed');
	    	
	    } else {
	    	butId.setAttribute('class','colorBut');
	    	
	    }
    }

