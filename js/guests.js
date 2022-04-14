const expand = $('.dropdown span')
const dropDown = $('.dropdown-expand')

$(".counter").on('click', function (e) {
    let vars = e.target     // куда тыкнули
    let close = vars.closest('.counter') // родитель куда тукнули
    let count = $(close).children('#count')[0] // счетчик куда тыкнули
    let minus = ($(close).children('#minus')[0]) // минус что бы убирать опасити
    
    if (vars.id == 'pluse') {
       
        
        count.innerText = parseInt(count.innerText) + 1
        
    } else if (vars.id == 'minus') {
        
        if(count.innerText != 0)
            count.innerText = parseInt(count.innerText) - 1
       
    }
     if (parseInt(count.innerText) != 0) {
            $(minus).removeAttr('class')
     } else {
            $(minus).attr('class', 'counter-zero')
    }
    
    $('[id = count]').each(function (i) {
        let summary =+ parseInt(this.innerText)
        parseInt(this.innerText)
        console.log(summary)
    })
})
console.log($('[id = count]'))


expand.click(function () {
    if (dropDown.hasClass('none')) {
        
        dropDown.slideDown({
  start: function () {
    $(this).css({
      display: "flex"
    })
  }
        });
        dropDown.removeClass('none');
        
    } else {
       
         dropDown.slideUp({
  start: function () {
    $(this).css({
      display: "flex"
    })
  }
         });
         dropDown.addClass('none');
    }
//     if(dropDown.hasClass('.none'))
//   dropDown.slideDown(1000)
})
$()