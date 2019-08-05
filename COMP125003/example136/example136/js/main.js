// defining sets of images (galleries)
var images = {
    'set 1' : [
        'pic1.jpg',
        'pic2.jpg',
        'pic3.jpg',
        'pic4.jpg',
        'pic5.jpg',
        'pic6.jpg',
        'pic7.jpg',
        'pic8.jpg',
        'pic9.jpg',
        'pic10.jpg'
    ],
    'set 2' : [
        'pic2.jpg',
        'pic3.jpg',
        'pic4.jpg',
        'pic5.jpg',
        'pic6.jpg',
        'pic7.jpg',
        'pic8.jpg',
        'pic9.jpg',
        'pic10.jpg',
        'pic11.jpg',
        'pic12.jpg',
        'pic5.jpg',
        'pic6.jpg',
        'pic7.jpg',
        'pic8.jpg'
    ],
    'set 3' : [
        'pic1.jpg',
        'pic2.jpg',
        'pic3.jpg',
        'pic4.jpg',
        'pic5.jpg',
        'pic6.jpg',
        'pic7.jpg',
        'pic8.jpg',
        'pic9.jpg',
        'pic10.jpg',
        'pic11.jpg',
        'pic12.jpg',
        'pic4.jpg',
        'pic5.jpg',
        'pic6.jpg'
    ]
};

$(document).ready(function(){ // on document ready
    $('#gallery').gallery();
});


$.fn.gallery = function() {
    var self = this;
    var setimgs;

    this.each(function() {
        var g = this;

        g.load_sets = function(el) { // function - load sets of images
            $.each(images, function(key, value) { 
                $(el).append('<li><a id="'+key+'" href="#" title="'+key+'">'+key+'</a></li>');
            });

            var sets = $(el).find('li a');
            $(sets).click(function() { // binding onclick to our sets
                var set = $(this).attr('id');
                g.setimgs = images[set];
                $(g).find('#thumbs').html('');
                g.load_thumbs($(g).find('#thumbs')[0], 0);

                $(g).find('#loading').html('Loading <strong>1</strong> of '+g.setimgs.length+' images');
            });

            sets[0].click();
        }

        g.load_thumbs = function(el, index) { // function - load thumbs of set
            $(el).append('<li><img id="' + g.setimgs[index] + '" src="images/thumb_' + g.setimgs[index] + '" /></li>');

            var tn = new Image();
            $(tn).load(function() {
                var a = $($(el).find('li')[index]).find('img')[0];
                $(a).append(this);
                $(a).click(function() { // binding onclick to thumbs
                    var i = $(this).attr('id');
                    $(g).find('#photo').attr('src', 'images/'+i);
                    return false;
                });

                if ((index + 1) < g.setimgs.length) {
                    g.load_thumbs(el, (index + 1));
                    $(g).find('#loading strong').html(index + 2);
                } else {
                    $(g).find('#loading').html('Finished loading <strong>' + g.setimgs.length + '</strong> images');
                    $($(g).find('#thumbs li img')[0]).click();
                }
            });
            tn.src = 'images/thumb_' + g.setimgs[index];
        }

        // oninit - load sets for gallery
        g.load_sets($(g).find('#sets')[0]);
    });
};