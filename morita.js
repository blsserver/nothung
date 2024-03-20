// ==UserScript==
// @name        سكريبت موريتانيا
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically selects "Normal" category on page load
// @author       Your name
// @match         https://mr.blsspainvisa.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        // ابحث عن عنصر القائمة المنسدلة للمركز باستخدام معرف العنصر
        var centreSelect = document.getElementById('centre');

        // تأكد من وجود العنصر
        if (centreSelect) {

            // قم بتعيين القيمة إلى "37#37" (مقابل Nouakchott)

            // قم بتعيين القيمة إلى "37#88 Nouadhibou)


            centreSelect.value = '37#37';

            // فتح القائمة المنسدلة
            centreSelect.dispatchEvent(new Event('change'));
        }

        // ابحث عن عنصر القائمة المنسدلة للفئة باستخدام معرف العنصر
        var categorySelect = document.getElementById('category');

        // تأكد من وجود العنصر
        if (categorySelect) {
            // قم بتعيين القيمة إلى "Normal"
            categorySelect.value = 'Normal';
        }
    });
})();


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// ==UserScript==
// @name         Auto Select Category
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically selects "Normal" category on page load
// @author       Your name
// @match         https://mr.blsspainvisa.com/*
// @grant        none
// ==/UserScript==

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
        }, 2000); // ثانيتان (2000 مللي ثانية)
    });
})();
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// ==UserScript==
// @name        سكريبت موريتانيا
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  تحديد القيمة المختارة من عنصر select وتنفيذ دالة JavaScript بناءً على القيمة المحددة
// @author       You
// @match        https://mr.blsspainvisa.com/*
// @grant        none
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

///////////////////////////////////////////                              /////////////////////////////////////////////
///////////////////////////////////////////        تخطي الصفحة الثانية         /////////////////////////////////////////////
///////////////////////////////////////////                              /////////////////////////////////////////////

// ==UserScript==
// @name        تخطي الصفحة الثانية
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  تحديد القيمة المختارة من عنصر select وتنفيذ دالة JavaScript بناءً على القيمة المحددة
// @author       You
// @match        https://mr.blsspainvisa.com/*
// @grant        none
// ==/UserScript==

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





///////////////////////////////////////////////////                                  ///////////////////////////////////////////
//////////////////////////////////////////////////            تغيير معلوماتك الشخصية         ///////////////////////////////////////////
//////////////////////////////////////////////////                                   //////////////////////////////////////////


// ==UserScript==
// @name        ملا الصفحة الاولى و الاخيرة
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  تحديد الخيار "Nouakchott" تلقائيًا في عنصر select عند تحميل الصفحة
// @author       You
// @match        https://mr.blsspainvisa.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to fill form fields
    function fillForm() {
        // Replace these selectors with the appropriate ones for your website
          // تحديد التاريخ المطلوب
        var phoneField = document.querySelector('#phone');
        var lastNameField = document.querySelector('#last_name');
        var emailField = document.querySelector('#email');
        var nameField = document.querySelector('#first_name');
        var birthsField = document.querySelector('#dateOfBirth');
        var passportField = document.querySelector('#passport_no');
        var datedémissionField = document.querySelector('#pptIssueDate');
        var datedexpirationField = document.querySelector('#pptExpiryDate');
        var lieudepasseportField = document.querySelector('#pptIssuePalace');

        // تغيير المعلومات التي تريد ادخالها غير فقط الدي بين شلطتين فقط
        var email = 'ahmedltassoust4@gmail.com';
        var phone = '55664455';
        var first_name = 'ahmed';    //First Name
        var last_name = 'Doe'; //Last Name
        var dateOfBirth ="1988-11-22";  //Date Of Birth
        var passport_no ="66554455";   //Passport Number
        var pptIssueDate ="2023-11-22";  //Passport Issue Date
        var pptExpiryDate ="2024-11-22";  //Passport Expiry Date
        var pptIssuePalace ="Nouakchott";  //Passport Issue Place

        // Fill the form fields
        if (phoneField) {
            phoneField.value = phone;
        }
        if (lastNameField) {
            lastNameField.value = last_name;
        }
        if (emailField) {
            emailField.value = email;
        }
          if (nameField) {
            nameField.value = first_name;
        }
             if (birthsField) {
            birthsField.value = dateOfBirth;
        }
        if (passportField) {
            passportField.value = passport_no;
        }
         if (datedémissionField) {
            datedémissionField.value = pptIssueDate;
        }
         if (datedexpirationField) {
            datedexpirationField.value = pptExpiryDate;
        }
         if (lieudepasseportField) {
            lieudepasseportField.value = pptIssuePalace;
        }
    }

    // Function to open popup windows
    function openPopupWindows() {
        // Replace these URLs with the URLs of the popup windows you want to open
        var popupUrls = [

            // Add more URLs if needed
        ];

        // Open each popup window
        popupUrls.forEach(function(url) {
            window.open(url, '_blank');
        });

        // Fill form fields after a delay (adjust as needed)
        setTimeout(fillForm, 2000);
    }

    // Call the function to open popup windows when the page loads
    window.addEventListener('load', openPopupWindows);
})();


///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ==UserScript==
// @name         Auto Select Visa Type
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically selects "Short Term Visa" in the dropdown menu after page load
// @author       Your name
// @match        https://mr.blsspainvisa.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        // ابحث عن عنصر القائمة المنسدلة باستخدام اسم العنصر
        var visaTypeSelect = document.getElementById('VisaTypeId');

        // تأكد من وجود العنصر
        if (visaTypeSelect) {
            // قم بتعيين القيمة إلى "206" التي تمثل "Short Term Visa"
            visaTypeSelect.value = '206';
        }
    });
})();


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// ==UserScript==
// @name         Auto Check Checkbox
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically checks the checkbox after page load
// @author       Your name
// @match        https://mr.blsspainvisa.com/appointment.php
// @grant        none
// ==/UserScript==

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

///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// ==UserScript==
// @name         Click Dropdown After Text Change
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clicks on dropdown after text field changes
// @author       You
// @match        https://mr.blsspainvisa.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to open dropdown
    function openDropdown() {
        var dropdown = document.getElementById('app_date'); // استبدل app_date بمعرف الحقل النصي
        if (dropdown) {
            setTimeout(function() {
                dropdown.focus(); // الانتقال إلى الحقل النصي
                dropdown.click(); // فتح المنسدلة
            }, 4000); // تأخير 1 ثانية
        }
    }

    // Call openDropdown function when the page loads
    window.addEventListener('load', function() {
        openDropdown();
    });
})();

/////////////////////////////////////////////////////
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// ==UserScript==
// @name         Refresh Page Every Minute
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Refreshes the page automatically every minute
// @author       You
// @match        https://mr.blsspainvisa.com/appointment.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to refresh the page
    function refreshPage() {
        location.reload(); // إعادة تحميل الصفحة
    }

    // Call refreshPage function every minute (60 seconds)
    setInterval(refreshPage, 60000); // 60000 milliseconds = 60 seconds
})();
