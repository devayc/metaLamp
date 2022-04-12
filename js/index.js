
  new AirDatepicker('#start', {
  multipleDatesSeparator: ' - ',
    range: true,
    autoClose: false,
    inline: true,
  onSelect({ formattedDate }) {
    $("#start").val(formattedDate[0].split("-"));
    if (formattedDate.length == 2) {
      $("#end").val(formattedDate[1].split(","));
    }
      
        
  },
  
})

