webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var WalletsProvider = /** @class */ (function () {
    function WalletsProvider(settingsProvider) {
        this.settingsProvider = settingsProvider;
        this.walletList = [];
        this.wallets = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.walletList);
        this.walletChangedBehaviour = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
        this.loadWalletsFromStorage().catch(console.error);
    }
    Object.defineProperty(WalletsProvider.prototype, "walledChangedObservable", {
        get: function () {
            return this.walletChangedBehaviour.asObservable().auditTime(50);
        },
        enumerable: true,
        configurable: true
    });
    WalletsProvider.prototype.triggerWalletChanged = function () {
        this.walletChangedBehaviour.next();
    };
    WalletsProvider.prototype.loadWalletsFromStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var rawWallets, wallets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settingsProvider.get(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsKey */].WALLET)];
                    case 1:
                        rawWallets = _a.sent();
                        wallets = rawWallets;
                        // migrating double-serialization
                        if (!(rawWallets instanceof Array)) {
                            wallets = JSON.parse(rawWallets);
                        }
                        // "wallets" can be undefined here
                        if (!wallets) {
                            wallets = [];
                        }
                        wallets.forEach(function (wallet) {
                            var airGapWallet = new __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["AirGapMarketWallet"](wallet.protocolIdentifier, wallet.publicKey, wallet.isExtendedPublicKey, wallet.derivationPath);
                            // add derived addresses
                            airGapWallet.addresses = wallet.addresses;
                            // if we have no addresses, derive using webworker and sync, else just sync
                            if (airGapWallet.addresses.length === 0 || (airGapWallet.isExtendedPublicKey && airGapWallet.addresses.length < 20)) {
                                var airGapWorker = new Worker('./assets/workers/airgap-coin-lib.js');
                                airGapWorker.onmessage = function (event) {
                                    airGapWallet.addresses = event.data.addresses;
                                    airGapWallet
                                        .synchronize()
                                        .then(function () {
                                        _this.triggerWalletChanged();
                                    })
                                        .catch(console.error);
                                };
                                airGapWorker.postMessage({
                                    protocolIdentifier: airGapWallet.protocolIdentifier,
                                    publicKey: airGapWallet.publicKey,
                                    isExtendedPublicKey: airGapWallet.isExtendedPublicKey,
                                    derivationPath: airGapWallet.derivationPath
                                });
                            }
                            else {
                                airGapWallet
                                    .synchronize()
                                    .then(function () {
                                    _this.triggerWalletChanged();
                                })
                                    .catch(console.error);
                            }
                            _this.walletList.push(airGapWallet);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletsProvider.prototype.addWallet = function (wallet) {
        if (this.walletExists(wallet)) {
            throw new Error('wallet already exists');
        }
        this.walletList.push(wallet);
        return this.persist();
    };
    WalletsProvider.prototype.removeWallet = function (testWallet) {
        var index = this.walletList.findIndex(function (wallet) { return wallet.publicKey === testWallet.publicKey && wallet.protocolIdentifier === testWallet.protocolIdentifier; });
        if (index > -1) {
            this.walletList.splice(index, 1);
        }
        return this.persist();
    };
    WalletsProvider.prototype.persist = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.settingsProvider.set(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsKey */].WALLET, this.walletList)];
            });
        });
    };
    WalletsProvider.prototype.walletExists = function (testWallet) {
        return this.walletList.some(function (wallet) { return wallet.publicKey === testWallet.publicKey && wallet.protocolIdentifier === testWallet.protocolIdentifier; });
    };
    WalletsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__settings_settings__["b" /* SettingsProvider */]])
    ], WalletsProvider);
    return WalletsProvider;
}());

//# sourceMappingURL=wallets.provider.js.map

/***/ }),

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 539,
	"./af.js": 539,
	"./ar": 540,
	"./ar-dz": 541,
	"./ar-dz.js": 541,
	"./ar-kw": 542,
	"./ar-kw.js": 542,
	"./ar-ly": 543,
	"./ar-ly.js": 543,
	"./ar-ma": 544,
	"./ar-ma.js": 544,
	"./ar-sa": 545,
	"./ar-sa.js": 545,
	"./ar-tn": 546,
	"./ar-tn.js": 546,
	"./ar.js": 540,
	"./az": 547,
	"./az.js": 547,
	"./be": 548,
	"./be.js": 548,
	"./bg": 549,
	"./bg.js": 549,
	"./bm": 550,
	"./bm.js": 550,
	"./bn": 551,
	"./bn.js": 551,
	"./bo": 552,
	"./bo.js": 552,
	"./br": 553,
	"./br.js": 553,
	"./bs": 554,
	"./bs.js": 554,
	"./ca": 555,
	"./ca.js": 555,
	"./cs": 556,
	"./cs.js": 556,
	"./cv": 557,
	"./cv.js": 557,
	"./cy": 558,
	"./cy.js": 558,
	"./da": 559,
	"./da.js": 559,
	"./de": 560,
	"./de-at": 561,
	"./de-at.js": 561,
	"./de-ch": 562,
	"./de-ch.js": 562,
	"./de.js": 560,
	"./dv": 563,
	"./dv.js": 563,
	"./el": 564,
	"./el.js": 564,
	"./en-au": 565,
	"./en-au.js": 565,
	"./en-ca": 566,
	"./en-ca.js": 566,
	"./en-gb": 567,
	"./en-gb.js": 567,
	"./en-ie": 568,
	"./en-ie.js": 568,
	"./en-il": 569,
	"./en-il.js": 569,
	"./en-nz": 570,
	"./en-nz.js": 570,
	"./eo": 571,
	"./eo.js": 571,
	"./es": 572,
	"./es-do": 573,
	"./es-do.js": 573,
	"./es-us": 574,
	"./es-us.js": 574,
	"./es.js": 572,
	"./et": 575,
	"./et.js": 575,
	"./eu": 576,
	"./eu.js": 576,
	"./fa": 577,
	"./fa.js": 577,
	"./fi": 578,
	"./fi.js": 578,
	"./fo": 579,
	"./fo.js": 579,
	"./fr": 580,
	"./fr-ca": 581,
	"./fr-ca.js": 581,
	"./fr-ch": 582,
	"./fr-ch.js": 582,
	"./fr.js": 580,
	"./fy": 583,
	"./fy.js": 583,
	"./gd": 584,
	"./gd.js": 584,
	"./gl": 585,
	"./gl.js": 585,
	"./gom-latn": 586,
	"./gom-latn.js": 586,
	"./gu": 587,
	"./gu.js": 587,
	"./he": 588,
	"./he.js": 588,
	"./hi": 589,
	"./hi.js": 589,
	"./hr": 590,
	"./hr.js": 590,
	"./hu": 591,
	"./hu.js": 591,
	"./hy-am": 592,
	"./hy-am.js": 592,
	"./id": 593,
	"./id.js": 593,
	"./is": 594,
	"./is.js": 594,
	"./it": 595,
	"./it.js": 595,
	"./ja": 596,
	"./ja.js": 596,
	"./jv": 597,
	"./jv.js": 597,
	"./ka": 598,
	"./ka.js": 598,
	"./kk": 599,
	"./kk.js": 599,
	"./km": 600,
	"./km.js": 600,
	"./kn": 601,
	"./kn.js": 601,
	"./ko": 602,
	"./ko.js": 602,
	"./ky": 603,
	"./ky.js": 603,
	"./lb": 604,
	"./lb.js": 604,
	"./lo": 605,
	"./lo.js": 605,
	"./lt": 606,
	"./lt.js": 606,
	"./lv": 607,
	"./lv.js": 607,
	"./me": 608,
	"./me.js": 608,
	"./mi": 609,
	"./mi.js": 609,
	"./mk": 610,
	"./mk.js": 610,
	"./ml": 611,
	"./ml.js": 611,
	"./mn": 612,
	"./mn.js": 612,
	"./mr": 613,
	"./mr.js": 613,
	"./ms": 614,
	"./ms-my": 615,
	"./ms-my.js": 615,
	"./ms.js": 614,
	"./mt": 616,
	"./mt.js": 616,
	"./my": 617,
	"./my.js": 617,
	"./nb": 618,
	"./nb.js": 618,
	"./ne": 619,
	"./ne.js": 619,
	"./nl": 620,
	"./nl-be": 621,
	"./nl-be.js": 621,
	"./nl.js": 620,
	"./nn": 622,
	"./nn.js": 622,
	"./pa-in": 623,
	"./pa-in.js": 623,
	"./pl": 624,
	"./pl.js": 624,
	"./pt": 625,
	"./pt-br": 626,
	"./pt-br.js": 626,
	"./pt.js": 625,
	"./ro": 627,
	"./ro.js": 627,
	"./ru": 628,
	"./ru.js": 628,
	"./sd": 629,
	"./sd.js": 629,
	"./se": 630,
	"./se.js": 630,
	"./si": 631,
	"./si.js": 631,
	"./sk": 632,
	"./sk.js": 632,
	"./sl": 633,
	"./sl.js": 633,
	"./sq": 634,
	"./sq.js": 634,
	"./sr": 635,
	"./sr-cyrl": 636,
	"./sr-cyrl.js": 636,
	"./sr.js": 635,
	"./ss": 637,
	"./ss.js": 637,
	"./sv": 638,
	"./sv.js": 638,
	"./sw": 639,
	"./sw.js": 639,
	"./ta": 640,
	"./ta.js": 640,
	"./te": 641,
	"./te.js": 641,
	"./tet": 642,
	"./tet.js": 642,
	"./tg": 643,
	"./tg.js": 643,
	"./th": 644,
	"./th.js": 644,
	"./tl-ph": 645,
	"./tl-ph.js": 645,
	"./tlh": 646,
	"./tlh.js": 646,
	"./tr": 647,
	"./tr.js": 647,
	"./tzl": 648,
	"./tzl.js": 648,
	"./tzm": 649,
	"./tzm-latn": 650,
	"./tzm-latn.js": 650,
	"./tzm.js": 649,
	"./ug-cn": 651,
	"./ug-cn.js": 651,
	"./uk": 652,
	"./uk.js": 652,
	"./ur": 653,
	"./ur.js": 653,
	"./uz": 654,
	"./uz-latn": 655,
	"./uz-latn.js": 655,
	"./uz.js": 654,
	"./vi": 656,
	"./vi.js": 656,
	"./x-pseudo": 657,
	"./x-pseudo.js": 657,
	"./yo": 658,
	"./yo.js": 658,
	"./zh-cn": 659,
	"./zh-cn.js": 659,
	"./zh-hk": 660,
	"./zh-hk.js": 660,
	"./zh-tw": 661,
	"./zh-tw.js": 661
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1260;

