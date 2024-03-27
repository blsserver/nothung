// ==UserScript==
// @name         new script moritanya
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Execute script from a specific URL
// @author       Your name
// @match        https://*/*
// @match        http://*/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==



(function() {
    'use strict';

    // دالة لتحقيق النقر التلقائي
    function simulateClickOnElement(elementSelector) {
        const element = document.querySelector(elementSelector);
        if (element) {
            element.click();
            console.log('Click simulated successfully.');
        } else {
            console.error('Element not found.');
        }
    }

    // تنفيذ النقر التلقائي عند تحميل الصفحة
    function main() {
        const elementSelectorToClick = '.popupCloseIcon'; // تعديل هنا بمحدد العنصر الذي تريد النقر عليه
        simulateClickOnElement(elementSelectorToClick);
    }

    main();
})();

(function() {
    'use strict';

    // افحص عنوان الصفحة الحالي
    var currentURL = window.location.href;

    // افحص ما إذا كان عنوان الصفحة يطابق الرابط المطلوب
    if (currentURL === 'https://senegal.blsspainvisa.com/french/book_appointment.php') {
        // ابدأ تنفيذ السكريبتات الخاصة بك
        window.addEventListener('load', function() {
            // السكريبت الخاص بك هنا
            var centreSelect = document.getElementById('centre');
            if (centreSelect) {
                centreSelect.value = '31#31';
                centreSelect.dispatchEvent(new Event('change'));
            }
            var categorySelect = document.getElementById('category');
            if (categorySelect) {
                categorySelect.value = 'Normal';
            }
        });
    }
})();



(function() {
    'use strict';

    // افحص عنوان الصفحة الحالي
    var currentURL = window.location.href;

    // افحص ما إذا كان عنوان الصفحة يطابق الرابط المطلوب
    if (currentURL === 'https://oman.blsspainvisa.com/book_appointment.php') {
        // ابدأ تنفيذ السكريبتات الخاصة بك
        window.addEventListener('load', function() {
            // السكريبت الخاص بك هنا
            var centreSelect = document.getElementById('centre');
            if (centreSelect) {
                centreSelect.value = '46#46';
                centreSelect.dispatchEvent(new Event('change'));
            }
            var categorySelect = document.getElementById('category');
            if (categorySelect) {
                categorySelect.value = 'Normal';
            }
        });
    }
})();


(function() {
    'use strict';

    // افحص عنوان الصفحة الحالي
    var currentURL = window.location.href;

    // افحص ما إذا كان عنوان الصفحة يطابق الرابط المطلوب
    if (currentURL === 'https://mr.blsspainvisa.com/book_appointment.php') {
        // ابدأ تنفيذ السكريبتات الخاصة بك
        window.addEventListener('load', function() {
            // السكريبت الخاص بك هنا
            var centreSelect = document.getElementById('centre');
            if (centreSelect) {
                centreSelect.value = '37#37';
                centreSelect.dispatchEvent(new Event('change'));
            }
            var categorySelect = document.getElementById('category');
            if (categorySelect) {
                categorySelect.value = 'Normal';
            }
        });
    }
})();


(function() {
    'use strict';

    window.addEventListener('load', function() {
        // تأخير التنفيذ لمدة ثانيتين (2000 مللي ثانية)
        setTimeout(function() {
            // ابحث عن عنصر القائمة المنسدلة باستخدام معرف العنصر
            var categorySelect = document.getElementById('category');

            // تأكد من وجود العنصر
            if (categorySelect) {
                // قم بتعيين القيمة إلى "Normal"
                categorySelect.value = 'Normal';
            }
        }, 1000); // ثانيتان (2000 مللي ثانية)
    });
})();


(function() {
    'use strict';

    // يستبدل هذا بالنص الذي يحتوي على الكلمات الرئيسية للزر الذي تريد النقر عليه
    var buttonText = "I agree to provide my Consent";

    // العثور على جميع الأزرار في الصفحة
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        // التحقق مما إذا كان نص الزر يحتوي على الكلمات الرئيسية
        if (buttons[i].textContent.includes(buttonText)) {
            // النقر التلقائي على الزر
            buttons[i].click();
            break;
        }
    }
})();



(function() {
    'use strict';

    window.addEventListener('load', function() {
        // ابحث عن عنصر القائمة المنسدلة باستخدام اسم العنصر
        var visaTypeSelect = document.getElementById('VisaTypeId');

        // تأكد من وجود العنصر
        if (visaTypeSelect) {
            // قم بتعيين القيمة إلى "247" التي تمثل "Tourist" كقيمة افتراضية
            visaTypeSelect.value = '206';'247';


            // إطلاق حدث change لتأكيد الاختيار
            var changeEvent = new Event('change');
            visaTypeSelect.dispatchEvent(changeEvent);
        }

    });
})();



