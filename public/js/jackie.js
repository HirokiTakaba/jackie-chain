function jackie(){
    var current_data = {};
    function next_question(json){
        current_data = json;
        $("#question").text(json["question"]);
        var answer = json["answer"];
        var num = 2;
        hints = [answer.substring(0, num), answer.substring(num+1, 5)];
        div_hint0 = $("<span/>").text(hints[0]);
        select_button = $('<button id="show-word-buttons">');
        select_button.addClass("select-char");
        div_hint1 = $("<span/>").text(hints[1]);
        template = $("#template");
        template.empty();
        template.append(div_hint0);
        template.append(select_button);
        template.append(div_hint1);
    }

    $("input:button#next").click(function (){
        $.getJSON("/api/v1/next", next_question);
        //$.getJSON("/next.json", next_question);
    });

    $("input:button#check").click(function (){
        alert("check!");
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
}
