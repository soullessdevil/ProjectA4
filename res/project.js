let lastKnownScrollPosition = 0;
let pages = []
let pageAnim = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
let dif = $(page1).offset().top * 0.4
let aliceAnswer = "a1;a2;a3;a4;a5;a6;a7;a8;a9;a10;a11"
let currentAnswer = ""

GetPagesPosition()

window.onresize = GetPagesPosition()

$('#btn').click(function() {   
  $('#div1').animate({width:'toggle'},250);
});

$('#btn2').click(function() {   
  $('#div2').animate({width:'toggle'},250);
});

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
  let curPage = -1
  for(var i = 0; i < pages.length; i++)
  {
    if (lastKnownScrollPosition > pages[i]) curPage = i
  }
  if (pageAnim[curPage]){
    switch(curPage){
      case 0:
        anim_page1()
        break;
      case 1:
        anim_page2()
        break;
      case 2:
        anim_page3()
        break;
      case 3:
        anim_page4()
        break;
      case 4:
        anim_page5()
        break;
      case 5:
        anim_page6()
        break;
      case 6:
        anim_page7()
        break;
      case 7:
        anim_page8()
        break;
      case 8:
        anim_page9()
        break;
      case 9:
        anim_page10()
        break;
      case 10:
        anim_page11()
        break;
      case 11:
        anim_page12()
        break;
      case 12:
        anim_page13()
        break;
      case 13:
        anim_page14()
        break;
      case 14:
        anim_page15()
        break;
      case 15:
        anim_page16()
        break;
      case 16:
        anim_page17()
        break;
      case 17:
        anim_page18()
        break;
      case 18:
        anim_page19()
        break;
      case 19:
        anim_page20()
        break;
      case 20:
        anim_page21()
        break;
    }
    pageAnim[curPage] = false;
  }
})

