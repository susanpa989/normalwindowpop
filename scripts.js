addEventListener("click", function() {
    var el = document.documentElement,
        rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen;
    rfs.call(el);
});


$("#footer").fadeIn('slow')
    .animate({
        bottom: 0
    }, 800, function() {
        //callback
    });
$(document).ready(function() {
    $(".arow-div").delay(1000).fadeIn(500);
});


function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, 'mouseout', function(evt) {
    if (evt.toElement == null && evt.relatedTarget == null) {
        $('.lightbox').slideDown();
    };
});