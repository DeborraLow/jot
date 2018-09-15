(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_Components/Authorization/forgot/forgot.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_Components/Authorization/forgot/forgot.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/_Components/Authorization/forgot/forgot.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_Components/Authorization/forgot/forgot.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Forgot</h2>\n<div class=\"form-group\">\n    <input type=\"text\" [(ngModel)]=\"signup.email\" required=\"required\">\n    <label for=\"input\" class=\"control-label\">Email</label><i class=\"bar\"></i>\n</div>\n<div class=\"button-container align-right\">\n    <button type=\"button\" class=\"btn btn-default\"><span>Send Email Validation</span></button>\n</div>\n  "

/***/ }),

/***/ "./src/app/_Components/Authorization/forgot/forgot.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_Components/Authorization/forgot/forgot.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/_Components/Authorization/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/_Components/Authorization/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/_Components/Authorization/login/login.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/_Components/Authorization/login/login.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_Components/Authorization/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_Components/Authorization/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<div class=\"form-group\">\n  <input type=\"text\" [(ngModel)]=\"login.username\" required=\"required\">\n  <label for=\"input\" class=\"control-label\">Username</label><i class=\"bar\"></i>\n</div>\n<div class=\"form-group\">\n    <input type=\"password\" [(ngModel)]=\"login.password\" required=\"required\">\n    <label for=\"input\" class=\"control-label\">Password</label><i class=\"bar\"></i>\n</div>\n<div class=\"button-container align-right\">\n  <!-- <button class=\"btn\" (click)=\"toggleForgot()\">Forgot</button> -->\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"Login()\"><span>Login</span></button>\n</div>\n"

/***/ }),

/***/ "./src/app/_Components/Authorization/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_Components/Authorization/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var _Services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_Services/message.service */ "./src/app/_Services/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, messageService, route) {
        this.authService = authService;
        this.messageService = messageService;
        this.route = route;
        this.showForgot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.message = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.login = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        if (this.login.username === '' || this.login.password === '') {
            this.messageService.add('Username and Password is required.', 'error');
            setTimeout(function () {
                _this.messageService.clear();
            }, 3000);
        }
        else {
            this.authService.login(this.login).subscribe(function (login) {
                if (login) {
                    _this.authService.LoggedIn = true;
                    _this.messageService.add('Logged in!', 'default');
                    setTimeout(function () {
                        _this.messageService.clear();
                    }, 3000);
                    setTimeout(function () { return _this.route.navigate(['/me']); }, 2000);
                }
            });
        }
    };
    LoginComponent.prototype.toggleForgot = function () {
        this.showForgot.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoginComponent.prototype, "showForgot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoginComponent.prototype, "message", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/_Components/Authorization/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/_Components/Authorization/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _Services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/_Components/Authorization/signup/signup.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_Components/Authorization/signup/signup.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\n    min-height: 400px;\n    min-width: 400px;\n    display: table;\n    width: 100%;\n    background-color: #eee;\n    border: dotted 1px #aaa;\n  }\n  \n  .text-wrapper {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  \n  .centered {\n    font-family: sans-serif;\n    font-size: 1.3em;\n    font-weight: bold;\n    text-align:center;\n  }"

/***/ }),

/***/ "./src/app/_Components/Authorization/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_Components/Authorization/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Signup</h2>\n<div class=\"signup-form\" *ngIf=\"!hasSignedUp\">\n    <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"signup.username\" required=\"required\">\n        <label for=\"input\" class=\"control-label\">Username</label><i class=\"bar\"></i>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"signup.email\" required=\"required\">\n      <label for=\"input\" class=\"control-label\">Email</label><i class=\"bar\"></i>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" [(ngModel)]=\"signup.password\" required=\"required\">\n      <label for=\"input\" class=\"control-label\">Password</label><i class=\"bar\"></i>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" [(ngModel)]=\"signup.confirm_password\" required=\"required\">\n      <label for=\"input\" class=\"control-label\">Confirm Password</label><i class=\"bar\"></i>\n    </div>\n    <div class=\"button-container align-right\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"Signup()\"><span>Signup</span></button>\n    </div>\n    \n</div>\n\n<div class=\"account-setup\" *ngIf=\"hasSignedUp\">\n\n        <div class=\"form-group\">\n            <label for=\"input\" class=\"control-label\" style=\"top: -30px;\">Avatar</label>\n            <app-file-uploader (UploadPath)=\"uploadPath($event)\"></app-file-uploader>\n        </div>\n        <div class=\"jot-g\">\n            <div class=\"u-1-2\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"signup.first_name\" required=\"required\">\n                        <label for=\"input\" class=\"control-label\">First Name</label><i class=\"bar\"></i>\n                    </div>\n            </div>\n            <div class=\"u-1-2\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" [(ngModel)]=\"signup.last_name\" required=\"required\">\n                        <label for=\"input\" class=\"control-label\">Last Name</label><i class=\"bar\"></i>\n                    </div>\n            </div>\n        </div>\n        <div class=\"button-container align-right\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"completeSignup()\"><span>Complete</span></button>\n        </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/_Components/Authorization/signup/signup.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_Components/Authorization/signup/signup.component.ts ***!
  \**********************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var _Services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_Services/message.service */ "./src/app/_Services/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, messageService, route) {
        this.authService = authService;
        this.messageService = messageService;
        this.route = route;
        this.signUpComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.signup = {
            id: '',
            username: '',
            password: '',
            confirm_password: '',
            email: '',
            first_name: '',
            last_name: '',
            avatar: '',
        };
    }
    SignupComponent.prototype.Signup = function () {
        var _this = this;
        if (this.signup.username === '' || this.signup.password === '' || this.signup.confirm_password === '' || this.signup.email === '') {
            this.messageService.add('All fields are required to signup.', 'error');
        }
        else if (this.signup.password !== this.signup.confirm_password) {
            this.messageService.add('Password do not match.', 'error');
        }
        else {
            this.authService.signup(this.signup).subscribe(function (res) {
                if (res) {
                    _this.signup.id = res._id;
                    _this.hasSignedUp = true;
                }
            });
        }
    };
    SignupComponent.prototype.completeSignup = function () {
        var _this = this;
        if (this.signup.avatar === '') {
            this.messageService.add('Please upload your avatar to continue.', 'error');
        }
        else if (this.signup.first_name === '' || this.signup.last_name === '') {
            this.messageService.add('Please upload your avatar to continue.', 'error');
        }
        else {
            var _a = this.signup, avatar = _a.avatar, first_name = _a.first_name, last_name = _a.last_name;
            this.authService.setupAccount(this.signup.id, { avatar: avatar, first_name: first_name, last_name: last_name }).subscribe(function (res) {
                _this.messageService.add('Congratulations, your JOT account has been created.', 'default');
                setTimeout(function () { return _this.signUpComplete.emit(true); }, 2000);
            });
        }
    };
    SignupComponent.prototype.uploadPath = function (path) {
        this.signup.avatar = path;
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.hasSignedUp = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SignupComponent.prototype, "signUpComplete", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/_Components/Authorization/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/_Components/Authorization/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _Services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/_Components/Emojis/emoji/emoji.component.css":
/*!**************************************************************!*\
  !*** ./src/app/_Components/Emojis/emoji/emoji.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.list-emojis-container {\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\nalign-items: flex-start;\npadding:1em 5px 5px;\nbackground-color: whitesmoke;\n}\n\n.emoji {\n    height: 2em;\n    outline: 0;\n}\n\n.emoji-wrapper {\n    position: relative;\n}\n\ninput:hover {\n}\n\nul.entry-emojis-container li {\n    position: relative;\n    display: inline-block;\n    background: #fff;\n    border-radius: 100%;\n    width: 2em;\n    padding: .2em;\n    height: 2em;\n    margin: 0 .4em;\n}\n\nul.entry-emojis-container {\n    position: absolute;\n    top: -1em;\n    left: 0;\n    right: 0;\n    text-align: center;\n    margin: 0;\n    padding: 0;\n}\n\nul.entry-emojis-container li button {\n    position: absolute;\n    right: -5px;\n    top: -3px;\n    width: 15px;\n    height: 15px;\n    padding: 1px 0 0 0;\n    border-radius: 100%;\n    border: 0;\n    background: #000;\n    font-size: .5em;\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/_Components/Emojis/emoji/emoji.component.html":
/*!***************************************************************!*\
  !*** ./src/app/_Components/Emojis/emoji/emoji.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"emoji-wrapper\">\n    <ul class=\"entry-emojis-container\">\n        <li *ngFor=\"let emoji of entryEmojis\">\n          <img src=\"{{emoji.url}}\">\n          <button (click)=\"remove(emoji)\" *ngIf=\"IsEditing\">X</button>\n        </li>\n      </ul>\n      <div class=\"list-emojis-container\" *ngIf=\"IsEditing\">\n        <div *ngFor=\"let emoji of emojis\">\n          <div class=\"list-emojis-container\">\n            <input class=\"emoji\" type=\"image\" (click)=\"addEmoji(emoji)\" src=\"{{emoji.url}}\" alt=\"{{emoji.name}}\" name=\"{{emoji}}\">\n          </div>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_Components/Emojis/emoji/emoji.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/_Components/Emojis/emoji/emoji.component.ts ***!
  \*************************************************************/
/*! exports provided: EmojiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiComponent", function() { return EmojiComponent; });
/* harmony import */ var _Services_emoji_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../_Services/emoji.service */ "./src/app/_Services/emoji.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_Services/message.service */ "./src/app/_Services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmojiComponent = /** @class */ (function () {
    function EmojiComponent(emojiService, message) {
        this.emojiService = emojiService;
        this.message = message;
        this.emojiEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emojis = [];
        this.entryEmojis = [];
        this.IsEditing = false;
    }
    EmojiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEditing = false;
        this.emojiService.getEmojis().subscribe(function (emojis) {
            _this.emojis = emojis;
        });
    };
    EmojiComponent.prototype.ngOnChanges = function (changes) {
        if (changes['emoji']) {
            this.entryEmojis = changes.emoji.currentValue;
        }
        if (changes['isEditing']) {
            this.IsEditing = changes.isEditing.currentValue;
        }
    };
    EmojiComponent.prototype.remove = function (emoji) {
        this.entryEmojis = this.entryEmojis.filter(function (i) { return i._id !== emoji._id; });
        this.emojiEmitter.emit(this.entryEmojis);
    };
    EmojiComponent.prototype.addEmoji = function (emoji) {
        var _this = this;
        if (this.entryEmojis.length < 5) {
            var exists = this.entryEmojis.find(function (i) { return i._id === emoji._id; });
            if (exists) {
                this.message.add('Emoji has already been selected. Select another one. ', 'error');
                setTimeout(function () {
                    _this.message.clear();
                }, 3000);
            }
            else {
                this.entryEmojis.push(emoji);
                this.emojiEmitter.emit(this.entryEmojis);
            }
        }
        else {
            this.message.add('Emoji limit reached, please remove a emoji to proceed. ', 'error');
            setTimeout(function () {
                _this.message.clear();
            }, 3000);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], EmojiComponent.prototype, "emoji", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], EmojiComponent.prototype, "isEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EmojiComponent.prototype, "emojiEmitter", void 0);
    EmojiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emoji',
            template: __webpack_require__(/*! ./emoji.component.html */ "./src/app/_Components/Emojis/emoji/emoji.component.html"),
            styles: [__webpack_require__(/*! ./emoji.component.css */ "./src/app/_Components/Emojis/emoji/emoji.component.css")],
            providers: [_Services_emoji_service__WEBPACK_IMPORTED_MODULE_0__["EmojiService"]]
        }),
        __metadata("design:paramtypes", [_Services_emoji_service__WEBPACK_IMPORTED_MODULE_0__["EmojiService"],
            _Services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], EmojiComponent);
    return EmojiComponent;
}());



