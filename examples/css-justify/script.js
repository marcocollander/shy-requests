$('button:not(.remove)').on('click', function () {
  $('.example').css('justify-self', $(this).text());
});
