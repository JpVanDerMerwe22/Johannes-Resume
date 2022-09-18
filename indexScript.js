$(document).ready(function (){
    $('#sideNav').css("display", "grid")
    $(".pageContainers").fadeOut("slow")
    $('#bio').fadeIn("slow")
    $("#selected").text("About")
    
    $('#info').click(function(){
        $('#sideNav').fadeIn("slow")
        $(this).text("Home")
    })
    
    $('#mainBox').click(function(){
        $('#sideNav').fadeOut("slow")
        $("#info").text("Show me")
    })

    $("#About").click(function(){
        $(".pageContainers").fadeOut("slow")
        $('#bio').fadeIn("slow")
    })

    $("#educationLink").click(function(){
        $(".pageContainers").fadeOut("slow")
        $("#education").fadeIn("slow")
    })
    $("#experienceLink").click(function(){
        $(".pageContainers").fadeOut("slow")
        $("#experience").fadeIn("slow")
    })
})