/***/ }),

/***/ "./src/app/_Components/add-entry/add-entry.component.css":
/*!***************************************************************!*\
  !*** ./src/app/_Components/add-entry/add-entry.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n    width: 40%;\n    /* border: 1px solid black; */\n}\ni {\n    color: whitesmoke;\n    font-size: 25px;\n    background: #584E62;\n    position: absolute;\n    top: 0px;\n    left: 0;\n    bottom: 0;\n    padding: 11px 14px;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\nbutton {\n    font-family: 'Open Sans Condensed', sans-serif;\n    background: #50455A;\n    border: 0;\n    text-align: left;\n    cursor: pointer;\n    outline: 0;\n    color: whitesmoke;\n    border-radius: 5px;\n    padding: 7px 0 8px;\n    margin: 16px 0;\n    position: relative;\n    padding-left: 67px;\n    font-weight: 100;\n    width: 100%;\n    font-size: 25px;\n}\nbutton:hover{\n    transition: 1000ms;\n    background: rgb(46, 39, 52);\n    /* border: 1px solid rgb(182, 51, 39); */\n}\n.message{\n    background: #fff;\n    color: #50455A;\n    padding: .5em;\n    text-align: center;\n    display: inline-block;\n    width: 100%!important;\n    box-sizing: border-box;\n    margin: 0px 0 15px;\n}"

/***/ }),

/***/ "./src/app/_Components/add-entry/add-entry.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_Components/add-entry/add-entry.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"submit()\"><i class=\"fas fa-pencil-alt\"></i>NEW ENTRY</button>\n\n<span [class]=\"displayMessage\">{{successMessage}}</span>\n\n<!-- <button *ngIf=\"!showForm\" (click)=\"showFormFn()\">\n  Create an Entry</button>\n\n<form class=\"container\" *ngIf=\"showForm\" #form=\"ngForm\" (ngSubmit)=\"addEntry(form)\">\n  <fieldset>\n\n    <legend>New Entry</legend>\n    <div>\n      <label>Title</label>\n      <input type=\"string\" [(ngModel)]=\"title\" name=\"title\" value=\"New Entry\">\n    </div>\n\n    <div>\n      <label>Summary</label>\n      <input type=\"string\" [(ngModel)]=\"summary\" name=\"summary\" placeholder=\"Whatcha writing about?\">\n    </div>\n  </fieldset>\n  <button (click)=\"addEntry(form)\" type=\"submit\">Submit</button>\n\n</form> -->"

/***/ }),

/***/ "./src/app/_Components/add-entry/add-entry.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_Components/add-entry/add-entry.component.ts ***!
  \**************************************************************/
/*! exports provided: AddEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryComponent", function() { return AddEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_entries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_Services/entries.service */ "./src/app/_Services/entries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEntryComponent = /** @class */ (function () {
    function AddEntryComponent(entriesService, router, route) {
        this.entriesService = entriesService;
        this.router = router;
        this.route = route;
        this.displayMessage = 'display-none';
        this.newEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddEntryComponent.prototype.ngOnInit = function () { };
    AddEntryComponent.prototype.submit = function () {
        var _this = this;
        this.entriesService.post({}).subscribe(function (entry) {
            _this.newEntry.emit(__assign({}, entry, { emojis: [], isPublic: false }));
        });
        this.successMessage = 'New Entry Created.';
        this.displayMessage = 'message';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddEntryComponent.prototype, "newEntry", void 0);
    AddEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-entry',
            template: __webpack_require__(/*! ./add-entry.component.html */ "./src/app/_Components/add-entry/add-entry.component.html"),
            styles: [__webpack_require__(/*! ./add-entry.component.css */ "./src/app/_Components/add-entry/add-entry.component.css")],
            providers: [_Services_entries_service__WEBPACK_IMPORTED_MODULE_1__["EntriesService"]]
        }),
        __metadata("design:paramtypes", [_Services_entries_service__WEBPACK_IMPORTED_MODULE_1__["EntriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddEntryComponent);
    return AddEntryComponent;
}());



/***/ }),