/***/ }),

/***/ 1261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_deeplinks__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transaction_confirm_transaction_confirm__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wallet_import_wallet_import__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate, deeplinks) {
        this.platform = platform;
        this.translate = translate;
        this.deeplinks = deeplinks;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        this.translate.setDefaultLang('en');
        this.platform
            .ready()
            .then(function () {
            if (platform.is('cordova')) {
                statusBar.styleLightContent();
                statusBar.backgroundColorByHexString('#00e8cc');
                splashScreen.hide();
            }
        })
            .catch(function (err) { return console.log(err); });
    }
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform
            .ready()
            .then(function () {
            _this.deeplinks
                .routeWithNavController(_this.nav, {
                '/broadcast': __WEBPACK_IMPORTED_MODULE_7__pages_transaction_confirm_transaction_confirm__["a" /* TransactionConfirmPage */],
                '/import': __WEBPACK_IMPORTED_MODULE_8__pages_wallet_import_wallet_import__["a" /* WalletImportPage */]
            })
                .subscribe(function (match) {
                // match.$route - the route we matched, which is the matched entry from the arguments to route()
                // match.$args - the args passed in the link
                // match.$link - the full link data
                console.log('Successfully matched route', match);
            }, function (nomatch) {
                // nomatch.$link - the full link data
                console.error("Got a deeplink that didn't match", nomatch);
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_deeplinks__["a" /* Deeplinks */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_transaction_model__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QrProvider = /** @class */ (function () {
    function QrProvider() {
    }
    QrProvider.prototype.getWalletFromData = function (data) {
        var json = this.extractData(data);
        var requiredProperties = ['publicKey', 'isExtendedPublicKey', 'protocolIdentifier', 'derivationPath'];
        requiredProperties.forEach(function (property) {
            if (!json.hasOwnProperty(property)) {
                throw new Error("Unable to extract wallet from data. property \"" + property + "\" missing");
            }
        });
        return new __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["AirGapMarketWallet"](json.protocolIdentifier, json.publicKey, json.isExtendedPublicKey, json.derivationPath);
    };
    QrProvider.prototype.getBroadcastFromData = function (data) {
        var json = this.extractData(data);
        var airgapTx = Object(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["getProtocolByIdentifier"])(json.protocolIdentifier).getTransactionDetailsFromRaw(json, json.payload);
        return __WEBPACK_IMPORTED_MODULE_2__models_transaction_model__["a" /* Transaction */].fromAirGapTx(airgapTx, json.payload);
    };
    QrProvider.prototype.extractData = function (data) {
        try {
            var jsonText = window.atob(data);
            var json = JSON.parse(jsonText);
            return json;
        }
        catch (e) {
            console.error('Could not read data from QR code', e);
            return null;
        }
    };
    QrProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], QrProvider);
    return QrProvider;
}());

//# sourceMappingURL=qr.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TransactionParameter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transaction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);

var TransactionParameter = /** @class */ (function () {
    function TransactionParameter() {
    }
    return TransactionParameter;
}());

var Transaction = /** @class */ (function () {
    function Transaction(from, to, amount, fee, protocolIdentifier, payload) {
        this.meta = {};
        this.information = [];
        this.from = from;
        this.to = to;
        this.amount = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(amount);
        this.fee = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(fee);
        this.protocolIdentifier = protocolIdentifier;
        this.payload = payload;
    }
    Transaction.fromAirGapTx = function (airgapTx, payload) {
        return new Transaction(airgapTx.from, airgapTx.to, airgapTx.amount, airgapTx.fee, airgapTx.protocolIdentifier, payload);
    };
    return Transaction;
}());

//# sourceMappingURL=transaction.model.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletEditPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wallets_wallets_provider__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletEditPopoverComponent = /** @class */ (function () {
    function WalletEditPopoverComponent(alertCtrl, navParams, walletsProvider, viewCtrl) {
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.walletsProvider = walletsProvider;
        this.viewCtrl = viewCtrl;
        this.wallet = this.navParams.get('wallet');
        this.onDelete = this.navParams.get('onDelete');
    }
    WalletEditPopoverComponent.prototype.delete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Wallet Removal',
            message: 'Do you want to remove this wallet? You can always sync it again from your vault.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        alert.present();
                        _this.walletsProvider.removeWallet(_this.wallet).then(function () {
                            _this.viewCtrl.dismiss();
                            if (_this.onDelete) {
                                _this.onDelete();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    WalletEditPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list no-lines no-detail>\n      <ion-list-header>Wallet Settings</ion-list-header>\n      <button ion-item detail-none (click)='delete()'>\n        <ion-icon name='trash' color='dark' item-end></ion-icon>\n        Delete\n      </button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wallets_wallets_provider__["a" /* WalletsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], WalletEditPopoverComponent);
    return WalletEditPopoverComponent;
}());

//# sourceMappingURL=wallet-edit-popover.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var SettingsKey;
(function (SettingsKey) {
    SettingsKey["INTRODUCTION"] = "introduction";
    SettingsKey["WALLET"] = "wallets";
})(SettingsKey || (SettingsKey = {}));
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(storage) {
        this.storage = storage;
    }
    SettingsProvider.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storage.get(key)];
            });
        });
    };
    SettingsProvider.prototype.set = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storage.set(key, value)];
            });
        });
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScannerProvider = /** @class */ (function () {
    function ScannerProvider(platform) {
        this.platform = platform;
        this.isShowing = false;
    }
    ScannerProvider.prototype.askForPermission = function () {
        if (this.platform.is('cordova')) {
            QRScanner.openSettings();
        }
    };
    ScannerProvider.prototype.hasPermission = function () {
        if (this.platform.is('cordova')) {
            return new Promise(function (resolve, reject) {
                var onDone = function (err, status) {
                    if (err) {
                        // here we can handle errors and clean up any loose ends.
                        console.error('Scanner permission ', err);
                        reject([false, false]);
                    }
                    if (status.authorized) {
                        console.log('Scanner permission granted');
                        resolve([true, true]);
                    }
                    else if (status.denied) {
                        console.warn('Scanner permission denied');
                        reject([false, true]);
                        // The video preview will remain black, and scanning is disabled. We can
                        // try to ask the user to change their mind, but we'll have to send them
                        // to their device settings with `QRScanner.openSettings()`.
                    }
                    else {
                        console.warn('Scanner permission denied');
                        reject([false, false]);
                        // we didn't get permission, but we didn't get permanently denied. (On
                        // Android, a denial isn't permanent unless the user checks the "Don't
                        // ask again" box.) We can ask again at the next relevant opportunity.
                    }
                };
                QRScanner.prepare(onDone);
            });
        }
    };
    ScannerProvider.prototype.scan = function (successCallback, errorCallback) {
        if (successCallback === void 0) { successCallback = null; }
        if (errorCallback === void 0) { errorCallback = null; }
        var scanCallback = function (err, text) {
            if (err) {
                console.error('Scanner scan error', err);
                if (errorCallback) {
                    errorCallback(err);
                }
            }
            console.log('Scanner scan success', text);
            successCallback(text);
        };
        QRScanner.scan(scanCallback);
    };
    ScannerProvider.prototype.show = function () {
        if (this.platform.is('cordova')) {
            if (this.isShowing) {
                return;
            }
            this.isShowing = true;
            QRScanner.show();
        }
    };
    ScannerProvider.prototype.stopScan = function () {
        if (this.platform.is('cordova')) {
            QRScanner.cancelScan(null);
        }
    };
    ScannerProvider.prototype.destroy = function () {
        if (this.platform.is('cordova')) {
            this.isShowing = false;
            QRScanner.destroy();
        }
    };
    ScannerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], ScannerProvider);
    return ScannerProvider;
}());

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroductionPage = /** @class */ (function () {
    function IntroductionPage(viewController, platform) {
        this.viewController = viewController;
        this.platform = platform;
        this.security = 'highest';
    }
    IntroductionPage.prototype.dismiss = function () {
        this.viewController.dismiss();
    };
    IntroductionPage.prototype.downloadClient = function () {
        this.openUrl('https://github.com/airgap-it');
    };
    IntroductionPage.prototype.downloadApp = function () {
        // This should open App Store and not InAppBrowser
        if (this.platform.is('android')) {
            window.open('https://play.google.com/store/apps/details?id=it.airgap.vault');
        }
        else if (this.platform.is('ios')) {
            window.open('itms-apps://itunes.apple.com/app/id1417126841');
        }
        this.dismiss();
    };
    IntroductionPage.prototype.openUrl = function (url) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            cordova.InAppBrowser.open(url, '_system', 'location=true');
        }
        else {
            window.open(url, '_blank');
        }
    };
    IntroductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-introduction',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/introduction/introduction.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{\'The New Crypto Wallet Standard\' | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding no-bounce >\n\n\n\n  <ion-segment [(ngModel)]="security" color="secondary">\n\n    <ion-segment-button value="highest">\n\n      Highest Security\n\n    </ion-segment-button>\n\n    <ion-segment-button value="medium">\n\n      Medium Security\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <ng-container *ngIf="security === \'highest\'">\n\n    <ion-row>\n\n      <p>With the AirGap\n\n        <b>two device approach</b> secure key handling becomes more accessible.</p>\n\n    </ion-row>\n\n\n\n    <ion-row padding-top align-items-center>\n\n      <ion-col col-5>\n\n        <img src="assets/img/airgap_onboarding_wallet.svg" />\n\n      </ion-col>\n\n      <ion-col col-7>\n\n        <h5>AirGap Wallet</h5>\n\n        <p>\n\n          <b>This is the AirGap Wallet application</b>, that deals with only public information and is responsible for broadcasting\n\n          transactions to the blockchain.</p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row padding-vertical align-items-center>\n\n      <ion-col col-5 text-center>\n\n        <img class="connector--img" src="assets/img/qrcode.svg" />\n\n      </ion-col>\n\n      <ion-col col-7>\n\n        <strong>One-way communication with QR codes.</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row align-items-center>\n\n      <ion-col col-5>\n\n        <img src="assets/img/airgap_onboarding_vault.svg" />\n\n      </ion-col>\n\n      <ion-col col-7>\n\n        <h5>AirGap Vault</h5>\n\n        <p>The private key is generated and securely stored on another device with the AirGap Vault app.\n\n          <b>You have to install AirGap Vault to use AirGap Wallet</b>\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ng-container>\n\n\n\n  <ng-container *ngIf="security === \'medium\'">\n\n    <ion-row>\n\n      <p>With the AirGap\n\n        <b>two app approach</b> secure key handling becomes more accessible.</p>\n\n    </ion-row>\n\n\n\n    <ion-row padding-top align-items-center>\n\n      <ion-col col-5>\n\n        <img src="assets/img/airgap_onboarding_wallet.svg" />\n\n      </ion-col>\n\n      <ion-col col-7>\n\n        <h5>AirGap Wallet</h5>\n\n        <p>\n\n          <b>This is the AirGap Wallet application</b>, that deals with only public information and is responsible for broadcasting\n\n          transactions to the blockchain.</p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row padding-vertical align-items-center>\n\n      <ion-col col-5 text-center>\n\n        <img class="connector--img" src="assets/img/clone.svg" />\n\n      </ion-col>\n\n      <ion-col col-7>\n\n        <strong>Secure communication through app switching.</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row align-items-center>\n\n      <ion-col col-5>\n\n        <img src="assets/img/airgap_onboarding_vault.svg" />\n\n      </ion-col>\n\n      <ion-col col-7>\n\n        <h5>AirGap Vault</h5>\n\n        <p>The private key is generated and securely stored in the AirGap Vault app.\n\n          <b>You have to install AirGap Vault to use AirGap Wallet</b>\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ng-container>\n\n\n\n  <ion-fab bottom right>\n\n      <button ion-button round color="primary" (click)="downloadApp()">Install AirGap Vault</button>\n\n      <button ion-button round color="secondary" (click)="dismiss()">Let\'s Go</button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/introduction/introduction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], IntroductionPage);
    return IntroductionPage;
}());

//# sourceMappingURL=introduction.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_qr_qr__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_airgap_coin_lib__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionConfirmPage = /** @class */ (function () {
    function TransactionConfirmPage(qrProvider, loadingCtrl, toastCtrl, navController, navParams, alertCtrl, platform) {
        this.qrProvider = qrProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navController = navController;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
    }
    TransactionConfirmPage.prototype.dismiss = function () {
        this.navController.popToRoot();
    };
    TransactionConfirmPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform
            .ready()
            .then(function () {
            if (_this.navParams.get('data')) {
                _this.transaction = _this.qrProvider.getBroadcastFromData(_this.navParams.get('data'));
            }
            else if (_this.navParams.get('transaction')) {
                _this.transaction = _this.navParams.get('transaction');
            }
        })
            .catch(console.error);
    };
    TransactionConfirmPage.prototype.broadcastTransaction = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Broadcasting...'
        });
        loading.present();
        var protocol = Object(__WEBPACK_IMPORTED_MODULE_3_airgap_coin_lib__["getProtocolByIdentifier"])(this.transaction.protocolIdentifier);
        var blockexplorer = ''; // TODO: Move to coinlib
        if (this.transaction.protocolIdentifier === 'btc') {
            blockexplorer = 'https://live.blockcypher.com/btc/tx/{{txId}}/';
        }
        else if (this.transaction.protocolIdentifier === 'eth') {
            blockexplorer = 'https://etherscan.io/tx/{{txId}}';
        }
        else if (this.transaction.protocolIdentifier === 'eth-erc20-ae') {
            blockexplorer = 'https://etherscan.io/tx/{{txId}}';
        }
        var interval = setTimeout(function () {
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                duration: 3000,
                message: 'Transaction queued. It might take some time until your TX shows up!',
                showCloseButton: true,
                position: 'bottom'
            });
            toast.present();
            _this.navController.popToRoot();
        }, 20 * 1000);
        protocol
            .broadcastTransaction(this.transaction.payload)
            .then(function (txId) {
            if (interval) {
                clearInterval(interval);
            }
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Transaction broadcasted!',
                message: 'Your transaction has been successfully broadcasted',
                buttons: [
                    {
                        text: 'Open Blockexplorer',
                        handler: function () {
                            if (blockexplorer) {
                                _this.openUrl(blockexplorer.replace('{{txId}}', txId));
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    duration: 3000,
                                    message: 'Unable to open blockexplorer',
                                    showCloseButton: true,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            _this.navController.popToRoot();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            _this.navController.popToRoot();
                        }
                    }
                ]
            });
            alert.present();
        })
            .catch(function (e) {
            if (interval) {
                clearInterval(interval);
            }
            loading.dismiss();
            console.warn(e);
            var toast = _this.toastCtrl.create({
                duration: 5000,
                message: 'Transaction broadcasting failed: ' + e,
                showCloseButton: true,
                position: 'bottom'
            });
            toast.present();
            _this.navController.popToRoot();
        });
    };
    TransactionConfirmPage.prototype.openUrl = function (url) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            cordova.InAppBrowser.open(url, '_system', 'location=true');
        }
        else {
            window.open(url, '_blank');
        }
    };
    TransactionConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-confirm',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/transaction-confirm/transaction-confirm.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Confirm Transaction</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <div *ngIf="transaction">\n    <from-to [transaction]="transaction"></from-to>\n\n    <ion-list margin-top>\n      <ion-item no-lines *ngFor="let parameter of transaction.information">\n        <h2>{{parameter.label}}</h2>\n        <h3>{{parameter.value}}</h3>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-fab bottom>\n      <ion-row>\n        <ion-col>\n            <button default full ion-button color="secondary" (click)="dismiss()" round icon-left>\n                <ion-icon md-name="close"></ion-icon>\n                Decline\n              </button>\n        </ion-col>\n        <ion-col>\n            <button default full ion-button color="primary" (click)="broadcastTransaction()" round icon-left>\n                <ion-icon md-name="check"></ion-icon>\n                Confirm\n              </button>\n        </ion-col>\n      </ion-row>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/transaction-confirm/transaction-confirm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_qr_qr__["a" /* QrProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], TransactionConfirmPage);
    return TransactionConfirmPage;
}());

