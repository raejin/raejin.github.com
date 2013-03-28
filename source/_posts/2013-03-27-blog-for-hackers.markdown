---
layout: post
title: "Blog for hackers?"
date: 2013-03-27 18:43
comments: true
categories:
---

[Test a link](http://raejin.com "WATCH AND LEARN")
``` python
import sys
import math
inputfile = open('test', 'r')
outputfile = open('test_result', 'w')

def parseCss(line):
    for char in line:
        if char == "{":
            # print char
            outputfile.write("{0}\n\t".format(char))
        elif char == "}":
            # print "\n{0}".format(char)
            outputfile.write(";\n{0}\n".format(char))
        elif char == ";":
            outputfile.write("{0}\n\t".format(char))
        else:
            # sys.stdout.write(char)
            outputfile.write(char)

for line in inputfile:
    parseCss(line)

inputfile.close()
```

``` javascript
function test_function() {
    var fancyVariable = null,
    booleans = Boolean(1);
    var element = document.getElementsByTagName('a');
    alert('This is a test');
}
```

{% gist 5257059 %}

{% codeblock Great code - time.py %}
print 'I hate you let me test to see if there is any overflow issue out there so i have to clean up the mess in order to make things pretty'
{% endcodeblock %}

{% gist 5258085 %}