$(document).ready(function(){
var skillset = {
"languages": [
    {
      "name": "python",
      "skill": 5
    },
    {
      "name": "Scala",
      "skill": 3
    },
    {
      "name": "C",
      "skill": 5
    },
    {
      "name": "C++",
      "skill": 1
    }
  ],
"frameworks": [
    {
      "name": "Django",
      "skill": 4
    },
    {
      "name": "Dash",
      "skill": 1
    },
    {
      "name": "Bootstrap",
      "skill": 4
    },
    {
      "name": "Pyspark",
      "skill": 3
    }
  ],
"databases": [
    {
      "name": "RDS",
      "skill": 5
    },
     {
      "name": "NoSQL",
      "skill": 5
    },
],

"os": [
    {
      "name": "Windows",
      "skill": 5
    },
    {
      "name": "Linux",
      "skill": 5
    },
    {
      "name": "macOS",
      "skill": 5
    },
    {
      "name": "iOS",
      "skill": 4
    }],
		"ML": [
		    {
		      "name": "Deep Learning",
		      "skill": 4
		    },
		    {
		      "name": "Machine learning",
		      "skill": 4
		    },
		    {
		      "name": "NLP",
		      "skill": 3
		    },
		    {
		      "name": "Image Processing",
		      "skill": 2
		    }
  ]
}



for(var i in skillset.languages){
   var percent=(skillset.languages[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.languages[i].name+'</div></div></li>';
   $(str).appendTo($('.languages'));
}

for(var i in skillset.frameworks){
   var percent=(skillset.frameworks[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.frameworks[i].name+'</div></div></li>';
   $(str).appendTo($('.frameworks'));
}
  for(var i in skillset.databases){
   var percent=(skillset.databases[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.databases[i].name+'</div></div></li>';
   $(str).appendTo($('.databases'));
}
    for(var i in skillset.os){
   var percent=(skillset.os[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.os[i].name+'</div></div></li>';
   $(str).appendTo($('.os'));
}

for(var i in skillset.tools){
var percent=(skillset.tools[i].skill*100)/5
var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.tools[i].name+'</div></div></li>';
$(str).appendTo($('.tools'));
}
  $('.skillbar').each(function(){
	$(this).animate({
		width:$(this).attr('data-percent')
	},2000);
});
})