//# sourceMappingURL=transaction-confirm.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletImportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_qr_qr__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wallets_wallets_provider__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var WalletImportPage = /** @class */ (function () {
    function WalletImportPage(platform, loadingCtrl, viewCtrl, navParams, qrProvider, wallets) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.qrProvider = qrProvider;
        this.wallets = wallets;
        this.walletAlreadyExists = false;
    }
    WalletImportPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform
            .ready()
            .then(function () {
            var loading = _this.loadingCtrl.create({
                content: 'Syncing...'
            });
            loading.present().catch(console.error);
            _this.walletAlreadyExists = false;
            if (_this.navParams.get('data')) {
                _this.wallet = _this.qrProvider.getWalletFromData(_this.navParams.get('data')); // TODO: Catch error if wallet cannot be imported
                if (_this.wallets.walletExists(_this.wallet)) {
                    _this.walletAlreadyExists = true;
                }
                var airGapWorker = new Worker('./assets/workers/airgap-coin-lib.js');
                airGapWorker.onmessage = function (event) {
                    _this.wallet.addresses = event.data.addresses;
                    _this.wallet.synchronize().then(function () {
                        _this.wallets.triggerWalletChanged();
                    });
                    loading.dismiss();
                };
                airGapWorker.postMessage({
                    protocolIdentifier: _this.wallet.protocolIdentifier,
                    publicKey: _this.wallet.publicKey,
                    isExtendedPublicKey: _this.wallet.isExtendedPublicKey,
                    derivationPath: _this.wallet.derivationPath
                });
            }
        })
            .catch(console.error);
    };
    WalletImportPage.prototype.dismiss = function () {
        this.viewCtrl
            .dismiss()
            .then(function (v) {
            console.log('WalletImportPage dismissed');
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    WalletImportPage.prototype.import = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wallets.addWallet(this.wallet)];
                    case 1:
                        _a.sent();
                        this.viewCtrl
                            .dismiss()
                            .then(function (v) {
                            console.log('WalletImportPage dismissed');
                        })
                            .catch(function (error) {
                            console.warn(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletImportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet-import',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/wallet-import/wallet-import.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Confirm Import</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n\n  <ion-row *ngIf="!walletAlreadyExists">\n    <p>\n      Would you like to import the following wallet?\n    </p>\n  </ion-row>\n\n  <portfolio-item [wallet]="wallet" [maxDigits]="8"></portfolio-item>\n\n  <ion-item *ngIf="walletAlreadyExists" color="danger" margin-top text-wrap>\n    You have already added this wallet in AirGap.\n  </ion-item>\n\n  <ion-fab bottom right>\n    <button ion-button round color="white" (click)="dismiss()">Cancel</button>\n    <button ion-button round color="secondary" *ngIf="!walletAlreadyExists" (click)="import()">Import</button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/wallet-import/wallet-import.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_qr_qr__["a" /* QrProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_wallets_wallets_provider__["a" /* WalletsProvider */]])
    ], WalletImportPage);
    return WalletImportPage;
}());

//# sourceMappingURL=wallet-import.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 271;

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 327;

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amount_converter_amount_converter_pipe__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fee_converter_fee_converter_pipe__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shorten_string_shorten_string_pipe__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crypto_to_fiat_crypto_to_fiat_pipe__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__amount_converter_amount_converter_pipe__["a" /* AmountConverterPipe */], __WEBPACK_IMPORTED_MODULE_2__fee_converter_fee_converter_pipe__["a" /* FeeConverterPipe */], __WEBPACK_IMPORTED_MODULE_3__shorten_string_shorten_string_pipe__["a" /* ShortenStringPipe */], __WEBPACK_IMPORTED_MODULE_4__crypto_to_fiat_crypto_to_fiat_pipe__["a" /* CryptoToFiatPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__amount_converter_amount_converter_pipe__["a" /* AmountConverterPipe */], __WEBPACK_IMPORTED_MODULE_2__fee_converter_fee_converter_pipe__["a" /* FeeConverterPipe */], __WEBPACK_IMPORTED_MODULE_3__shorten_string_shorten_string_pipe__["a" /* ShortenStringPipe */], __WEBPACK_IMPORTED_MODULE_4__crypto_to_fiat_crypto_to_fiat_pipe__["a" /* CryptoToFiatPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoToFiatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CryptoToFiatPipe = /** @class */ (function () {
    function CryptoToFiatPipe() {
    }
    CryptoToFiatPipe.prototype.transform = function (value, args) {
        if (!args ||
            !args.currentMarketPrice ||
            !(args.currentMarketPrice instanceof __WEBPACK_IMPORTED_MODULE_1_bignumber_js__["BigNumber"]) ||
            isNaN(args.currentMarketPrice.toNumber()) ||
            !args.protocolIdentifier ||
            !value ||
            !(value instanceof __WEBPACK_IMPORTED_MODULE_1_bignumber_js__["BigNumber"]) ||
            isNaN(value.toNumber())) {
            /* console.warn(
              `CryptoToFiatPipe: necessary properties missing!\n` +
                `Market Price: ${args.currentMarketPrice}\n` +
                `Protocol: ${args.protocolIdentifier}\n` +
                `Value: ${value}`
            ) */
            return '';
        }
        var protocol = Object(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["getProtocolByIdentifier"])(args.protocolIdentifier);
        if (!protocol) {
            return '';
        }
        var fiatValue = args.currentMarketPrice.multipliedBy(value.shiftedBy(-1 * protocol.decimals));
        return fiatValue.toFixed();
    };
    CryptoToFiatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'cryptoToFiat'
        })
    ], CryptoToFiatPipe);
    return CryptoToFiatPipe;
}());