/***/ "./src/app/_Components/entry/entry.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_Components/entry/entry.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntextarea {\n    resize: none;\n}\n\n/* WRAPS ENTIRE ENTRY */\n\n.entry-container {\n    position: relative;\n    margin: 1em 1em 4em;\n    box-shadow: -1px 1px 20px 0px rgba(0, 0, 0, 0.20);\n    border-radius: 10px;\n    background: #fff;\n}\n\n.entry-container .actions {\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    z-index: 9;\n    padding: 0;\n    margin: 0;\n    width: 2em;\n    height: 2em;\n    border-radius: 100%;\n    background: #b9b9b9;\n    text-align: right;\n}\n\n/* DELETE */\n\n.action-delete {\n    position: absolute;\n    top: 200px;\n    right: -13px;\n    padding: 0;\n    margin: 0;\n    width: 1.4em;\n    height: 1.4em;\n    border-radius: 100%;\n    background: #ffd0d0;\n    z-index: 1;\n    text-align: center;\n}\n\n.do-not-delete {\n    position: absolute;\n    top: 160px;\n    right: -13px;\n    padding: 0;\n    margin: 0;\n    width: 1.4em;\n    height: 1.4em;\n    border-radius: 100%;\n    background: #bcdbf7;\n    z-index: 1;\n    text-align: center;\n}\n\n.do-not-delete button {\n    position: relative;\n    left: -1px;\n    top: -3px;\n    font-size: 17px;\n}\n\n.action-delete button {\n    font-size: 16px;\n    top: -5px;\n    position: relative;\n    color: #000000;\n}\n\n.are-you-sure {\n    float: right;\n    color: gray;\n    font-weight: bold;\n    font-style: italic;\n    font-size: 1em;\n}\n\n.entry-container .actions li{\n    display: inline-block;\n}\n\n/* ENTRY-HEADER */\n\n.entry-header {\n    background-color: salmon;\n    font-size: 24px;\n    padding: 1em;\n    margin: 0px;\n    text-align: center;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    height: 200px;\n    background-size: cover;\n    background-position: center;\n}\n\n.entry-header:before {\n    content: '';\n    z-index: 1;\n    height: 100px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px; /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */\n    color:#ffffff;\n}\n\n.entry-date, .title {\n    position: relative;\n    z-index: 5;\n    font-size: 1em;\n    margin: 0;\n    color:#ffffff;\n}\n\n.entry-date{\n    font-size: 0.6em;\n}\n\n.summary {\n    font-size:16px;\n    color: grey;\n    padding: 1em;\n\n}\n\n.edit-input {\n    margin: 0px;\n    border: 0;\n    outline: 0;\n    transition: 2000ms;\n    background: transparent;\n    font-style: italic;\n    width: 100%;\n    font-size: 1em;\n    z-index: 9;\n    position: relative;\n    margin-bottom: 1em;\n}\n\n.edit-label {\n    color: whitesmoke\n}\n\ninput.edit-input{\n    margin: 10px 0;\n    text-align: center;\n    background: rgba(255, 255, 255, 0.88);\n    color: #515151;\n}\n\n.edit-button {\n    background: transparent;\n    border: 0;\n    outline: 0;\n    color: black;\n    line-height: 30px;\n    text-align: center;\n    padding: 1px 10px;\n}\n\n.edit-button :active {\n    color: yellowgreen\n\n}\n\n.display-none{\n    display: none\n}\n\n/* EMOJIS */\n\n.emojis {\n    display: flex; \n    flex-direction: row;\n    flex-wrap: nowrap;\n    padding: 5px;\n    justify-content: center;\n\n}\n\n.emoji {\n    width: 2em;\n    padding: 5px;\n\n}\n\n/* ENTRY-TEXT */\n\n.entry-text-container{\n    overflow: hidden;\n    transition: 500ms;\n    min-height: 300px;\n    height: 300px;\n    padding:1em;\n}\n\n.entry-text-container.show-more{\n    min-height: 400px;\n    padding-bottom:5em;\n}\n\n.entry-text-container /deep/ * {\n    word-wrap: break-word!important;\n}\n\n.entry-text {\n    box-sizing: border-box;\n    width: 100%;\n    height: 200px;\n    font: 2px;\n    font-size: 18px;\n    line-height: 100%;\n    border: none;\n    outline: none;\n    padding: 1em;\n    background: linear-gradient(whitesmoke 96%, lightgray 99%) ;\n}\n\n/* PUBLISHER */\n\n.publisher {\n    background-color: gainsboro;\n    border:0;\n    outline:0;\n    font-size:12px;\n    padding: 1em;\n}\n\n.radio {\n    padding: 1em;\n    font: black\n}\n\n/* FOOTER */\n\n.entry-footer  {\n    display: flex;\n    justify-content: space-between;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    padding: 10px;\n    opacity: 0.5;\n    box-shadow: 0px -7px 56px -11px rgba(0, 0, 0, 0.70);\n}\n\n.show-publisher-button {\n    background: transparent;\n    border:0;\n    outline:0;\n}\n\n.extend-entry-button {\n    background: transparent;\n    border:0;\n    outline:0;\n    font-size: 12px;\n}\n\n.likes {\n    font: 16px;\n}\n\n.likes button {\n    border: none;\n    outline: none;\n}\n\nimg {\n    height: 25px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/_Components/entry/entry.component.html":
/*!********************************************************!*\
  !*** ./src/app/_Components/entry/entry.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entry-container\">\n\n  <ul class=\"actions\" *ngIf=\"entry.mine\">\n    <li *ngIf=\"!isEditing\">\n      <button class=\"edit-button\" (click)=\"editEntry()\"><i class=\"fas fa-pencil-alt\"></i></button>\n    </li>\n    <li *ngIf=\"isEditing\">\n      <button class=\"edit-button\" (click)=\"updateEntry()\"><i class=\"fas fa-save\"></i></button>\n    </li>\n\n  </ul>\n  <!-- Entry Header -->\n\n  <!-- Edit form -->\n  <form #entryForm=\"ngForm\">\n    <div class=\"entry-header\" [ngStyle]=\"{'background-image':  true ? 'url('+entry.image+')': '' }\">\n\n      <!-- Show title and summary -->\n      <div class=\"title\" *ngIf=\"!isEditing\">{{entry.title}}</div>\n      <div class=\"title\">{{entry.username}}</div>\n      <!-- HIDDEN - Edit title and summary -->\n      <div class=\"edit-input\" *ngIf=\"isEditing && entry.mine\">\n        <input class=\"edit-input\" type=\"text\" [(ngModel)]=\"entry.title\" name=\"title\" placeholder=\"Title\">\n        <app-file-uploader (UploadPath)=\"uploadPath($event)\" [Path]=\"true\"></app-file-uploader>\n      </div>\n\n      <!-- DATE -->\n      <p class=\"entry-date\">{{ (entry.status==\"draft\") ? entry.created_at : entry.publish_date }}</p>\n\n      <!-- DELETE BUTTON -->\n      <div *ngIf=\"isEditing && entry.mine\">\n\n        <div *ngIf=\"!youSure\" class=\"action-delete\">\n          <button class=\"edit-button\" (click)=\"areYouSure()\"><i class=\"fas fa-trash\"></i></button>\n        </div>\n\n        <div *ngIf=\"youSure\">\n          <div class=\"do-not-delete\">\n            <button class=\"edit-button\" (click)=\"areYouSure()\"><i class=\"fas fa-undo\" style=\"color:lightseagreen\"></i></button>\n          </div>\n\n          <div class=\"action-delete\">\n            <button class=\"edit-button\" (click)=\"deleteEntry()\"><i class=\"fas fa-trash\" style=\"color:red\"></i></button>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </form>\n\n  <!-- Emojis -->\n\n  <div class=\"edit-emoji\">\n    <app-emoji (emojiEmitter)=\"emojiEmtter($event)\" [isEditing]=\"isEditing\" [emoji]=\"emojis\"></app-emoji>\n  </div>\n\n  <!-- Entry text -->\n  <div class=\"entry-text-container\" [ngClass]=\"{ 'show-more': isEditing || showMore }\" [ngStyle]=\"{'height':  isEditing || showMore ? entryHeight+'px': '' }\">\n    <div *ngIf=\"isEditing\">\n      <textarea [froalaEditor]='EditorOptions' [(froalaModel)]=\"entry.entry_text\"></textarea>\n    </div>\n    <div *ngIf=\"!isEditing\" class=\"fr-view\" id=\"entry-content\">\n      <div [outerHTML]=\"entry.entry_text\"></div>\n    </div>\n  </div>\n\n  <!-- HIDDEN - Publish detail -->\n\n  <div class=\"publisher\" *ngIf=\"isEditing && entry.mine\">\n    <form [ngSwitch]=\"published\" #publishForm=\"ngForm\">\n      <span>Share: </span>\n      <span class=\" radio\">\n        <label for=\"private\">Private </label>\n        <input type=\"radio\" class=\"publish-radio\" name=\"publish-type\" [ngModel]=\"!entry.isPublic\" value=\"private\"\n          (click)=\"setPrivacy('private')\" checked ngModel>\n      </span>\n      <span class=\"radio\">\n        <label for=\"public\">Public </label>\n        <input type=\"radio\" class=\"publish-radio\" name=\"publish-type\" value=\"public\" [ngModel]=\"entry.isPublic\" (click)=\"setPrivacy('public')\"\n          ngModel>\n      </span>\n    </form>\n  </div>\n\n\n\n  <!-- footer for entry -->\n  <div class=\"entry-footer\">\n    <!-- <div class=\"extend-entry-button\">\n      <button class=\"extend-entry-button\" (click)=\"publishToggler()\">\n        {{ (isPublic) ? 'PRIVATE' : 'PUBLIC' }}\n      </button> </div>\n      <div> -->\n    <div>\n\n    </div>\n\n    <div>\n      <button class=\"extend-entry-button\" (click)=\"showMoreToggler()\">\n        {{ (showMore) ? 'SHOW LESS' : 'SHOW MORE' }}\n      </button>\n    </div>\n    <div class=\"likes\">\n      <span>{{likes}}</span>\n      <button (click)=\"likeEntry()\"><i class=\"fas fa-heart\" [ngStyle]=\"{'color':  likeClicked ? 'red': 'gray' }\"></i></button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/_Components/entry/entry.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_Components/entry/entry.component.ts ***!
  \******************************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var _Services_entries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../_Services/entries.service */ "./src/app/_Services/entries.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_Services/user.service */ "./src/app/_Services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntryComponent = /** @class */ (function () {
    function EntryComponent(entriesService, router, route, el, user) {
        this.entriesService = entriesService;
        this.router = router;
        this.route = route;
        this.el = el;
        this.user = user;
        this.emojis = [];
        this.deletedEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.EditorOptions = {
            toolbarInline: true,
            heightMin: 300,
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: true,
            toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'emoticons',
                '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent',
                '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo']
        };
    }
    EntryComponent.prototype.ngAfterViewInit = function () {
        var entryHeight = this.el.nativeElement.firstChild.childNodes[3].getElementsByTagName('div').item(0);
        this.entryHeight = entryHeight.offsetHeight;
    };
    EntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emojis = this.entry.emojis;
        this.isEditing = false;
        this.showMore = false;
        this.youSure = false;
        this.likeClicked = false;
        this.likes = this.entry.engagement.like.total;
        this.user.getMyID().subscribe(function (id) {
            var check = _this.entry.engagement.like.user.find(function (i) { return i === id.id; });
            if (!check) {
                _this.likeClicked = false;
            }
            else {
                _this.likeClicked = true;
            }
        });
    };
    EntryComponent.prototype.uploadPath = function (path) {
        this.entry.image = path;
    };
    EntryComponent.prototype.setPrivacy = function (privacy) {
        switch (privacy) {
            case 'private':
                this.entry.isPublic = false;
                break;
            default:
                this.entry.isPublic = true;
        }
    };
    EntryComponent.prototype.editEntry = function () {
        this.isEditing = true;
        this.youSure = false;
    };
    EntryComponent.prototype.areYouSure = function () {
        (this.youSure) ? this.youSure = false : this.youSure = true;
    };
    EntryComponent.prototype.updateEntry = function () {
        this.entriesService.edit(this.entry).subscribe();
        this.isEditing = false;
        this.showMore = false;
    };
    EntryComponent.prototype.showMoreToggler = function () {
        (this.showMore) ? this.showMore = false : this.showMore = true;
    };
    EntryComponent.prototype.deleteEntry = function () {
        var _this = this;
        this.entriesService.remove(this.entry.id)
            .subscribe(function (entry) {
            _this.deletedEntry.emit(_this.entry.id);
        });
        this.isEditing = false;
        this.showMore = false;
    };
    EntryComponent.prototype.emojiEmtter = function (emojis) {
        this.entry.emojis = emojis;
    };
    EntryComponent.prototype.likeEntry = function () {
        var _this = this;
        this.entriesService.entryLikes(this.entry.id).subscribe();
        this.user.getMyID().subscribe(function (id) {
            if (_this.likeClicked) {
                _this.likes = _this.likes - 1;
                _this.entry.engagement.like.user = _this.entry.engagement.like.user.filter(function (i) { return i.id !== id.id; });
                _this.likeClicked = false;
            }
            else {
                _this.likes = _this.likes + 1;
                _this.entry.engagement.like.user = _this.entry.engagement.like.user.concat([id.id]);
                _this.likeClicked = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EntryComponent.prototype, "emojis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EntryComponent.prototype, "entry", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EntryComponent.prototype, "deletedEntry", void 0);
    EntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! ./entry.component.html */ "./src/app/_Components/entry/entry.component.html"),
            styles: [__webpack_require__(/*! ./entry.component.css */ "./src/app/_Components/entry/entry.component.css")],
            providers: [_Services_entries_service__WEBPACK_IMPORTED_MODULE_0__["EntriesService"], _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
        }),
        __metadata("design:paramtypes", [_Services_entries_service__WEBPACK_IMPORTED_MODULE_0__["EntriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/_Components/file-uploader/file-uploader.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_Components/file-uploader/file-uploader.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\n  min-height: 100px;\n  min-width: 100%;\n  display: table;\n  width: 100%;\n  background-color: #eee;\n  border: dotted 1px #aaa;\n  border-radius: 5px;\n  height: 100px;\n}\n\n.text-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.centered {\n  font-family: sans-serif;\n  font-size: 1.3em;\n  font-weight: bold;\n  text-align: center;\n}\n\n.dropzone-list>ul {\n  width: 100%;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.dropzone-list>ul>li {\n  position: relative;\n  padding: .5em 1em .7em;\n  color: #fff;\n  margin: 1em 0;\n}\n\n.dropzone-list>ul>li p {\n  position: relative;\n  z-index: 2;\n  padding: 0;\n  margin: 0;\n}\n\n.progress {\n  transition: 500ms;\n  width: 0%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: #337ab7;\n  z-index: 1;\n}"

/***/ }),

/***/ "./src/app/_Components/file-uploader/file-uploader.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_Components/file-uploader/file-uploader.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!fileDropped\" class=\"dropzone\" appJotUploader (filesChangeEmiter)=\"onFilesChange($event)\" (fileDropped)=\"onFileDrop($event)\" [allowed_extensions]=\"['png', 'jpg', 'gif']\">\n  <div class=\"text-wrapper\">\n    <div class=\"centered\">Drop your file here!</div>\n  </div>\n</div>\n <div class=\"dropzone-list\" *ngIf=\"fileDropped\">\n  <ul>\n    <li *ngFor=\"let file of fileList\">\n      <p>{{ file.name }}</p>\n      <div class=\"progress \" [ngStyle]=\"{ 'width': uploadStatus + '%' }\"></div>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/_Components/file-uploader/file-uploader.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_Components/file-uploader/file-uploader.component.ts ***!
  \**********************************************************************/
/*! exports provided: FileUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function() { return FileUploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_uploader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_Services/uploader.service */ "./src/app/_Services/uploader.service.ts");
/* harmony import */ var _Services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_Services/message.service */ "./src/app/_Services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent(upload, message) {
        this.upload = upload;
        this.message = message;
        this.fileList = [];
        this.UploadPath = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
    };
    FileUploaderComponent.prototype.onFileDrop = function (trigger) {
        this.fileDropped = trigger;
    };
    FileUploaderComponent.prototype.onFilesChange = function (fileList) {
        var _this = this;
        this.fileList = fileList;
        if (this.fileList.length > 0) {
            var status_1 = '';
            if (this.Path) {
                status_1 = this.upload.uploadEntry(this.fileList)[this.fileList[0].name];
            }
            else {
                status_1 = this.upload.upload(this.fileList)[this.fileList[0].name];
            }
            status_1.progress.subscribe(function (s) {
                _this.uploadStatus = s;
            });
            status_1.path.subscribe(function (file) {
                if (file) {
                    _this.UploadPath.emit(file);
                }
            });
        }
        else {
            this.fileDropped = false;
            this.message.add('Invalid file type. Only png, gif, jpg allowed.', 'error');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FileUploaderComponent.prototype, "UploadPath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileUploaderComponent.prototype, "Path", void 0);
    FileUploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-uploader',
            template: __webpack_require__(/*! ./file-uploader.component.html */ "./src/app/_Components/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__(/*! ./file-uploader.component.css */ "./src/app/_Components/file-uploader/file-uploader.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_uploader_service__WEBPACK_IMPORTED_MODULE_1__["UploaderService"], _Services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "./src/app/_Components/followers/followers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/_Components/followers/followers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n    box-sizing: border-box;\n    width:100%;\n    padding: .5em;\n    border-radius: 4px;\n    border: 0;\n    outline:0;\n    box-shadow: inset 0px 1px 6px 2px rgba(0, 0, 0, 0.25);\n}\n.follower-container {\n    position: relative;\n}\n.follower-wrapper {\n    position: absolute;\n    left: 0;\n    right:0;\n    min-height: 0px;\n    background: #fffafa;\n    border: 1px solid #e0e0e0;\n    border-radius: .2em;\n    z-index: 9;\n}\n.clearSearch{\n    position: absolute;\n    right: 10px;\n    top: 6px;\n    border-radius: 100%;\n    border: 0;\n    background: transparent;\n    outline: 0;\n}\n.follower .avatar {\n    border-radius: 100%;\n    width: 23px;\n    height: 23px;\n    position: relative;\n    top: 2px;\n    left: -4px;\n}\n.follower button{\n    border:0;\n    background: transparent;\n    outline:0;\n}\n.follower {\n    border-bottom: 1px solid;\n    padding: 10px;\n    box-sizing: border-box;\n    text-align: center;\n}\n.follower .status{\n    height: 10px;\n    width: 10px;\n    display: inline-block;\n    border-radius: 100%;\n}\n.follower .status.pending {\n    background: #c9c901;\n}\n.follower .status.following {\n    background: #43a047;\n}\n.follower .status.blocked {\n    background: #c70d0d;\n}\n.follower .status.followback {\n    background: #2a5485;\n}\n.list .u-1.follower .name {\n    position: relative;\n    top: 14px;\n    left: 25px;\n    font-weight: bolder;\n}\n.list .follower{\n    border-bottom: 1px solid;\n    padding: 2px;\n    box-sizing: border-box;\n    text-align: center;\n    border: 0;\n}\n.list .status {\n    position: relative;\n    top: 15px;\n    left: -9px;\n}\n.list .follower button {\n    position: relative;\n    top: 15px;\n}\n.list .follower .avatar {\n    border-radius: 100%;\n    width: 3em;\n    height: 3em;\n    position: relative;\n    top: 2px;\n    left: -4px;\n}\n.jot-g.follower-wrapper + div {\n    overflow-y: scroll;\n    height: 350px;\n    position: relative;\n    top: 20px;\n    border-radius: 3px;\n}\n.jot-g.follower-wrapper + div:after {\n    content: '';\n    position: absolute;\n    left: 28px;\n    right: 20px;\n    bottom: -20px;\n    background: #000;\n    box-shadow: 0px 19px 90px 20px;\n}\nh3{\n    font-size: 2em;\n    margin: 0;\n    font-weight: bolder;\n    font-family: 'Source Sans Pro', sans-serif;\n}"

/***/ }),

/***/ "./src/app/_Components/followers/followers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_Components/followers/followers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"follower-container\">\n    <div class=\"jot-g\">\n        <h3>Followers</h3>\n    </div>\n</div>\n<div class=\"follower-container\">\n  <div class=\"jot-g\">\n    <div class=\"u-1\">\n        <div class=\"joy-g\">\n          <input autocomplete=\"off\" type=\"text\" (keyup)=\"searchFollowers($event)\" [(ngModel)]=\"search\" name=\"search\" placeholder=\"Search for followers\">\n          <button (click)=\"clearSearch()\" class=\"clearSearch\" *ngIf=\"toggleClear\" ><i class=\"fa fa-times\"></i></button>\n        </div>\n    </div>\n</div>\n<div class=\"jot-g follower-wrapper\">\n  <div class=\"u-1 follower\" *ngFor=\"let user of searchResults\">\n      <div class=\"joy-g\">\n        <div class=\"u-1-6\">\n          <img class=\"avatar\" src=\"{{user.avatar}}\">\n        </div>\n        <div class=\"u-5-8 align-left\">\n            <strong class=\"name\">{{user.first_name}} {{user.last_name}}</strong>\n        </div>\n        <div class=\"u-1-6\">\n            <button (click)=\"addFollower(user.username)\"><i class=\"fas fa-plus\"></i></button>\n          </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"jot-g list\">\n  <div class=\"u-1 follower\" *ngFor=\"let user of followers\">\n      <div class=\"joy-g\">\n        <div class=\"u-1-8\">\n            <span class=\"status {{user.status}}\"></span>\n        </div>\n        <div class=\"u-1-8\">\n          <img class=\"avatar\" src=\"{{user.avatar}}\">\n        </div>\n        <div class=\"u-5-8 align-left\">\n            <strong class=\"name\">{{user.first_name}} {{user.last_name}}</strong>\n        </div>\n        <div class=\"u-1-8\">\n            <button (click)=\"removeFollower(user.username)\" *ngIf=\"user.status == 'pending' || user.status == 'following' \"><i class=\"fas fa-minus\"></i></button>\n            <button (click)=\"followBack(user.username)\" *ngIf=\"user.status == 'followback'\"><i class=\"fas fa-check\"></i></button>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/_Components/followers/followers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_Components/followers/followers.component.ts ***!
  \**************************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_follower_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_Services/follower.service */ "./src/app/_Services/follower.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowersComponent = /** @class */ (function () {
    function FollowersComponent(follower) {
        this.follower = follower;
        this.followers = [];
        this.toggleClear = false;
    }
    FollowersComponent.prototype.clearSearch = function () {
        console.log('toggle');
        this.search = '';
        this.toggleClear = false;
        this.searchResults = [];
    };
    FollowersComponent.prototype.searchFollowers = function (event) {
        var _this = this;
        if (event.target.value.length > 0) {
            this.toggleClear = true;
            this.follower.search(event.target.value).subscribe(function (users) {
                _this.searchResults = [];
                users.forEach(function (user) {
                    var check = _this.followers.find(function (u) { return u.username === user.username; });
                    if (!check) {
                        _this.searchResults.push(__assign({}, user, { status: 'pending' }));
                    }
                });
            });
        }
    };
    FollowersComponent.prototype.addFollower = function (username) {
        this.followers.push(this.searchResults.find(function (u) { return u.username === username; }));
        this.follower.add(username).subscribe();
        this.searchResults = this.searchResults.filter(function (u) { return u.username !== username; });
    };
    FollowersComponent.prototype.removeFollower = function (username) {
        this.follower.remove(username).subscribe();
        this.followers = this.followers.filter(function (u) { return u.username !== username; });
    };
    FollowersComponent.prototype.followBack = function (username) {
        var _this = this;
        this.follower.followBack(username).subscribe(function (res) {
            _this.followers.find(function (i) { return i.username === username; }).status = 'following';
        });
    };
    FollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.follower.get().subscribe(function (followers) {
            _this.followers = followers;
        });
    };
    FollowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__(/*! ./followers.component.html */ "./src/app/_Components/followers/followers.component.html"),
            styles: [__webpack_require__(/*! ./followers.component.css */ "./src/app/_Components/followers/followers.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_follower_service__WEBPACK_IMPORTED_MODULE_1__["FollowerService"]])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/_Directives/uploader.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/_Directives/uploader.directive.ts ***!
  \***************************************************/
/*! exports provided: UploaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderDirective", function() { return UploaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_uploader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Services/uploader.service */ "./src/app/_Services/uploader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploaderDirective = /** @class */ (function () {
    function UploaderDirective(uploaderService) {
        this.uploaderService = uploaderService;
        this.background = '#eee';
        this.allowed_extensions = [];
        this.filesChangeEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filesInvalidEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
    }
    UploaderDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        this.background = '#ddd';
        if (files.length > 0) {
        }
    };
    UploaderDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
    };
    UploaderDirective.prototype.onDrop = function (evt) {
        this.fileDropped.emit(true);
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        var files = evt.dataTransfer.files;
        var valid_files = [];
        var invalid_files = [];
        if (files.length > 0) {
            for (var x = 0; x < files.length; x++) {
                var ext = files[x].name.split('.')[files[x].name.split('.').length - 1];
                if (this.allowed_extensions.lastIndexOf(ext) !== -1) {
                    valid_files.push(files[x]);
                }
                else {
                    invalid_files.push(files[x]);
                }
            }
            this.filesChangeEmiter.emit(valid_files);
            this.filesInvalidEmiter.emit(invalid_files);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.background'),
        __metadata("design:type", Object)
    ], UploaderDirective.prototype, "background", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UploaderDirective.prototype, "allowed_extensions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UploaderDirective.prototype, "filesChangeEmiter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UploaderDirective.prototype, "filesInvalidEmiter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UploaderDirective.prototype, "fileDropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UploaderDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UploaderDirective.prototype, "onDragLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UploaderDirective.prototype, "onDrop", null);
    UploaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appJotUploader]'
        }),
        __metadata("design:paramtypes", [_Services_uploader_service__WEBPACK_IMPORTED_MODULE_1__["UploaderService"]])
    ], UploaderDirective);
    return UploaderDirective;
}());



