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

    // Function to refresh the page
    function refreshPage() {
        location.reload(); // إعادة تحميل الصفحة
    }

    // Call refreshPage function every minute (60 seconds)
    setInterval(refreshPage, 60000); // 60000 milliseconds = 60 seconds
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
    paragraph.textContent = ' ** Boot Bls ** ابو عبد الله';

    // تطبيق الأنماط CSS لتغيير لون وحجم النص ووضعه في المنتصف
    paragraph.style.color = 'green';
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
