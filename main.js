(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=this._data.name,this._link=this._data.link,this._cardId=e._id,this._userId=e.owner._id,this._currentUserId=r._id,this._currentUser=r,this._likes=e.likes,this._img=null,this._templateSelector=n,this._handleCardClick=o.handleCardClick,this._handleCardLike=o.handleCardLike,this._handleCardDislike=o.handleCardDislike,this._handleCardDelete=o.handleCardDelete}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._img=this._element.querySelector(".element__image"),this._img.src=this._link,this._img.alt=this._name,this._deleteButton=this._element.querySelector(".element__delete-button"),this._caption=this._element.querySelector(".element__caption"),this._likeButton=this._element.querySelector(".element__like-button"),this._likesCounter=this._element.querySelector(".element__likes-counter"),this._likes.some((function(e){return e._id===t._currentUserId}))&&this._deleteButton.classList.add("element__like-button_active"),this._userId!==this._currentUser&&(this._deleteButton.style.display="none"),this._caption.textContent=this._name,this._likesCounter.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._img.addEventListener("click",(function(){t._handleCardClick(t._data)})),this._likeButton.addEventListener("click",(function(){t._checkLikeButton()?t._handleCardDislike(t._data):t._handleCardLike(t._data)})),this._deleteButton.addEventListener("click",(function(){t._handleCardDelete(t._data,t._element)}))}},{key:"_checkLikeButton",value:function(){return this._likeButton.classList.contains("element__like-button_active")}},{key:"handleLikeOperations",value:function(t){this._likes=t.likes,this._checkLikeButton()?(this._likeButton.classList.remove("element__like-button_active"),this._likesCounter.textContent=parseInt(this._likesCounter.textContent)-1):(this._likeButton.classList.add("element__like-button_active"),this._likesCounter.textContent=parseInt(this._likesCounter.textContent)+1)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r=(document.querySelectorAll(".popup"),document.querySelector(".popup-edit")),o=document.querySelector(".profile__popup-edit"),i=document.querySelector(".popup-add"),u=document.querySelector(".profile__popup-add"),a=(document.querySelector(".popup__close-button"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".popup__input-form_type_edit")),c=a.querySelector(".popup__input_type_name"),l=a.querySelector(".popup__input_type_description"),s=document.querySelector(".popup__input-form_type_add"),f=(s.querySelector(".popup__input_type_place"),s.querySelector(".popup__input_type_link"),document.querySelector(".elements")),p=document.querySelector(".popup-image"),y=(document.querySelector(".popup__image"),document.querySelector(".popup__caption"),document.querySelector(".profile__update-button")),h=document.querySelector(".popup-update"),d=document.querySelector(".popup-confirm"),m=document.querySelector(".popup__input-form_type_update"),b=m.querySelector(".popup__input_type_update"),v={formElement:".popup__input-form",inputElement:".popup__input",submitButton:".popup__submit-button",inactiveSubmitButton:"popup__submit-button_inactive",inputError:"popup__input_invalid",errorElement:"popup__input-error"};function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var g=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formStateObj=e,this._formElement=n,this._inputElement=n.querySelector(e.inputElement),this._inputList=Array.from(n.querySelectorAll(e.inputElement)),this._submitButton=n.querySelector(e.submitButton),this._inactiveSubmitButton=e.inactiveSubmitButton,this._inputError=e.inputError,this._errorElement=n.querySelector(e.errorElement)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){this._formElement.querySelector(".".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.add(this._inputError)}},{key:"_hideInputError",value:function(t){this._formElement.querySelector(".".concat(t.id,"-error")).textContent="",t.classList.remove(this._inputError)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_checkInputInvalidity",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setFormSubmitButtonState",value:function(){this._checkInputInvalidity()?(this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveSubmitButton)):(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._inactiveSubmitButton))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._setFormSubmitButtonState()}))}))}},{key:"setFormState",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._setFormSubmitButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const k=g;function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var O=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._containerSelector=n}var e,n;return e=t,(n=[{key:"setItem",value:function(t){this._containerSelector.prepend(t)}},{key:"addItem",value:function(t){var e=this;t.reverse(),t.forEach((function(t){e._renderer(t)}))}},{key:"handleDeleteCard",value:function(t){t.remove(),t=null}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}function P(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===j(e)?e:String(e)}var L=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=P(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=e}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}},{key:"savingData",value:function(t){this._submitButton.textContent=t}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._description=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){this._image.alt=t,this._image.src=e,this._description.textContent=t,B(T(u.prototype),"open",this).call(this)}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(L);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function F(t,e){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},F(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n._popupForm=t.querySelector(".popup__input-form"),n._inputList=Array.from(n._popupForm.querySelectorAll(v.inputElement)),n._submitButton=t.querySelector(".popup__submit-button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;A(V(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t._submitButton.textContent="Сохранение..."}))}},{key:"close",value:function(){A(V(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(L);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var H=function(){function t(e){var n=e.name,r=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userData=document.querySelector(r),this._userAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userData.textContent}}},{key:"setUserInfo",value:function(t,e){this._userName.textContent=t,this._userData.textContent=e}},{key:"setUserAvatar",value:function(t){this._userAvatar.src=t}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var $=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=e.baseUrl,this.headers=e.headers}var e,n;return e=t,(n=[{key:"_validateResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка получения ответа от сервера: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._validateResponse.bind(this))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._validateResponse.bind(this))}},{key:"editUserInfo",value:function(t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._validateResponse.bind(this))}},{key:"editAvatar",value:function(t){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(t)}).then(this._validateResponse.bind(this))}},{key:"likeCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t._id,"/likes"),{method:"PUT",headers:this.headers}).then(this._validateResponse.bind(this))}},{key:"dislikeCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t._id,"/likes"),{method:"DELETE",headers:this.headers}).then(this._validateResponse.bind(this))}},{key:"removeCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t._id),{method:"DELETE",headers:this.headers}).then(this._validateResponse.bind(this))}},{key:"addNewCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._validateResponse.bind(this))}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},W.apply(this,arguments)}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},X(t,e)}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&X(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(r);if(o){var n=Y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===K(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__input-form"),n._handleRemoveCard=e,n._submitButton=n._popup.querySelector(".popup__submit-button"),n}return e=u,(n=[{key:"open",value:function(t,e){this.cardItem=t,this.cardElement=e,W(Y(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleRemoveCard(t.cardItem,t.cardElement),t._submitButton.textContent="Удаление..."})),W(Y(u.prototype),"setEventListeners",this).call(this)}}])&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(L);function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var et=new k(v,a);et.enableValidation();var nt=new k(v,s);nt.enableValidation();var rt=new k(v,m);rt.enableValidation();var ot,it,ut=new $({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-71",headers:{authorization:"e123c2f1-8f0a-4bf0-aab3-5c98d8db455d","Content-Type":"application/json"}}),at=new H({name:".profile__name",about:".profile__description",avatar:".profile__avatar"});Promise.all([ut.getUserInfo(),ut.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tt(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];at.setUserInfo(o.name,o.about),at.setUserAvatar(o.avatar),it=o._id,(ot=new O({items:i,renderer:function(t){return ot.setItem(lt(t))}},f)).addItem(i)})).catch((function(t){console.log("Ошибка загрузки данных с сервера: ".concat(t))}));var ct=new Z(d,(function(t,e){ut.removeCard(t).then((function(){ot.handleDeleteCard(e),ct.close()})).catch((function(t){console.log("Ошибка при удалении элемента: ".concat(t))})).finally((function(){return ct.savingData("Да")}))}));function lt(t){var e=new n(t,".element-template",it,{handleCardClick:function(t){return st.open(t.name,t.link)},handleCardLike:function(t){ut.likeCard(t).then((function(t){return e.handleLikeOperations(t)})).catch((function(t){return console.log("Ошибка при лайке элемента: ".concat(t))}))},handleCardDislike:function(t){ut.dislikeCard(t).then((function(t){return e.handleLikeOperations(t)})).catch((function(t){return console.log("Ошибка при дизлайке элемента: ".concat(t))}))},handleCardDelete:ct.open.bind(ct)});return e.generateCard()}ct.setEventListeners();var st=new U(p);st.setEventListeners();var ft=new N(r,{handleFormSubmit:function(t){ut.editUserInfo(t).then((function(t){at.setUserInfo(t.name,t.about),ft.close()})).catch((function(t){console.log("Ошибка загрузки данных пользователя: ".concat(t))})).finally((function(){ft.savingData("Сохранить")}))}});ft.setEventListeners(),o.addEventListener("click",(function(){ft.open();var t=at.getUserInfo();c.value=t.name,l.value=t.about,et.setFormState()}));var pt=new N(h,{handleFormSubmit:function(){ut.editAvatar({avatar:b.value}).then((function(t){at.setUserAvatar(t.avatar)})).catch((function(t){console.log("Ошибка загрузки аватара: ".concat(t))})).finally((function(){pt.close(),pt.savingData("Сохранить")}))}});pt.setEventListeners(),y.addEventListener("click",(function(){pt.open(),rt.setFormState()}));var yt=new N(i,{handleFormSubmit:function(t){ut.addNewCard({name:t.name,link:t.link}).then((function(t){ot.setItem(lt(t))})).catch((function(t){console.log("Ошибка при загрузке новой карточки: ".concat(t))})).finally((function(){yt.close(),yt.savingData("Сохранить")}))}});yt.setEventListeners(),u.addEventListener("click",(function(){yt.open(),nt.setFormState()}))})();