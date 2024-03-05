$(function(){
    

    var currentTaille = "long";

    var parasLongArray = ["His parents continued to question him. He didn't know what to say to them since they refused to believe the truth. He explained again and again, and they dismissed his explanation as a figment of his imagination. There was no way that grandpa, who had been dead for five years, could have told him where the treasure had been hidden. Of course, it didn't help that grandpa was roaring with laughter in the chair next to him as he tried to explain once again how he'd found it.",
    "Mary had to make a decision and she knew that whatever decision she made, it would upset someone. It seemed like such a silly reason for people to get upset but she knew the minute that she began to consider doing it that there was no way everyone in her life would be pleased with what she ultimately decided to do. It was simply a question of who she would rather displease most. While this had always been her parents, and especially her mom, in the past that she tried to keep from upsetting, she decided that this time the person she was going to please the most with her decision was herself.",
    "There was no ring on his finger. That was a good sign although far from proof that he was available. Still, it was much better than if he had been wearing a wedding ring on his hand. She glanced at his hand a bit more intently to see if there were any tan lines where a ring may have been, and he's simply taken it off. She couldn't detect any which was also a good sign and a relief. The next step would be to get access to his wallet to see if there were any family photos in it.",
    "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.",
    "It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust."];

    var parasMediumArray = ["There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
     "The water rush down the wash and into the slot canyon below. Two hikers had started the day to sunny weather without a cloud in the sky, but they hadn't thought to check the weather north of the canyon. Huge thunderstorms had brought a deluge o rain and produced flash floods heading their way. The two hikers had no idea what was coming.",
     "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
     "The alarm went off at exactly 6:00 AM as it had every morning for the past five years. Barbara began her morning and was ready to eat breakfast by 7:00 AM. The day appeared to be as normal as any other, but that was about to change. In fact, it was going to change at exactly 7:23 AM.",
     "The picket fence had stood for years without any issue. That's all it was. A simple, white, picket fence. Why it had all of a sudden become a lightning rod within the community was still unbelievable to most. Yet a community that had once lived in harmony was now divided in bitter hatred and it had everything to do with the white picket fence."];
     
     var parasSmallArray = ["There was something in the sky. What exactly was up there wasn't immediately clear. But there was definitely something in the sky and it was getting bigger and bigger.",
     "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!",
     "There was something in the sky. What exactly was up there wasn't immediately clear. But there was definitely something in the sky and it was getting bigger and bigger.",
     "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!",
     "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!"];

    var rand = Math.floor(Math.random()*5);
   $('#test_Txt').text(parasLongArray[rand]);
    // $('#test_Txt').text(parasLongArray[0]);
    $('#txtArea').focus();
    //***************INDEX***************
    
    $('#small').on("click",function(){
       "use strict";
       currentTaille = "small";
        $('#index').css('display','none');
        $('#myContent').css('display','block');
        $('#start').css('display','block');
    });
    $('#medium').on("click",function(){
       "use strict";
       currentTaille = "medium";
        $('#index').css('display','none');
        $('#myContent').css('display','block');
        $('#start').css('display','block');
    });
    $('#long').on("click",function(){
       "use strict";
       currentTaille = "long";
        $('#index').css('display','none');
        $('#myContent').css('display','block');
        $('#start').css('display','block');
    });
    
    //***********************************
    
    

    
    //************************************
var testArray = $("#test_Txt").text().trim().split(" ");
var testArray2 = $("#test_Txt").text().trim().split(" ");
 
 $('#btn-play').on('click',function(){
    "use strict";
    rand = Math.floor(Math.random()*5);
    switch(currentTaille)
    {
        case "long":
                     $('#test_Txt').text(parasLongArray[rand]);
            break;
        case "medium":
                     $('#test_Txt').text(parasMediumArray[rand]);
            break;
        case "small":
                     $('#test_Txt').text(parasSmallArray[rand]);
            break;
    }
    // rand = Math.floor(Math.random()*5);
//    $('#test_Txt').text(parasLongArray[rand]);
    // $('#test_Txt').text(parasLongArray[0]);
    $('#txtArea').focus();
     
    testArray = $("#test_Txt").text().trim().split(" ");
    testArray2 = $("#test_Txt").text().trim().split(" ");
     
  $('#compteur').text(60);
     $('#txtArea').val("");
     $('#AffText').text("");
//     $('#test_Txt').css('color','#4a4444');
     $("#test_Txt").html(testArray2.join(" "));
     testArray = testArray2.slice(0,testArray2.length);
     $('#txtArea').css('left','-30px');
     $('#start').css('display','none');
   var interVal1 =  setInterval(function(){
         "use strict";
            var typingArray = $('#txtArea').val().trim().split(" ");
       var cs=0,ca=0;
         if(parseInt($('#compteur').text()) == 0)
             {
                 clearInterval(interVal1);
               for(let i=0 ; i < typingArray.length ; i++)
                        {
                            cs++;
                            if(typingArray[i] == testArray2[i])
                             {
                                 ca++;
                             }
                        }
            var accr  = Math.floor(ca/typingArray.length*100); 
            var speed =Math.floor(cs/testArray2.length*100);
                 if(speed > 100)
                     {
                         $('#speed').text(100+"%");
                     }
                 else
                     if(speed > 2)
                     {
                         $('#speed').text(speed+"%");
                     }
                 else
                     {
                         $('#speed').text(0+"%");
                     }
                 $('#accuracy').text(accr+"%");
                  $('#finish').css('display','block');
                                  
                 if(speed >= 90 && accr >= 90)
                     {
                         $('#like_name').text('MASTER');
                     }
                 else
                     if((speed >= 75 && speed < 90) || (accr >= 75 && accr < 90))
                         {
                             $('#like_name').text('Nice');
                         }
                 else
                     if((speed >= 50 && speed < 75) || (accr >= 50 && accr < 75))
                         {
                             $('#like_name').text('PASSABLE');
                         }
                 else
                     if(speed < 50 || accr < 50)
                         {
                             $('#like_name').text('BEGINNER');
                         }
                     
             }
         else
             {
         if(parseInt($('#compteur').text()) > 10)
             {
                 $('#compteur').text(parseInt($('#compteur').text()) - 1);
                 $('#compteur').css('color','#FFF');
                 
             }
         else
             if((parseInt($('#compteur').text())) > 0)
                 {
                     var x = parseInt($('#compteur').text()) - 1;
                     $('#compteur').text("0"+x);
                     $('#compteur').css('color','#e85454');
                 }
             }
     },1000)
   

 });
    

var cl = 0;
//    
//$('#txtArea').on('keypress',function(e){
//       "use strict";
//        var myArray = $('#txtArea').val().trim().split(" ");
//     if(myArray.length <= testArray2.length)
//         {
//             
//             cl++;
//             var left = parseInt($(this).css('left').substr(0,$(this).css('left').length-2));
//
//             if(cl <= 80)
//                 {
//                     left -= 20;
//                 }
//             else
//                 {
//                     left -=30;
//                 }
//
//             $(this).css('left',+left+"px");
//         }
//});
//    
    
 $('#txtArea').on("keyup",function(e){
    "use strict";

       var myArray = $('#txtArea').val().trim().split(" ");
     if(myArray.length <= testArray2.length)
         {
             
     cl++;
     var left = parseInt($(this).css('left').substr(0,$(this).css('left').length-2));
             
     if(e.keyCode != 20 && e.keyCode != 16 && e.keyCode != 8 && e.keyCode != 39 && e.keyCode != 38 && e.keyCode != 37 && e.keyCode != 40)
         {
             if(cl <= 80)
                 {
                     left -= 20;
                 }
             else
                 {
                     left -=30;
                 }
     
                     $(this).css('left',+left+"px");
         }
      
        if(e.keyCode == 37 && left < -30)
            {
                left += 20;
                $(this).css('left',+left+"px");
            }
             
     var stlArray = [];
     for(var i=0 ; i < myArray.length ; i++)
         {
             if(myArray[i] == testArray2[i])
                 {
                     testArray[i] = "<span style='color:#35cc35;'>"+myArray[i]+"</span>";
                     stlArray.push("<span style='color:#35cc35;'>"+myArray[i]+"</span>");
                 }
             else
                 {
                     testArray[i] = "<span style='color:#ec5555;'>"+testArray2[i]+"</span>";
                     stlArray.push("<span style='color:#ec5555;'>"+myArray[i]+"</span>");
                 }
         }
     $("#test_Txt").html(testArray.join(" "));
     var affArray = stlArray.join(" "); 
     $('#AffText').html(affArray);
                      
         }


 });
     
$("#btn_ret_menu").on("click",function(){
   "use strict";
    $('#myContent').css('display','none');
    $('#index').css('display','block');
});
    
    
$("#ret-menu-from-finish").on("click",function(){
   "use strict";
    $('#myContent').css('display','none');
    $('#finish').css('display','none');
    $('#index').css('display','block');
}); 
    
 $('#restart').on('click',function(){
    "use strict";
    rand = Math.floor(Math.random()*5);
    switch(currentTaille)
    {
        case "long":
                     $('#test_Txt').text(parasLongArray[rand]);
            break;
        case "medium":
                     $('#test_Txt').text(parasMediumArray[rand]);
            break;
        case "small":
                     $('#test_Txt').text(parasSmallArray[rand]);
            break;
    }
    // rand = Math.floor(Math.random()*5);
//    $('#test_Txt').text(parasArray[rand]);
    // $('#test_Txt').text(parasArray[0]);
    $('#txtArea').focus();
     
    testArray = $("#test_Txt").text().trim().split(" ");
    testArray2 = $("#test_Txt").text().trim().split(" ");
     
     $('#compteur').text(60);
     $('#txtArea').val("");
     $('#AffText').text("");
//     $('#test_Txt').css('color','#4a4444');
//     $("#test_Txt").html(testArray2.join(" "));
     testArray = testArray2.slice(0,testArray2.length);
     $('#txtArea').css('left','-30px');
     $('#finish').css('display','none');
   var interVal1 =  setInterval(function(){
         "use strict";
            var typingArray = $('#txtArea').val().trim().split(" ");
       var cs=0,ca=0;
         if(parseInt($('#compteur').text()) == 0)
             {
                 clearInterval(interVal1);
               for(let i=0 ; i < typingArray.length ; i++)
                        {
                            cs++;
                            if(typingArray[i] == testArray2[i])
                             {
                                 ca++;
                             }
                        }
            var accr  = Math.floor(ca/typingArray.length*100); 
            var speed =Math.floor(cs/testArray2.length*100);
                 if(speed > 100)
                     {
                         $('#speed').text(100+"%");
                     }
                 else
                     if(speed > 2)
                     {
                         $('#speed').text(speed+"%");
                     }
                 else
                     {
                         $('#speed').text(0+"%");
                     }
                 $('#accuracy').text(accr+"%");
                  $('#finish').css('display','block');
                 
                 if(speed >= 90 && accr >= 90)
                     {
                         $('#like_name').text('MASTER');
                     }
                 else
                     {
                         $('#like_name').text('BEGINNER');
                     }
            
             }
         else
             {
         if(parseInt($('#compteur').text()) > 10)
             {
                 $('#compteur').text(parseInt($('#compteur').text()) - 1);
                 $('#compteur').css('color','#FFF');
                 
             }
         else
             if((parseInt($('#compteur').text())) > 0)
                 {
                     var x = parseInt($('#compteur').text()) - 1;
                     $('#compteur').text("0"+x);
                     $('#compteur').css('color','#e85454');
                 }
             }
     },1000)

 });
//  *************
 $("#title").click(function(){
     "use strict";
     window.open( window.location.href,"_self");
 });

 $("#get-started").css("background","url('images/back.jpg')");

    $("#btn-getStarted").click(function(){
        "use strict";
        $(this).parent().slideUp(400);
    });
 
$('#copyright-year').text(new Date().getFullYear());
});