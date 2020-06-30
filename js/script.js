var writeLink = document.querySelector(".contacts-button"),
    mapLink = document.querySelector(".map-link"),
    cartLinks = document.querySelectorAll(".item-buy-button");

var feedbackPopup = document.querySelector(".modal-write-us"),
    mapPopup = document.querySelector(".modal-map"),
    addedPopup = document.querySelector(".modal-added-to-cart");

/* Форма */
var nameField = document.getElementById("write-us-name"),
    emailField = document.getElementById("write-us-email"),
    messageField = document.getElementById("write-us-message");
if (feedbackPopup) {
    var feedbackForm = feedbackPopup.querySelector(".write-us-form");
    feedbackForm.addEventListener("submit", function(evt) {
        if (!nameField.value || !emailField.value || !messageField.value) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-error");
            feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
            feedbackPopup.classList.add("modal-error");
        }
    });
}

/* Показать и закрыть попап*/
function showPopup(nameLink, namePopup) {
    nameLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        namePopup.classList.add("modal-show");
        if (namePopup === feedbackPopup) {
            nameField.focus();
        }
    });
}

function closedPopup(namePopup) {
    var nameClose = namePopup.querySelector(".button-close");
    nameClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        namePopup.classList.remove("modal-show");
        if (namePopup === feedbackPopup) {
            namePopup.classList.remove("modal-error");
        }
    });
    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (namePopup.classList.contains("modal-show")) {
                evt.preventDefault();
                namePopup.classList.remove("modal-show");
                if (namePopup === feedbackPopup) {
                    namePopup.classList.remove("modal-error");
                }
            }
        }
    });
}

if (writeLink && feedbackPopup) {
    showPopup(writeLink, feedbackPopup);
    closedPopup(feedbackPopup);
}
if (mapLink && mapPopup) {
    showPopup(mapLink, mapPopup);
    closedPopup(mapPopup);
}

if (cartLinks && addedPopup) {
    for (var i = 0; i < cartLinks.length; i++) {
        cartLinks[i].addEventListener("click", function(evt) {
            evt.preventDefault();
            addedPopup.classList.add("modal-show");
        });
    }
    var continueBtn = addedPopup.querySelector(".continue-button");
    continueBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        addedPopup.classList.remove("modal-show");
    });
    closedPopup(addedPopup);
}

/*Добавление в корзину или закладки */
var bookmarksBtns = document.querySelectorAll(".item-bookmarks-button");

[].forEach.call(cartLinks, function(item) {
    item.addEventListener("click", function() {
        if (!(item.classList.contains("indicator"))) {
            document.querySelector(".header-cart").classList.add("indicator");
        }
    });
});

[].forEach.call(bookmarksBtns, function(item) {
    item.addEventListener("click", function() {
        if (!(item.classList.contains("indicator"))) {
            document.querySelector(".header-bookmarks").classList.add("indicator");
        }
    });
});


/* Слайдер */
var slideLeft = document.querySelector(".slider-left-button"),
    slideRight = document.querySelector(".slider-right-button"),
    slidePoint = document.querySelectorAll(".slider-point-button"),
    slidePic = document.querySelectorAll(".slider-pic"),
    indCurr = 0;
if (slideLeft && slideRight && slidePoint && slidePic) {
    [].forEach.call(slidePoint, function(item, index) {
        item.addEventListener("click", function() {
            if (!(item.classList.contains("current-point-button"))) {
                document.querySelector(".current-point-button").classList.remove("current-point-button");
                item.classList.add("current-point-button");
                document.querySelector(".slider-current").classList.remove("slider-current");
                slidePic[index].classList.add("slider-current");
                indCurr = index;
            }
        });
    });

    slideRight.addEventListener("click", function() {
        if (indCurr < slidePic.length - 1) {
            indCurr++;
        } else {
            indCurr = 0;
        }
        document.querySelector(".slider-current").classList.remove("slider-current");
        slidePic[indCurr].classList.add("slider-current");
        document.querySelector(".current-point-button").classList.remove("current-point-button");
        slidePoint[indCurr].classList.add("current-point-button");
    });

    slideLeft.addEventListener("click", function() {
        if (indCurr > 0) {
            indCurr--;
        } else {
            indCurr = slidePic.length - 1;
        }
        document.querySelector(".slider-current").classList.remove("slider-current");
        slidePic[indCurr].classList.add("slider-current");
        document.querySelector(".current-point-button").classList.remove("current-point-button");
        slidePoint[indCurr].classList.add("current-point-button");
    });
}

/* Блок "Сервисы" */
var serviceBtns = document.querySelectorAll(".service-button"),
    serviceItems = document.querySelectorAll(".service-detailed-item");
if (serviceBtns && serviceItems) {
    [].forEach.call(serviceBtns, function(item, index) {
        item.addEventListener("click", function() {
            if (!(item.classList.contains("service-button-active"))) {
                document.querySelector(".service-button-active").classList.remove("service-button-active");
                item.classList.add("service-button-active");
                item.blur();
            }
            document.querySelector(".service-detailed-active").classList.remove("service-detailed-active");
            serviceItems[index].classList.add("service-detailed-active");
        });
    });
}