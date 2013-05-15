$(function() {

    var host = location.host;

    var headerLogoClick = function() {
        var hg = $('hgroup');
        console.log(hg.length);
        hg.on('click', function() {
            window.location.href = "http://" + host;
        });
    };

    var externalLinks = function() {

        $('body').on('click', 'a', function(e){
            var href = this.href,
            link = href.replace(/https?:\/\/([^\/]+)(.*)/, '$1');

            if (link !== '' && link !== host) {
                window.open(href);
                e.preventDefault();
            }
        });
    };

    var removeGist = function() {

        $('.gist').prevAll().remove();

    };

    headerLogoClick();
    externalLinks();
    removeGist();
});