$(function() {
  $("a[href*='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

function GetPagesPosition() {
  pages = []
  pages.push($(page1).offset().top - dif)
  pages.push($(page2).offset().top - dif)
  pages.push($(page3).offset().top - dif)
  pages.push($(page4).offset().top - dif)
  pages.push($(page5).offset().top - dif)
  pages.push($(page6).offset().top - dif)
  pages.push($(page7).offset().top - dif)
  pages.push($(page8).offset().top - dif)
  pages.push($(page9).offset().top - dif)
  pages.push($(page10).offset().top - dif)
  pages.push($(page11).offset().top - dif)
  pages.push($(page12).offset().top - dif)
  pages.push($(page13).offset().top - dif)
  pages.push($(page14).offset().top - dif)
  pages.push($(page15).offset().top - dif)
  pages.push($(page16).offset().top - dif)
  pages.push($(page17).offset().top - dif)
  pages.push($(page18).offset().top - dif)
  pages.push($(page19).offset().top - dif)
  pages.push($(page20).offset().top - dif)
  pages.push($(page21).offset().top - dif)
}

function anim_page1() {
  $("#page1_text").fadeTo(500, 1, function() {
    $("#page1_img").fadeTo(2000, 1)
    $("#quiz_1").fadeTo(1000, 1)
  })
  
  console.log("Animation on page 1")
}

function anim_page2() {
  $("#page2_text").fadeTo(500, 1, function() {
    $("#page2_img").fadeTo(500, 1, function() {
      $("#page2_img").append("<img src='animations/ds.svg' alt='Изображение'>")
      $("#page2_img").append("<h6>Рис. 2. Сферы деятельности науки о данных</h6>").fadeTo(2000, 1)
    })
  })
  console.log("Animation on page 2")
}

function anim_page3() {
  $("#page3_text").fadeTo(500, 1, function() {
    $("#page3_img").fadeTo(1000, 1)
  })
  console.log("Animation on page 3")
}

function anim_page4() {
  $("#page4_text").fadeTo(500, 1, function() {
    $("#page4_img").fadeTo(500, 1, function() {
      $("#page4_img").append("<img src='animations/ai.svg' alt='Изображение'>")
      $("#page4_img").append("<h6>Рис. 4. Связь науки о данных с искусственным интеллектом</h6>").fadeTo(2000, 1)
    })
  })
  console.log("Animation on page 4")
  
}

function anim_page5() {
  $("#page5_text").fadeTo(500, 1, function() {
    $("#page5_img").fadeTo(1000, 1)
  })
  console.log("Animation on page 5")
}

function anim_page6() {
  $("#page6_text").fadeTo(500, 1, function() {
    $("#alice").fadeTo(1000, 1)
  })
  console.log("Animation on page 6")
}

function anim_page7() { 
  $("#page7_text").fadeTo(500, 1, function() {
    $("#page7_img").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 7")
}

function anim_page8() {
  $("#page8_text").fadeTo(500, 1, function() {
    $("#page8_img").fadeTo(1000, 1)
    $("#fact_1").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 8")
}

function anim_page9() {
  $("#page9_text").fadeTo(500, 1, function() {
    $("#page9_img").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 9")
}

function anim_page10() {
  $("#page10_text").fadeTo(500, 1, function() {
    $("#page10_img").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 10")
}

function anim_page11() {
  $("#page11_text").fadeTo(500, 1, function() {
    $("#page11_img").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 11")
}

function anim_page12() {
  $("#page12_text").fadeTo(500, 1, function() {
    $("#page12_img").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 12")
}

function anim_page13() {
  $("#page13_text").fadeTo(500, 1, function() {
    $("#page13_img").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 13")
}

function anim_page14() {
  $("#page14_text").fadeTo(500, 1, function() {
    $("#page14_img").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 14")
}

function anim_page15() {
  $("#page15_text-1").fadeTo(500, 1, function() {
    $("#page15_img-1").fadeTo(1000, 1, function() {
      $("#page15_text-2").fadeTo(1000, 1, function() {
        $("#page15_img-2").fadeTo(1000, 1)      
      })
    })
  }) 
  console.log("Animation on page 15")
}

function anim_page16() {
  $("#page16_text-1").fadeTo(500, 1, function() {
    $("#page16_img-1").fadeTo(1000, 1, function() {
      $("#page16_text-2").fadeTo(1000, 1, function() {
        $("#page16_img-2").fadeTo(1000, 1)      
      })
    })
  })
  console.log("Animation on page 16")
}

function anim_page17() {
  $("#page17_text-1").fadeTo(500, 1, function() {
    $("#page17_img-1").fadeTo(1000, 1, function() {
      $("#page17_text-2").fadeTo(1000, 1, function() {
        $("#page17_img-2").fadeTo(1000, 1)      
      })
    })
  })
  console.log("Animation on page 17")
}

function anim_page18() {
  $("#page18_text-1").fadeTo(500, 1, function() {
    $("#page18_img-1").fadeTo(1000, 1, function() {
      $("#page18_text-2").fadeTo(1000, 1, function() {
        $("#page18_img-2").fadeTo(1000, 1)      
      })
    })
  })
  console.log("Animation on page 18")
}

function anim_page19() {
  $("#page19_text").fadeTo(500, 1, function() {
    $("#page19_img").fadeTo(1000, 1)
    $("#fact_2").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 19")
}

function anim_page20() {
  $("#page20_text").fadeTo(500, 1, function() {
    $("#page20_img").fadeTo(1000, 1)
  }) 
  console.log("Animation on page 20")
}

function anim_page21() {
  $("#page21_text").fadeTo(500, 1, function() {
    $("#page21_img").fadeTo(1000, 1, function() {
      show_chat()
    })
  }) 
  console.log("Animation on page 21")
}

function ask1() {
  $("#dialog").dialog({
    dialogClass: "no-close",
    buttons: [
      {
        text: "Ясненько",
        click: function() {
          $(this).dialog('close');
        }
      }
    ]
  })
}

$('#image-list1').sortable({
  connectWith: '#image-list1',
  update: function(event, ui) {
    var order = $(this).sortable('toArray');
    currentAnswer = order.join(';');
    if(currentAnswer === aliceAnswer){
      $("#a1").animate({backgroundColor: "#00FF00"}, 200, function() {
        $("#a2").animate({backgroundColor: "#00FF00"}, 200, function() {
          $("#a3").animate({backgroundColor: "#00FF00"}, 200, function() {
            $("#a4").animate({backgroundColor: "#00FF00"}, 200, function() {
              $("#a5").animate({backgroundColor: "#00FF00"}, 200, function() {
                $("#a6").animate({backgroundColor: "#00FF00"}, 200, function() {
                  $("#a7").animate({backgroundColor: "#00FF00"}, 200, function() {
                    $("#a8").animate({backgroundColor: "#00FF00"}, 200, function() {
                      $("#a9").animate({backgroundColor: "#00FF00"}, 200, function() {
                        $("#a10").animate({backgroundColor: "#00FF00"}, 200, function() {
                          $("#a11").animate({backgroundColor: "#00FF00"}, 200, function() { 
                            $("#dialog").dialog({
                              dialogClass: "no-close",
                              buttons: [
                                {
                                  text: "Закрыть",
                                  click: function() {
                                    $(this).dialog('close');
                                  }
                                }
                              ]
                            })
                          })     
                        })        
                      })        
                    })        
                  })        
                })        
              })        
            })        
          })        
        })
      })
    }
  }
});

function quizStart_1 () {
  $("#quiz-dialog").dialog({
    dialogClass: "no-close",
    buttons: [
      {
        text: "Закрыть",
        click: function() {
          $(this).dialog('close');
        }
      }
    ]
  })
}

function dialogShow_2() {
  $("#dialog-1").fadeOut("slow", function(){
    $("#dialog-2").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function dialogShow_2a() {
  $("#dialog-2a").fadeOut("slow", function(){
    $("#dialog-2b").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function dialogShow_3() {
  $("#dialog-2").fadeOut("slow", function(){
    $("#dialog-3").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function dialogShow_3a() {
  $("#dialog-3a").fadeOut("slow", function(){
    $("#dialog-3b").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function dialogShow_4() {
  $("#dialog-3").fadeOut("slow", function(){
    $("#dialog-4").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function dialogShow_4a() {
  $("#dialog-4a").fadeOut("slow", function(){
    $("#dialog-4b").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function dialogShow_5() {
  $("#dialog-4").fadeOut("slow", function(){
    $("#dialog-5").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function dialogShow_6() {
  $("#dialog-5").fadeOut("slow", function(){
    $("#dialog-6").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function dialogShow_6a() {
  $("#dialog-6a").fadeOut("slow", function(){
    $("#dialog-6b").fadeIn("slow")
    $("#dialog").dialog();
  })
}

function quiz1_click(data) {
  switch(data) {
    case 1: 
      $("#qb1").animate({backgroundColor: "red", color: "white"}, 1000)
      break;
    case 2: break;
    case 3: 
      $("#qb3").animate({backgroundColor: "red", color: "white"}, 1000)
      break;
  }
  $("#qb2").animate({backgroundColor: "green", color: "white"}, 1000)
  $("#qa1").fadeIn("slow");
}

function showAnswers() {
  $("#image-list1").fadeOut("slow", function(){
    $("#answer-list").fadeIn("slow")
  })
  $("#showAnswer").fadeOut("slow", function(){
    $("#showList").fadeIn("slow")
  })
}

function showList() {
  $("#answer-list").fadeOut("slow", function(){
    $("#image-list1").fadeIn("slow")
  })
  $("#showList").fadeOut("slow", function(){
    $("#showAnswer").fadeIn("slow")
  })
}

// Chat functions

function chat_b1() {
  $("#chat_b1").fadeOut("fast", function(){
    $("#chat_a1").fadeIn("slow", function(){
      $("#chat_dt1d").fadeIn("slow", function(){
        $("#chat_dt2").fadeIn("slow", function(){
          $("#chat_b2a").fadeIn("slow")
          $("#chat_b2b").fadeIn("slow")
          $("#chat_b2c").fadeIn("slow")
        })
      })
    })
  })
}

function show_chat() {
  $("#chat").fadeIn("slow", function(){
    $("#chat_dt1a").fadeIn("slow", function(){
      $("#chat_dt1b").fadeIn("slow", function(){
        $("#chat_dt1c").fadeIn("slow", function(){
          $("#chat_b1").fadeIn("slow")
        })
      })
    })
  })
}

function chat_b2(data) {
  $("#chat_b2a").fadeOut("fast")
  $("#chat_b2b").fadeOut("fast")
  $("#chat_b2c").fadeOut("fast")
  switch(data) {
    case 1: 
        $("#chat_a2a").fadeIn("slow", function(){
          $("#chat_dt2y").fadeIn("slow", chat_next_question())
        })
      break;
    case 2: 
      $("#chat_a2b").fadeIn("slow", function(){
        $("#chat_dt2n").fadeIn("slow", chat_next_question())
      })
      break;
    case 3: 
      $("#chat_a2c").fadeIn("slow", function(){
        $("#chat_dt2n").fadeIn("slow", chat_next_question())
      })
      break;
  }
}

function chat_next_question(){
  $("#chat_dt3").fadeIn("slow", function(){
    $("#chat_b3a").fadeIn("slow")
    $("#chat_b3b").fadeIn("slow")
    $("#chat_b3c").fadeIn("slow")
  })
}

function chat_b3(data) {
  $("#chat_b3a").fadeOut("fast")
  $("#chat_b3b").fadeOut("fast")
  $("#chat_b3c").fadeOut("fast")
  switch(data) {
    case 1: 
        $("#chat_a3a").fadeIn("slow", function(){
          $("#chat_dt3n").fadeIn("slow", chat_end())
        })
      break;
    case 2: 
      $("#chat_a3b").fadeIn("slow", function(){
        $("#chat_dt3y").fadeIn("slow", chat_end())
      })
      break;
    case 3: 
      $("#chat_a3c").fadeIn("slow", function(){
        $("#chat_dt3n").fadeIn("slow", chat_end())
      })
      break;
  }
}

function chat_end(){
  $("#chat_dt4a").fadeIn("slow", function(){
    $("#chat_dt4b").fadeIn("slow", function(){
      $("#chat_dt4c").fadeIn("slow", function(){
        $("#chat_dt4d").fadeIn("slow", function(){
          $("#status_on").fadeOut("fast", function() {
            $("#status_off").fadeIn("fast")
          })
          $("#chat_b4").fadeIn("slow")
        })
      })
    })
  })
}

function chat_close() {
  $("#chat").fadeOut("fast")
}