$(function() {

    var externalLinks = function() {

        var host = location.host;

        $('body').on('click', 'a', function(e){
            var href = this.href,
            link = href.replace(/https?:\/\/([^\/]+)(.*)/, '$1');

            if (link !== '' && link !== host) {
                window.open(href);
                e.preventDefault();
            }
        });
    }

    externalLinks();

});