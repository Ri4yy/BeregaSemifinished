$('.openMenu, .closeMenu, .overlay').click(() => {
    $('.leftMenu').toggleClass('-translate-x-[100%]');
    $('.overlay').toggleClass('opacity-0 pointer-events-none');
    $('html').addClass('overflow-hidden');
    
    $('.overlay, .closeMenu').click(() => {
        $('html').removeClass('overflow-hidden');
    });
    
    // Закрытие поиска в шапке при открытии меню
    $('.searchInput').removeClass('w-full')
    $('.searchInput').val('')
    $('.searchInput').removeClass('w-full')
    $('.search-wrapper').removeClass('w-full')
    $('.formSearch').removeClass('w-full')
    $('.searchResultList').addClass('hidden')
    $('.overlaySearch').addClass('opacity-0 pointer-events-none')
    $('.overlaySearch').removeClass('active_overlay')
});


// Кнопка подробнее в заказах пользователя в ЛК
$('.moreBtn').click((e) => {
    $(e.target).closest('.wrapperOrder').find('.innerOrderInfo').slideToggle();
    $(e.target).find('svg').toggleClass('rotate-180');
});


// Счетчик больше
$('.plusBtn').click((e) => {
    let count = $(e.target).closest('.counterArea').find('input').val();
    if(count < 99) {
        count = +count + 1;
        $(e.target).closest('.counterArea').find('input').val(count)
    } 
})
// Счетчик меньше
$('.minusBtn').click((e) => {
    let count = $(e.target).closest('.counterArea').find('input').val();
    if(count > 0) {
        count = +count - 1;
        $(e.target).closest('.counterArea').find('input').val(count)
    }
})

