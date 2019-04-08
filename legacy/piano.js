/**
 * Created by yan on 2017/5/14.
 */


var piano = function (content) {
    if (!content) throw "ajax failed, quit.";
    var piano = {};
    // utils
    piano.toEmbedLink = function (link) {
        /**
         * https://www.youtube.com/watch?v=mn-CLAvNknA
         * https://www.youtube.com/embed/mn-CLAvNknA
         */
        return ("https://www.youtube.com/embed/" + link.replace("https://www.youtube.com/watch?v=", ""))
            .replace(/ /g, "")
    };
    piano.$toEmbed = function (link, width, height) {
        /** default embed frame of YouTube
         <iframe width="560" height="315" src="https://www.youtube.com/embed/mn-CLAvNknA" frameborder="0" allowfullscreen></iframe>
         */
        function sprintf(str, arr) {
            var tmp = str.split("%s");
            if (tmp.length !== arr.length + 1) throw "internal error: not enough insertion";
            var i = 1, res = tmp[0];
            for (i; i < tmp.length; i++) {
                res += (arr[i - 1] + tmp[i])
            }
            return res
        }

        width = width || 560;
        height = height || 315;
        return $(sprintf(
            '<iframe width="%s" height="%s" src="%s" frameborder="0" allowfullscreen></iframe>',
            [width, height, piano.toEmbedLink(link)]
        ))
            .css("margin-left", "auto")
            .css("margin-right", "auto")
    };

    // parser
    piano.jsonify = function (data) {
        data = data.split("\n");
        while (data[data.length - 1] === "") {
            data.length--
        }
        var result = [], tmp = [];
        var i;
        for (i = 0; i < data.length; i++) {
            data[i] = data[i].replace(/^ */, "").replace(/ *$/, "");
            if (data[i].length) {
                if (data[i].match(/^----*/)) {
                    if (tmp.length) {
                        result.push(tmp.slice(0));
                        tmp = []
                    }
                } else {
                    tmp.push(data[i])
                }
            }
        }
        if (tmp.length) {
            result.push(tmp.slice(0));
            tmp = []
        }
        return result
    };
    piano.parse = function () { // verified
        var data = piano.jsonify(content);
        var result = [], line = "", key = "", info = "";
        var i, j;
        for (i = 0; i < data.length; i++) {
            result[i] = {};
            for (j = 0; j < data[i].length; j++) {
                if (data[i][j].length) {
                    line = data[i][j];
                    key = line.replace(/( *:[^:]*)*$/, "");
                    info = line.replace(/^ *[A-Za-z]* *: */, "");
                    result[i][key] = (function () {
                        if (key === "video" || key === "link") {
                            return info
                        } else {
                            return info.split(/ *\/ */g)
                        }
                    }())
                }
            }
        }
        return result
    };

    //ui
    piano.dataVisualise = function (parent) {
        parent = parent || $("body");
        var data = piano.parse();
        var i;
        var tmp = {};
        for (i = 0; i < data.length; i++) {
            tmp = data[i];
            parent.append($("<hr />"));
            parent.append(
                (function () {
                    var $div = $("<div></div>")
                        .append(
                            $("<h3></h3>").html(tmp.name.join("  "))
                        )
                        .append(
                            $("<h4></h4>").html(tmp.artist.join("  "))
                        );
                    var $tag = $("<div></div>");
                    for (var i = 0; i < tmp.tag.length; i++) {
                        $tag.append(
                            $('<a class="btn btn-default" href="#" role="button"></a>')
                                .html(tmp.tag[i])
                        )
                    }
                    $div.append($tag)
                        .append(piano.$toEmbed(tmp.video))
                        .append(
                            $("<div></div>")
                                .html($('<a class="btn btn-default yout" href="#" role="button">YouTube</a>'))
                        )
                        .append(
                            $("<div></div>")
                                .html("File")
                                .append(
                                    $('<a class="btn btn-default" role="button"></a>')
                                        .html(tmp.dl)
                                        .attr("href", "file/"+tmp.link)
                                )
                        );

                    return $div
                })()
            )
        }
    };

    piano.ui = function () {
        $("body").html(
            $('<div class="page-header"></div>')
                .html(
                    $("<h1></h1>")
                        .html("Piano <small>a simple site of my work</small>")
                )
        );
        piano.dataVisualise()
    };


    return piano
};


//main
$(document).ready(function () {
    var p;
    var txt = $("body").html();
    $("body").empty();
    $.ajax({
        url: "content.txt",
        async: false,
        cache: false,
        dataType: "text",
        success: function (data, textStatus, jqXHR) {
            p = piano(data); // verified
            p.ui();
            $("body").fadeIn()
        },
        error: function (data, textStatus, jqXHR) {
            p = piano(txt); // verified
            p.ui();
            $("body").fadeIn()
        }
    });
});