/***/ }),

/***/ "./src/app/_Layouts/_Shared/header/header.component.css":
/*!**************************************************************!*\
  !*** ./src/app/_Layouts/_Shared/header/header.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n    position: relative;\n    width: 100%;\n    height: 100px;\n    padding: .8em 0 0em;\n}\nheader img{\n    width: 110px;\n    position: relative;\n    top: -20px;\n}\nheader .nav{\n    font-family: 'Open Sans Condensed', sans-serif;\n    font-size: 1.5em;\n    margin: .7em 0;\n    padding: 0;\n}\nul.nav li {\n    margin: 0 10px;\n}\nul.nav li a {\n    text-decoration: none;\n    color: #50455a;\n    text-transform: uppercase;\n    font-weight: bolder;\n}\nul.nav a.active {\n    color: #584e62!important;\n    text-decoration: underline!important;\n}\n.modal-wrapper {\n    background: rgba(0, 0, 0, 0.50);\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 9;\n}\n.modal /deep/ h2 {\n    position: absolute;\n    top: -1em;\n    background: #337ab7;\n    left: 0;\n    width: 100%;\n    color: #fff;\n    padding: .5em;\n    box-sizing: border-box;\n    z-index: 1;\n    font-family: 'HiraginoKaku-GothicPro', PingFang SC, Arial;\n    text-transform: capitalize;\n    font-weight: 100;\n}\n.modal {\n    position: relative;\n    width: 50%;\n    margin: 5em auto;\n    padding: 5em 2em 2em 2em;\n    background: #fff;\n    box-sizing: border-box;\n    border-radius: 6px;\n    z-index: 10;\n}\n.modal button{\n    outline: 0;\n    border: 0;\n    position: absolute;\n    right: 1.4em;\n    top: 1.3em;\n    z-index: 2;\n    background: transparent;\n    color: #fff;\n}\n.light-button {\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/_Layouts/_Shared/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/_Layouts/_Shared/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message></app-message>\n<header class=\"jot-g\">\n  <div class=\"container\">\n    <div class=\"u-1-8\">\n      <img src=\"/assets/images/loho.png\" *ngIf=\"light\" width=\"60\" class=\"logo\" />\n      <img src=\"/assets/images/logo.png\" *ngIf=\"!light\" width=\"60\" class=\"logo\" />\n\n    </div>\n    <div class=\"u-5-8\">\n      <ul *ngIf=\"isLoggedIn\" class=\"nav\">\n        <li><a routerLink=\"/me\" routerLinkActive=\"active\">profile</a></li>\n        <li><a routerLink=\"/timeline\" routerLinkActive=\"active\">timeline</a></li>\n        <li><a routerLink=\"/explorer\" routerLinkActive=\"active\">explorer</a></li>\n      </ul>\n    </div>\n    <div class=\"u-6-24 align-right\">\n      <ul>\n        <li *ngIf=\"isLoggedIn\">\n          <button (click)=\"logout()\" class=\"btn btn-default\">Logout</button>\n        </li>\n        <li *ngIf=\"!isLoggedIn\">\n          <button (click)=\"toggleLogin()\" class=\"btn btn-default\" *ngIf=\"light\">login</button>\n          <button (click)=\"toggleLogin()\" class=\"btn btn-default\" style=\"color: #fff; border: 1px solid #fff\" *ngIf=\"\n            !light\">login</button>\n\n        </li>\n        <li *ngIf=\"!isLoggedIn\">\n          <button class=\"btn btn-default\" (click)=\"toggleSignup()\" *ngIf=\"light\">1signup</button>\n          <button class=\"btn btn-default\" style=\"color: #fff; border: 1px solid #fff\" (click)=\"toggleSignup()\" *ngIf=\"!light\">signup</button>\n\n        </li>\n      </ul>\n    </div>\n  </div>\n</header>\n<div class=\"modal-wrapper\" *ngIf=\"showModal\" (click)=\"closeModal()\"></div>\n<div class=\"modal\" *ngIf=\"showModal\">\n  <app-message></app-message>\n  <button (click)=\"closeModal()\">X</button>\n  <app-login *ngIf=\"showLogin\" (showForgot)=\"toggleForgot($event)\"></app-login>\n  <app-forgot *ngIf=\"showForgot\"></app-forgot>\n  <app-signup *ngIf=\"showSignup\" (signUpComplete)=\"signUpComplete($event)\"></app-signup>\n</div>"

/***/ }),

