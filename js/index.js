 let button = {
    content: 'Применить',
    className: 'custom-button-classname',
   onClick: (AirDatepicker) => {
        AirDatepicker.hide()
    }
}
let clear1 = {
  content: e => e.locale.clear,
  onClick: (e)=>{
    e.clear()
    $('#end').val(" дд.мм.гг.")
  }
}

new AirDatepicker('#start', {
  multipleDatesSeparator: ' - ',
    range: true,
    autoClose: false,
    //inline: true,
   
  onSelect({ formattedDate }) {
    $("#start").val(formattedDate[0].split("-"));

    if (formattedDate.length == 2) {
      $("#end").val(formattedDate[1].split(","));
    }
    
  },
  buttons: [ clear1 , button],

  
})
$('.air-datepicker-nav').click(function () {
  console.log($('.air-datepicker--content').css('height'))
  
  let calendarHeight = $('.air-datepicker--content').css('height')
  if (calendarHeight != '216px') {
          console.log('hi')
        $('.air-datepicker-nav').css({ 'margin-bottom': '15px' })
      } else {
          console.log('dssx')
          $('.air-datepicker-nav').css({ 'margin-bottom': '30px' })
        }
      
})
 