(function() {
    'use strict';

    window.addEventListener('load', function() {
        // ابحث عن عنصر خانة الاختيار باستخدام معرف العنصر
        var courierCheckbox = document.getElementById('courierId');

        // تأكد من وجود العنصر
        if (courierCheckbox) {
            // قم بتحديد خانة الاختيار
            courierCheckbox.checked = true;
        }

        // ابحث عن عنصر خانة الاختيار الثاني باستخدام معرف العنصر
        var vasCheckbox = document.getElementById('vasId12');

        // تأكد من وجود العنصر
        if (vasCheckbox) {
            // قم بتحديد خانة الاختيار
            vasCheckbox.checked = true;
        }
    });
})();



(function() {
    'use strict';

    // Function to open dropdown
    function openDropdown() {
        var dropdown = document.getElementById('app_date'); // استبدل app_date بمعرف الحقل النصي
        if (dropdown && dropdown.value === '') {
            setTimeout(function() {
                dropdown.focus(); // الانتقال إلى الحقل النصي
                dropdown.click(); // فتح المنسدلة
            }, 4000); // تأخير 1 ثانية
        }
    }

    // Call openDropdown function when the page loads
    window.addEventListener('load', function() {
        openDropdown();

        // انتظر 2 ثانية بعد فتح المنسدلة ثم انقر على الخيار المطلوب
        setTimeout(function() {
            var nextOption = document.querySelector('.next');
            if (nextOption) {
                nextOption.click();
            }
        }, 2000); // تأخير 2 ثانية
    });
})();


(function() {
    'use strict';

    var reloadInterval = 60000; // 60 seconds

    function refreshPage() {
        location.reload();
    }

    function updateTimerDisplay(timeRemaining) {
        var countdownElement = document.getElementById('countdown');
        if (!countdownElement) {
            countdownElement = document.createElement('div');
            countdownElement.id = 'countdown';
            countdownElement.style.top = '20%';
            countdownElement.style.left = '0%';
            countdownElement.style.transform = 'translateX(50%)';
            countdownElement.style.position = 'fixed';
            countdownElement.style.color = 'green';
            countdownElement.style.textAlign = 'center';
            countdownElement.style.fontSize = '24px';
            document.body.appendChild(countdownElement);
        }
        countdownElement.textContent = 'Page will refresh in: ' + Math.ceil(timeRemaining / 1000) + ' seconds';
    }

    function updateCountdown() {
        var timeLeft = reloadInterval - ((Date.now() - lastReloadTime) % reloadInterval);
        updateTimerDisplay(timeLeft);
    }

    function reloadWithTimer() {
        refreshPage();
        updateCountdown();
    }

    setInterval(updateCountdown, 1000);

    var lastReloadTime = Date.now();
    setInterval(reloadWithTimer, reloadInterval);
})();



(function() {
    'use strict';

    // انتظر 2 ثانية بعد تحميل الصفحة قبل البدء في البحث عن يوم متاح للحجز
    setTimeout(function() {
        // ابحث في الجدول الأول
        var availableDays = document.querySelectorAll('.day.activeClass[title="Book"]');
        if (availableDays.length > 0) {
            availableDays[0].click(); // نقر تلقائي
        } else {
            // ابحث في الجدول الثاني
            var secondTableAvailableDays = document.querySelectorAll('.day.activeClass[title="Book"]');
            if (secondTableAvailableDays.length > 0) {
                secondTableAvailableDays[0].click(); // نقر تلقائي
            } else {
                // انتقل للجدول التالي
                var nextTableButton = document.querySelector('.next');
                if (nextTableButton) {
                    nextTableButton.click(); // نقر تلقائي

                    // اعادة اختيار الحجز في الجدول التالي بعد النقر على الزر "»"
                    setTimeout(function() {
                        var nextTableAvailableDays = document.querySelectorAll('.day.activeClass[title="Book"]');
                        if (nextTableAvailableDays.length > 0) {
                            nextTableAvailableDays[0].click(); // نقر تلقائي
                        }
                    }, 1000); // انتظر 1 ثانية بعد النقر على الزر "»"
                }
            }
        }
    }, 2000); // انتظر 2 ثانية
})();