//# sourceMappingURL=crypto-to-fiat.pipe.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.appName = '';
        this.packageName = '';
        this.versionNumber = '';
        this.versionCode = '';
        this.updateVersions();
    }
    AboutPage.prototype.updateVersions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.app.getAppName()];
                    case 1:
                        _a.appName = _e.sent();
                        _b = this;
                        return [4 /*yield*/, this.app.getPackageName()];
                    case 2:
                        _b.packageName = _e.sent();
                        _c = this;
                        return [4 /*yield*/, this.app.getVersionNumber()];
                    case 3:
                        _c.versionNumber = _e.sent();
                        _d = this;
                        return [4 /*yield*/, this.app.getVersionCode()];
                    case 4:
                        _d.versionCode = _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{\'ABOUT\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>{{appName}}</ion-item>\n  <ion-item>{{packageName}}</ion-item>\n  <ion-item>{{versionCode}}</ion-item>\n  <ion-item>{{versionNumber}}</ion-item>\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__["a" /* AppVersion */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_detail_transaction_detail__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction_prepare_transaction_prepare__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_address_wallet_address__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_wallet_edit_popover_wallet_edit_popover_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_wallets_wallets_provider__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CoinInfoPage = /** @class */ (function () {
    function CoinInfoPage(navCtrl, navParams, popoverCtrl, walletProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.walletProvider = walletProvider;
        this.isRefreshing = true;
        this.transactions = [];
        this.wallet = this.navParams.get('wallet');
    }
    CoinInfoPage.prototype.ionViewDidEnter = function () {
        this.doRefresh();
    };
    CoinInfoPage.prototype.openPreparePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transaction_prepare_transaction_prepare__["a" /* TransactionPreparePage */], {
            wallet: this.wallet
        });
    };
    CoinInfoPage.prototype.openReceivePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wallet_address_wallet_address__["a" /* WalletAddressPage */], {
            wallet: this.wallet
        });
    };
    CoinInfoPage.prototype.openTransactionDetailPage = function (transaction) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transaction_detail_transaction_detail__["a" /* TransactionDetailPage */], {
            transaction: transaction
        });
    };
    CoinInfoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (refresher === void 0) { refresher = null; }
        this.isRefreshing = true;
        Promise.all([this.wallet.fetchTransactions(50, 0), this.wallet.synchronize()]).then(function (results) {
            _this.transactions = results[0];
            if (refresher) {
                refresher.complete();
            }
            _this.isRefreshing = false;
            _this.walletProvider.triggerWalletChanged();
        });
    };
    CoinInfoPage.prototype.presentEditPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_wallet_edit_popover_wallet_edit_popover_component__["a" /* WalletEditPopoverComponent */], {
            wallet: this.wallet,
            onDelete: function () {
                _this.navCtrl.pop();
            }
        });
        popover.present({
            ev: event
        });
    };
    CoinInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coin-info',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/coin-info/coin-info.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{wallet?.coinProtocol.symbol | uppercase}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentEditPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-row style="display: block">\n\n    <portfolio-item [wallet]="wallet"></portfolio-item>\n\n  </ion-row>\n\n  <ion-row class="background--color__primary" padding>\n\n    <span ion-text color="white" class="font--weight__bold">Transactions</span>\n\n  </ion-row>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div class="empty-list" *ngIf="transactions.length === 0 && !isRefreshing">\n\n    <ion-icon md-name="inbox" color="dark"></ion-icon>\n\n    <p>\n\n      There are no transactions yet for this wallet.\n\n    </p>\n\n  </div>\n\n\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let t of transactions" (click)="openTransactionDetailPage(t)">\n\n      <ion-avatar item-start>\n\n        <identicon [address]=\'t.to[0]\'></identicon>\n\n      </ion-avatar>\n\n      <h2>\n\n        <ion-icon *ngIf="t.isInbound" md-name="call_received"></ion-icon>\n\n        <ion-icon *ngIf="!t.isInbound" md-name="call_made"></ion-icon>\n\n        <span class="font--weight__bold" ion-text color="black">{{ t.amount | amountConverter : { protocolIdentifier: wallet.protocolIdentifier\n\n          } }}</span>\n\n      </h2>\n\n      <h3 ion-text color="blackLight" class="typography--mono">\n\n        {{ t.from[0] | shortenString }}\n\n      </h3>\n\n      <ion-row class="items--right" item-end>\n\n        <ion-col col-12 no-padding text-right>\n\n          <p ion-text color="blackLight">{{ (t.timestamp | amFromUnix) | amCalendar: { sameDay: \'[Today at] HH:mm\', sameElse:\n\n            \'HH:mm - L\' } }}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <div *ngIf="isRefreshing" class="loading-content">\n\n      <ion-spinner color="black"></ion-spinner>\n\n    </div>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom>\n\n    <ion-row>\n\n      <ion-col>\n\n          <button full default ion-button color="primary" (click)="openReceivePage()" round icon-start>\n\n              <ion-icon md-name="call_received"></ion-icon>\n\n              Receive\n\n            </button>\n\n      </ion-col>\n\n      <ion-col>\n\n          <button full default ion-button color="primary" (click)="openPreparePage()" round icon-start>\n\n              <ion-icon name="send"></ion-icon>\n\n              Send\n\n          </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/coin-info/coin-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_wallets_wallets_provider__["a" /* WalletsProvider */]])
    ], CoinInfoPage);
    return CoinInfoPage;
}());

//# sourceMappingURL=coin-info.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionDetailPage = /** @class */ (function () {
    function TransactionDetailPage(navController, navParams, platform) {
        this.navController = navController;
        this.navParams = navParams;
        this.platform = platform;
        this.transaction = this.navParams.get('transaction');
        console.log(this.transaction);
    }
    TransactionDetailPage.prototype.openBlockexplorer = function () {
        var transaction = this.transaction;
        var hash = transaction.hash;
        var blockexplorer = ''; // TODO: Move to coinlib
        if (this.transaction.protocolIdentifier === 'btc') {
            blockexplorer = 'https://live.blockcypher.com/btc/tx/{{txId}}/';
        }
        else if (this.transaction.protocolIdentifier === 'eth') {
            blockexplorer = 'https://etherscan.io/tx/{{txId}}';
        }
        else if (this.transaction.protocolIdentifier === 'eth-erc20-ae') {
            blockexplorer = 'https://etherscan.io/tx/{{txId}}';
        }
        if (hash && blockexplorer) {
            this.openUrl(blockexplorer.replace('{{txId}}', hash));
        }
    };
    TransactionDetailPage.prototype.openUrl = function (url) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            cordova.InAppBrowser.open(url, '_system', 'location=true');
        }
        else {
            window.open(url, '_blank');
        }
    };
    TransactionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-detail',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/transaction-detail/transaction-detail.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Transaction Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <from-to [transaction]="transaction"></from-to>\n\n  <ion-list margin-top>\n    <ion-item no-lines *ngFor="let parameter of transaction.information">\n      <h2>{{parameter.label}}</h2>\n      <h3>{{parameter.value}}</h3>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-button color="primary" (click)="openBlockexplorer()" round icon-left>\n      <ion-icon md-name="open_in_new"></ion-icon>\n      OPEN BLOCKEXPLORER\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/transaction-detail/transaction-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], TransactionDetailPage);
    return TransactionDetailPage;
}());

