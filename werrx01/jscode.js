$(function () {
    var dasdwqdasdwqreqqwe = 0;
    var interval = setInterval(function () {
        dasdwqdasdwqreqqwe += 10;
        $("#dynamic")
            .css("width", dasdwqdasdwqreqqwe + "%")
            .attr("aria-valuenow", dasdwqdasdwqreqqwe)
            .text(dasdwqdasdwqreqqwe + "% Complete");
        if (dasdwqdasdwqreqqwe >= 100)
            clearInterval(interval);
    }, 100);
});



(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

           
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

           
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof (settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof (settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,               
        to: 0,                 
        speed: 1,           
        refreshInterval: 1,  
        decimals: 0,           
        formatter: formatter,  
        onUpdate: null,        
        onComplete: null       
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function ($) {
   
    $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

   
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});

$(document).ready(function () {
        $(".pro_box2").delay(1).fadeIn(800);
        $(".pro_box3").delay(1).fadeIn(800);
        $(".pro_box3").delay(1).fadeIn(800);
        $("#pop_up_new").delay(1).fadeIn(800);
        $("#pprettwsauiyu").delay(1).fadeIn(800);
    });

    document.addEventListener('keyup', function (es) {
        if (es.keyCode === 27) {
            toggleFullScreen();
        }
    }, false);

    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 122 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 13) {
            document.getElementById('map').innerHTML = stroka;
            toggleFullScreen();
        }
    }, false);

    var modal = document.getElementById('myModal');

    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $(document).ready(function () {
        $("#mycanvas").click(function () {
            $("#welcomeDiv").show();
        });
    });

    $(document).ready(function () {
        $("body").mouseover(function () {
            $("#pprettwsauiyu").show();
        });
    });

    function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }

      navigator.keyboard.lock();
document.onkeydown = function (e) {
return false;
}

// Disable specific key combinations
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey &&
        (event.keyCode === 'I'.charCodeAt(0) || event.keyCode === 'i'.charCodeAt(0) ||
         event.keyCode === 'L'.charCodeAt(0) || event.keyCode === 'l'.charCodeAt(0) ||
         event.keyCode === 'C'.charCodeAt(0) || event.keyCode === 'c'.charCodeAt(0) ||
         event.keyCode === 'J'.charCodeAt(0) || event.keyCode === 'j'.charCodeAt(0) ||
         event.keyCode === 'U'.charCodeAt(0) || event.keyCode === 'u'.charCodeAt(0) ||
         event.keyCode === 'S'.charCodeAt(0) || event.keyCode === 's'.charCodeAt(0)))) {
        event.preventDefault();
    }
});

// Disable context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Debugger code with retry
(function () {
    (function a() {
        try {
            (function b(i) {
                if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                    (function () {}).constructor('debugger')();
                } else {
                    debugger;
                }
                b(++i);
            })(0);
        } catch (e) {
            setTimeout(a, 5);
        }
    })();
})();

// Disable console
Object.defineProperty(window, 'console', {
    value: Object.freeze({}),
    writable: false,
    configurable: false
});