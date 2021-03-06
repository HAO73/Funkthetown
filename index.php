<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Funkthetown</title>
<link rel="shortcut icon" type="image/x-icon" href="2.ico" />
<meta name="description" content="Funkthetown est une association, un organisme, un collectif ayant pour but de transmettre la culture musique afin de promouvoir la paix, l'amour et l'harmonie.
Funthetown is an association, an organism, a collective which aim to transmit music culture to promote peace, love and harmony.
Funthetown 是一個協會，一個有機體，一個集體，旨在傳播音樂文化，以促進和平，愛和和諧。
Funthetown は、音楽文化を伝えて平和、愛、調和を促進する団体、生物、集団です。
Funthetown es una asociación, un organismo, un colectivo cuyo objetivo es transmitir la cultura musical para promover la paz, el amor y la armonía.
Funthetown은 평화, 사랑 및 조화를 촉진하기 위해 음악 문화를 전하는 것을 목표로하는 협회, 유기체, 단체입니다.
Funthetown - это ассоциация, организм, коллектив, целью которого является передача музыкальной культуры для содействия миру, любви и гармонии.
Το Funthetown είναι ένας σύλλογος, ένας οργανισμός, ένας συλλογικός οργανισμός που αποσκοπεί στη μετάδοση της μουσικής κουλτούρας για την προώθηση της ειρήνης, της αγάπης και της αρμονίας.
Funkthetown פונטהאון הוא ארגון, אורגניזם, קולקטיב שמטרתו להעביר תרבות מוסיקה לקידום שלום, אהבה והרמוניה.
Funthetown ist ein Verein, ein Organismus, ein Kollektiv, dessen Ziel es ist, Musikkultur zu vermitteln, um Frieden, Liebe und Harmonie zu fördern.
Funthetown هي جمعية ، كائن حي ، وهي جماعة تهدف إلى بث ثقافة الموسيقى لتعزيز السلام والمحبة والوئام.
I-Funthetown iyi-association, i-organic, i-collective ehlose ukudlulisela isiko lomculo ukukhuthaza ukuthula, uthando nokuvumelana.
Funthetown jẹ ajọṣepọ kan, ohun-ara-ara, ẹgbẹ kan ti o fẹ lati ṣe igbasilẹ aṣa orin lati ṣe alafia alafia, ife ati isokan."
 />
<meta name="keywords" content="Musique, FunkTheTown, Funk The Town, Funk, label, association" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/slicknav.css" />
<style type="text/css">

#my_popup
{
	width:1500px;
}

@media screen and (max-width: 600px) {
	#my_popup
	{
		width:300px;
	}
	body
	{
	  background-size: 900%;
	}
}

@media screen and (max-width: 800px) and  (min-width: 600px){
	#my_popup
	{
		width:600px;
	}
	body
	{
	  background-size: 400%;
	}
}
@media screen and (max-width: 1000px) and  (min-width: 800px){
	#my_popup
	{
		width:800px;
	}
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/vast-engineering/jquery-popup-overlay/1.7.13/jquery.popupoverlay.js"></script>
<script src="js/jquery.slicknav.min.js"></script>
<div id="my_popup" style="display:none;">
<a href="Marhaba@Funkthetown.net.html" target="_blank"><img src="/images/popup-ftt.jpg" width="100%" /></a>
</div>

</head>

<body>
	
	
	
	<img id="bg" alt="" src="images/bkg.jpg" />-->
   
	<div class="container">
        <div class="menu-top">
            <ul id="menu">
                <li><a class="scroll" href="https://funkthetown.net/Funkthetown Events.html" target="_blank">events</a></li>
                <li><a class="scroll" href="#music">music</a></li>
                <li><a class="scroll" href="https://funkthetown.net/Funkthetown Clothes.html" target="_blank">clothes</a></li>
                <li><a class="scroll" href="https://discord.gg/qdRW8cN" target="_blank" =>network</a></li>
            </ul>
        </div>
        <div class="logo">
            <img class="logo-img" src="images/logo.png" alt="Logo FunkTheTown" title="FunkTheTown" />
        </div>
        <div class="clearer"></div>
        <div class="menu-bottom">
            <ul id="menu2">
                <li><a class="scroll" href="https://music.youtube.com/playlist?list=PL4bG2ZNGSaKGLw1vm3bbkvrsjBnOxxDs-" target="_blank">radio</a></li>
                <li><a class="scroll" href="#studio">studio</a></li>
                <li><a class="scroll" href="#dream">dream</a></li>
                <li><a class="scroll" href="#school">school</a></li>
                <li><a class="scroll" href="#action">action</a></li>
            </ul>
        </div>
     </div>
		

</body>
<script>
	var combinedMenu = $('#menu').clone();
	var secondMenu = $('#menu2').clone();
	
	secondMenu.children('li').appendTo(combinedMenu);
	
	combinedMenu.slicknav({
		duplicate:false
	});
	//$(document).ready(function() {
	$('.logo-img').on('mouseover', function(){
      // Initialize the plugin
      $('#my_popup').popup({
		setzindex: true,
		transition: 'all 3s',
		horizontal: 'center',
		vertical: 'center',
		backgroundactive:false,
		background:false,
		pagecontainer: 'body',
		escape: true,
		blur: true,
		autoopen: true  
	  })

    });
</script>
			
	
</html>