//# sourceMappingURL=transaction-detail.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPreparePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bignumber_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_transaction_model__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_address_scan_address__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_qr_transaction_qr__ = __webpack_require__(667);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TransactionPreparePage = /** @class */ (function () {
    function TransactionPreparePage(loadingCtrl, formBuilder, toastController, navController, navParams, _ngZone) {
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.navController = navController;
        this.navParams = navParams;
        this._ngZone = _ngZone;
        // form values
        this.address = '';
        this.amount = 0;
        this.fee = '0';
        this.feeLevel = 0;
        this.transactionForm = formBuilder.group({
            address: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            amount: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            feeLevel: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            fee: ['0', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
        this.useWallet(this.navParams.get('wallet'));
    }
    TransactionPreparePage.prototype.useWallet = function (wallet) {
        var _this = this;
        this.wallet = wallet;
        // set fee per default to low
        this.fee = this.wallet.coinProtocol.feeDefaults.low.toFixed(-1 * this.wallet.coinProtocol.feeDefaults.low.e + 1);
        this.transactionForm.get('feeLevel').valueChanges.subscribe(function (val) {
            _this._ngZone.run(function () {
                switch (val) {
                    case 0:
                        _this.fee = _this.wallet.coinProtocol.feeDefaults.low.toFixed(-1 * _this.wallet.coinProtocol.feeDefaults.low.e + 1);
                        break;
                    case 1:
                        _this.fee = _this.wallet.coinProtocol.feeDefaults.medium.toFixed(-1 * _this.wallet.coinProtocol.feeDefaults.low.e + 1);
                        break;
                    case 2:
                        _this.fee = _this.wallet.coinProtocol.feeDefaults.high.toFixed(-1 * _this.wallet.coinProtocol.feeDefaults.low.e + 1);
                        break;
                    default:
                        _this.fee = _this.wallet.coinProtocol.feeDefaults.medium.toFixed(-1 * _this.wallet.coinProtocol.feeDefaults.low.e + 1);
                        break;
                }
            });
        });
    };
    TransactionPreparePage.prototype.prepareTransaction = function (transactionInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, rawUnsignedTx, transaction, signQRData, base64, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transactionInfo.amount = new __WEBPACK_IMPORTED_MODULE_2_bignumber_js__["BigNumber"](transactionInfo.amount).shiftedBy(this.wallet.coinProtocol.decimals);
                        transactionInfo.fee = new __WEBPACK_IMPORTED_MODULE_2_bignumber_js__["BigNumber"](transactionInfo.fee).shiftedBy(this.wallet.coinProtocol.feeDecimals);
                        loading = this.loadingCtrl.create({
                            content: 'Preparing TX...'
                        });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.wallet.prepareTransaction([transactionInfo.address], [transactionInfo.amount], transactionInfo.fee)];
                    case 3:
                        rawUnsignedTx = _a.sent();
                        transaction = new __WEBPACK_IMPORTED_MODULE_4__models_transaction_model__["a" /* Transaction */]([this.wallet.receivingPublicAddress], [transactionInfo.address], transactionInfo.amount, transactionInfo.fee, this.wallet.protocolIdentifier);
                        signQRData = {
                            protocolIdentifier: this.wallet.protocolIdentifier,
                            publicKey: this.wallet.publicKey,
                            payload: rawUnsignedTx
                        };
                        base64 = window.btoa(JSON.stringify(signQRData));
                        this.navController.push(__WEBPACK_IMPORTED_MODULE_6__transaction_qr_transaction_qr__["a" /* TransactionQrPage */], {
                            wallet: this.wallet,
                            transaction: transaction,
                            data: 'airgap-vault://sign?data=' + base64
                        });
                        loading.dismiss();
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _a.sent();
                        console.warn(e_1);
                        this.toastController
                            .create({
                            message: e_1,
                            duration: 3000,
                            position: 'bottom'
                        })
                            .present();
                        return [3 /*break*/, 6];
                    case 5:
                        loading.dismiss();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TransactionPreparePage.prototype.openScanner = function () {
        var _this = this;
        var callback = function (address) {
            _this.transactionForm.controls.address.setValue(address);
        };
        this.navController.push(__WEBPACK_IMPORTED_MODULE_5__scan_address_scan_address__["a" /* ScanAddressPage */], {
            callback: callback
        });
    };
    TransactionPreparePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-prepare',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/transaction-prepare/transaction-prepare.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Transaction\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="openScanner()" ion-button icon-only>\n        <ion-icon name="md-barcode"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-item class="background--color__primary" no-lines text-wrap>\n    <img class="symbol--icon" [src]="\'assets/symbols/\' + wallet.coinProtocol.symbol.toLowerCase() + \'.svg\'">\n    <ion-avatar item-start>\n      <identicon [address]="wallet.receivingPublicAddress"></identicon>\n    </ion-avatar>\n    <ion-row no-padding>\n      <ion-col col-9 no-padding>\n        <h2>\n          <span class="font--weight__bold" ion-text color="white">{{wallet.currentBalance | amountConverter : { protocolIdentifier:\n            wallet.protocolIdentifier } }} </span>\n        </h2>\n      </ion-col>\n      <ion-col col-3 no-padding text-right>\n        <h2 ion-text color="whiteLight">${{ wallet.currentBalance | cryptoToFiat: { protocolIdentifier: wallet.protocolIdentifier,\n          currentMarketPrice: wallet.currentMarketPrice } | number : \'1.2-2\' }}</h2>\n      </ion-col>\n    </ion-row>\n    <h3 ion-text color="whiteLight" class="typography--mono">{{ wallet.receivingPublicAddress }}</h3>\n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="transactionForm" padding-bottom>\n    <ion-row>\n      <ion-col *ngIf="address.length === 0" class="content--align__center-center" col-2 (click)="openScanner()">\n        <ion-avatar class="identicon--container placeholder--container">\n          <ion-icon class="placeholder--icon" name="md-barcode"></ion-icon>\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <ion-item no-padding class="content--align-vert__center">\n          <ion-avatar *ngIf="address.length > 0" class="identicon--container" item-start>\n            <identicon [address]="address"></identicon>\n          </ion-avatar>\n\n          <ion-label stacked>\n            {{\'To Address\' | translate}}</ion-label>\n          <ion-textarea placeholder="{{\'To Address\' | translate}}" [(ngModel)]="address" formControlName="address" id="address-input"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-item no-padding no-lines>\n      <ion-label stacked>Amount</ion-label>\n      <ion-input [(ngModel)]="amount" formControlName="amount" type="number" id="amount-input"></ion-input>\n      <span item-right class="input--placeholder">{{wallet.coinProtocol.symbol | uppercase}}</span>\n    </ion-item>\n\n\n    <div class="input--help">$ {{ amount * wallet.currentMarketPrice | number : \'1.2-2\' }}</div>\n\n    <ion-item no-padding padding-top no-lines>\n      <ion-label class="label__fee" stacked>Fee ({{ wallet.coinProtocol.feeSymbol | uppercase }})</ion-label>\n      <ion-range no-padding min="0" max="2" step="1" snaps="true" formControlName="feeLevel" id="feeLevel-input" color="primary">\n        <ion-icon range-left color="primary" md-name="hourglass_full"></ion-icon>\n        <ion-icon range-right color="primary" name="md-jet"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n    <ion-row no-padding>\n      <ion-col no-padding>\n        <small>slow & cheap</small>\n      </ion-col>\n      <ion-col text-right no-padding>\n        <small>fast & expensive</small>\n      </ion-col>\n    </ion-row>\n\n    <ion-item no-padding no-lines>\n      <ion-label stacked></ion-label>\n      <ion-input id="fee-input" [(ngModel)]="fee" formControlName="fee" type="string"></ion-input>\n      <span item-right class="input--placeholder">Fee ({{ wallet.coinProtocol.feeSymbol | uppercase}})</span>\n    </ion-item>\n\n    <div class="input--help">$ <span id="fee-amount">{{ fee * wallet.currentMarketPrice | number : \'1.2-6\' }}</span></div>\n  </form>\n\n  <!-- TODO: error handling\n  <p *ngIf="transactionForm.invalid" padding-vertical>This is not a valid ethereum address!</p>\n  -->\n  <ion-fab bottom right>\n      <button default ion-button color="primary" (click)="prepareTransaction(transactionForm.value)" [disabled]="transactionForm.invalid" round icon-left>\n      <ion-icon md-name="open_in_new"></ion-icon>\n      Create Transaction\n    </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/transaction-prepare/transaction-prepare.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], TransactionPreparePage);
    return TransactionPreparePage;
}());

//# sourceMappingURL=transaction-prepare.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_scanner_scanner__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanAddressPage = /** @class */ (function () {
    function ScanAddressPage(navCtrl, navParams, scanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scanner = scanner;
        this.callbackCalled = false;
        this.callback = this.navParams.get('callback');
    }
    ScanAddressPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.scanner.show();
        this.scanner.scan(function (text) {
            if (!_this.callbackCalled) {
                console.log('scan callback', text);
                _this.callbackCalled = true;
                _this.scanner.stopScan();
                _this.navCtrl.pop().then(function () {
                    _this.sendAddressToParent(text);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ScanAddressPage.prototype.ionViewWillLeave = function () {
        this.scanner.destroy();
    };
    ScanAddressPage.prototype.sendAddressToParent = function (address) {
        this.callback(address);
    };
    ScanAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan-address',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/scan-address/scan-address.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Scan Wallet Address</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content no-bounce [class.transparent]="true">\n\n  <p ion-text color="white" padding no-margin text-center>Scan the QR code of a wallet address.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/scan-address/scan-address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_scanner_scanner__["a" /* ScannerProvider */]])
    ], ScanAddressPage);
    return ScanAddressPage;
}());

//# sourceMappingURL=scan-address.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionQrPage = /** @class */ (function () {
    function TransactionQrPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.preparedDataQR = '';
        this.wallet = null;
        this.transaction = null;
        this.wallet = this.navParams.get('wallet');
        this.transaction = this.navParams.get('transaction');
        this.preparedDataQR = this.navParams.get('data');
    }
    TransactionQrPage.prototype.done = function () {
        this.navCtrl.popToRoot();
    };
    TransactionQrPage.prototype.sameDeviceSign = function () {
        var _this = this;
        var sApp;
        if (this.platform.is('android')) {
            sApp = window.startApp.set({
                action: 'ACTION_VIEW',
                uri: this.preparedDataQR,
                flags: ['FLAG_ACTIVITY_NEW_TASK']
            });
        }
        else if (this.platform.is('ios')) {
            sApp = window.startApp.set(this.preparedDataQR);
        }
        sApp.start(function () {
            console.log('OK');
        }, function (error) {
            alert('Oops. Something went wrong here. Do you have AirGap Vault installed on the same Device?');
            console.log('CANNOT OPEN VAULT', _this.preparedDataQR, error);
        });
    };
    TransactionQrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-qr',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/transaction-qr/transaction-qr.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text color="white">{{wallet?.coinProtocol.symbol | uppercase }} Transaction</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="colored-background">\n\n\n\n  <ion-row>\n\n    <h5>Open AirGap Vault and scan this transaction in order to sign it.</h5>\n\n  </ion-row>\n\n\n\n  <ion-row justify-content-center padding-top>\n\n    <qrcode [qrdata]="preparedDataQR" backgroundAlpha="1" foreground="black" background="white" level="L" size="400"></qrcode>\n\n  </ion-row>\n\n\n\n  <ion-row padding-bottom margin-bottom>\n\n    <from-to [transaction]="transaction"></from-to>\n\n  </ion-row>\n\n  \n\n  <ion-fab bottom right>\n\n      <button default ion-button color="white" (click)="sameDeviceSign()" round item-right>\n\n          Sign on this device\n\n        </button>\n\n        <button default ion-button color="secondary" (click)="done()" round item-right>\n\n          Done\n\n        </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/transaction-qr/transaction-qr.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], TransactionQrPage);
    return TransactionQrPage;
}());

//# sourceMappingURL=transaction-qr.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletAddressPage = /** @class */ (function () {
    function WalletAddressPage(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.wallet = this.navParams.get('wallet');
    }
    WalletAddressPage.prototype.done = function () {
        this.navController.pop();
    };
    WalletAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet-address',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/wallet-address/wallet-address.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text color="white">{{ wallet.coinProtocol.symbol | uppercase }} Wallet Address</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="colored-background">\n\n\n\n  <ion-row padding>\n\n    <ion-col>\n\n      <ion-avatar item-start>\n\n        <identicon [address]="wallet.receivingPublicAddress"></identicon>\n\n        <img class="sub-avatar" [src]="\'assets/symbols/\' + wallet.coinProtocol.symbol.toLowerCase() + \'.svg\'">\n\n      </ion-avatar>\n\n    </ion-col>\n\n    <ion-col>\n\n      <h2>{{ wallet.coinProtocol.symbol | uppercase }}</h2>\n\n      <p>\n\n        Address:\n\n        <br>\n\n        <span class="text--selectable typography--mono">{{ wallet.receivingPublicAddress }}</span>\n\n      </p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row justify-content-center padding-bottom>\n\n    <qrcode [qrdata]="wallet.receivingPublicAddress" backgroundAlpha="1" foreground="black" background="white" level="L" size="400"></qrcode>\n\n  </ion-row>\n\n\n\n  <ion-fab bottom right>\n\n      <button ion-button round color="secondary" (click)="done()">Done</button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/wallet-address/wallet-address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WalletAddressPage);
    return WalletAddressPage;
}());

