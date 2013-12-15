function jackie(){
    var current_data = {};
    function next_question(json){
        current_data = json;
        $("#question").text(json["question"]);
        var answer = json["answer"];
        var num = 2;
        hints = [answer.substring(0, num), answer.substring(num+1, answer.length)];
        div_hint0 = $("<span/>").text(hints[0]);
        div_hint0.attr("id", "hint-0");
        select_button = $('<button id="show-word-buttons">');
        select_button.addClass("select-char");
        div_hint1 = $("<span/>").text(hints[1]);
        div_hint1.attr("id", "hint-1");
        template = $("#template");
        template.empty();
        template.append(div_hint0);
        template.append(select_button);
        template.append(div_hint1);
        $("#main_html").removeClass("success");
        $("#main_html").removeClass("fail");
        $("#question").addClass('question-text');
    }

    $("input:button#next").click(function (){
        $.getJSON("/api/v1/next", next_question);
        //$.getJSON("/next.json", next_question);
    });

    $("#check").click(function (){
        ans = $("#hint-0").text() + $("#show-word-buttons").text() + $("#hint-1").text();
        if (ans == current_data["answer"]){
            $("#main_html").addClass("success");
            $("#main_html").removeClass("fail");
            setTimeout(function (){
                alert("正解");
            }, 100);

        }else{
            $("#main_html").addClass("fail");
            $("#main_html").removeClass("success");
            setTimeout(function (){
                alert("不正解: (正解: " + current_data["answer"] + ")");                
            }, 100);
        }
    });

    $(document).on('click', "#show-word-buttons", function (){
        $("#show_buttons").show();
    });

    $("#char-0").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
    
    $("#char-0").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
    
    $("#char-0").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
    
    $("#char-1").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
    
    $("#char-2").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
    
    $("#char-3").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
    
    $("#char-4").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
    
    $("#char-5").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
    
    $("#char-6").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-7").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-8").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-9").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-10").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-11").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-12").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-13").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-14").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-15").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-16").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-17").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-18").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-19").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-20").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-21").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-22").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-23").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-24").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });

    $("#char-25").click(function (){
        txt = $(this).text();
        $("#show-word-buttons").text(txt);
    });
}