/***/ "./src/app/_Layouts/_Shared/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/_Layouts/_Shared/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.isLoggedIn = this.authService.LoggedIn;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signUpComplete = function (trigger) {
        if (trigger) {
            this.closeModal();
            this.toggleLogin();
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.isLoggedIn = false;
        this.authService.logout();
    };
    HeaderComponent.prototype.closeModal = function () {
        this.showModal = false;
        this.showLogin = false;
        this.showSignup = false;
        this.showForgot = false;
    };
    HeaderComponent.prototype.toggleLogin = function () {
        this.showModal = true;
        this.showLogin = true;
    };
    HeaderComponent.prototype.toggleSignup = function () {
        this.showModal = true;
        this.showSignup = true;
    };
    HeaderComponent.prototype.toggleForgot = function (toggler) {
        this.showModal = true;
        this.showLogin = false;
        this.showForgot = toggler;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "light", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/_Layouts/_Shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/_Layouts/_Shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/_Layouts/_Shared/message/message.component.css":
/*!****************************************************************!*\
  !*** ./src/app/_Layouts/_Shared/message/message.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-wrapper{\n    position: fixed;\n    top: 0;\n    transition: 500ms;\n    opacity: 0;\n    visibility: hidden;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n.message-wrapper.active{\n    opacity: 1;\n    visibility: visible;\n}\n.message-wrapper.error {\n    background: #fdb6b6;\n}\n.message-wrapper.default {\n    background: #b6d6fd;\n}\n.message-wrapper p {\n    padding: .5em 1em;\n}\n\n"

/***/ }),