//# sourceMappingURL=wallet-address.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wallets_wallets_provider__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coin_info_coin_info__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scan_sync_scan_sync__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_crypto_to_fiat_crypto_to_fiat_pipe__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var PortfolioPage = /** @class */ (function () {
    function PortfolioPage(navCtrl, navParams, walletsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.walletsProvider = walletsProvider;
        this.isVisible = 'hidden';
        this.total = 0;
        this.changePercentage = 0;
        this.wallets = this.walletsProvider.wallets.asObservable();
        // If a wallet gets added or removed, recalculate all values
        this.wallets.subscribe(function (wallets) {
            _this.calculateTotal(wallets);
        });
        this.walletsProvider.walledChangedObservable.subscribe(function () {
            _this.calculateTotal(_this.walletsProvider.wallets.getValue());
        });
    }
    PortfolioPage.prototype.ionViewDidEnter = function () {
        this.doRefresh();
    };
    PortfolioPage.prototype.openDetail = function (wallet) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__coin_info_coin_info__["a" /* CoinInfoPage */], { wallet: wallet });
    };
    PortfolioPage.prototype.openSyncPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__scan_sync_scan_sync__["a" /* ScanSyncPage */]);
    };
    PortfolioPage.prototype.doRefresh = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.walletsProvider.wallets.getValue().map(function (wallet) {
                            return wallet.synchronize();
                        }))];
                    case 1:
                        _a.sent();
                        this.calculateTotal(this.walletsProvider.wallets.getValue(), refresher);
                        return [2 /*return*/];
                }
            });
        });
    };
    PortfolioPage.prototype.calculateTotal = function (wallets, refresher) {
        if (refresher === void 0) { refresher = null; }
        console.log('calculating total');
        var newTotal = 0;
        var cryptoToFiatPipe = new __WEBPACK_IMPORTED_MODULE_5__pipes_crypto_to_fiat_crypto_to_fiat_pipe__["a" /* CryptoToFiatPipe */]();
        wallets.forEach(function (wallet) {
            var fiatValue = cryptoToFiatPipe.transform(wallet.currentBalance, {
                protocolIdentifier: wallet.protocolIdentifier,
                currentMarketPrice: wallet.currentMarketPrice
            });
            newTotal += Number(fiatValue);
        });
        if (refresher) {
            refresher.complete();
        }
        this.total = newTotal;
        this.isVisible = 'visible';
    };
    PortfolioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-portfolio',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/portfolio/portfolio.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n  <div>\n    <div style="color: white; width: 100%; text-align:center; height: 150px; font-size: 40px; font-weight: 300; margin-top: 20px">\n      <div style="margin-top: 30px;">\n        ${{ total | number : \'1.2-2\' }}\n      </div>\n      <!--\n      <div [ngClass]="percentageChangedClass" style="font-size: 20px;">\n        {{ winPercentage | number : \'1.2-2\' }}%\n      </div>\n      -->\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf="wallets | async as wallets; else loading">\n    <ng-container *ngIf="wallets.length; else noItems">\n      <ion-list no-lines margin-top *ngFor="let wallet of wallets">\n        <portfolio-item [wallet]="wallet" [maxDigits]="8" tappable (click)="openDetail(wallet)"></portfolio-item>\n      </ion-list>\n    </ng-container>\n    <ng-template #noItems>\n      <div class="empty-list" padding>\n        <ion-icon md-name="account_balance_wallet" color="dark"></ion-icon>\n        <p>\n          To use AirGap Wallet you need to download the public data from the AirGap Vault application.\n        </p>\n      </div>\n    </ng-template>\n    <ng-template #loading>\n      <div class="loading-content">\n        <ion-spinner color="black"></ion-spinner>\n      </div>\n    </ng-template>\n  </ng-container>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="openSyncPage()">\n      <ion-icon md-name="vertical_align_bottom"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/portfolio/portfolio.html"*/,
            animations: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wallets_wallets_provider__["a" /* WalletsProvider */]])
    ], PortfolioPage);
    return PortfolioPage;
}());

//# sourceMappingURL=portfolio.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanSyncPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScanSyncPage = /** @class */ (function () {
    function ScanSyncPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScanSyncPage.prototype.goToScanPage = function () {
        this.navCtrl.popToRoot();
        this.navCtrl.parent.select(1);
    };
    ScanSyncPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan-sync',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/scan-sync/scan-sync.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text color="white">Sync Wallet Data</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="colored-background">\n\n  <ion-row>\n\n    <ion-col>\n\n      <p>To use the AirGap Wallet app you need to <b>sync with AirGap Vault</b>. Select the wallet you want to use in AirGap Vault and\n\n        display the sync QR code. Scan this code with AirGap Wallet.</p>\n\n      <img src="assets/img/sync_wallet_onboarding.svg" />\n\n      <p>No private keys or any non public data will be shared during this process.</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-fab bottom right>\n\n      <button ion-button round color="secondary" (click)="goToScanPage()">Let\'s Go</button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/scan-sync/scan-sync.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ScanSyncPage);
    return ScanSyncPage;
}());

