$(document).ready(function() {

  $(".logo-garuda")
  .animate({
    opacity: '1',
    top: '0'
  }, 1000);

  $(".p1").delay(400)
  .animate({
    opacity: '1',
    left: '-30px'
  }, 1000);

  $(".p2").delay(800)
  .animate({
    opacity: '1',
    right: '-30px'
  }, 1000);

  $(window).scroll(function() {

    function isOnViewPort(elemen, offsets) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elemen).offset().top;
      var elemBottom = elemTop + $(elemen).height();

      return (((docViewBottom - elemTop) > offsets) && (elemBottom >= docViewTop));
    }

    // =============================== STRUKTUR =====================================

    if(isOnViewPort($(".light-heading-struktur h2"), 200)) {

      $(".light-heading-struktur h2")
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

    }

    if(isOnViewPort($(".struktur-box"), 400)) {

      $(".people-1")
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

      $(".people-2").delay(400)
      .animate({
        opacity: '1',
        bottom: '0'
      }, 1000);

      $(".people-3").delay(800)
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

      $(".people-4").delay(1200)
      .animate({
        opacity: '1',
        bottom: '0'
      }, 1000);

      $(".people-5").delay(1600)
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

    }

    // ============================= PROGRAM KEGIATAN =======================================

    if(isOnViewPort($(".dark-heading-program"), 100)) {
      $(".dark-heading-program h2")
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

    }

    if(isOnViewPort($(".program-kegiatan-box"), 400)) {

      $(".program-1")
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

      $(".program-2").delay(400)
      .animate({
        opacity: '1',
        bottom: '0'
      }, 1000);

      $(".program-3").delay(800)
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

      $(".program-4").delay(1200)
      .animate({
        opacity: '1',
        bottom: '0'
      }, 1000);

      $(".program-5").delay(1600)
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

    }

    // ============================= PRESTASI =======================================

    if(isOnViewPort($(".light-heading-prestasi"), 100)) {
      $(".light-heading-prestasi h2")
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

    }

    if(isOnViewPort($(".prestasi-box"), 400)) {
      $(".prestasi-first")
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);
    }

    // ============================= KONTAK =======================================

    if(isOnViewPort($(".dark-heading-kontak"), 100)) {
      $(".dark-heading-kontak h2")
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

    }

    if(isOnViewPort($(".kontak-box"), 200)) {

      $(".kontak-1")
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

      $(".kontak-2").delay(400)
      .animate({
        opacity: '1',
        bottom: '0'
      }, 1000);

      $(".kontak-3").delay(800)
      .animate({
        opacity: '1',
        top: '0'
      }, 1000);

      $(".kontak-4").delay(1200)
      .animate({
        opacity: '1',
        bottom: '0'
      }, 1000);

      $(".kontak-alamat").delay(1600)
      .animate({
        opacity: '1',
        bottom: '0'
      }, 1000);

    }

  });

  $("#btnstruktur").click(function() {
    $("html,body").animate({
      scrollTop: $("#struktur").offset().top
    }, 1500);
  });

  $("#btngaleri").click(function() {
    $("html,body").animate({
      scrollTop: $("#prestasi").offset().top
    }, 1500);
  });

  $("#btnprogram").click(function() {
    $("html,body").animate({
      scrollTop: $("#program-kegiatan").offset().top
    }, 1500);
  });

  $("#btnkontak").click(function() {
    $("html,body").animate({
      scrollTop: $("#kontak").offset().top
    }, 1500);
  });

});
