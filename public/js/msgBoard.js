$(document).ready(function()
{
    $("#studentName, #studentMsg").focus(function()
    {
        // console.log("form element focused");

        $(this).css("background","#f3d5bd");
    });
    
    $("#studentName, #studentMsg").blur(function()
    {
        $(this).css("background","#fff");

    });

    $("#sendMsg").click(function()
    {
        var studentName = $("#studentName").val();
        var studentMsg = $("#studentMsg").val();

        // console.log("The Student " + studentName + " wrote: " + studentMsg);

        var msg = "<p class='msg'>" + studentName + ": " + studentMsg + "</p>";

        $("#messageBox").append(msg);
    });

    var colors = ["yellow", "pink", "red", "green"];
    var counter = 0;

    $("#changeBorderColor").click(function()
    {
        changeColors();
    });

    function changeColors()
    {
        console.log(colors[counter]);
        $("p").css("border-color",colors[counter]);
        counter++;

        if (counter > 3)
        {
            counter = 0;
        }
    }
});