//# sourceMappingURL=scan-sync.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_qr_qr__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_scanner_scanner__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_confirm_transaction_confirm__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wallet_import_wallet_import__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScanPage = /** @class */ (function () {
    function ScanPage(navController, scanner, platform, toastController, qrProvider) {
        this.navController = navController;
        this.scanner = scanner;
        this.platform = platform;
        this.toastController = toastController;
        this.qrProvider = qrProvider;
        this.hasCameraPermission = false;
    }
    ScanPage.prototype.ionViewWillEnter = function () {
        if (this.platform.is('android') && this.platform.is('cordova')) {
            this.checkPermission();
        }
        else if (this.platform.is('cordova')) {
            this.initScan();
        }
    };
    ScanPage.prototype.checkPermission = function (entering) {
        var _this = this;
        if (entering === void 0) { entering = true; }
        console.log('checking permissions');
        if (this.hasCameraPermission) {
            console.log('has permissions, init scan');
            this.initScan();
        }
        else {
            console.log('does not have permissions, requesting');
            this.scanner
                .hasPermission()
                .then(function (permissions) {
                console.log('checked permissions', permissions);
                if (permissions[0]) {
                    _this.initScan();
                }
                else if (!entering) {
                    // Permanent deny
                    console.log('bla', permissions);
                    if (permissions[1] && _this.platform.is('android')) {
                        _this.checkPermission();
                    }
                    else {
                        _this.scanner.askForPermission();
                    }
                }
            })
                .catch(function (e) { return console.log('error!', e); });
        }
    };
    ScanPage.prototype.handleImport = function (data) {
        this.navController
            .push(__WEBPACK_IMPORTED_MODULE_5__wallet_import_wallet_import__["a" /* WalletImportPage */], {
            data: data
        })
            .then(function (v) {
            console.log('WalletImportPage openend', v);
        })
            .catch(function (e) {
            console.log('WalletImportPage failed to open', e);
        });
    };
    ScanPage.prototype.handleBroadcast = function (qrText) {
        var transaction = this.qrProvider.getBroadcastFromData(qrText);
        if (transaction) {
            this.navController
                .push(__WEBPACK_IMPORTED_MODULE_4__transaction_confirm_transaction_confirm__["a" /* TransactionConfirmPage */], {
                transaction: transaction
            })
                .then(function (v) {
                console.log('TransactionConfirmPage opened', v);
            })
                .catch(function (e) {
                console.log('TransactionConfirmPage failed to open', e);
            });
        }
    };
    ScanPage.prototype.startScan = function () {
        var _this = this;
        this.scanner.show();
        this.scanner.scan(function (text) {
            var syncPrefix = 'airgap-wallet://import?data=';
            var broadcastPrefix = 'airgap-wallet://broadcast?data=';
            if (text.startsWith(syncPrefix)) {
                var parts = text.split(syncPrefix);
                _this.handleImport(parts[parts.length - 1]);
            }
            else if (text.startsWith(broadcastPrefix)) {
                var parts = text.split(broadcastPrefix);
                _this.handleBroadcast(parts[parts.length - 1]);
            }
            else {
                _this.displayToast('Invalid QR Code');
                _this.startScan();
            }
        }, console.error);
    };
    ScanPage.prototype.displayToast = function (message) {
        this.toastController
            .create({
            message: message,
            duration: 3000,
            position: 'bottom'
        })
            .present();
    };
    ScanPage.prototype.ionViewWillLeave = function () {
        this.scanner.destroy();
    };
    ScanPage.prototype.initScan = function () {
        this.hasCameraPermission = true;
        this.startScan();
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/scan/scan.html"*/'<ion-content no-bounce [class.transparent]="hasCameraPermission">\n  <p padding no-margin text-center *ngIf="hasCameraPermission">Scan an address QR to prepare a transaction or scan a transaction QR to confirm and send it.</p>\n\n  <ion-row *ngIf="isBrowser" justify-content-center align-items-center>\n    <ion-col text-center>\n      <ion-icon name="qr-scanner"></ion-icon>\n      <h3 (click)="simulateScan(true)" padding-horizontal>Simulate tx (browser only)</h3>\n      <h3 (click)="simulateScan(false)" padding-horizontal>Simulate transaction (browser only)</h3>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="!hasCameraPermission" (click)="checkPermission(false)" justify-content-center align-items-center class="row--height__100">\n    <ion-col text-center>\n      <ion-icon name="eye-off"></ion-icon>\n      <h3 padding-horizontal>Click to allow camera access to scan a QR.</h3>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/scan/scan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_scanner_scanner__["a" /* ScannerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_qr_qr__["a" /* QrProvider */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__introduction_introduction__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, modalController, platform) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.platform = platform;
    }
    SettingsPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    SettingsPage.prototype.share = function () {
        var options = {
            message: 'Take a look at the app I found. Its the most secure practical way to do crypto transactions.',
            // not supported on some apps (Facebook, Instagram)
            subject: 'Checkout airgap.it',
            url: 'https://www.airgap.it',
            chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
        };
        var onSuccess = function (result) {
            console.log("Share completed: " + result.completed); // On Android apps mostly return false even while it's true
            console.log("Shared to app: " + result.app);
            // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
        };
        var onError = function (msg) {
            console.log('Sharing failed with message: ' + msg);
        };
        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    };
    SettingsPage.prototype.introduction = function () {
        this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__introduction_introduction__["a" /* IntroductionPage */]).present();
    };
    SettingsPage.prototype.feedback = function () {
        this.openUrl('https://github.com/airgap-it/airgap-wallet/issues');
    };
    SettingsPage.prototype.telegram = function () {
        this.openUrl('https://t.me/AirGap');
    };
    SettingsPage.prototype.translate = function () {
        this.openUrl('https://translate.sook.ch/');
    };
    /*
    // Removed because of google policies
    public donate() {
      this.openUrl('https://airgap.it/#donate')
    }
    */
    SettingsPage.prototype.githubDistro = function () {
        this.openUrl('https://github.com/airgap-it/airgap-distro');
    };
    SettingsPage.prototype.githubWebSigner = function () {
        this.openUrl('https://github.com/airgap-it/airgap-web-signer');
    };
    SettingsPage.prototype.githubWallet = function () {
        this.openUrl('https://github.com/airgap-it');
    };
    SettingsPage.prototype.faq = function () {
        this.openUrl('https://airgap.it/#faq');
    };
    SettingsPage.prototype.openUrl = function (url) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            cordova.InAppBrowser.open(url, '_system', 'location=true');
        }
        else {
            window.open(url, '_blank');
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{\'SETTINGS\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list no-border no-lines>\n\n    <ion-list-header no-margin no-lines>\n\n      {{\'HELP_AND_SUPPORT\' | translate}}\n\n    </ion-list-header>\n\n    <ion-item (click)="introduction()">\n\n      <ion-icon name="ios-bulb-outline" item-start></ion-icon>\n\n      {{\'INTRODUCTION\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    <ion-item (click)="faq()">\n\n      <ion-icon name="ios-help-circle-outline" item-start></ion-icon>\n\n      {{\'FAQ\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list no-border no-lines>\n\n    <ion-list-header no-margin no-lines>\n\n      {{\'HELP US\' | translate}}\n\n    </ion-list-header>\n\n     <!-- Removed because of google policies\n\n    <ion-item (click)="donate()">\n\n      <ion-icon name="heart" item-start></ion-icon>\n\n      {{\'DONATE\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    -->\n\n    <ion-item (click)="telegram()">\n\n      <ion-icon name="md-chatboxes" item-start></ion-icon>\n\n      {{\'Join Telegram\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    <!--\n\n    <ion-item (click)="feedback()">\n\n      <ion-icon name="ios-megaphone" item-start></ion-icon>\n\n      {{\'FEEDBACK\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    -->\n\n    <ion-item (click)="share()">\n\n      <ion-icon name="ios-share-outline" item-start></ion-icon>\n\n      {{\'SHARE_AIRGAP\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    <!--\n\n    <ion-item (click)="translate()">\n\n      <ion-icon name="flag" item-start></ion-icon>\n\n      {{\'HELP_TRANSLATE\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    -->\n\n  </ion-list>\n\n  <ion-list no-border no-lines>\n\n    <ion-list-header no-margin no-lines>\n\n      {{\'INFORMATION\' | translate}}\n\n    </ion-list-header>\n\n    <ion-item (click)="githubWallet()">\n\n      <ion-icon name="logo-github" item-start></ion-icon>\n\n      {{\'GitHub Repository\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    <!--\n\n    <ion-item (click)="githubWebSigner()">\n\n      <ion-icon name="logo-github" item-start></ion-icon>\n\n      {{\'GITHUB_REPOSITORY_CLIENT\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    <ion-item (click)="githubDistro()">\n\n      <ion-icon name="logo-tux" item-start></ion-icon>\n\n      {{\'AIRGAP_DISTRIBUTION\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n    -->\n\n    <ion-item (click)="about()">\n\n      <ion-icon name="ios-information-circle-outline" item-start></ion-icon>\n\n      {{\'ABOUT\' | translate}}\n\n      <ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduction_introduction__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scan_scan__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TabsPage = /** @class */ (function () {
    function TabsPage(modalController, settingsProvider, events) {
        this.modalController = modalController;
        this.settingsProvider = settingsProvider;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio__["a" /* PortfolioPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__scan_scan__["a" /* ScanPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */];
        this.showIntroduction().catch(console.error);
    }
    TabsPage.prototype.showIntroduction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var introduction, modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settingsProvider.get(__WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsKey */].INTRODUCTION)];
                    case 1:
                        introduction = _a.sent();
                        if (!introduction) {
                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.settingsProvider.set(__WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsKey */].INTRODUCTION, true)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, 3000);
                            modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__introduction_introduction__["a" /* IntroductionPage */]);
                            modal.onDidDismiss(function () {
                                _this.events.publish('scan:start');
                            });
                            modal.present().catch(console.error);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/tabs/tabs.html"*/'<ion-tabs color="white" [selectedIndex]="0">\n  <ion-tab [root]="tab1Root" tabTitle="Wallets" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Scan QR" tabIcon="barcode"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["b" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(679);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularx_qrcode__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_material_icons__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_components_module__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_coin_info_coin_info__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_introduction_introduction__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_portfolio_portfolio__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_scan_address_scan_address__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_scan_sync_scan_sync__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_scan_scan__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_transaction_confirm_transaction_confirm__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_transaction_detail_transaction_detail__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_transaction_prepare_transaction_prepare__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_transaction_qr_transaction_qr__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_wallet_address_wallet_address__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_wallet_import_wallet_import__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_pipes_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_qr_qr__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_scanner_scanner__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_wallets_wallets_provider__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_moment__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_component__ = __webpack_require__(1261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_storage__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_wallet_edit_popover_wallet_edit_popover_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_settings_settings__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_36__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_coin_info_coin_info__["a" /* CoinInfoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_portfolio_portfolio__["a" /* PortfolioPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_transaction_prepare_transaction_prepare__["a" /* TransactionPreparePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_introduction_introduction__["a" /* IntroductionPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_scan_scan__["a" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_wallet_address_wallet_address__["a" /* WalletAddressPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transaction_confirm_transaction_confirm__["a" /* TransactionConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_transaction_detail_transaction_detail__["a" /* TransactionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_transaction_qr_transaction_qr__["a" /* TransactionQrPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_scan_address_scan_address__["a" /* ScanAddressPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_scan_sync_scan_sync__["a" /* ScanSyncPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_wallet_import_wallet_import__["a" /* WalletImportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_ionic2_material_icons__["a" /* MaterialIconsModule */],
                __WEBPACK_IMPORTED_MODULE_35_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularx_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_36__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_37__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__airgap_storage',
                    driverOrder: ['sqlite', 'localstorage']
                }),
                __WEBPACK_IMPORTED_MODULE_15__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_36__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_coin_info_coin_info__["a" /* CoinInfoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_portfolio_portfolio__["a" /* PortfolioPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_transaction_prepare_transaction_prepare__["a" /* TransactionPreparePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_scan_scan__["a" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_introduction_introduction__["a" /* IntroductionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_wallet_address_wallet_address__["a" /* WalletAddressPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transaction_confirm_transaction_confirm__["a" /* TransactionConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_transaction_detail_transaction_detail__["a" /* TransactionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_transaction_qr_transaction_qr__["a" /* TransactionQrPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_scan_address_scan_address__["a" /* ScanAddressPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_scan_sync_scan_sync__["a" /* ScanSyncPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_wallet_import_wallet_import__["a" /* WalletImportPage */],
                __WEBPACK_IMPORTED_MODULE_38__components_wallet_edit_popover_wallet_edit_popover_component__["a" /* WalletEditPopoverComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__["a" /* Deeplinks */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_33__providers_scanner_scanner__["a" /* ScannerProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_34__providers_wallets_wallets_provider__["a" /* WalletsProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_qr_qr__["a" /* QrProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_settings_settings__["b" /* SettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_material_icons__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_row_address_row__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__from_to_from_to__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hexagon_icon_hexagon_icon__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__identicon_identicon__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portfolio_item_portfolio_item__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wallet_edit_popover_wallet_edit_popover_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_moment__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__portfolio_item_portfolio_item__["a" /* PortfolioItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__identicon_identicon__["a" /* IdenticonComponent */],
                __WEBPACK_IMPORTED_MODULE_6__hexagon_icon_hexagon_icon__["a" /* HexagonIconComponent */],
                __WEBPACK_IMPORTED_MODULE_4__address_row_address_row__["a" /* AddressRowComponent */],
                __WEBPACK_IMPORTED_MODULE_5__from_to_from_to__["a" /* FromToComponent */],
                __WEBPACK_IMPORTED_MODULE_9__wallet_edit_popover_wallet_edit_popover_component__["a" /* WalletEditPopoverComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_10_ngx_moment__["a" /* MomentModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__portfolio_item_portfolio_item__["a" /* PortfolioItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__identicon_identicon__["a" /* IdenticonComponent */],
                __WEBPACK_IMPORTED_MODULE_6__hexagon_icon_hexagon_icon__["a" /* HexagonIconComponent */],
                __WEBPACK_IMPORTED_MODULE_4__address_row_address_row__["a" /* AddressRowComponent */],
                __WEBPACK_IMPORTED_MODULE_5__from_to_from_to__["a" /* FromToComponent */],
                __WEBPACK_IMPORTED_MODULE_9__wallet_edit_popover_wallet_edit_popover_component__["a" /* WalletEditPopoverComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountConverterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AmountConverterPipe = /** @class */ (function () {
    function AmountConverterPipe() {
    }
    AmountConverterPipe.prototype.transform = function (value, args) {
        if (!args.protocolIdentifier || (!value && value !== 0) || isNaN(Number(value)) || (args.maxDigits && isNaN(Number(args.maxDigits)))) {
            /* console.warn(
              `AmountConverterPipe: necessary properties missing!\n` +
                `Protocol: ${args.protocolIdentifier}\n` +
                `Value: ${value}\n` +
                `maxDigits: ${args.maxDigits}`
            ) */
            return '';
        }
        var protocol = Object(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["getProtocolByIdentifier"])(args.protocolIdentifier);
        if (!protocol) {
            return '';
        }
        var BN = __WEBPACK_IMPORTED_MODULE_1_bignumber_js__["BigNumber"].clone({
            FORMAT: {
                decimalSeparator: ".",
                groupSeparator: "'",
                groupSize: 3
            }
        });
        var amount = new BN(value).shiftedBy(-1 * protocol.decimals);
        return this.formatBigNumber(amount, args.maxDigits) + " " + protocol.symbol.toUpperCase();
    };
    AmountConverterPipe.prototype.formatBigNumber = function (value, maxDigits) {
        if (!maxDigits) {
            return value.toFormat();
        }
        if (value.toFixed().length <= maxDigits) {
            return value.toFormat();
        }
        var integerValueLength = value.integerValue().toString().length;
        if (integerValueLength >= maxDigits) {
            // We can omit floating point
            return this.makeFullNumberSmaller(value, maxDigits);
        }
        // Need regex to remove all unneccesary trailing zeros
        return value.toFormat(maxDigits - integerValueLength).replace(/\.?0+$/, '');
    };
    AmountConverterPipe.prototype.makeFullNumberSmaller = function (value, maxDigits) {
        if (value.toFixed().length <= maxDigits) {
            return value.toFormat();
        }
        var result = value.integerValue();
        if (result.toString().length <= maxDigits) {
            return result.toFormat();
        }
        if (result.toString().length <= 3) {
            return result.toFormat();
        }
        // number is too long, take 3 digits away and try again
        result = result.dividedToIntegerBy(1000);
        if (result.toFixed().length <= maxDigits) {
            return result.toFormat() + 'K';
        }
        if (result.toFixed().length <= 3) {
            return result.toFormat() + 'K';
        }
        // number is too long, take 3 digits away and try again
        result = result.dividedToIntegerBy(1000);
        return result.toFormat() + 'M';
    };
    AmountConverterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'amountConverter'
        })
    ], AmountConverterPipe);
    return AmountConverterPipe;
}());