/***/ "./src/app/_Layouts/_Shared/message/message.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/_Layouts/_Shared/message/message.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-wrapper {{messageType}}\" [ngClass]=\"{'active': showMessage}\"><p>{{message}}</p></div>"

/***/ }),

/***/ "./src/app/_Layouts/_Shared/message/message.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/_Layouts/_Shared/message/message.component.ts ***!
  \***************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_Services/message.service */ "./src/app/_Services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = '';
        this.showMessage = false;
        this.messageService.Message$.subscribe(function (message) {
            _this.displayMessage();
            _this.message = message.message;
            _this.messageType = message.type;
        });
    };
    MessageComponent.prototype.displayMessage = function () {
        var _this = this;
        this.showMessage = true;
        setTimeout(function () {
            _this.showMessage = false;
        }, 3000);
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/_Layouts/_Shared/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/_Layouts/_Shared/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/_Layouts/authorization/authorization.component.css":
/*!********************************************************************!*\
  !*** ./src/app/_Layouts/authorization/authorization.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_Layouts/authorization/authorization.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/_Layouts/authorization/authorization.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_Layouts/authorization/authorization.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/_Layouts/authorization/authorization.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function() { return AuthorizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthorizationComponent = /** @class */ (function () {
    function AuthorizationComponent() {
    }
    AuthorizationComponent.prototype.ngOnInit = function () {
    };
    AuthorizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authorization',
            template: __webpack_require__(/*! ./authorization.component.html */ "./src/app/_Layouts/authorization/authorization.component.html"),
            styles: [__webpack_require__(/*! ./authorization.component.css */ "./src/app/_Layouts/authorization/authorization.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());



/***/ }),

/***/ "./src/app/_Layouts/explorer/explorer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/_Layouts/explorer/explorer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: #b5b0bb;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23443135' fill-opacity='0.12'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E\");\n}"

/***/ }),

/***/ "./src/app/_Layouts/explorer/explorer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/_Layouts/explorer/explorer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header light=\"true\"></app-header>\n<div class=\"jot-g container\">\n    <div class=\"u-3-4\">\n        <div *ngFor=\"let entry of entries\">\n            <app-entry [entry]=\"entry\" (deletedEntry)=\"deletedEntry($event)\"></app-entry>\n        </div>\n    </div>\n    <div class=\"u-1-4\">\n        <app-add-entry (newEntry)=\"initNewEntry($event)\"></app-add-entry>\n        <app-followers></app-followers>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/_Layouts/explorer/explorer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/_Layouts/explorer/explorer.component.ts ***!
  \*********************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_entries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_Services/entries.service */ "./src/app/_Services/entries.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(entryService) {
        this.entryService = entryService;
    }
    ExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entryService.getEntries('explorer').subscribe(function (entries) {
            _this.entries = entries;
        });
    };
    ExplorerComponent.prototype.deletedEntry = function (entry) {
        this.entries = this.entries.filter(function (i) { return i.id !== entry; });
    };
    ExplorerComponent.prototype.initNewEntry = function (e) {
        this.entries = [e].concat(this.entries);
        console.log(e);
    };
    ExplorerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/_Layouts/explorer/explorer.component.html"),
            styles: [__webpack_require__(/*! ./explorer.component.css */ "./src/app/_Layouts/explorer/explorer.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_entries_service__WEBPACK_IMPORTED_MODULE_1__["EntriesService"]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/_Layouts/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/_Layouts/home/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ body, /deep/ html{\n    height: 100%;\n}\n.bg{\n    height: 100%;\n}\n.logo{\n    margin: .5em;\n}\n.hero-banner{\n    background-image: url(\"/assets/images/hero_banner.jpg\");\n    background-repeat: no-repeat;\n    background-size:cover;\n    background-position: center center;\n    height: 65%;\n}\n.overview{\n    position: relative;\n    background: #FDF7F7;\n    box-shadow: 0px 0px 20px 20px #00000036;\n    transform: rotate(-5deg);\n    -webkit-transform: rotate(-5deg);\n    width: 103%;\n    height: 60%;\n    top: -10em;\n    left: -1.5em;\n    z-index: 1;\n}\n.overview h2{\n    padding: 0 0.3em;\n    -webkit-transform: skew(-5deg);\n            transform: skew(-5deg)\n}\n.overview p {\n    font-size: 1.2em;\n    font-weight: 100;\n    line-height: 1.5em;\n    -webkit-transform: skew(-5deg);\n            transform: skew(-5deg)\n}\napp-header{\n    margin:0 auto;\n}"

/***/ }),