// Фиксированная шапка
$(function() {
    let header = $('header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 99) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
});

// Поиск в шапке
$('.searchInput').click((e) => {
    $('html').addClass('overflow-hidden');
    $('.header-logo').addClass('hidden')
    $('.searchInput').addClass('w-full')
    $('.search-wrapper').addClass('w-full')
    $('.formSearch').addClass('w-full')

    setTimeout(() => {
        $('.searchResultList').removeClass('hidden')
        $('.overlaySearch').removeClass('opacity-0 pointer-events-none')
    }, 200)

    $('.overlaySearch').addClass('active_overlay')
});

// Закрытие поиска при клике по оверлею
$('.overlaySearch').click((e) => { 
    $('html').removeClass('overflow-hidden');

    setTimeout(() => {
        $('.header-logo').removeClass('hidden')
    }, 100)

    $('.searchInput').removeClass('w-full')
    $('.search-wrapper').removeClass('w-full')
    $('.formSearch').removeClass('w-full')
    $('.searchResultList').addClass('hidden')
    $('.overlaySearch').addClass('opacity-0 pointer-events-none')
    $('.searchInput').val('')
    $('.overlaySearch').removeClass('active_overlay')
});

// Отключение поиска при изменении ширины экрана
$(window).on( "resize", () => {
    if($(window).width() < 1024 && $('.overlaySearch').hasClass('active_overlay')) {
        $('html').removeClass('overflow-hidden');

        setTimeout(() => {
            $('.header-logo').removeClass('hidden')
        }, 100)

        $('.searchInput').removeClass('w-full')
        $('.search-wrapper').removeClass('w-full')
        $('.formSearch').removeClass('w-full')
        $('.searchResultList').addClass('hidden')
        $('.overlaySearch').addClass('opacity-0 pointer-events-none')
        $('.searchInput').val('')
        $('.overlaySearch').removeClass('active_overlay')
    }
} );

// Открытие поиска на мобайл
$('.openMobileSearch, .overlayMobileSearch').click(() => {
    $('.mobileSearch').toggleClass('hidden')
    $('.overlayMobileSearch').toggleClass('hidden pointer-events-none')
    $('.mobileInputSearch').val('')
    $('html').toggleClass('overflow-hidden');

    $(window).on( "resize", () => {
        if($(window).width() > 1024) {
            $('html').removeClass('overflow-hidden');
            $('.mobileInputSearch').val('')
            $('.mobileSearch').addClass('hidden')
            $('.overlayMobileSearch').addClass('hidden pointer-events-none')
        }
    });
})



// Форма регистрации
$('.nextStepReg').click((e) => {
    let val = $(e.target).parents().find('.phoneValue').val();
    if(val.length > 11) {
        console.log('В номере больше 11 символов')
        $('.formReg').toggleClass('hidden')
        $('.formEnterCode').toggleClass('hidden')
        $('.changePhoneStep').toggleClass('hidden')

        $('.confirmElse').click((e) => {
            if ($(e.target).data('confirm') == 'code') {
                console.log('111111')
                $('.formEnterCode').addClass('hidden')
                $('.formEnterDecimal').removeClass('hidden')
            } else if ($(e.target).data('confirm') == 'decimal') {
                console.log('222222')
                $('.formEnterCode').removeClass('hidden');
                $('.formEnterDecimal').addClass('hidden');
            }
        }); 
    } else {
        console.log('В номере меньше 11 символов')
    }
});
    

$('.radio-input').click((e) => {
    if($(e.target).attr('id') == 'pickup') {
        $('.pickupBtn').removeClass('hidden')
        $('.deliveryBtn').addClass('hidden')
    } else {
        $('.pickupBtn').addClass('hidden')
        $('.deliveryBtn').removeClass('hidden')
    }
}); 


$('.nextStepAuth').click((e) => {
    let val = $(e.target).parents().find('.phoneValue').val();
    if (val.length > 11) {
        console.log('В номере больше 11 символов')
        $('.formAuth').toggleClass('hidden')
        $('.formEnterCode').toggleClass('hidden')
        $('.changePhoneStep').toggleClass('hidden')


        $('.confirmElse').click((e) => {
            if ($(e.target).data('confirm') == 'code') {
                console.log('111111')
                $('.formEnterCode').addClass('hidden')
                $('.formEnterDecimal').removeClass('hidden')
            } else if ($(e.target).data('confirm') == 'decimal') {
                console.log('222222')
                $('.formEnterCode').removeClass('hidden');
                $('.formEnterDecimal').addClass('hidden');
            }
        });
    } else {
        console.log('В номере меньше 11 символов')
    }
});

$('.changePhoneStep').click(() => {
    $('.formAuth').toggleClass('hidden')
    $('.formReg').toggleClass('hidden')
    $('.changePhoneStep').toggleClass('hidden')
    $('.formEnterCode').addClass('hidden');
    $('.formEnterDecimal').addClass('hidden');
    $('.phoneValue').val('');
    clearInterval(countdown)
})

let minuteCode = $('.minuteCode'),
    secondCode = $('.secondCode'),
    minuteDigits = $('.minuteDigits'),
    secondDigits = $('.secondDigits');

var phoneValue = $('.phoneValue');

let startPhoneTimer = $('.startPhoneTimer'),
    startCodeTimer = $('.startCodeTimer');

let minutes, seconds;

startPhoneTimer.on('click', (e) => {
    clearInterval(countdown)
    resetTimer(minuteDigits, secondDigits)
    startTime(minuteDigits, secondDigits);
    $('.inputConfirm').each((i, item) => {
        $(item).val('')
    })
});

startCodeTimer.each((t, timer) => {
    $(timer).on('click', (e) => {
        if(phoneValue.val().length > 11) {
            console.log('proverka')
            clearInterval(countdown)
            resetTimer(minuteCode, secondCode)
            startTime(minuteCode, secondCode);
            $('.inputConfirm').each((i, item) => {
                $(item).val('')
            })
        }
    });
})

function resetTimer(clockM, clockS) {
    clearInterval(countdown);
    minutes = '0' + 0;
    seconds = 10;
    clockM.html(minutes);
    clockS.html(seconds);
}

function startTime(clockM, clockS) {
    countdown = setInterval(() => {
        clockM.html(minutes);

        if (seconds < 10) {
            clockS.html('0' + seconds);
        } else {
            clockS.html(seconds);
        }

        console.log(minutes + ":" + seconds);
        if (seconds < 1 && minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (minutes == '00' && seconds === 0) {
            clearInterval(countdown);
            console.log('Время вышло');
            console.log(clockM.parent().parent().find('confirmElse'));
        }
        seconds--;
    }, 1000);
}

var countdown;