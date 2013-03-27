---
layout: post
title: "關於起點"
date: 2013-03-13 00:24
comments: true
categories:
- sayyy
- heyyy
---

我一時之間也不知道該從何寫起，有些想法在腦海裡複誦久了反而不知道怎麼好好地用文字來表達。

關於這個部落格，我想要將它定位成我學習寫程式的記錄，也算是為自己未來的事業開始打草稿。並不覺得我會變成怎樣出眾的人物，但我希望能夠留下些什麼，並且和我有同樣想法的人一起交流。我想要做的事情很多，但在那之前，我必須把我的草稿給打好。先把路給走好了，才能試試看可不可以飛。

從國小就開始接觸網路，和矽谷長大的很多孩子一樣差不多年紀。但在這邊遇到和我同年紀的學生所擁有的經驗和我不能相比，我是從一個軟體沙漠國家來矽谷取經的學生。資質也不特別聰穎，總覺得很多電腦理論的東西學得很不上手，但是能夠在這樣的地方，和一群在這邊長大的人一起經歷還在熱潮上的「矽谷傳奇」是一件很特別的事情。

這幾年矽谷也不再那麼囂張了，反而是舊金山南市場（SOMA）興起的創投熱正在發燒。每每去`Career Fair`都會看到許多正興起被看好的 Startup 正在如火如荼的招生，準備向它們下一個成長目標邁進。每天一睜開眼睛就可以搜尋到幾百個創投，他們正拿到第一筆資金開始準備找人才開始實行他們的創意。若最終仍是不成功，依然能夠帶著豐富的經驗到穩定的大公司謀求一職。總之，只要投入軟體這個產業，沒有餓不死的工程師。只有不敢衝的膽小鬼。

這也可能只是我看到片面的假象，我不懂的東西太多了，只能夠分享我有限的經驗和想像。就以這裡為起點來告訴自己，用一點一滴的經驗來累積我的實力，然後再來分享我拼出來的圖案。

如果我有機會能夠和臺灣的大學生相遇，我希望他們能夠多多看看臺灣以外不同的世界。若你是資工的，就不要讓自己委身在不會進步的公司。軟體的魔力就是人力，GitHub 就是因為有一群熱衷於分享傑作的工程師才強大，每天都有不同的軟體工具因為不同所需而誕生，就是因為擁有幾萬個工程師一起集思廣益集力而成才能讓這個產業這麼蓬勃。Crowd computing 就是這樣的道理，不需要多了不起的電腦，只需要利用幾萬台電腦一點點的運算資源，要演算出一個很複雜的物理公式也就在眨眼之間。資訊需要開放交流才有力量，封閉不但讓你賺不到錢反而是讓社會舉足不前。

但以我的能力我能說的事情太少了，現在我只能多看多作多學，`WATCH AND LEARN`

``` python
import sys

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