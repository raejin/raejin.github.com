---
layout: page
title: "discuss"
date: 2013-04-09 01:01
comments: false
sharing: false
footer: false
---
<a class="moot" href="http://api.moot.it/{{ site.moot_user }}"></a>
<script type="text/javascript">
    $(function() {
        $('article').find('header').remove();
        $('.moot').insertAfter('#main');
        $('#content').remove();
    });
</script>
