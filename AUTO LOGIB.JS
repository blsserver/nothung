(function() {
    'use strict';

    var db;
    var request = indexedDB.open('usersDB', 1);

    request.onerror = function(event) {
        console.log("Error opening database");
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        console.log("Database opened successfully");
        displayUsersIndexedDB();
    };

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        var objectStore = db.createObjectStore("users", { keyPath: "id", autoIncrement:true });
        console.log("Object store created");
    };

    window.saveUserIndexedDB = function() {
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (username && email && password) {
            var transaction = db.transaction(["users"], "readwrite");
            var objectStore = transaction.objectStore("users");
            var newUser = { username: username, email: email, password: password };
            var request = objectStore.add(newUser);

            request.onsuccess = function(event) {
                console.log("User added successfully");
                displayUsersIndexedDB();
            };

            request.onerror = function(event) {
                console.log("Error adding user");
            };

            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        } else {
            console.log("Please fill all fields");
        }
    };

    function displayUsersIndexedDB() {
        var transaction = db.transaction(["users"], "readonly");
        var objectStore = transaction.objectStore("users");
        var usersContainer = document.getElementById("userButtonsContainerIndexedDB");
        usersContainer.innerHTML = "";

        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                var userButton = document.createElement("button");
                userButton.textContent = cursor.value.username;
                userButton.classList.add("user-button");
                userButton.onclick = function() {
                    autoLogin(cursor.value.email, cursor.value.password);
                };

                var deleteButton = document.createElement("button");
                deleteButton.textContent = "X";
                deleteButton.classList.add("delete-button");
                deleteButton.onclick = function() {
                    deleteUserIndexedDB(cursor.key);
                };

                usersContainer.appendChild(userButton);
                usersContainer.appendChild(deleteButton);
                usersContainer.appendChild(document.createElement("br"));
                cursor.continue();
            }
        };
    }

    function autoLogin(email, password) {
        var email1 = email;
        var mp = password;

        // تعبئة حقول تسجيل الدخول تلقائيًا
        if (document.getElementById("UserId1") !== null) {
            document.getElementById("UserId1").value = email1;
            document.getElementById("Password1").value = mp;

        }
        if(document.getElementById("UserId1") != null){
    document.getElementById("UserId1").value=email1;
    document.getElementById("Password1").value=mp;
}

if(document.getElementById("UserId2") != null){
    document.getElementById("UserId2").value=email1;
    document.getElementById("Password2").value=mp;

}

if(document.getElementById("UserId3") != null){
    document.getElementById("UserId3").value=email1;
    document.getElementById("Password3").value=mp;
}

if(document.getElementById("UserId4") != null){
    document.getElementById("UserId4").value=email1;
    document.getElementById("Password4").value=mp;

}

if(document.getElementById("UserId5") != null){
    document.getElementById("UserId5").value=email1;
    document.getElementById("Password5").value=mp;

}

if(document.getElementById("UserId6") != null){
    document.getElementById("UserId6").value=email1;
    document.getElementById("Password6").value=mp;

}

if(document.getElementById("UserId7") != null){
    document.getElementById("UserId7").value=email1;
    document.getElementById("Password7").value=mp;
}

if(document.getElementById("UserId8") != null){
    document.getElementById("UserId8").value=email1;
    document.getElementById("Password8").value=mp;

}

if(document.getElementById("UserId9") != null){
    document.getElementById("UserId9").value=email1;
    document.getElementById("Password9").value=mp;
}

if(document.getElementById("UserId10") != null){
    document.getElementById("UserId10").value=email1;
    document.getElementById("Password10").value=mp;
}

    const btnVerify = document.querySelector("#btnVerify");
    const btnSubmit = document.querySelector("#btnSubmit");

    // افحص إذا كان زر btnVerified موجودًا
    if (btnVerify) {
        (btnVerify).click(); // إضغط على زر btnVerified
    } else if (btnSubmit) {
        btnSubmit.click(); // إضغط على زر btnSubmit إذا كان كلا الزرين الآخرين غير موجودين
    }

(function() {
    'use strict';

    function simulateClick() {
        var submitButton = document.querySelector("#btnSubmit");
        if (submitButton) {
            submitButton.click();
        }
    }

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                var captchaData = document.querySelector("#CaptchaData");
                if (captchaData && captchaData.value) {
                    simulateClick();
                }
            }
        });
    });

    var captchaDataElement = document.querySelector("#CaptchaData");
    if (captchaDataElement && captchaDataElement.value) {
        simulateClick();
    } else {
        observer.observe(captchaDataElement, {
            attributes: true,
            attributeFilter: ['value'],
        });
    }
})();


        // يمكنك تكرار هذا النمط لبقية الحقول إذا لزم الأمر
    }

    function deleteUserIndexedDB(userId) {
        var transaction = db.transaction(["users"], "readwrite");
        var objectStore = transaction.objectStore("users");
        var request = objectStore.delete(userId);

        request.onsuccess = function(event) {
            console.log("User deleted successfully");
            displayUsersIndexedDB();
        };

        request.onerror = function(event) {
            console.log("Error deleting user");
        };
    }

    var userContainer = document.createElement('div');
    userContainer.classList.add('user-container');
    userContainer.innerHTML = `
        <style>
            .user-container {
                position: fixed;
                bottom: 20px;
                left: 20px;
                background-color: #ccc;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                z-index: 9999;
            }
            .user-inputs input {
                margin: 5px;
                padding: 5px;
                width: 150px;
            }
            .user-buttons-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
            }
            .user-button {
                margin: 5px;
                padding: 15px;
                background-color: green;
                color: black;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                font-weight: bold;
            }
            .delete-button {
                margin: 5px;
                padding: 20px;
                background-color: red;
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-weight: bold;
                font-size: 18px;
                width: 40px;
                height: 40px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }
        </style>
        <h2>Add New User</h2>
        <div class="user-inputs">
            <input type="text" id="username" placeholder="Username">
            <input type="email" id="email" placeholder="Email">
            <input type="password" id="password" placeholder="Password">
            <button onclick="saveUserIndexedDB()">New (IndexedDB)</button>
        </div>

        <h2>Users</h2>
        <div id="userButtonsContainerIndexedDB" class="user-buttons-container"></div>
    `;

    document.body.appendChild(userContainer);


})();