//# sourceMappingURL=amount-converter.pipe.js.map

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeConverterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeeConverterPipe = /** @class */ (function () {
    function FeeConverterPipe() {
    }
    FeeConverterPipe.prototype.transform = function (value, args) {
        if (!args.protocolIdentifier || (!value && value !== 0) || isNaN(Number(value))) {
            // console.warn(`FeeConverterPipe: necessary properties missing!\n` + `Protocol: ${args.protocolIdentifier}\n` + `Value: ${value}`)
            return '';
        }
        var protocol = Object(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["getProtocolByIdentifier"])(args.protocolIdentifier);
        if (!protocol) {
            return '';
        }
        var amount = new __WEBPACK_IMPORTED_MODULE_1_bignumber_js__["BigNumber"](value);
        var fee = amount.shiftedBy(-1 * protocol.feeDecimals);
        return fee.toFixed() + ' ' + protocol.feeSymbol.toUpperCase();
    };
    FeeConverterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'feeConverter'
        })
    ], FeeConverterPipe);
    return FeeConverterPipe;
}());

//# sourceMappingURL=fee-converter.pipe.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenStringPipe = /** @class */ (function () {
    function ShortenStringPipe() {
    }
    ShortenStringPipe.prototype.transform = function (value) {
        if (!value || !(typeof value === 'string')) {
            // console.warn(`ShortenStringPipe: invalid value: ${value}`)
            return '';
        }
        var result = value;
        if (value.length >= 12) {
            result = value.substr(0, 5) + "..." + value.substr(-5);
        }
        return result;
    };
    ShortenStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'shortenString'
        })
    ], ShortenStringPipe);
    return ShortenStringPipe;
}());

//# sourceMappingURL=shorten-string.pipe.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressRowComponent = /** @class */ (function () {
    function AddressRowComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AddressRowComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AddressRowComponent.prototype, "address", void 0);
    AddressRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'address-row',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/address-row/address-row.html"*/'<ion-row no-lines no-padding align-items-center>\n\n  <ion-col col-3>\n\n    <ion-row justify-content-center>\n\n      <ion-avatar>\n\n        <identicon [address]="address"></identicon>\n\n      </ion-avatar>\n\n    </ion-row>\n\n  </ion-col>\n\n  <ion-col col-9>\n\n    <ion-label no-margin stacked *ngIf="label">{{label}}</ion-label>\n\n    <div item-content class="text--selectable typography--mono">{{address}}</div>\n\n  </ion-col>\n\n</ion-row>\n\n'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/address-row/address-row.html"*/
        })
    ], AddressRowComponent);
    return AddressRowComponent;
}());

//# sourceMappingURL=address-row.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromToComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_transaction_model__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FromToComponent = /** @class */ (function () {
    function FromToComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_transaction_model__["a" /* Transaction */])
    ], FromToComponent.prototype, "transaction", void 0);
    FromToComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'from-to',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/from-to/from-to.html"*/'<div *ngIf="transaction">\n\n  <address-row *ngFor="let address of transaction.from" [address]="address"></address-row>\n\n\n\n  <ion-row align-items-center>\n\n    <ion-col col-3 no-padding>\n\n      <ion-row justify-content-center>\n\n        <div class="line"></div>\n\n      </ion-row>\n\n    </ion-col>\n\n    <ion-col col-9 padding-bottom>\n\n      <ion-label stacked class="typography--uppercase">Amount</ion-label>\n\n      <div class="typography--mono" item-content>\n\n        <span class="typography--mono">{{ transaction.amount | amountConverter : { protocolIdentifier: transaction.protocolIdentifier } }}</span>\n\n      </div>\n\n\n\n      <ng-container *ngIf="transaction.fee">\n\n        <ion-label stacked class="typography--uppercase">Fee</ion-label>\n\n        <div class="typography--mono" item-content>\n\n          <span class="typography--mono">{{ transaction.fee | feeConverter : { protocolIdentifier: transaction.protocolIdentifier } }}</span>\n\n        </div>\n\n      </ng-container>\n\n\n\n      <ng-container *ngIf="transaction.timestamp">\n\n        <ion-label stacked class="typography--uppercase">Time</ion-label>\n\n        <div item-content>\n\n          {{ (transaction.timestamp | amFromUnix) | amCalendar: { sameDay: \'[Today at] HH:mm\', sameElse: \'HH:mm [on] LL\' } }}\n\n        </div>\n\n      </ng-container>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <address-row *ngFor="let address of transaction.to" [address]="address"></address-row>\n\n</div>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/from-to/from-to.html"*/
        })
    ], FromToComponent);
    return FromToComponent;
}());

//# sourceMappingURL=from-to.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HexagonIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HexagonIconComponent = /** @class */ (function () {
    function HexagonIconComponent() {
        this.textColor = 'white';
        this.icon = 'add';
        this.opacity = 1;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HexagonIconComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HexagonIconComponent.prototype, "textColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HexagonIconComponent.prototype, "letter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HexagonIconComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HexagonIconComponent.prototype, "opacity", void 0);
    HexagonIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'hexagon-icon',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/hexagon-icon/hexagon-icon.html"*/'<div class="hexagon--background" [style.background-color]="backgroundColor" [style.opacity]="opacity">\n  <ion-icon *ngIf="!letter && icon" [color]="textColor" md-name [md-name]="icon"></ion-icon>\n  <h3 *ngIf="letter" [style.color]="textColor" ion-text no-margin>{{letter?.substr(0, 1).toUpperCase()}}</h3>\n</div>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/hexagon-icon/hexagon-icon.html"*/
        })
    ], HexagonIconComponent);
    return HexagonIconComponent;
}());

//# sourceMappingURL=hexagon-icon.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdenticonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ethereum_blockies__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ethereum_blockies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ethereum_blockies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdenticonComponent = /** @class */ (function () {
    function IdenticonComponent() {
        this.identicon = '';
    }
    Object.defineProperty(IdenticonComponent.prototype, "address", {
        set: function (value) {
            if (value) {
                this.identicon = Object(__WEBPACK_IMPORTED_MODULE_1_ethereum_blockies__["toDataUrl"])(value.toLowerCase());
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IdenticonComponent.prototype, "address", null);
    IdenticonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'identicon',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/identicon/identicon.html"*/'<img *ngIf="identicon" [src]="identicon" />'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/identicon/identicon.html"*/
        })
    ], IdenticonComponent);
    return IdenticonComponent;
}());

//# sourceMappingURL=identicon.js.map

/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioItemComponent = /** @class */ (function () {
    function PortfolioItemComponent() {
        this.maxDigits = 0;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["AirGapMarketWallet"])
    ], PortfolioItemComponent.prototype, "wallet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PortfolioItemComponent.prototype, "maxDigits", void 0);
    PortfolioItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'portfolio-item',template:/*ion-inline-start:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/portfolio-item/portfolio-item.html"*/'<ion-item *ngIf="wallet">\n\n  <img class="symbol--icon" [src]="\'assets/symbols/\' + wallet.coinProtocol.symbol.toLowerCase() + \'.svg\'">\n\n  <ion-avatar item-start>\n\n    <identicon [address]="wallet.receivingPublicAddress"></identicon>\n\n  </ion-avatar>\n\n\n\n  <h2 *ngIf="wallet.currentMarketPrice">\n\n    <span class="font--weight__bold" ion-text color="black">{{ wallet.currentBalance?.toNumber() | amountConverter : {\n\n      protocolIdentifier: wallet.protocolIdentifier, maxDigits: maxDigits } }}</span>\n\n  </h2>\n\n  <small *ngIf="!wallet.currentMarketPrice">\n\n    syncing with blockchain ...\n\n  </small>\n\n\n\n  <h3 *ngIf="wallet.addresses.length > 0" ion-text color="blackLight" class="typography--mono">\n\n    {{ wallet.receivingPublicAddress | shortenString }}\n\n  </h3>\n\n\n\n  <ion-row class="items--right" item-end>\n\n    <ion-col col-12 no-padding text-right>\n\n      <p ion-text color="black">${{ wallet.currentBalance | cryptoToFiat: { protocolIdentifier:\n\n        wallet.protocolIdentifier, currentMarketPrice: wallet.currentMarketPrice } | number : \'1.2-2\' }}</p>\n\n    </ion-col>\n\n    <ion-col col-12 no-padding text-right>\n\n      <p>\n\n        <span ion-text color="blackLight">${{ wallet.currentMarketPrice?.toNumber() | number : \'1.2-4\' }}</span>\n\n        <!--<span ion-text [ngClass]="wallet.change24hour >= 0 ? \'green\' : \'red\'">{{ wallet.change24hour }}%</span>-->\n\n      </p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-item>'/*ion-inline-end:"/Users/amadeocharle/Desktop/airgap-wallet/src/components/portfolio-item/portfolio-item.html"*/
        })
    ], PortfolioItemComponent);
    return PortfolioItemComponent;
}());

//# sourceMappingURL=portfolio-item.js.map

/***/ })

},[674]);
//# sourceMappingURL=main.js.map