/***/ "./src/app/_Layouts/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/_Layouts/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <section class=\"jot-g hero-banner\">\n    <app-header></app-header>\n  </section>\n  <section class=\"jot-g overview\">\n    <div class=\"container\">\n      <div class=\"u-1-3\">\n        <h2>Write</h2>\n        <p>Have a thought or idea? Jot it down in our portable, secure and dynamic platform. JOT makes it easy to write\n          about your life and emotions. It's a private diary, a place to express yourself, or simply a place where you\n          can write whatever you please.\n        </p>\n      </div>\n      <div class=\"u-1-3\">\n        <h2>Share</h2>\n        <p>While you can always keep your entries private, some thoughts are worth sharing to the world. Make a journal\n          public so the JOT community can view it. Unlike other platforms, you decide what information you want to\n          share. </p>\n      </div>\n      <div class=\"u-1-3\">\n        <h2>Explore</h2>\n        <p>See what other people are thinking and feeling as others publish their personal journal entries. Feeling\n          angry or happy and want to see if others can relate? Use JOT's emoji search to find entries that fit your\n          mood. If you like someone's writing, follow them to see what they'll write next!</p>\n      </div>\n    </div>\n  </section>\n  <section class=\"jot-g\">\n\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/_Layouts/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/_Layouts/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/_Layouts/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/_Layouts/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/_Layouts/profile/profile.component.css":
/*!********************************************************!*\
  !*** ./src/app/_Layouts/profile/profile.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tinted-image {\n    background: \n      linear-gradient(\n        rgba(250, 247, 247, 0.725), \n        rgba(226, 219, 219, 0.725)\n      ),\n      \n      url('seamless_denim_fabric_texture.jpg');\n  }"

/***/ }),

/***/ "./src/app/_Layouts/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/_Layouts/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <app-header light=\"true\"></app-header>\n    <div class=\"jot-g container\">\n        <div class=\"u-3-4\">\n            <div *ngFor=\"let entry of entries\">\n                <app-entry [entry]=\"entry\" (deletedEntry)=\"deletedEntry($event)\"></app-entry>\n            </div>\n        </div>\n        <div class=\"u-1-4\">\n            <app-add-entry (newEntry)=\"initNewEntry($event)\"></app-add-entry>\n            <app-followers></app-followers>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/_Layouts/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/_Layouts/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_entries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_Services/entries.service */ "./src/app/_Services/entries.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(entryService) {
        this.entryService = entryService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entryService.getEntries('profile').subscribe(function (entries) {
            _this.entries = entries;
        });
    };
    ProfileComponent.prototype.deletedEntry = function (entry) {
        this.entries = this.entries.filter(function (i) { return i.id !== entry; });
    };
    ProfileComponent.prototype.initNewEntry = function (e) {
        this.entries = [e].concat(this.entries);
        console.log(e);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/_Layouts/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/_Layouts/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_entries_service__WEBPACK_IMPORTED_MODULE_1__["EntriesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/_Layouts/timeline/timeline.component.css":
/*!**********************************************************!*\
  !*** ./src/app/_Layouts/timeline/timeline.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_Layouts/timeline/timeline.component.html":
/*!***********************************************************!*\
  !*** ./src/app/_Layouts/timeline/timeline.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header light=\"true\"></app-header>\n<div class=\"jot-g container\">\n    <div class=\"u-3-4\">\n        <div *ngFor=\"let entry of entries\">\n            <app-entry [entry]=\"entry\" (deletedEntry)=\"deletedEntry($event)\"></app-entry>\n        </div>\n    </div>\n    <div class=\"u-1-4\">\n        <app-add-entry (newEntry)=\"initNewEntry($event)\"></app-add-entry>\n        <app-followers></app-followers>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/_Layouts/timeline/timeline.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/_Layouts/timeline/timeline.component.ts ***!
  \*********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_entries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_Services/entries.service */ "./src/app/_Services/entries.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(entryService) {
        this.entryService = entryService;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entryService.getEntries('timeline').subscribe(function (entries) {
            _this.entries = entries;
        });
    };
    TimelineComponent.prototype.deletedEntry = function (entry) {
        this.entries = this.entries.filter(function (i) { return i.id !== entry; });
    };
    TimelineComponent.prototype.initNewEntry = function (e) {
        this.entries = [e].concat(this.entries);
        console.log(e);
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/_Layouts/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/_Layouts/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_entries_service__WEBPACK_IMPORTED_MODULE_1__["EntriesService"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/_Services/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_Services/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService) {
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.loginCheck(state.url);
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService.prototype.loginCheck = function (url) {
        return this.authService.isLoggedIn();
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/_Services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_Services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Services/message.service */ "./src/app/_Services/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, messageService, router) {
        this.http = http;
        this.messageService = messageService;
        this.router = router;
        this.LoggedIn = false;
    }
    AuthenticationService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/isloggedin", { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('Login Check')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res) {
                _this.LoggedIn = true;
                return true;
            }
            else {
                _this.LoggedIn = false;
                _this.router.navigate(['/']);
                return false;
            }
        }));
    };
    AuthenticationService.prototype.login = function (login) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/login", login, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('Login')));
    };
    AuthenticationService.prototype.signup = function (signup) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/signup", signup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('Signup')));
    };
    AuthenticationService.prototype.forgot = function (forgot) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/forgot", forgot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('Forgot Account')));
    };
    AuthenticationService.prototype.setupAccount = function (id, setup) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/signup/" + id, setup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('Forgot Account')));
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/logout", { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('Logout'))).subscribe(function (d) {
            _this.LoggedIn = false;
            _this.router.navigate(['/']);
        });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _Services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_Services/emoji.service.ts":
/*!********************************************!*\
  !*** ./src/app/_Services/emoji.service.ts ***!
  \********************************************/
/*! exports provided: EmojiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiService", function() { return EmojiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmojiService = /** @class */ (function () {
    function EmojiService(http) {
        this.http = http;
    }
    EmojiService.prototype.getEmojis = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/api/emojis")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    EmojiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EmojiService);
    return EmojiService;
}());



/***/ }),

/***/ "./src/app/_Services/entries.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_Services/entries.service.ts ***!
  \**********************************************/
/*! exports provided: EntriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesService", function() { return EntriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntriesService = /** @class */ (function () {
    function EntriesService(http) {
        this.http = http;
        this.entries = [];
    }
    EntriesService.prototype.getEntries = function (type) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/entries/" + type, { withCredentials: true });
    };
    EntriesService.prototype.get = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/entries/" + id);
    };
    EntriesService.prototype.getMyEntries = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/profile", { withCredentials: true });
    };
    EntriesService.prototype.getPublicEntries = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/public", { withCredentials: true });
    };
    EntriesService.prototype.post = function (form) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/entries", form, { withCredentials: true });
    };
    EntriesService.prototype.edit = function (entry) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/entry/" + entry.id, entry);
    };
    // editListEntries(entry) {
    //   return this.http.put(`${environment.api_url}/api/entries/${entry.id}`, entry)
    //     .pipe(map((res) => res.json()));
    // }
    EntriesService.prototype.remove = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/entries/" + id);
    };
    EntriesService.prototype.entryLikes = function (id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/likes/" + id, {}, { withCredentials: true });
    };
    EntriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EntriesService);
    return EntriesService;
}());



/***/ }),

/***/ "./src/app/_Services/follower.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_Services/follower.service.ts ***!
  \***********************************************/
/*! exports provided: FollowerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowerService", function() { return FollowerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FollowerService = /** @class */ (function () {
    function FollowerService(http) {
        this.http = http;
    }
    FollowerService.prototype.get = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/followers", { withCredentials: true });
    };
    FollowerService.prototype.search = function (query) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/follower/" + query, { withCredentials: true });
    };
    FollowerService.prototype.add = function (username) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/follower", { username: username }, { withCredentials: true });
    };
    FollowerService.prototype.followBack = function (username) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/follower", { username: username }, { withCredentials: true });
    };
    FollowerService.prototype.remove = function (username) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/follower/" + username, { withCredentials: true });
    };
    FollowerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FollowerService);
    return FollowerService;
}());



