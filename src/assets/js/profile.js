$(function() {
    $(".status-item .heading").click(function() {
        var e = $(this),
            i = $(this).parent(".status-item");
        i.hasClass("open") ? (i.removeClass("open"), e.find(".close-status i").addClass("zmdi-chevron-down"), e.find(".close-status i").removeClass("zmdi-chevron-up"), e.parent(".status-item").find(".status-bar").slideDown()) : (i.addClass("open"), e.find(".close-status i").addClass("zmdi-chevron-up"), e.find(".close-status i").removeClass("zmdi-chevron-down"), e.parent(".status-item").find(".status-bar").slideUp())
    }), $(".select-option-link").click(function() { $(".overlay-profile").fadeIn("fast"), $(".selected-names-list").fadeIn("fast") }), $(".selected-names-list .inner").slimScroll({ railVisible: !0, alwaysVisible: !1, position: "left", size: "4px", height: "320px", distance: "12px", railColor: "#468abf", railOpacity: .6, wheelStep: 6 }), $(".select-option-goods").click(function() { $(".overlay-profile").fadeIn("fast"), $(".selected-goods-list").fadeIn("fast") }), $(".selected-goods-list .inner").slimScroll({ railVisible: !0, alwaysVisible: !1, position: "left", size: "4px", height: "220px", distance: "12px", railColor: "#468abf", railOpacity: .6, wheelStep: 6 }), $(".popup-terminal .inner").slimScroll({ railVisible: !0, alwaysVisible: !1, position: "left", size: "4px", height: "90%", distance: "12px", railColor: "#468abf", railOpacity: .6, wheelStep: 6 }), $(".selected-goods-list .heading span").click(function() { $(".overlay-profile").css("display", "none"), $(".selected-goods-list").css("display", "none") }), $(".selected-names-list .heading span").click(function() { $(".overlay-profile").css("display", "none"), $(".selected-names-list").css("display", "none") }), $("#select-address-on-map").click(function() { $(".popup-map-overlay").fadeIn("fast"), $(".popup-map").fadeIn("fast") }), $(".close-map").click(function() { $(".popup-map-overlay").fadeOut("slow"), $(".popup-map").fadeOut("fast") }), $("#select-terminal").click(function() { $(".popup-terminal-overlay").fadeIn("fast"), $(".popup-terminal").fadeIn("fast") }), $(".close-terminal").click(function() { $(".popup-terminal-overlay").fadeOut("slow"), $(".popup-terminal").fadeOut("fast") }), $(".selected-names-list .add-new-name-link").click(function() { $(".add-new-name").slideToggle("fast"), $(this).fadeOut() }), $(".delivery-option input:radio").change(function() {
        var e = $(this),
            i = $(this).attr("id");
        e.is(":checked") && "home-delivery-option" == i ? ($(".receiver-address").css("display", "block"), $(".receiver-address-map #select-address-on-map").css("display", "block"), $(".receiver-address-map #select-terminal").css("display", "none")) : e.is(":checked") && "terminal-delivery-option" == i && ($(".receiver-address").css("display", "none"), $(".receiver-address-map #select-address-on-map").css("display", "none"), $(".receiver-address-map #select-terminal").css("display", "block"))
    }), $("#insurance-ok").change(function() { $(this).is(":checked") && $(".tooltip-pocket-layer").slideDown() }), $("#insurance-not").change(function() { $(this).is(":checked") && $(".tooltip-pocket-layer").slideUp() }), $(".count-pocket-carousel").owlCarousel({ loop: !1, autoplay: !1, autoplayHoverPause: !1, dots: !1, nav: !1, margin: 0, rtl: !0, responsiveClass: !0, responsive: { 0: { items: 3 }, 470: { items: 6 }, 1024: { items: 8 }, 1366: { items: 10 } } }), $(".profile-page .access-menu ul li span").click(function() {
        var e = $(this),
            i = $(this).parent("li");
        i.hasClass("open") ? (i.removeClass("open"), e.find("i").addClass("zmdi-chevron-down"), e.find("i").removeClass("zmdi-chevron-up"), e.parent("li").find("ul:first").slideDown()) : (i.addClass("open"), e.find("i").addClass("zmdi-chevron-up"), e.find("i").removeClass("zmdi-chevron-down"), e.parent("li").find("ul:first").slideUp())
    }), $(".table-list .tbl-row .heading").click(function() { $(this).parent().find(".detail").slideToggle() }), $(".add-new-address").click(function() { $(".new-address-layer").fadeToggle() }), $("#menu-close").click(function(e) { e.preventDefault(), $("#sidebar-wrapper").toggleClass("active") }), $("#menu-toggle").click(function(e) { e.preventDefault(), $("#sidebar-wrapper").toggleClass("active") }), $(".sid").click(function(e) { e.preventDefault(), $("#sidebar-wrapper").toggleClass("active") }), jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="/assets/img/icon-jam.svg" width="10" /></div><div class="quantity-button quantity-down"><img src="/assets/img/icon-kam.svg" width="10" /></div></div>').insertAfter(".quantity input"), jQuery(".quantity").each(function() {
        var s = jQuery(this),
            a = s.find('input[type="number"]'),
            e = s.find(".quantity-up"),
            i = s.find(".quantity-down"),
            t = a.attr("min"),
            n = a.attr("max");
        e.click(function() {
            var e = parseFloat(a.val());
            if (n <= e) var i = e;
            else i = e + 1;
            s.find("input").val(i), s.find("input").trigger("change")
        }), i.click(function() {
            var e = parseFloat(a.val());
            if (e <= t) var i = e;
            else i = e - 1;
            s.find("input").val(i), s.find("input").trigger("change")
        })
    }), $(document).ready(function() { $(".vecl-type-label1").click(function() { setTimeout(function() { $("#myModal3").hasClass("in") && $("#myModal3").modal("hide") }, 3e3) }) }), $(document).ready(function() { $(".vecl-type-label2").click(function() { setTimeout(function() { $("#myModal4").hasClass("in") && $("#myModal4").modal("hide") }, 3e3) }) })
});