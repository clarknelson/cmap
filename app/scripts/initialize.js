var $ = require('jquery');

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  // console.log('Initialized app');
});

$(document).ready(()=>{

  var cmap = cmap || {};

  cmap.initSocialShare = function(a) {
    a.find(".share-wrapper").length && (a.find(".share-wrapper").html('\x3cdiv class\x3d"addthis_toolbox"\x3e\x3cul class\x3d"list-unstyled"\x3e\x3cli\x3e\x3ca class\x3d"facebook addthis_button_facebook"\x3eFacebook\x3c/a\x3e\x3cli\x3e\x3ca class\x3d"twitter addthis_button_twitter" tw:via\x3d"GOTO2040"\x3eTwitter\x3c/a\x3e\x3cli\x3e\x3ca class\x3d"google addthis_button_google_plusone_share"\x3eGoogle+\x3c/a\x3e\x3cli\x3e\x3ca class\x3d"pinterest addthis_button_pinterest_share"\x3ePinterest\x3c/a\x3e\x3cli\x3e\x3ca class\x3d"email addthis_button_email"\x3eEmail\x3c/a\x3e\x3c/ul\x3e\x3c/div\x3e'), a.find(".addthis_toolbox").hide());
    a.find(".share a").popover({
      html: !0,
      placement: "bottom"
    }).on("shown.bs.popover", function() {
      $("#social-bookmarks-container").html(a.find(".addthis_toolbox").clone().show());
      var b = b || {};
      b.pubid = "5494611e5b33a7e7";
      addthis.init();
      addthis.toolbox(".addthis_toolbox")
    })
  };

  cmap.initSocialShare($('.breadcrumb-cmap'));

  $("#site-search-button").on("click", function(a) {
    console.log("site-search-button click");
    a.preventDefault();
    document.location = "/search?q\x3d" + escape($("#site-search-input").val())
  });
  $("#site-search-input").on("keypress", function(a) {
    console.log("site-search-input keypress");
    13 == a.which && (document.location = "/search?q\x3d" + escape($("#site-search-input").val()), $(this).blur())
  })
});
console.log('Tasty Brunch, just trying to use jQuery!', $('body'));
