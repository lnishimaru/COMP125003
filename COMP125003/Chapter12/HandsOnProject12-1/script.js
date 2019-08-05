function display(event) {
    $(event.currentTarget).next().fadeIn("fast");
    //$(event.currentTarget).next().show("slow");

}
$("h3").click(display);