/***/ }),

/***/ "./src/app/_Services/message.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_Services/message.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageService = /** @class */ (function () {
    function MessageService() {
        this.Message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.Message$ = this.Message.asObservable();
    }
    MessageService.prototype.add = function (message, type) {
        if (type === void 0) { type = 'default'; }
        this.Message.next({ message: message, type: type });
    };
    MessageService.prototype.clear = function () {
        this.Message.next({ message: '', type: 'none' });
    };
    MessageService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.log(operation + " failed: " + error.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    MessageService.prototype.log = function (message) {
        this.add("" + message, 'error');
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/_Services/uploader.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_Services/uploader.service.ts ***!
  \***********************************************/
/*! exports provided: UploaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderService", function() { return UploaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Services/message.service */ "./src/app/_Services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploaderService = /** @class */ (function () {
    function UploaderService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    UploaderService.prototype.upload = function (files) {
        var _this = this;
        // this will be the our resulting map
        var status = {};
        files.forEach(function (file) {
            // create a new multipart-form for every file
            var formData = new FormData();
            formData.append('file', file, file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/upload", formData, {
                reportProgress: true
            });
            // create a new progress-subject for every file
            var progress = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var path = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var filePath;
            // send the http-request and subscribe for progress-updates
            _this.http.request(req).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    // calculate the progress percentage
                    var percentDone = Math.round(100 * event.loaded / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    var body = event.body;
                    filePath = body.path;
                    path.next(filePath);
                    path.complete();
                    progress.complete();
                }
            });
            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable(),
                path: path.asObservable()
            };
        });
        // return the map of progress.observables
        return status;
    };
    UploaderService.prototype.uploadEntry = function (files) {
        var _this = this;
        // this will be the our resulting map
        var status = {};
        files.forEach(function (file) {
            // create a new multipart-form for every file
            var formData = new FormData();
            formData.append('file', file, file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/upload/entry", formData, {
                reportProgress: true
            });
            // create a new progress-subject for every file
            var progress = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var path = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var filePath;
            // send the http-request and subscribe for progress-updates
            _this.http.request(req).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    // calculate the progress percentage
                    var percentDone = Math.round(100 * event.loaded / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    var body = event.body;
                    filePath = body.path;
                    path.next(filePath);
                    path.complete();
                    progress.complete();
                }
            });
            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable(),
                path: path.asObservable()
            };
        });
        // return the map of progress.observables
        return status;
    };
    UploaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _Services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], UploaderService);
    return UploaderService;
}());



/***/ }),

/***/ "./src/app/_Services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_Services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getMyID = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "/api/user/me", { withCredentials: true });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_entry_entry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_Components/entry/entry.component */ "./src/app/_Components/entry/entry.component.ts");
/* harmony import */ var _Components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_Components/add-entry/add-entry.component */ "./src/app/_Components/add-entry/add-entry.component.ts");
/* harmony import */ var _Layouts_Shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_Layouts/_Shared/header/header.component */ "./src/app/_Layouts/_Shared/header/header.component.ts");
/* harmony import */ var _Layouts_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_Layouts/authorization/authorization.component */ "./src/app/_Layouts/authorization/authorization.component.ts");
/* harmony import */ var _Layouts_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_Layouts/profile/profile.component */ "./src/app/_Layouts/profile/profile.component.ts");
/* harmony import */ var _Layouts_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_Layouts/timeline/timeline.component */ "./src/app/_Layouts/timeline/timeline.component.ts");
/* harmony import */ var _Layouts_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_Layouts/explorer/explorer.component */ "./src/app/_Layouts/explorer/explorer.component.ts");
/* harmony import */ var _Layouts_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_Layouts/home/home.component */ "./src/app/_Layouts/home/home.component.ts");
/* harmony import */ var _Services_entries_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_Services/entries.service */ "./src/app/_Services/entries.service.ts");
/* harmony import */ var _Components_Authorization_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_Components/Authorization/login/login.component */ "./src/app/_Components/Authorization/login/login.component.ts");
/* harmony import */ var _Components_Authorization_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_Components/Authorization/signup/signup.component */ "./src/app/_Components/Authorization/signup/signup.component.ts");
/* harmony import */ var _Components_Authorization_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_Components/Authorization/forgot/forgot.component */ "./src/app/_Components/Authorization/forgot/forgot.component.ts");
/* harmony import */ var _Components_Emojis_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_Components/Emojis/emoji/emoji.component */ "./src/app/_Components/Emojis/emoji/emoji.component.ts");
/* harmony import */ var _Services_message_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_Services/message.service */ "./src/app/_Services/message.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_Services/authentication.service */ "./src/app/_Services/authentication.service.ts");
/* harmony import */ var _Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_Services/auth-guard.service */ "./src/app/_Services/auth-guard.service.ts");
/* harmony import */ var _Layouts_Shared_message_message_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_Layouts/_Shared/message/message.component */ "./src/app/_Layouts/_Shared/message/message.component.ts");
/* harmony import */ var _Services_emoji_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_Services/emoji.service */ "./src/app/_Services/emoji.service.ts");
/* harmony import */ var _Components_followers_followers_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_Components/followers/followers.component */ "./src/app/_Components/followers/followers.component.ts");
/* harmony import */ var _Components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_Components/file-uploader/file-uploader.component */ "./src/app/_Components/file-uploader/file-uploader.component.ts");
/* harmony import */ var _Directives_uploader_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_Directives/uploader.directive */ "./src/app/_Directives/uploader.directive.ts");
/* harmony import */ var _Services_uploader_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_Services/uploader.service */ "./src/app/_Services/uploader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _Components_entry_entry_component__WEBPACK_IMPORTED_MODULE_9__["EntryComponent"],
                _Components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_10__["AddEntryComponent"],
                _Components_Authorization_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _Components_Authorization_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
                _Components_Authorization_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_20__["ForgotComponent"],
                _Layouts_authorization_authorization_component__WEBPACK_IMPORTED_MODULE_12__["AuthorizationComponent"],
                _Layouts_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _Layouts_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"],
                _Layouts_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_15__["ExplorerComponent"],
                _Layouts_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _Layouts_Shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _Layouts_Shared_message_message_component__WEBPACK_IMPORTED_MODULE_25__["MessageComponent"],
                _Components_Emojis_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_21__["EmojiComponent"],
                _Components_followers_followers_component__WEBPACK_IMPORTED_MODULE_27__["FollowersComponent"],
                _Components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_28__["FileUploaderComponent"],
                _Directives_uploader_directive__WEBPACK_IMPORTED_MODULE_29__["UploaderDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_7__["FroalaViewModule"].forRoot()
            ],
            providers: [
                _Services_entries_service__WEBPACK_IMPORTED_MODULE_17__["EntriesService"],
                _Services_authentication_service__WEBPACK_IMPORTED_MODULE_23__["AuthenticationService"],
                _Services_message_service__WEBPACK_IMPORTED_MODULE_22__["MessageService"],
                _Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"],
                _Services_emoji_service__WEBPACK_IMPORTED_MODULE_26__["EmojiService"],
                _Services_uploader_service__WEBPACK_IMPORTED_MODULE_30__["UploaderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _Components_entry_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Components/entry/entry.component */ "./src/app/_Components/entry/entry.component.ts");
/* harmony import */ var _Layouts_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Layouts/home/home.component */ "./src/app/_Layouts/home/home.component.ts");
/* harmony import */ var _Layouts_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Layouts/explorer/explorer.component */ "./src/app/_Layouts/explorer/explorer.component.ts");
/* harmony import */ var _Layouts_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Layouts/profile/profile.component */ "./src/app/_Layouts/profile/profile.component.ts");
/* harmony import */ var _Layouts_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Layouts/timeline/timeline.component */ "./src/app/_Layouts/timeline/timeline.component.ts");
/* harmony import */ var _Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_Services/auth-guard.service */ "./src/app/_Services/auth-guard.service.ts");

/* Layouts */





var routes = [
    { path: '', component: _Layouts_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'explorer', component: _Layouts_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_2__["ExplorerComponent"], canActivate: [_Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'me', component: _Layouts_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'timeline', component: _Layouts_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"], canActivate: [_Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'entry/:id', component: _Components_entry_entry_component__WEBPACK_IMPORTED_MODULE_0__["EntryComponent"], canActivate: [_Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api_url: 'http://vacate.seanzamora.com'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seanzamora/Development/Project 3/jot/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map