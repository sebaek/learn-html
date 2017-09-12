$(document)
    .ready(function () {
        $("#palindrome-alert-yes").hide();
        $("#palindrome-alert-no").hide();

        var navbarListItems = $("nav li");

        navbarListItems.click(function () {
            navbarListItems.removeClass("active");
            $(this).addClass("active");

        });

        $("#load-more").click(function () {
            var url = "http://www.filltext.com/?callback=?";
            
            $.getJSON(url, {
                'rows': 5,
                'fname': '{firstName}',
                'lname': '{lastName}',
                'tel': '{phone|format}'
            })
            .done(function (data) {
                $
                    .each(data, function (i, item) {
                        var html = "<td>" + item.fname + "</td><td>" + item.lname + "</td><td>" + item.tel + "</td>";
                        $("<tr/>")
                            .html(html)
                            .appendTo("#records");
                    });
            });
        });

        $("#palindrome-check-button").click(function () {
            $("#palindrome-alert-no").show();
            // $("palindrome-alert-no").hide();

        });

    });