(function() {
    'use strict';

    // Function to select available time
    function selectAvailableTime() {
        var timeDropdown = document.getElementById('app_time'); // استبدل app_time بمعرف القائمة المنسدلة
        if (timeDropdown) {
            // انتظر 7 ثواني قبل البدء في البحث عن وقت متاح
            setTimeout(function() {
                // احصل على جميع الخيارات في القائمة المنسدلة
                var options = timeDropdown.options;
                // تحديد أول وقت متاح إذا وجد
                for (var i = 0; i < options.length; i++) {
                    if (options[i].value !== '' && !options[i].disabled) {
                        // اختيار الوقت المتاح
                        options[i].selected = true;
                        // تشغيل الصوت
                        playNotificationSound();
                        break;
                    }
                }
            }, 7000); // تأخير 7 ثواني
        }
    }

    // Function to play notification sound
    function playNotificationSound() {
        // إنشاء عنصر Audio
        var audio = new Audio('https://www.soundjay.com/buttons/beep-14.mp3');
        // تشغيل الصوت
        audio.play();
    }

    // Call selectAvailableTime function when the page loads
    window.addEventListener('load', function() {
        selectAvailableTime();
    });
})();

(function() {
    'use strict';

    // انتظر 2 ثانية بعد تحميل الصفحة قبل البدء في البحث عن يوم متاح للحجز
    setTimeout(function() {
        // ابحث في الجدول الأول
        var availableDays = document.querySelectorAll('.day.activeClass[title="Book"]');
        if (availableDays.length > 0) {
            availableDays[0].click(); // نقر تلقائي
        } else {
            // ابحث في الجدول الثاني
            var secondTableAvailableDays = document.querySelectorAll('.day.activeClass[title="Book"]');
            if (secondTableAvailableDays.length > 0) {
                secondTableAvailableDays[0].click(); // نقر تلقائي
            } else {
                // انتقل للجدول التالي
                var nextTableButton = document.querySelector('.next');
                if (nextTableButton) {
                    nextTableButton.click(); // نقر تلقائي

                    // اعادة اختيار الحجز في الجدول التالي بعد النقر على الزر "»"
                    setTimeout(function() {
                        var nextTableAvailableDays = document.querySelectorAll('.day.activeClass[title="Book"]');
                        if (nextTableAvailableDays.length > 0) {
                            nextTableAvailableDays[0].click(); // نقر تلقائي
                        }
                    }, 1000); // انتظر 1 ثانية بعد النقر على الزر "»"
                }
            }
        }
    }, 6000); // انتظر 2 ثانية
})();

(function() {
    'use strict';

    // إنشاء عنصر فقرة
    var paragraph = document.createElement('p');

    // تعيين النص للفقرة
    paragraph.textContent = '** version-1  ** ابو عبد الله';

    // تطبيق الأنماط CSS لتغيير لون وحجم النص ووضعه في المنتصف
    paragraph.style.color = 'red';
    paragraph.style.fontSize = '30px';
    paragraph.style.position = 'fixed';
    paragraph.style.top = '30%';
    paragraph.style.left = '125%';
    paragraph.style.transform = 'translate(-50%, -20%)';
    paragraph.style.zIndex = '9999'; // يضمن ظهور النص فوق جميع العناصر الأخرى

    // الحصول على العنصر الأب حيث سيتم إضافة الفقرة
    var container = document.body;

    // إضافة الفقرة إلى العنصر الأب
    container.appendChild(paragraph);
})();

