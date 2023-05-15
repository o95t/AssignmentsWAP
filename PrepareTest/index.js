$(document).ready(function () {
    $("button#submit").click(function (e) {

        //     $("h1").hide("slow");
        //     $("h2").show("fast");
        //     $("h2").css("background-color","red")
        //     $(".bes").css({
        //         "color":"red",
        //         "font-size":"120px"
        //     });
        //     //document.getElementById("s").innerHTML = "SS";

        //     var allElements = document.getElementsByTagName("h1");
        //    // allElements[18].innerHTML = "SS";
        //    document.getElementsByTagName("h2")[0].innerHTML = "SS";
        //    var x = document.getElementById("name").value;
        //    //alert(x);

        //    alert(Math.floor(Math.random()*50)+50);
        // for (var i = 0; i < allElements.length; i++) {
        //     //if(i==18)
        //   console.log(allElements[i]);

        //   //console.log(i)



        //}

        $('li').each(function () {
            // Do something with each list item
            console.log($(this).text()); // Prints the text content of the current list item
        });
        $('.fish').before("<li> Issam </li>");
        //alert( $('.fish').children().text());
        //alert( $('.fish').prev().text());
        //alert( $('li:nth-child(2)').detach().text());
        //alert( $('.child').parent().parent().detach().text());
       // alert( $('.child').parent().parent().detach().text());

    });

    $(".test").bind('click', function (e) {

        console.log($(this).value);
        alert($(this)[0].value);
    });

    $("#move_up").click(function () {
        $("#change_me").animate({ top: 30 }, 200);
    });//end move_up
    $("#move_down").click(function () {
        $("#change_me").animate({ top: 500 }, 2000);
    });//end move_down
    $("#color").click(function () {
        $("#change_me").css("color", "purple");
        //$("#change_me").fadeOut();;
    });//end color
    $("#disappear").click(function () {
        $("#change_me").toggle("slow");
    });//end disappear

    $("div").click(function () {
        alert("click Me !!");

        $(this).append("<br><strong> Omar </strong>");
    });
});