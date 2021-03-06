$(document).ready(function() {
    var copyIconHtml =
        '<span class="CopyIcon"><i class="fa fa-lg fa-clipboard" aria-hidden="false"></i><div class="Tooltip">Copy the content</div></span>'; // The html to append copy button.

    // To append dynamic clipboard icon.
    var codes = document.querySelectorAll(".highlight > pre > code");
    for (var i = 0; i < codes.length; i++) {
        if ($(codes[i]).children().length > 0) {
            // To check it's not from the "text" highlighter.
            $(codes[i])
                .parent("pre")
                .parent('.highlight')
                .prepend(copyIconHtml);
        }
    }

    // Click event for the clipboard icon
    $(".CopyIcon").unbind();
    $(".CopyIcon").click(function(e) {
        $(".Tooltip").text("Copy the content"); // To maintain the general state.
        var textarea = '<textarea value="" class="cpyCode"></textarea>';
        var highlightDiv = $(e.currentTarget).parents(".highlight");
        var data = $(highlightDiv).find("code");
        var copyText = $(data)[0].innerText;
        $(highlightDiv).prepend(textarea);

        var content = $(highlightDiv).find(".cpyCode");
        
        $(content[0]).text(copyText);
        $(content[0]).select();
        document.execCommand("copy");
        $(".cpyCode").remove();
        $($(highlightDiv).find(".Tooltip")).text("Copied !");
    });
});