(function() {
    'use strict';

    var css = document.createElement('style');
    var head = document.head;

    css.type = 'text/css';

    css.innerText = `* {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
         user-select: text !important;
    }`;

    function main() {

        var doc = document;
        var body = document.body;

        var docEvents = [
            doc.oncontextmenu = null,
            doc.onselectstart = null,
            doc.ondragstart = null,
            doc.onmousedown = null
        ];

        var bodyEvents = [
            body.oncontextmenu = null,
            body.onselectstart = null,
            body.ondragstart = null,
            body.onmousedown = null,
            body.oncut = null,
            body.oncopy = null,
            body.onpaste = null
        ];

        [].forEach.call(
            ['copy', 'cut', 'paste', 'select', 'selectstart'],
            function(event) {
                document.addEventListener(event, function(e) { e.stopPropagation(); }, true);
            }
        );

        alwaysAbsoluteMode();
        enableCommandMenu();
        head.appendChild(css);
        document.addEventListener('keydown', keyPress);
    }

    function keyPress(event) {
        if (event.ctrlKey && event.keyCode == 192) {
            return confirm('Activate Absolute Right Click Mode!') == true ? absoluteMode() : null;
        }
    }

    function absoluteMode() {
        [].forEach.call(
            ['contextmenu', 'copy', 'cut', 'paste', 'mouseup', 'mousedown', 'keyup', 'keydown', 'drag', 'dragstart', 'select', 'selectstart'],
            function(event) {
                document.addEventListener(event, function(e) { e.stopPropagation(); }, true);
            }
        );
    }

    function alwaysAbsoluteMode() {
        let sites = ['example.com','www.example.com'];
        const list = RegExp(sites.join('|')).exec(location.hostname);
        return list ? absoluteMode() : null;
    }

    function enableCommandMenu() {
        var commandMenu = true;
        try {
            if (typeof(GM_registerMenuCommand) == undefined) {
                return;
            } else {
                if (commandMenu == true ) {
                    GM_registerMenuCommand('Enable Absolute Right Click Mode', function() {
                        return confirm('Activate Absolute Right Click Mode!') == true ? absoluteMode() : null;
                    });
                }
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    var blackList = [
        'youtube.com','.google.','.google.com','greasyfork.org','twitter.com','instagram.com','facebook.com','translate.google.com','.amazon.','.ebay.','github.','stackoverflow.com',
        'bing.com','live.com','.microsoft.com','dropbox.com','pcloud.com','box.com','sync.com','onedrive.com','mail.ru','deviantart.com','pastebin.com',
        'dailymotion.com','twitch.tv','spotify.com','steam.com','steampowered.com','gitlab.com','.reddit.com'
    ]

    var enabled = false;
    var url = window.location.hostname;
    var match = RegExp(blackList.join('|')).exec(url);

    if (window && typeof window != undefined && head != undefined) {

        if (!match && enabled != true) {

            main();
            enabled = true

            //console.log(location.hostname);

            window.addEventListener('contextmenu', function contextmenu(event) {
                event.stopPropagation();
                event.stopImmediatePropagation();
                var handler = new eventHandler(event);
                window.removeEventListener(event.type, contextmenu, true);
                var eventsCallBack = new eventsCall(function() {});
                handler.fire();
                window.addEventListener(event.type, contextmenu, true);
                if (handler.isCanceled && (eventsCallBack.isCalled)) {
                    event.preventDefault();
                }
            }, true);
        }

        function eventsCall() {
            this.events = ['DOMAttrModified', 'DOMNodeInserted', 'DOMNodeRemoved', 'DOMCharacterDataModified', 'DOMSubtreeModified'];
            this.bind();
        }

        eventsCall.prototype.bind = function() {
            this.events.forEach(function (event) {
                document.addEventListener(event, this, true);
            }.bind(this));
        };

        eventsCall.prototype.handleEvent = function() {
            this.isCalled = true;
        };

        eventsCall.prototype.unbind = function() {
            this.events.forEach(function (event) {}.bind(this));
        };

        function eventHandler(event) {
            this.event = event;
            this.contextmenuEvent = this.createEvent(this.event.type);
        }

        eventHandler.prototype.createEvent = function(type) {
            var target = this.event.target;
            var event = target.ownerDocument.createEvent('MouseEvents');
            event.initMouseEvent(
                type, this.event.bubbles, this.event.cancelable,
                target.ownerDocument.defaultView, this.event.detail,
                this.event.screenX, this.event.screenY, this.event.clientX, this.event.clientY,
                this.event.ctrlKey, this.event.altKey, this.event.shiftKey, this.event.metaKey,
                this.event.button, this.event.relatedTarget
            );
            return event;
        };

        eventHandler.prototype.fire = function() {
            var target = this.event.target;
            var contextmenuHandler = function(event) {
                event.preventDefault();
            }.bind(this);
            target.dispatchEvent(this.contextmenuEvent);
            this.isCanceled = this.contextmenuEvent.defaultPrevented;
        };

    }

})();

(function() {
    'use strict';

    console.log("code start")
    var time = 1000;
    const titles = ['504 Gateway Time-out','403 Forbidden', 'Problem loading page','503 Service Temporarily Unavailable','Service Unavailable','500 Internal Server Error','Database error','FastCGI Error','The connection has timed out','Problemas al cargar la página','Error 502 (Server Error)!!1'];
    const HeadingText = ['502 Bad Gateway','Service Unavailable','403 ERROR','Error 503 Service Unavailable','404 Not Found','504 Gateway Time-out','This page isn’t working'];
    const myBody = ['Scheduled maintenance is under progress'];
    var myTitle = document.title;

    if(document.body.childElementCount <= 1 || titles.includes(myTitle)){
        console.log("code here")
        setTimeout(function() {
                window.location.reload(true);
            }, time);
    }else if(( HeadingText.includes(document.getElementsByTagName('h1')[0].innerText))){
        setTimeout(function() {
                window.location.reload(true);
            }, time);
    }
    console.log("End of code")
})();

