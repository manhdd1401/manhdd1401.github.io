webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_training_component__ = __webpack_require__("../../../../../src/app/admin/components/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_push_data_component__ = __webpack_require__("../../../../../src/app/admin/components/push-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Components


var defineRoutes = [
    //Home Page /
    { path: 'training', component: __WEBPACK_IMPORTED_MODULE_2__components_training_component__["a" /* TrainningComponent */] },
    { path: 'push-data', component: __WEBPACK_IMPORTED_MODULE_3__components_push_data_component__["a" /* PushDataComponent */] },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(defineRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_training_component__ = __webpack_require__("../../../../../src/app/admin/components/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_push_data_component__ = __webpack_require__("../../../../../src/app/admin/components/push-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Modules

//Components


var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                //Routing
                __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["a" /* AdminRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_training_component__["a" /* TrainningComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_push_data_component__["a" /* PushDataComponent */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/components/push-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_db_playlist__ = __webpack_require__("../../../../../src/environments/db-playlist.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PushDataComponent = /** @class */ (function () {
    function PushDataComponent(_db) {
        this._db = _db;
    }
    PushDataComponent.prototype.ngOnInit = function () {
    };
    PushDataComponent.prototype.onPushData = function () {
        //Ads
        /*
        const adsRef = this._db.list('ads');
        dbAds.ads.forEach((ads : any)=>{
            adsRef.push({
                url     : ads.url,
                link    : ads.link,
                text    : ads.text,
                position: ads.position
            })
        })
        */
        var _this = this;
        //Playlist
        // const playlistRef = this._db.list('playlist')
        // dbPlaylist.playlist.forEach((playlist: any)=>{
        //     playlistRef.push({
        //         id              : playlist.id,
        //         channelId       : playlist.items[0].channelId,
        //         description     : playlist.description,
        //         publishedAt     : playlist.publishedAt,
        //         slug            : playlist.slug,
        //         thumbnails      : playlist.thumbnails,
        //         title           : playlist.title
        //     })
        // })
        //Video
        var videoRef = this._db.list('video');
        __WEBPACK_IMPORTED_MODULE_2__environments_db_playlist__["a" /* dbPlaylist */].playlist.forEach(function (playlist) {
            playlist.items.forEach(function (video) {
                videoRef.push({
                    id: video.id,
                    channelId: video.channelId,
                    playlistID: video.playlistID,
                    description: video.description,
                    publishedAt: video.publishedAt,
                    slug: video.slug,
                    thumbnails: video.thumbnails,
                    title: video.title,
                    views: _this.getRandomInt(1, 500),
                    comments: _this.getRandomInt(1, 50),
                    ratting: _this.getRandomInt(1, 100),
                    featured: (_this.getRandomInt(1, 5) == 2 ? true : false)
                });
            });
        });
    };
    PushDataComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    PushDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin-push-data',
            template: __webpack_require__("../../../../../src/app/admin/templates/push-data.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PushDataComponent);
    return PushDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/components/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainningComponent = /** @class */ (function () {
    function TrainningComponent(db) {
        // this.items = db.list('items');
        // this.item = db.object('items/abc').valueChanges();
        // const promise = db.object('items/abc').remove();
        // promise.then(_ => console.log('success'))
        //         .catch(err => console.log(err, 'You dont have access!'));
        // const itemRef = db.object('items/def/name');
        // itemRef.set({ id: 324 ,name: 'new name!'});
        // itemRef.set({ id: 123 ,name: 'angular!'});
        // itemRef.update({ name: 'reactjs' });
        var itemsRef = db.list('items');
        itemsRef.set('L53EXyLZIEA1FSDqKZx', { name: 'test thoiiii' });
    }
    TrainningComponent.prototype.ngOnInit = function () {
    };
    TrainningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin-trainning',
            template: __webpack_require__("../../../../../src/app/admin/templates/trainning.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TrainningComponent);
    return TrainningComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/templates/push-data.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onPushData()\"> Push Data</button>"

/***/ }),

/***/ "../../../../../src/app/admin/templates/trainning.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n    <li *ngFor=\"let item of items | async\">\n        {{ item | json }}\n    </li>\n</ul> -->\n<!-- <h1>{{ item | async | json }}</h1> -->\n<h1>Hello</h1>"

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zvideo_components_error_component__ = __webpack_require__("../../../../../src/app/zvideo/components/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var defineRoutes = [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__zvideo_components_error_component__["a" /* ErrorComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(defineRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN .boxed -->\n<div class=\"boxed\">\n\n    <!-- HEADER -->\n    <header class=\"header dark\" app-elm-header></header>\n\n    <section class=\"content\">\n        <div class=\"wrapper\">\n            <router-outlet></router-outlet>\n        </div>\n    </section>\n    \n    <!-- FOOTER -->\n    <app-elm-footer></app-elm-footer>\n\n    <!-- END .boxed -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_elements_module__ = __webpack_require__("../../../../../src/app/elements/elements.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zvideo_zvideo_module__ = __webpack_require__("../../../../../src/app/zvideo/zvideo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Firebase




// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                //Angular Module
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                //Custom Module
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__zvideo_zvideo_module__["a" /* ZVideoModule */],
                __WEBPACK_IMPORTED_MODULE_3__elements_elements_module__["a" /* ElementsModule */],
                __WEBPACK_IMPORTED_MODULE_7__admin_admin_module__["a" /* AdminModule */],
                //Routing
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.setting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSetting; });
var AppSetting = /** @class */ (function () {
    function AppSetting() {
    }
    AppSetting.TB_PLAYLIST = 'playlist';
    AppSetting.TB_VIDEO = 'video';
    AppSetting.TB_ADS = 'ads';
    return AppSetting;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_ads_widget_ads_component__ = __webpack_require__("../../../../../src/app/elements/widget-ads/widget-ads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_banner_widget_banner_component__ = __webpack_require__("../../../../../src/app/elements/widget-banner/widget-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_social_widget_social_component__ = __webpack_require__("../../../../../src/app/elements/widget-social/widget-social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widget_menu_top_widget_menu_top_component__ = __webpack_require__("../../../../../src/app/elements/widget-menu-top/widget-menu-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widget_menu_main_widget_menu_main_component__ = __webpack_require__("../../../../../src/app/elements/widget-menu-main/widget-menu-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widget_playlist_widget_playlist_component__ = __webpack_require__("../../../../../src/app/elements/widget-playlist/widget-playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__widget_featured_video_widget_featured_video_component__ = __webpack_require__("../../../../../src/app/elements/widget-featured-video/widget-featured-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widget_popular_video_widget_popular_video_component__ = __webpack_require__("../../../../../src/app/elements/widget-popular-video/widget-popular-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__widget_contact_widget_contact_component__ = __webpack_require__("../../../../../src/app/elements/widget-contact/widget-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__widget_facebook_widget_facebook_component__ = __webpack_require__("../../../../../src/app/elements/widget-facebook/widget-facebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__widget_copyright_widget_copyright_component__ = __webpack_require__("../../../../../src/app/elements/widget-copyright/widget-copyright.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__widget_menu_bottom_widget_menu_bottom_component__ = __webpack_require__("../../../../../src/app/elements/widget-menu-bottom/widget-menu-bottom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__elm_header_elm_header_component__ = __webpack_require__("../../../../../src/app/elements/elm-header/elm-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__elm_footer_top_elm_footer_top_component__ = __webpack_require__("../../../../../src/app/elements/elm-footer-top/elm-footer-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__elm_footer_bottom_elm_footer_bottom_component__ = __webpack_require__("../../../../../src/app/elements/elm-footer-bottom/elm-footer-bottom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__elm_footer_elm_footer_component__ = __webpack_require__("../../../../../src/app/elements/elm-footer/elm-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__elm_playlist_elm_playlist_component__ = __webpack_require__("../../../../../src/app/elements/elm-playlist/elm-playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__elm_video_elm_video_component__ = __webpack_require__("../../../../../src/app/elements/elm-video/elm-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__elm_panel_title_elm_panel_title_component__ = __webpack_require__("../../../../../src/app/elements/elm-panel-title/elm-panel-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__elm_youtube_iframe_elm_youtube_iframe_component__ = __webpack_require__("../../../../../src/app/elements/elm-youtube-iframe/elm-youtube-iframe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__elm_loader_elm_loader_component__ = __webpack_require__("../../../../../src/app/elements/elm-loader/elm-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__elm_playlist_pagination_elm_playlist_pagination_component__ = __webpack_require__("../../../../../src/app/elements/elm-playlist-pagination/elm-playlist-pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__elm_pager_elm_pager_component__ = __webpack_require__("../../../../../src/app/elements/elm-pager/elm-pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Widget











//Element











// module

var ElementsModule = /** @class */ (function () {
    function ElementsModule() {
    }
    ElementsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_26__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__widget_ads_widget_ads_component__["a" /* WidgetAdsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__widget_banner_widget_banner_component__["a" /* WidgetBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__widget_social_widget_social_component__["a" /* WidgetSocialComponent */],
                __WEBPACK_IMPORTED_MODULE_6__widget_menu_top_widget_menu_top_component__["a" /* WidgetMenuTopComponent */],
                __WEBPACK_IMPORTED_MODULE_7__widget_menu_main_widget_menu_main_component__["a" /* WidgetMenuMainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__widget_playlist_widget_playlist_component__["a" /* WidgetPlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_9__widget_featured_video_widget_featured_video_component__["a" /* WidgetFeaturedVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__widget_popular_video_widget_popular_video_component__["a" /* WidgetPopularVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__widget_contact_widget_contact_component__["a" /* WidgetContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__widget_facebook_widget_facebook_component__["a" /* WidgetFacebookComponent */],
                __WEBPACK_IMPORTED_MODULE_13__widget_copyright_widget_copyright_component__["a" /* WidgetCopyrightComponent */],
                __WEBPACK_IMPORTED_MODULE_14__widget_menu_bottom_widget_menu_bottom_component__["a" /* WidgetMenuBottomComponent */],
                __WEBPACK_IMPORTED_MODULE_15__elm_header_elm_header_component__["a" /* ElmHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__elm_footer_top_elm_footer_top_component__["a" /* ElmFooterTopComponent */],
                __WEBPACK_IMPORTED_MODULE_17__elm_footer_bottom_elm_footer_bottom_component__["a" /* ElmFooterBottomComponent */],
                __WEBPACK_IMPORTED_MODULE_18__elm_footer_elm_footer_component__["a" /* ElmFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__elm_playlist_elm_playlist_component__["a" /* ElmPlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_20__elm_video_elm_video_component__["a" /* ElmVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__elm_panel_title_elm_panel_title_component__["a" /* ElmPanelTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_22__elm_youtube_iframe_elm_youtube_iframe_component__["a" /* ElmYoutubeIframeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__elm_loader_elm_loader_component__["a" /* ElmLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__elm_playlist_pagination_elm_playlist_pagination_component__["a" /* ElmPlaylistPaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_25__elm_pager_elm_pager_component__["a" /* ElmPagerComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__widget_ads_widget_ads_component__["a" /* WidgetAdsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__widget_banner_widget_banner_component__["a" /* WidgetBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__widget_social_widget_social_component__["a" /* WidgetSocialComponent */],
                __WEBPACK_IMPORTED_MODULE_7__widget_menu_main_widget_menu_main_component__["a" /* WidgetMenuMainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__widget_menu_top_widget_menu_top_component__["a" /* WidgetMenuTopComponent */],
                __WEBPACK_IMPORTED_MODULE_8__widget_playlist_widget_playlist_component__["a" /* WidgetPlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_9__widget_featured_video_widget_featured_video_component__["a" /* WidgetFeaturedVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__widget_popular_video_widget_popular_video_component__["a" /* WidgetPopularVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__widget_contact_widget_contact_component__["a" /* WidgetContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__widget_facebook_widget_facebook_component__["a" /* WidgetFacebookComponent */],
                __WEBPACK_IMPORTED_MODULE_13__widget_copyright_widget_copyright_component__["a" /* WidgetCopyrightComponent */],
                __WEBPACK_IMPORTED_MODULE_14__widget_menu_bottom_widget_menu_bottom_component__["a" /* WidgetMenuBottomComponent */],
                __WEBPACK_IMPORTED_MODULE_15__elm_header_elm_header_component__["a" /* ElmHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__elm_footer_top_elm_footer_top_component__["a" /* ElmFooterTopComponent */],
                __WEBPACK_IMPORTED_MODULE_17__elm_footer_bottom_elm_footer_bottom_component__["a" /* ElmFooterBottomComponent */],
                __WEBPACK_IMPORTED_MODULE_18__elm_footer_elm_footer_component__["a" /* ElmFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__elm_playlist_elm_playlist_component__["a" /* ElmPlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_20__elm_video_elm_video_component__["a" /* ElmVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__elm_panel_title_elm_panel_title_component__["a" /* ElmPanelTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_22__elm_youtube_iframe_elm_youtube_iframe_component__["a" /* ElmYoutubeIframeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__elm_loader_elm_loader_component__["a" /* ElmLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__elm_playlist_pagination_elm_playlist_pagination_component__["a" /* ElmPlaylistPaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_25__elm_pager_elm_pager_component__["a" /* ElmPagerComponent */],
            ]
        })
    ], ElementsModule);
    return ElementsModule;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-footer-bottom/elm-footer-bottom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-footer-bottom/elm-footer-bottom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- WIDGET MENU BOTTOM -->\n    <ul class=\"right\" app-widget-menu-bottom></ul>\n\n    <!-- WIFGET COPYRIGHT -->\n    <p app-widget-copyright></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/elm-footer-bottom/elm-footer-bottom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmFooterBottomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElmFooterBottomComponent = /** @class */ (function () {
    function ElmFooterBottomComponent() {
    }
    ElmFooterBottomComponent.prototype.ngOnInit = function () {
    };
    ElmFooterBottomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-elm-footer-bottom]',
            template: __webpack_require__("../../../../../src/app/elements/elm-footer-bottom/elm-footer-bottom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-footer-bottom/elm-footer-bottom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmFooterBottomComponent);
    return ElmFooterBottomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-footer-top/elm-footer-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-footer-top/elm-footer-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n    <!-- WIDGET POPULAR VIDEO -->\n    <div class=\"widget\" app-widget-popular-video></div>\n\n    <!-- WIDGET CONTACT -->\n    <div class=\"widget\" app-widget-contact></div>\n\n    <!-- WIDGET FACEBOOK -->\n    <div class=\"widget\" app-widget-facebook></div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/elm-footer-top/elm-footer-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmFooterTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElmFooterTopComponent = /** @class */ (function () {
    function ElmFooterTopComponent() {
    }
    ElmFooterTopComponent.prototype.ngOnInit = function () {
    };
    ElmFooterTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-elm-footer-top]',
            template: __webpack_require__("../../../../../src/app/elements/elm-footer-top/elm-footer-top.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-footer-top/elm-footer-top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmFooterTopComponent);
    return ElmFooterTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-footer/elm-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-footer/elm-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ELEMENT FOOTER TOP -->\n<footer class=\"footer\" app-elm-footer-top></footer>\n\n<!-- ELEMENT FOOTER BOTTOM -->\n<div class=\"footer-bottom\" app-elm-footer-bottom></div>"

/***/ }),

/***/ "../../../../../src/app/elements/elm-footer/elm-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElmFooterComponent = /** @class */ (function () {
    function ElmFooterComponent() {
    }
    ElmFooterComponent.prototype.ngOnInit = function () {
    };
    ElmFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-elm-footer',
            template: __webpack_require__("../../../../../src/app/elements/elm-footer/elm-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-footer/elm-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmFooterComponent);
    return ElmFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-header/elm-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-header/elm-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-upper\">\n    <!-- BEGIN .wrapper -->\n    <div class=\"wrapper\">\n\n        <!-- WIDGET MENU: TOP -->\n        <ul class=\"left ot-menu-add\" rel=\"Top Menu\" app-widget-menu-top></ul>\n\n        <!-- WIDGET SOCIAL -->\n        <ul class=\"right\" app-widget-social></ul>\n\n        <div class=\"clear-float\"></div>\n        <!-- END .wrapper -->\n    </div>\n</div>\n\n<!-- BEGIN .wrapper -->\n<div class=\"wrapper\">\n\n    <!-- BEGIN .header-content -->\n    <div class=\"header-content\">\n\n        <!-- WIDGET BANNER -->\n        <div class=\"header-logo\" app-widget-banner></div>\n\n        <!-- WIDGET ADS : banner -->\n        <div class=\"header-banner\" app-widget-ads=\"banner\"></div>\n\n        <!-- END .header-content -->\n    </div>\n\n    <!-- BEGIN #main-menu -->\n    <nav id=\"main-menu\" app-widget-menu-main></nav>\n\n    <!-- END .wrapper -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/elm-header/elm-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElmHeaderComponent = /** @class */ (function () {
    function ElmHeaderComponent() {
    }
    ElmHeaderComponent.prototype.ngOnInit = function () {
    };
    ElmHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-elm-header]',
            template: __webpack_require__("../../../../../src/app/elements/elm-header/elm-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-header/elm-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmHeaderComponent);
    return ElmHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-loader/elm-loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-loader/elm-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <img src=\"../assets/images/loading.gif\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/elm-loader/elm-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElmLoaderComponent = /** @class */ (function () {
    function ElmLoaderComponent() {
    }
    ElmLoaderComponent.prototype.ngOnInit = function () {
    };
    ElmLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-elm-loader',
            template: __webpack_require__("../../../../../src/app/elements/elm-loader/elm-loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-loader/elm-loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmLoaderComponent);
    return ElmLoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-pager/elm-pager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-pager/elm-pager.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- First  -->\n<a (click)=\"setPage(1)\" class=\"page-numbers\" *ngIf=\"pager.currentPage !== 1\" >\n    First\n</a>\n\n<!-- Previous  -->\n<a (click)=\"setPage(pager.currentPage - 1)\" class=\"prev page-numbers\" *ngIf=\"pager.currentPage !== 1\">\n    <i class=\"fa fa-caret-left\"></i> Previous\n</a>\n\n<a class=\"page-numbers\"\n    *ngFor=\"let page of pager.pages\" \n    (click)=\"setPage(page)\"\n    [ngClass]=\"{ current : pager.currentPage == page}\">\n{{page}}\n</a>\n\n\n<!-- Next  -->\n<a (click)=\"setPage(pager.currentPage + 1)\" class=\"next page-numbers\" *ngIf=\"pager.currentPage !== pager.totalPages\">\n    Next page\n    <i class=\"fa fa-caret-right\"></i>\n</a>\n\n<a (click)=\"setPage(pager.totalPages)\" class=\"page-numbers\" *ngIf=\"pager.currentPage !== pager.totalPages\">\n    Last\n</a>"

/***/ }),

/***/ "../../../../../src/app/elements/elm-pager/elm-pager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmPagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElmPagerComponent = /** @class */ (function () {
    function ElmPagerComponent() {
        this.pager = null;
        this.setCurrentPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ElmPagerComponent.prototype.ngOnInit = function () {
    };
    ElmPagerComponent.prototype.setPage = function (page) {
        this.setCurrentPage.emit(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('app-elm-pager'),
        __metadata("design:type", Object)
    ], ElmPagerComponent.prototype, "pager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ElmPagerComponent.prototype, "setCurrentPage", void 0);
    ElmPagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-elm-pager]',
            template: __webpack_require__("../../../../../src/app/elements/elm-pager/elm-pager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-pager/elm-pager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmPagerComponent);
    return ElmPagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-panel-title/elm-panel-title.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-panel-title/elm-panel-title.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/playlist',playlistID]\"><h2>{{title}}</h2></a>\n<div class=\"right video-set-layout\">\n    <a (click)=\"setLayout('grid')\" href=\"#\" rel=\"grid\" [ngClass]=\"setActive('grid')\"><i class=\"fa fa-th\"></i></a>\n    <a (click)=\"setLayout('hdgrid')\" href=\"#\" rel=\"hdgrid\" [ngClass]=\"setActive('hdgrid')\"><i class=\"fa fa-th-large\"></i></a>\n    <a (click)=\"setLayout('list')\" href=\"#\" rel=\"list\" [ngClass]=\"setActive('list')\"><i class=\"fa fa-th-list\"></i></a>\n    <a (click)=\"setLayout('hdlist')\" href=\"#\" rel=\"hdlist\" [ngClass]=\"setActive('hdlist')\"><i class=\"fa fa-bars\"></i></a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/elm-panel-title/elm-panel-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmPanelTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElmPanelTitleComponent = /** @class */ (function () {
    function ElmPanelTitleComponent() {
        this.title = null;
        this.myLayout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ElmPanelTitleComponent.prototype.ngOnInit = function () {
    };
    ElmPanelTitleComponent.prototype.setActive = function (layout) {
        return {
            active: (layout === this.layout)
        };
    };
    ElmPanelTitleComponent.prototype.setLayout = function (layout) {
        this.layout = layout;
        this.myLayout.emit(layout);
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('app-elm-panel-title'),
        __metadata("design:type", String)
    ], ElmPanelTitleComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('layout'),
        __metadata("design:type", String)
    ], ElmPanelTitleComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('playlistID'),
        __metadata("design:type", String)
    ], ElmPanelTitleComponent.prototype, "playlistID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ElmPanelTitleComponent.prototype, "myLayout", void 0);
    ElmPanelTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-elm-panel-title]',
            template: __webpack_require__("../../../../../src/app/elements/elm-panel-title/elm-panel-title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-panel-title/elm-panel-title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmPanelTitleComponent);
    return ElmPanelTitleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-playlist-pagination/elm-playlist-pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-playlist-pagination/elm-playlist-pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<app-elm-loader *ngIf=\"!playlistInfo\"></app-elm-loader>\n\n<div class=\"content-panel\" *ngIf=\"playlistInfo\">\n\n    <!-- ELEMENT PANEL TITLE -->\n    <div class=\"panel-title\" [app-elm-panel-title]=\"playlistInfo.title\" [layout]=\"layout\" [playlistID]=\"playlistID\" (myLayout)=\"changeLayout($event)\"></div>\n\n    <div class=\"panel-block video-list {{ layout }}\" *ngIf=\"videos\">\n\n        <!-- ELEMENT VIDEO -->\n        <div class=\"item\" *ngFor=\"let item of pagedItems\" [app-elm-video]=\"item\" show-desc=\"true\"></div>\n\n        <!-- PAGINATON -->\n        <div class=\"pagination\" \n            *ngIf=\"pager\"\n            (setCurrentPage)=\"setPage($event)\"\n            [app-elm-pager]=\"pager\" >\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/elm-playlist-pagination/elm-playlist-pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmPlaylistPaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_video_service__ = __webpack_require__("../../../../../src/app/shared/services/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_pager_service__ = __webpack_require__("../../../../../src/app/shared/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ElmPlaylistPaginationComponent = /** @class */ (function () {
    function ElmPlaylistPaginationComponent(_videoService, _playlistService, _pagerService, _activatedRouteService, _routerService) {
        this._videoService = _videoService;
        this._playlistService = _playlistService;
        this._pagerService = _pagerService;
        this._activatedRouteService = _activatedRouteService;
        this._routerService = _routerService;
        this.layout = 'grid';
        this.totalItems = 5;
        this.playlistInfo = null;
        this.videos = null;
        this.pager = {};
    }
    ElmPlaylistPaginationComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    ElmPlaylistPaginationComponent.prototype.ngOnChanges = function () {
        this.initData();
    };
    ElmPlaylistPaginationComponent.prototype.initData = function () {
        var _this = this;
        //Playlist
        this._playlistService.getItemByID(this.playlistID).subscribe(function (data) {
            _this.playlistInfo = data[0];
        });
        //Videos
        this._videoService.getItemByPlaylistID(this.playlistID, this.totalItems).subscribe(function (data) {
            _this.videos = data;
            _this.subscriptionQuery = _this._activatedRouteService.queryParams.subscribe(function (params) {
                var currentPage = params['page'];
                if (currentPage === undefined)
                    currentPage = 1;
                _this.setPage(currentPage);
                // console.log(this.pager);
            });
        });
    };
    ElmPlaylistPaginationComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this._pagerService.getPager(this.videos.length, +page, 5);
        if (this.pager) {
            // get current page of items
            this.pagedItems = this.videos.slice(this.pager.startIndex, this.pager.endIndex + 1);
            this._routerService.navigate(['playlist', this.playlistID], {
                queryParams: {
                    page: page
                }
            });
        }
        else {
            this.pagedItems = this.videos;
        }
    };
    ElmPlaylistPaginationComponent.prototype.changeLayout = function (value) {
        this.layout = value;
    };
    ElmPlaylistPaginationComponent.prototype.ngOnDestroy = function () {
        this.subscriptionQuery.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('playlistID'),
        __metadata("design:type", String)
    ], ElmPlaylistPaginationComponent.prototype, "playlistID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('layout'),
        __metadata("design:type", String)
    ], ElmPlaylistPaginationComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('totalItems'),
        __metadata("design:type", Number)
    ], ElmPlaylistPaginationComponent.prototype, "totalItems", void 0);
    ElmPlaylistPaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-elm-playlist-pagination',
            template: __webpack_require__("../../../../../src/app/elements/elm-playlist-pagination/elm-playlist-pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-playlist-pagination/elm-playlist-pagination.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_video_service__["a" /* VideoService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_pager_service__["a" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ElmPlaylistPaginationComponent);
    return ElmPlaylistPaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-playlist/elm-playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-playlist/elm-playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<app-elm-loader  *ngIf=\"!playlistInfo\"></app-elm-loader>\n\n<div class=\"content-panel\" *ngIf=\"playlistInfo\">\n    <!-- ELEMENT PANEL TITLE -->\n    <div class=\"panel-title\" \n        [app-elm-panel-title]=\"playlistInfo.title\" \n        [layout]=\"layout\"\n        [playlistID]=\"playlistID\"\n        (myLayout)=\"changeLayout($event)\"\n    ></div>\n    \n    <div class=\"panel-block video-list {{ layout }}\" *ngIf=\"videos\">\n    \n        <!-- ELEMENT VIDEO -->\n        <div class=\"item\" *ngFor=\"let item of videos\" [app-elm-video]=\"item\" show-desc=\"true\"></div>\n\n        <div class=\"clear-list-button\" >\n            <a [routerLink]=\"['/playlist',playlistID]\" class=\"back-button\">View More Videos</a>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/elements/elm-playlist/elm-playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmPlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_video_service__ = __webpack_require__("../../../../../src/app/shared/services/video.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElmPlaylistComponent = /** @class */ (function () {
    function ElmPlaylistComponent(_videoService, _playlistService) {
        this._videoService = _videoService;
        this._playlistService = _playlistService;
        this.layout = 'grid';
        this.totalItems = 5;
        this.playlistInfo = null;
        this.videos = null;
    }
    ElmPlaylistComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    ElmPlaylistComponent.prototype.ngOnChanges = function () {
        this.initData();
    };
    ElmPlaylistComponent.prototype.initData = function () {
        var _this = this;
        //Playlist
        this._playlistService.getItemByID(this.playlistID).subscribe(function (data) {
            _this.playlistInfo = data[0];
            // console.log(this.playlistInfo)
        });
        //Videos
        this._videoService.getItemByPlaylistID(this.playlistID, this.totalItems).subscribe(function (data) {
            _this.videos = data;
            // console.log(data);
        });
    };
    ElmPlaylistComponent.prototype.changeLayout = function (value) {
        this.layout = value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('playlistID'),
        __metadata("design:type", String)
    ], ElmPlaylistComponent.prototype, "playlistID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('layout'),
        __metadata("design:type", String)
    ], ElmPlaylistComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('totalItems'),
        __metadata("design:type", Number)
    ], ElmPlaylistComponent.prototype, "totalItems", void 0);
    ElmPlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-elm-playlist',
            template: __webpack_require__("../../../../../src/app/elements/elm-playlist/elm-playlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-playlist/elm-playlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_video_service__["a" /* VideoService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_playlist_service__["a" /* PlaylistService */]])
    ], ElmPlaylistComponent);
    return ElmPlaylistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-video/elm-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-video/elm-video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item-header\" *ngIf=\"item\">\n    <a [routerLink]=\"['/video',item.id]\" class=\"img-hover-effect\">\n        <img [src]=\"item.thumbnails\" width=\"16\" height=\"9\" class=\"aspect-px\" [alt]=\"item.title\" />\n    </a>\n</div>\n<div class=\"item-content\" *ngIf=\"item\">\n    <a [routerLink]=\"['/video',item.id]\"><span class=\"marker\">{{item.id}}</span></a>\n    <h3><a [routerLink]=\"['/video',item.id]\">{{item.title}}</a></h3>\n    <span class=\"video-meta\">\n        <a [routerLink]=\"['/video',item.id]\"><i class=\"fa fa-comment\"></i>{{item.comments}}</a>\n        <a [routerLink]=\"['/video',item.id]\"><i class=\"fa fa-eye\"></i>{{item.views}}</a>\n        <a [routerLink]=\"['/video',item.id]\"><i class=\"fa fa-heart\"></i>{{item.ratting}}</a>\n    </span>\n    <p *ngIf=\"showDesc\">{{item.description}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/elements/elm-video/elm-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_defines_video_class__ = __webpack_require__("../../../../../src/app/shared/defines/video.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElmVideoComponent = /** @class */ (function () {
    function ElmVideoComponent() {
        this.showDesc = false;
    }
    ElmVideoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("show-desc"),
        __metadata("design:type", Boolean)
    ], ElmVideoComponent.prototype, "showDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("app-elm-video"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_defines_video_class__["a" /* Video */])
    ], ElmVideoComponent.prototype, "item", void 0);
    ElmVideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-elm-video]',
            template: __webpack_require__("../../../../../src/app/elements/elm-video/elm-video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-video/elm-video.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmVideoComponent);
    return ElmVideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/elm-youtube-iframe/elm-youtube-iframe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/elm-youtube-iframe/elm-youtube-iframe.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe \n    width=\"560\" \n    height=\"315\" \n    [src]=\"('https://www.youtube.com/embed/' + videoID) | safe \"\n    frameborder=\"0\" \n    allow=\"autoplay; encrypted-media\" \n    allowfullscreen>\n</iframe>\n"

/***/ }),

/***/ "../../../../../src/app/elements/elm-youtube-iframe/elm-youtube-iframe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElmYoutubeIframeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElmYoutubeIframeComponent = /** @class */ (function () {
    function ElmYoutubeIframeComponent() {
        this.width = 560;
        this.height = 315;
    }
    ElmYoutubeIframeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ElmYoutubeIframeComponent.prototype, "videoID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ElmYoutubeIframeComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ElmYoutubeIframeComponent.prototype, "height", void 0);
    ElmYoutubeIframeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-elm-youtube-iframe',
            template: __webpack_require__("../../../../../src/app/elements/elm-youtube-iframe/elm-youtube-iframe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/elm-youtube-iframe/elm-youtube-iframe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElmYoutubeIframeComponent);
    return ElmYoutubeIframeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-ads/widget-ads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-ads/widget-ads.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\n<a *ngIf=\"item && position == 'banner'\" [href]=\"item.link\" target=\"_blank\">\n    <img [src]=\"item.url\" width=\"468\" height=\"60\" [alt]=\"item.text\" />\n</a>\n\n\n<!-- SIDEBAR -->\n<div *ngIf=\"item && position == 'sidebar'\" class=\"banner-widget no-border\">\n    <a [href]=\"item.link\" target=\"_blank\">\n        <img [src]=\"item.url\" width=\"300\" height=\"250\" [alt]=\"item.text\" />\n    </a>\n    <a [href]=\"item.link\" class=\"banner-meta\">\n        <i class=\"fa fa-angle-double-up\"></i> {{ item.text }}\n        <i class=\"fa fa-angle-double-up\"></i>\n    </a>\n</div>\n\n<!-- ARTICLE -->\n<div *ngIf=\"item && position == 'article'\" class=\"panel-block banner-block\">\n    <a [href]=\"item.link\" target=\"_blank\">\n        <img [src]=\"item.url\" width=\"468\" height=\"60\" [alt]=\"item.text\">\n    </a>\n    <a [href]=\"item.link\" class=\"banner-meta\">\n        <i class=\"fa fa-angle-double-up\"></i> {{ item.text }}\n        <i class=\"fa fa-angle-double-up\"></i>\n    </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-ads/widget-ads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetAdsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_ads_service__ = __webpack_require__("../../../../../src/app/shared/services/ads.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetAdsComponent = /** @class */ (function () {
    function WidgetAdsComponent(_adsService) {
        this._adsService = _adsService;
        this.item = null;
    }
    WidgetAdsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._adsService.getItemByPosition(this.position).subscribe(function (data) {
            _this.item = data[0];
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('app-widget-ads'),
        __metadata("design:type", String)
    ], WidgetAdsComponent.prototype, "position", void 0);
    WidgetAdsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-ads]',
            template: __webpack_require__("../../../../../src/app/elements/widget-ads/widget-ads.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-ads/widget-ads.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_ads_service__["a" /* AdsService */]])
    ], WidgetAdsComponent);
    return WidgetAdsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-banner/widget-banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-banner/widget-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\">\n    <img src=\"assets/images/header-logo-dark.png\" width=\"467\" height=\"60\" alt=\"assets/images/header-logo-dark.png\" />\n</a>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-banner/widget-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetBannerComponent = /** @class */ (function () {
    function WidgetBannerComponent() {
    }
    WidgetBannerComponent.prototype.ngOnInit = function () {
    };
    WidgetBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-banner]',
            template: __webpack_require__("../../../../../src/app/elements/widget-banner/widget-banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-banner/widget-banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetBannerComponent);
    return WidgetBannerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-contact/widget-contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-contact/widget-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Contact Us</h3>\n<div class=\"htmlcode\">\n    <p>Inani vocent feugait cu eam, his et impetus indoctum, mea te euismod salutandi. Mel consequat moderatius intellegebat an.</p>\n    <ul>\n        <li><span class=\"small-text\">Address</span><h6>122 Baker Street, Marylebone<br/>London, W1U 6TX</h6></li>\n        <li><span class=\"small-text\">Phone number</span><h6>0870 241 3300</h6></li>\n        <li><span class=\"small-text\">E-mail address</span><h6>support@theme.no</h6></li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-contact/widget-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetContactComponent = /** @class */ (function () {
    function WidgetContactComponent() {
    }
    WidgetContactComponent.prototype.ngOnInit = function () {
    };
    WidgetContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-contact]',
            template: __webpack_require__("../../../../../src/app/elements/widget-contact/widget-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-contact/widget-contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetContactComponent);
    return WidgetContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-copyright/widget-copyright.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-copyright/widget-copyright.component.html":
/***/ (function(module, exports) {

module.exports = "&copy; 2014 Copyright <b>VideoMag</b> theme. All Rights reserved. <a href=\"#\" target=\"_blank\"><b>Buy this theme on themeforest</b></a>\n"

/***/ }),

/***/ "../../../../../src/app/elements/widget-copyright/widget-copyright.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetCopyrightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetCopyrightComponent = /** @class */ (function () {
    function WidgetCopyrightComponent() {
    }
    WidgetCopyrightComponent.prototype.ngOnInit = function () {
    };
    WidgetCopyrightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-copyright]',
            template: __webpack_require__("../../../../../src/app/elements/widget-copyright/widget-copyright.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-copyright/widget-copyright.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetCopyrightComponent);
    return WidgetCopyrightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-facebook/widget-facebook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-facebook/widget-facebook.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Facebook</h3>\n<div class=\"fb-page\" data-href=\"https://www.facebook.com/khoapham.vn\" data-tabs=\"timeline\" data-small-header=\"false\" data-height=\"200\" data-adapt-container-width=\"true\"\n    data-hide-cover=\"false\" data-show-facepile=\"true\">\n    <blockquote cite=\"https://www.facebook.com/khoapham.vn\" class=\"fb-xfbml-parse-ignore\">\n        <a href=\"https://www.facebook.com/khoapham.vn\">Khoa Pham</a>\n    </blockquote>\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-facebook/widget-facebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetFacebookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetFacebookComponent = /** @class */ (function () {
    function WidgetFacebookComponent() {
    }
    WidgetFacebookComponent.prototype.ngOnInit = function () {
    };
    WidgetFacebookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-facebook]',
            template: __webpack_require__("../../../../../src/app/elements/widget-facebook/widget-facebook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-facebook/widget-facebook.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetFacebookComponent);
    return WidgetFacebookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-featured-video/widget-featured-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-featured-video/widget-featured-video.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Featured Videos</h3>\n<app-elm-loader  *ngIf=\"!items\"></app-elm-loader>\n<div class=\"widget-videos-small\" *ngIf=\"items\">\n    <!-- ELEMENT VIDEO -->\n    <div class=\"item\" *ngFor=\"let item of items\" [app-elm-video]=\"item\" ></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-featured-video/widget-featured-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetFeaturedVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_video_service__ = __webpack_require__("../../../../../src/app/shared/services/video.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetFeaturedVideoComponent = /** @class */ (function () {
    function WidgetFeaturedVideoComponent(_videoServie) {
        this._videoServie = _videoServie;
        this.items = null;
    }
    WidgetFeaturedVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoServie.getItemsFeatured().subscribe(function (data) {
            _this.items = data;
        });
    };
    WidgetFeaturedVideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-featured-video]',
            template: __webpack_require__("../../../../../src/app/elements/widget-featured-video/widget-featured-video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-featured-video/widget-featured-video.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_video_service__["a" /* VideoService */]])
    ], WidgetFeaturedVideoComponent);
    return WidgetFeaturedVideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-bottom/widget-menu-bottom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-bottom/widget-menu-bottom.component.html":
/***/ (function(module, exports) {

module.exports = "<li><a href=\"index-2.html\">Home</a></li>\n<li><a href=\"browse.html\">Browse</a></li>\n<li><a href=\"browse.html\">Popular</a></li>\n<li><a href=\"sample.html\">Sample Page</a></li>\n<li><a href=\"contact-us.html\">Contact Us</a></li>\n"

/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-bottom/widget-menu-bottom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetMenuBottomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetMenuBottomComponent = /** @class */ (function () {
    function WidgetMenuBottomComponent() {
    }
    WidgetMenuBottomComponent.prototype.ngOnInit = function () {
    };
    WidgetMenuBottomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-menu-bottom]',
            template: __webpack_require__("../../../../../src/app/elements/widget-menu-bottom/widget-menu-bottom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-menu-bottom/widget-menu-bottom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetMenuBottomComponent);
    return WidgetMenuBottomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-main/widget-menu-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-main/widget-menu-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-head\">\n    <form action=\"http://videomag.orange-themes.com/html/browse.html\">\n        <input type=\"text\" class=\"ot-search-field\" value=\"\" />\n        <input type=\"submit\" class=\"ot-search-button\" value=\"Search\" />\n    </form>\n</div>\n<ul class=\"top-menu ot-menu-add\" rel=\"Main Menu\">\n    <li><a [routerLink]=\"['']\" >Homepage<i>Homepage</i></a></li>\n    <li><a [routerLink]=\"['']\" ><span>Top Playlist<i>Top Playlist</i></span></a>\n        <ul>\n            <li><a [routerLink]=\"['']\" >Web Programing</a></li>\n            <li><a [routerLink]=\"['']\" >Mobile Programing</a></li>\n            <li><a [routerLink]=\"['']\" >C++ Programing</a></li>\n        </ul>\n    </li>\n    <li class=\"mega-menu-full\"><a [routerLink]=\"['']\"><span>Music Videos<i>Music Related Stuff</i></span></a>\n        <ul class=\"sub-menu\">\n            <li>\n                <ul class=\"menu-blocks paragraph-row\">\n                    <!-- BEGIN .menu-block -->\n                    <li class=\"menu-block column3\">\n                        <div class=\"menu-content video-list\">\n                            <a [routerLink]=\"['']\" class=\"img-hover-effect loadingvideo\"><img src=\"assets/images/aspect-px.png\" width=\"16\" height=\"9\" class=\"aspect-px\" rel=\"http://b.vimeocdn.com/ts/253/136/253136840_295.jpg\" alt=\"\" /></a>\n                            <h3><a [routerLink]=\"['']\">Buenos Aires - Inception Park</a></h3>\n                            <div class=\"video-meta\">\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-comment\"></i>283</a>\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-eye\"></i>829</a>\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-heart\"></i>95</a>\n                            </div>\n                        </div>\n                    <!-- END .menu-block -->\n                    </li>\n                    <!-- BEGIN .menu-block -->\n                    <li class=\"menu-block column3\">\n                        <div class=\"menu-content video-list\">\n                            <a [routerLink]=\"['']\" class=\"img-hover-effect loadingvideo\"><img src=\"assets/images/aspect-px.png\" width=\"16\" height=\"9\" class=\"aspect-px\" rel=\"http://b.vimeocdn.com/ts/215/752/215752120_295.jpg\" alt=\"\" /></a>\n                            <h3><a [routerLink]=\"['']\">Mac 'n' Cheese</a></h3>\n                            <div class=\"video-meta\">\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-comment\"></i>283</a>\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-eye\"></i>829</a>\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-heart\"></i>95</a>\n                            </div>\n                        </div>\n                    <!-- END .menu-block -->\n                    </li>\n                    <!-- BEGIN .menu-block -->\n                    <li class=\"menu-block column3\">\n                        <div class=\"menu-content video-list\">\n                            <a [routerLink]=\"['']\" class=\"img-hover-effect loadingvideo\"><img src=\"assets/images/aspect-px.png\" width=\"16\" height=\"9\" class=\"aspect-px\" rel=\"http://b.vimeocdn.com/ts/194/505/194505568_295.jpg\" alt=\"\" /></a>\n                            <h3><a [routerLink]=\"['']\">Experience Zero Gravity</a></h3>\n                            <div class=\"video-meta\">\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-comment\"></i>283</a>\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-eye\"></i>829</a>\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-heart\"></i>95</a>\n                            </div>\n                        </div>\n                    <!-- END .menu-block -->\n                    </li>\n                    <!-- BEGIN .menu-block -->\n                    <li class=\"menu-block column3\">\n                        <div class=\"menu-content video-list\">\n                            <a [routerLink]=\"['']\" class=\"img-hover-effect loadingvideo\"><img src=\"assets/images/aspect-px.png\" width=\"16\" height=\"9\" class=\"aspect-px\" rel=\"http://b.vimeocdn.com/ts/797/022/79702288_295.jpg\" alt=\"\" /></a>\n                            <h3><a [routerLink]=\"['']\">Between Bears</a></h3>\n                            <div class=\"video-meta\">\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-comment\"></i>283</a>\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-eye\"></i>829</a>\n                                <a [routerLink]=\"['']\"><i class=\"fa fa-heart\"></i>95</a>\n                            </div>\n                        </div>\n                    <!-- END .menu-block -->\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n    <li><a [routerLink]=\"['']\">Contact Us<i>Meet Our Team</i></a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-main/widget-menu-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetMenuMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetMenuMainComponent = /** @class */ (function () {
    function WidgetMenuMainComponent() {
    }
    WidgetMenuMainComponent.prototype.ngOnInit = function () {
    };
    WidgetMenuMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-menu-main]',
            template: __webpack_require__("../../../../../src/app/elements/widget-menu-main/widget-menu-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-menu-main/widget-menu-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetMenuMainComponent);
    return WidgetMenuMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-top/widget-menu-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-top/widget-menu-top.component.html":
/***/ (function(module, exports) {

module.exports = "<li><a href=\"#\"><span>Homepage</span></a>\n    <ul>\n        <li><a href=\"#\">Homepage (Slider / Dark)</a></li>\n        <li><a href=\"#\">Homepage (Slider / Light)</a></li>\n    </ul>\n</li>\n<li><a href=\"#\">Uer</a></li>\n<li><a href=\"#\">Administrator</a></li>\n<li><a href=\"#\"><b>Logout</b></a></li>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-menu-top/widget-menu-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetMenuTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetMenuTopComponent = /** @class */ (function () {
    function WidgetMenuTopComponent() {
    }
    WidgetMenuTopComponent.prototype.ngOnInit = function () {
    };
    WidgetMenuTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-menu-top]',
            template: __webpack_require__("../../../../../src/app/elements/widget-menu-top/widget-menu-top.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-menu-top/widget-menu-top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetMenuTopComponent);
    return WidgetMenuTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-playlist/widget-playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-playlist/widget-playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Playlist</h3>\n<app-elm-loader  *ngIf=\"!items\"></app-elm-loader>\n<div class=\"widget-videos\" *ngIf=\"items\">\n    <!-- BEGIN .item -->\n    <div  class=\"item\" *ngFor=\"let item of items\">\n        <div class=\"item-header\">\n            <a [routerLink] = \"['/playlist',item.id]\" class=\"video-thumb\">\n                <img [src]=\"item.thumbnails\" width=\"16\" height=\"9\" class=\"aspect-px\" [alt]=\"item.title\" />\n            </a>\n        </div>\n        <div class=\"item-content\">\n            <h3>\n                <a [routerLink] = \"['/playlist',item.id]\" > {{item.title}}</a>\n            </h3>\n        </div>\n        <!-- END .item -->\n        \n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-playlist/widget-playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetPlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetPlaylistComponent = /** @class */ (function () {
    function WidgetPlaylistComponent(_playlistService) {
        this._playlistService = _playlistService;
        this.items = null;
    }
    WidgetPlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._playlistService.getItems().subscribe(function (data) {
            _this.items = data;
        });
    };
    WidgetPlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-playlist]',
            template: __webpack_require__("../../../../../src/app/elements/widget-playlist/widget-playlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-playlist/widget-playlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_playlist_service__["a" /* PlaylistService */]])
    ], WidgetPlaylistComponent);
    return WidgetPlaylistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-popular-video/widget-popular-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-popular-video/widget-popular-video.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Popular Videos</h3>\n<app-elm-loader  *ngIf=\"!items\"></app-elm-loader>\n<div class=\"widget-videos-small\" *ngIf=\"items\">\n    <!-- ELEMENT VIDEO -->\n    <div class=\"item\" *ngFor=\"let item of items\" [app-elm-video]=\"item\"></div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/elements/widget-popular-video/widget-popular-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetPopularVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_video_service__ = __webpack_require__("../../../../../src/app/shared/services/video.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetPopularVideoComponent = /** @class */ (function () {
    function WidgetPopularVideoComponent(_videoService) {
        this._videoService = _videoService;
        this.items = null;
    }
    WidgetPopularVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getItemsPopular().subscribe(function (data) {
            _this.items = data;
        });
    };
    WidgetPopularVideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-popular-video]',
            template: __webpack_require__("../../../../../src/app/elements/widget-popular-video/widget-popular-video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-popular-video/widget-popular-video.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_video_service__["a" /* VideoService */]])
    ], WidgetPopularVideoComponent);
    return WidgetPopularVideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elements/widget-social/widget-social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elements/widget-social/widget-social.component.html":
/***/ (function(module, exports) {

module.exports = "<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n<li><a href=\"#\"><i class=\"fa fa-youtube-play\"></i></a></li>"

/***/ }),

/***/ "../../../../../src/app/elements/widget-social/widget-social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetSocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetSocialComponent = /** @class */ (function () {
    function WidgetSocialComponent() {
    }
    WidgetSocialComponent.prototype.ngOnInit = function () {
    };
    WidgetSocialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-widget-social]',
            template: __webpack_require__("../../../../../src/app/elements/widget-social/widget-social.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elements/widget-social/widget-social.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetSocialComponent);
    return WidgetSocialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/defines/ads.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ads; });
var Ads = /** @class */ (function () {
    function Ads(_url, _link, _text, _position) {
        if (_url === void 0) { _url = ''; }
        if (_link === void 0) { _link = ''; }
        if (_text === void 0) { _text = ''; }
        if (_position === void 0) { _position = ''; }
        this._url = _url;
        this._link = _link;
        this._text = _text;
        this._position = _position;
    }
    Object.defineProperty(Ads.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ads.prototype, "link", {
        get: function () {
            return this._link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ads.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ads.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Ads.fromJson = function (_a) {
        var url = _a.url, link = _a.link, text = _a.text, position = _a.position;
        return new Ads(url, link, text, position);
    };
    Ads.fromJsonList = function (array) {
        return array.map(Ads.fromJson);
    };
    return Ads;
}());



/***/ }),

/***/ "../../../../../src/app/shared/defines/playlist.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
var Playlist = /** @class */ (function () {
    function Playlist(_id, _channelId, _title, _slug, _description, _thumbnails) {
        if (_id === void 0) { _id = ''; }
        if (_channelId === void 0) { _channelId = ''; }
        if (_title === void 0) { _title = ''; }
        if (_slug === void 0) { _slug = ''; }
        if (_description === void 0) { _description = ''; }
        if (_thumbnails === void 0) { _thumbnails = ''; }
        this._id = _id;
        this._channelId = _channelId;
        this._title = _title;
        this._slug = _slug;
        this._description = _description;
        this._thumbnails = _thumbnails;
    }
    Object.defineProperty(Playlist.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Playlist.prototype, "channelId", {
        get: function () {
            return this._channelId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Playlist.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Playlist.prototype, "slug", {
        get: function () {
            return this._slug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Playlist.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Playlist.prototype, "thumbnails", {
        get: function () {
            return this._thumbnails;
        },
        enumerable: true,
        configurable: true
    });
    Playlist.fromJson = function (_a) {
        var id = _a.id, channelId = _a.channelId, title = _a.title, slug = _a.slug, description = _a.description, thumbnails = _a.thumbnails;
        return new Playlist(id, channelId, title, slug, description, thumbnails);
    };
    Playlist.fromJsonList = function (array) {
        return array.map(Playlist.fromJson);
    };
    return Playlist;
}());



/***/ }),

/***/ "../../../../../src/app/shared/defines/video.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
var Video = /** @class */ (function () {
    function Video(_id, _publishedAt, _channelId, _playlistID, _title, _slug, _description, _thumbnails, _views, _comments, _ratting, _featured) {
        if (_id === void 0) { _id = ''; }
        if (_publishedAt === void 0) { _publishedAt = ''; }
        if (_channelId === void 0) { _channelId = ''; }
        if (_playlistID === void 0) { _playlistID = ''; }
        if (_title === void 0) { _title = ''; }
        if (_slug === void 0) { _slug = ''; }
        if (_description === void 0) { _description = ''; }
        if (_thumbnails === void 0) { _thumbnails = ''; }
        if (_views === void 0) { _views = 0; }
        if (_comments === void 0) { _comments = 0; }
        if (_ratting === void 0) { _ratting = 0; }
        if (_featured === void 0) { _featured = false; }
        this._id = _id;
        this._publishedAt = _publishedAt;
        this._channelId = _channelId;
        this._playlistID = _playlistID;
        this._title = _title;
        this._slug = _slug;
        this._description = _description;
        this._thumbnails = _thumbnails;
        this._views = _views;
        this._comments = _comments;
        this._ratting = _ratting;
        this._featured = _featured;
    }
    Object.defineProperty(Video.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "publishedAt", {
        get: function () {
            return this._publishedAt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "channelId", {
        get: function () {
            return this._channelId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "playlistID", {
        get: function () {
            return this._playlistID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "slug", {
        get: function () {
            return this._slug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "thumbnails", {
        get: function () {
            return this._thumbnails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "views", {
        get: function () {
            return this._views;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "comments", {
        get: function () {
            return this._comments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "ratting", {
        get: function () {
            return this._ratting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "featured", {
        get: function () {
            return this._featured;
        },
        enumerable: true,
        configurable: true
    });
    Video.fromJson = function (_a) {
        var id = _a.id, publishedAt = _a.publishedAt, channelId = _a.channelId, playlistID = _a.playlistID, title = _a.title, slug = _a.slug, description = _a.description, thumbnails = _a.thumbnails, views = _a.views, comments = _a.comments, ratting = _a.ratting, featured = _a.featured;
        return new Video(id, publishedAt, channelId, playlistID, title, slug, description, thumbnails, views, comments, ratting, featured);
    };
    Video.fromJsonList = function (array) {
        return array.map(Video.fromJson);
    };
    return Video;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/ads.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defines_ads_class__ = __webpack_require__("../../../../../src/app/shared/defines/ads.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_setting__ = __webpack_require__("../../../../../src/app/app.setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdsService = /** @class */ (function () {
    function AdsService(_db) {
        this._db = _db;
    }
    AdsService.prototype.getItemByPosition = function (position) {
        return this._db.list(__WEBPACK_IMPORTED_MODULE_3__app_setting__["a" /* AppSetting */].TB_ADS, function (ref) { return ref.orderByChild('position').equalTo(position); }).valueChanges().map(__WEBPACK_IMPORTED_MODULE_2__defines_ads_class__["a" /* Ads */].fromJsonList);
    };
    ;
    AdsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AdsService);
    return AdsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagerService = /** @class */ (function () {
    function PagerService() {
        this.pageRange = 6;
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        if (totalPages == 1)
            return null;
        var startPage, endPage;
        var specialNumber = Math.floor(this.pageRange / 2) - 1;
        if (totalPages <= this.pageRange) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= this.pageRange - specialNumber) {
                startPage = 1;
                endPage = this.pageRange;
            }
            else if (currentPage >= totalPages - specialNumber) {
                startPage = totalPages - this.pageRange + 1;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - specialNumber - 1;
                endPage = currentPage + specialNumber;
            }
        }
        // [1] 2 3 4 5 6 7 8 9 10
        // 1 [2] 3 4 5 6 7 8 9 10
        // 1 2 [3] 4 5 6 7 8 9 10
        // 1 2 3 [4] 5 6 7 8 9 10
        // 1 2 3 4 [5] 6 7 8 9 10
        // 1 2 3 4 5 [6] 7 8 9 10
        // 2 3 4 5 6 [7] 8 9 10 11
        // 3 4 5 6 7 [8] 9 10 11 12
        // 4 5 6 7 8 [9] 10 11 12 13
        // 5 6 7 8 9 [10] 11 12 13 14
        // 6 7 8 9 10 [11] 12 13 14 15
        // 6 7 8 9 10 11 [12] 13 14 15
        // 6 7 8 9 10 11 12 [13] 14 15
        // 6 7 8 9 10 11 12 13 [14] 15
        // 6 7 8 9 10 11 12 13 14 [15] 
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = this.range(startPage, endPage);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages // mảng danh sách các trang 1,2,3,4,5,6,7...
        };
    };
    PagerService.prototype.range = function (start, end) {
        var total = [];
        for (var i = start; i <= end; i++) {
            total.push(i);
        }
        return total;
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/playlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_setting__ = __webpack_require__("../../../../../src/app/app.setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defines_playlist_class__ = __webpack_require__("../../../../../src/app/shared/defines/playlist.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistService = /** @class */ (function () {
    function PlaylistService(_db) {
        this._db = _db;
    }
    PlaylistService.prototype.getItems = function () {
        return this._db.list(__WEBPACK_IMPORTED_MODULE_2__app_setting__["a" /* AppSetting */].TB_PLAYLIST, function (ref) { return ref.limitToFirst(4); })
            .valueChanges()
            .map(__WEBPACK_IMPORTED_MODULE_3__defines_playlist_class__["a" /* Playlist */].fromJsonList);
    };
    ;
    PlaylistService.prototype.getItemByID = function (playlistID) {
        return this._db.list(__WEBPACK_IMPORTED_MODULE_2__app_setting__["a" /* AppSetting */].TB_PLAYLIST, function (ref) { return ref.orderByChild('id').equalTo(playlistID); })
            .valueChanges()
            .map(__WEBPACK_IMPORTED_MODULE_3__defines_playlist_class__["a" /* Playlist */].fromJsonList);
    };
    ;
    PlaylistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PlaylistService);
    return PlaylistService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_setting__ = __webpack_require__("../../../../../src/app/app.setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defines_video_class__ = __webpack_require__("../../../../../src/app/shared/defines/video.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoService = /** @class */ (function () {
    function VideoService(_db) {
        this._db = _db;
    }
    VideoService.prototype.getItemsFeatured = function () {
        return this._db.list(__WEBPACK_IMPORTED_MODULE_2__app_setting__["a" /* AppSetting */].TB_VIDEO, function (ref) { return ref.orderByChild('featured').equalTo(true).limitToFirst(4); })
            .valueChanges()
            .map(__WEBPACK_IMPORTED_MODULE_3__defines_video_class__["a" /* Video */].fromJsonList);
    };
    ;
    VideoService.prototype.getItemsPopular = function () {
        return this._db.list(__WEBPACK_IMPORTED_MODULE_2__app_setting__["a" /* AppSetting */].TB_VIDEO, function (ref) { return ref.orderByChild('ratting').limitToLast(4); })
            .valueChanges()
            .map(__WEBPACK_IMPORTED_MODULE_3__defines_video_class__["a" /* Video */].fromJsonList);
    };
    ;
    VideoService.prototype.getItemByPlaylistID = function (playlistID, totalItem) {
        if (totalItem === void 0) { totalItem = 4; }
        return this._db.list(__WEBPACK_IMPORTED_MODULE_2__app_setting__["a" /* AppSetting */].TB_VIDEO, function (ref) { return ref.orderByChild('playlistID').equalTo(playlistID).limitToFirst(totalItem); })
            .valueChanges()
            .map(__WEBPACK_IMPORTED_MODULE_3__defines_video_class__["a" /* Video */].fromJsonList);
    };
    ;
    VideoService.prototype.getItemByVideoID = function (videoID) {
        return this._db.list(__WEBPACK_IMPORTED_MODULE_2__app_setting__["a" /* AppSetting */].TB_VIDEO, function (ref) { return ref.orderByChild('id').equalTo(videoID).limitToFirst(1); })
            .valueChanges()
            .map(__WEBPACK_IMPORTED_MODULE_3__defines_video_class__["a" /* Video */].fromJsonList);
    };
    ;
    VideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ads_service__ = __webpack_require__("../../../../../src/app/shared/services/ads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_video_service__ = __webpack_require__("../../../../../src/app/shared/services/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_safe_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pager_service__ = __webpack_require__("../../../../../src/app/shared/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_ads_service__["a" /* AdsService */],
                __WEBPACK_IMPORTED_MODULE_3__services_playlist_service__["a" /* PlaylistService */],
                __WEBPACK_IMPORTED_MODULE_4__services_video_service__["a" /* VideoService */],
                __WEBPACK_IMPORTED_MODULE_6__services_pager_service__["a" /* PagerService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__pipes_safe_pipe__["a" /* SafePipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__pipes_safe_pipe__["a" /* SafePipe */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/zvideo/components/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zvideo-error',
            template: __webpack_require__("../../../../../src/app/zvideo/templates/error.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/zvideo/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.playlistsInfo = [
            {
                playlistID: "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                layoutType: "grid",
                totalItems: 6
            },
            {
                playlistID: "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                layoutType: "hdgrid",
                totalItems: 3
            },
            {
                playlistID: "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                layoutType: "list",
                totalItems: 2
            },
            {
                playlistID: "PLzrVYRai0riSl1YIy6EjkASA-iuAE5JiB",
                layoutType: "hdlist",
                totalItems: 1
            }
        ];
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zvideo-home',
            template: __webpack_require__("../../../../../src/app/zvideo/templates/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/zvideo/components/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(_activeRouteService, _playlistService, _routeService) {
        this._activeRouteService = _activeRouteService;
        this._playlistService = _playlistService;
        this._routeService = _routeService;
        this.playlistID = null;
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._activeRouteService.params.subscribe(function (params) {
            _this.playlistID = params.id;
        });
    };
    PlaylistComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zvideo-playlist',
            template: __webpack_require__("../../../../../src/app/zvideo/templates/playlist.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/zvideo/components/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_video_service__ = __webpack_require__("../../../../../src/app/shared/services/video.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoComponent = /** @class */ (function () {
    function VideoComponent(_activeRouteService, _videoService, _routeService) {
        this._activeRouteService = _activeRouteService;
        this._videoService = _videoService;
        this._routeService = _routeService;
        this.videoInfo = null;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._activeRouteService.params.subscribe(function (params) {
            _this.videoID = params.id;
            //VideoInfo by videoID
            _this._videoService.getItemByVideoID(_this.videoID).subscribe(function (data) { return _this.videoInfo = data[0]; });
        });
    };
    VideoComponent.prototype.ngAfterViewChecked = function () {
        this._routeService.events.subscribe(function (event) { return window.scrollTo(0, 0); });
    };
    VideoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zvideo-video',
            template: __webpack_require__("../../../../../src/app/zvideo/templates/video.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_video_service__["a" /* VideoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/zvideo/templates/error.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n    ERROR!!!!\n</h1>"

/***/ }),

/***/ "../../../../../src/app/zvideo/templates/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN .with-sidebar-layout -->\n<div class=\"with-sidebar-layout left\">\n\n    <!-- ELEMENT PLAYLIST: LATEST PLAYLIST -->\n    <app-elm-playlist \n        *ngFor=\"let playlistInfo of playlistsInfo\"\n        \n        [playlistID]=\"playlistInfo.playlistID\"\n        [layout]=\"playlistInfo.layoutType\"\n        [totalItems]= \"playlistInfo.totalItems\"\n    ></app-elm-playlist>\n\n\n    <!-- WIDGET ADS -->\n    <div class=\"content-panel\" app-widget-ads=\"article\"></div>\n    <!-- END .with-sidebar-layout -->\n</div>\n\n<!-- BEGIN #sidebar -->\n<aside id=\"sidebar\" class=\"right\">\n\n    <!-- WIDGET PLAYLIST -->\n    <div class=\"widget\" app-widget-playlist></div>\n\n    <!-- WiDGET ADS: SIDEBAR -->\n    <div class=\"widget\" app-widget-ads=\"sidebar\"></div>\n\n    <!-- WIDGET FEATERED VIDEO -->\n    <div class=\"widget\" app-widget-featured-video></div>\n\n    <!-- END #sidebar -->\n</aside>"

/***/ }),

/***/ "../../../../../src/app/zvideo/templates/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- CASE 01 : Pagination --> \n<app-elm-playlist-pagination \n    *ngIf=\"playlistID\"\n    [playlistID]=\"playlistID\"\n    [totalItems]=\"1000\"\n    [layout]    =\"'grid'\"\n></app-elm-playlist-pagination>\n\n<!-- CASE 02 : View All -->\n<!-- <app-elm-playlist\n    *ngIf=\"playlistID\"\n    [playlistID]=\"playlistID\"\n    [totalItems]=\"1000\"\n    [layout]    =\"'grid'\"\n></app-elm-playlist> -->\n"

/***/ }),

/***/ "../../../../../src/app/zvideo/templates/video.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <zvn-elm-loader *ngIf=\"videoInfo == null\"></zvn-elm-loader> -->\n    \n<app-elm-loader  *ngIf=\"!videoInfo\"></app-elm-loader>\n\n<div class=\"without-sidebar-layout\" *ngIf=\"videoInfo\">\n\t<div class=\"video-slider\" >\n\t\t<!-- BEGIN .wrapper -->\n\t\t<div class=\"wrapper\">\n\t\t\t<div class=\"slider-controls\">\n\t\t\t\t<div class=\"video-embed\">\n\t\t\t\t\t<div class=\"otplayer-wrapper\">\n\n                        <app-elm-youtube-iframe \n                            [videoID]=\"videoInfo.id\"\n                            [width]=\"560\"\n                            [height]=\"315\"\n                        ></app-elm-youtube-iframe>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"video-slider-meta\">\n\t\t\t\t<div class=\"video-slider-info right\">\n\t\t\t\t\t<a href=\"#\" class=\"meta-click\">\n\t\t\t\t\t\t<i class=\"fa fa-comments\"></i> \n\t\t\t\t\t\t<strong>{{ videoInfo.comments }}</strong> comments\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#\" class=\"meta-click\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\"></i> <strong>{{ videoInfo.views }}</strong> views\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#\" class=\"ot-like-button\">\n\t\t\t\t\t\t<i class=\"fa fa-heart\"></i> Like This Video\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<h3>{{ videoInfo.title }}</h3>\n\t\t\t</div>\n\t\t<!-- END .wrapper -->\n\t\t</div>\n\t<!-- END .video-slider -->\n\t</div>\n\n\t<div class=\"content-panel\">\n\t\t<div class=\"panel-title\">\n\t\t\t<h2>Video Details</h2>\n\t\t</div>\n\t\t<div class=\"panel-block\">\n\t\t\t<div class=\"panel-content\" *ngIf=\"videoInfo\">\n\t\t\t\t<div class=\"video-stats\">\n\t\t\t\t\t<div class=\"video-stat-blobs\">\n\t\t\t\t\t\t<span><strong>{{ videoInfo.views }}</strong><i>views</i></span>\n\t\t\t\t\t\t<span><strong>{{ videoInfo.comments }}</strong><i>comments</i></span>\n\t\t\t\t\t\t<span><strong>{{ videoInfo.ratting }}</strong><i>likes</i></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hr-spacer\"></div>\n\t\t\t\t</div>\n                <p>{{ videoInfo.description }}</p>\n                \n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n    <!-- ELEMENT PLAYLIST: LATEST PLAYLIST -->\n\t<app-elm-playlist \n        [playlistID]=\"videoInfo.playlistID\"\n        [totalItems]=\"5\"\n        [layout]    =\"'grid'\"\n\t></app-elm-playlist>\t\n\t\n\t<!-- ADS -->\n    <div class=\"content-panel\" app-widget-ads=\"article\"></div>\n\n  \n<!-- END .with-sidebar-layout -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/zvideo/zvideo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZVideoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_component__ = __webpack_require__("../../../../../src/app/zvideo/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_playlist_component__ = __webpack_require__("../../../../../src/app/zvideo/components/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_video_component__ = __webpack_require__("../../../../../src/app/zvideo/components/video.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var defineRoutes = [
    //Home Page /
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_component__["a" /* HomeComponent */] },
    //List videos /videos?page=1
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_4__components_video_component__["a" /* VideoComponent */] },
    //list playlists /playlists?page=1
    { path: 'playlists', component: __WEBPACK_IMPORTED_MODULE_3__components_playlist_component__["a" /* PlaylistComponent */] },
    //list videos in playlist
    {
        path: 'playlist',
        children: [
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_playlist_component__["a" /* PlaylistComponent */]
            },
            {
                path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__components_playlist_component__["a" /* PlaylistComponent */]
            }
        ]
    },
    {
        path: 'video',
        children: [
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_video_component__["a" /* VideoComponent */]
            },
            {
                path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__components_video_component__["a" /* VideoComponent */]
            }
        ]
    },
];
var ZVideoRoutingModule = /** @class */ (function () {
    function ZVideoRoutingModule() {
    }
    ZVideoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(defineRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ZVideoRoutingModule);
    return ZVideoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/zvideo/zvideo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZVideoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zvideo_routing_module__ = __webpack_require__("../../../../../src/app/zvideo/zvideo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_elements_module__ = __webpack_require__("../../../../../src/app/elements/elements.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_component__ = __webpack_require__("../../../../../src/app/zvideo/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_video_component__ = __webpack_require__("../../../../../src/app/zvideo/components/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_playlist_component__ = __webpack_require__("../../../../../src/app/zvideo/components/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_error_component__ = __webpack_require__("../../../../../src/app/zvideo/components/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Modules

//Components




var ZVideoModule = /** @class */ (function () {
    function ZVideoModule() {
    }
    ZVideoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                //Custom Module
                __WEBPACK_IMPORTED_MODULE_3__elements_elements_module__["a" /* ElementsModule */],
                //Routing
                __WEBPACK_IMPORTED_MODULE_2__zvideo_routing_module__["a" /* ZVideoRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_video_component__["a" /* VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_playlist_component__["a" /* PlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_error_component__["a" /* ErrorComponent */]
            ]
        })
    ], ZVideoModule);
    return ZVideoModule;
}());



/***/ }),

/***/ "../../../../../src/environments/db-playlist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dbPlaylist; });
var dbPlaylist = {
    "playlist": [
        {
            "id": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
            "publishedAt": "2017-09-29T08:07:34.000Z",
            "title": "L\u1eadp tr\u00ecnh Angular 4 t\u1ea1i Khoa Ph\u1ea1m",
            "slug": "lap-trinh-angular-4-tai-khoa-pham",
            "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p.",
            "thumbnails": "https:\/\/i.ytimg.com\/vi\/q8RdFZw-gjo\/hqdefault.jpg",
            "items": [
                {
                    "id": "q8RdFZw-gjo",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "L\u1eadp tr\u00ecnh Angular 4 - B\u00e0i 1: Gio\u031b\u0301i thie\u0323\u0302u",
                    "slug": "lap-trinh-angular-4-bai-1:-gio\u031b\u0301i-thie\u0323\u0302u",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/q8RdFZw-gjo\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ZLLh-TsknQA",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "L\u1eadp tr\u00ecnh Angular 4 - B\u00e0i 2: Ca\u0300i \u0111a\u0323\u0306t",
                    "slug": "lap-trinh-angular-4-bai-2:-ca\u0300i-da\u0323\u0306t",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ZLLh-TsknQA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "dgqeUH3Fsts",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 3: Kha\u0301i nie\u0323\u0302m component",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-3:-kha\u0301i-nie\u0323\u0302m-component",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/dgqeUH3Fsts\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "UJiXDYOUrr0",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 4: Ta\u0323o component \u0111o\u031bn gia\u0309n",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-4:-ta\u0323o-component-do\u031bn-gia\u0309n",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/UJiXDYOUrr0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "caP7dY9BY5c",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 5: Component decorators",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-5:-component-decorators",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/caP7dY9BY5c\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "OV2BfdHIZNM",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 6: Nhu\u0301ng bootstrap va\u0300o project",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-6:-nhu\u0301ng-bootstrap-va\u0300o-project",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/OV2BfdHIZNM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "e3cAADJ6xsU",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 7:  String interpolation",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-7:-string-interpolation",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/e3cAADJ6xsU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "rZJiEIBbzFA",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4  - B\u00e0i 8: Ta\u0323o component su\u031b\u0309 du\u0323ng Angular CLI va\u0300 life cycle hooks",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-8:-ta\u0323o-component-su\u031b\u0309-du\u0323ng-angular-cli-va\u0300-life-cycle-hooks",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/rZJiEIBbzFA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ejgofI2boGg",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 9: Property binding",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-9:-property-binding",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ejgofI2boGg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Wino_5XKhV4",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 10: Event binding",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-10:-event-binding",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Wino_5XKhV4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "K69HNZD40NU",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 11: Xu\u031b\u0309 ly\u0301 text input",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-11:-xu\u031b\u0309-ly\u0301-text-input",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/K69HNZD40NU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "N-IynSTscxE",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 12: Two way binding",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-12:-two-way-binding",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/N-IynSTscxE\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "tffiYscKEtA",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 13: Template reference variable",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-13:-template-reference-variable",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/tffiYscKEtA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ZuvdS5No5Nk",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 14: Style binding va\u0300 class binding",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-14:-style-binding-va\u0300-class-binding",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ZuvdS5No5Nk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "SDj23AqHIyY",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 15: Co\u031b ba\u0309n ve\u0302\u0300 directive, ngStyle",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-15:-co\u031b-ba\u0309n-ve\u0302\u0300-directive-ngstyle",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/SDj23AqHIyY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "oeoTQdUGy4k",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 16: ngIf",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-16:-ngif",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/oeoTQdUGy4k\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "R7ri-7k9l0M",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 17:  ngFor \u0111o\u031bn gia\u0309n",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-17:-ngfor-do\u031bn-gia\u0309n",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/R7ri-7k9l0M\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "p3TYvZm0yvk",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 18: ngFor vo\u031b\u0301i ma\u0309ng \u0111o\u0302\u0301i tu\u031bo\u031b\u0323ng",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-18:-ngfor-vo\u031b\u0301i-ma\u0309ng-do\u0302\u0301i-tu\u031bo\u031b\u0323ng",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/p3TYvZm0yvk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "pYf7Ut4Lzns",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 19: The\u0302m pha\u0302\u0300n tu\u031b\u0309 va\u0300o ma\u0309ng ke\u0302\u0301t ho\u031b\u0323p ngFor",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-19:-the\u0302m-pha\u0302\u0300n-tu\u031b\u0309-va\u0300o-ma\u0309ng-ke\u0302\u0301t-ho\u031b\u0323p-ngfor",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/pYf7Ut4Lzns\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "uE9em6Uky8s",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 20: A\u0302\u0309n hie\u0323\u0302n form",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-20:-a\u0302\u0309n-hie\u0323\u0302n-form",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/uE9em6Uky8s\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "w2assjAO4Yg",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 21: Xo\u0301a pha\u0302\u0300n tu\u031b\u0309 trong ma\u0309ng hie\u0302\u0309n thi\u0323",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-21:-xo\u0301a-pha\u0302\u0300n-tu\u031b\u0309-trong-ma\u0309ng-hie\u0302\u0309n-thi\u0323",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/w2assjAO4Yg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "QMhsL_jPGuY",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 22: Lo\u0323c ma\u0309ng hie\u0302\u0309n thi\u0323",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-22:-lo\u0323c-ma\u0309ng-hie\u0302\u0309n-thi\u0323",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/QMhsL_jPGuY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "lrgJTpMO-mM",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 23: Thay \u0111o\u0302\u0309i tra\u0323ng tha\u0301i pha\u0302\u0300n tu\u031b\u0309 trong ma\u0309ng hie\u0302\u0309n thi\u0323",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-23:-thay-do\u0302\u0309i-tra\u0323ng-tha\u0301i-pha\u0302\u0300n-tu\u031b\u0309-trong-ma\u0309ng-hie\u0302\u0309n-thi\u0323",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/lrgJTpMO-mM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "4PMffDQQdBU",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 24: Input",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-24:-input",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/4PMffDQQdBU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "KcbqbP2abEk",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4  - B\u00e0i 25: ngFor ke\u0302\u0301t ho\u031b\u0323p Input",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-25:-ngfor-ke\u0302\u0301t-ho\u031b\u0323p-input",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/KcbqbP2abEk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "PFstqfK2D0c",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 26: Output 1",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-26:-output-1",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/PFstqfK2D0c\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Ag8cprd98eg",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 27: Output 2",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-27:-output-2",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Ag8cprd98eg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "t-5MUapi5Zk",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 28: Ouput co\u0301 tham so\u0302\u0301",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-28:-ouput-co\u0301-tham-so\u0302\u0301",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/t-5MUapi5Zk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "9RsqRvoYgnY",
                    "publishedAt": "2017-10-11T04:59:27.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 29: Ba\u0300i ta\u0323\u0302p Output",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-29:-ba\u0300i-ta\u0323\u0302p-output",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p.",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/9RsqRvoYgnY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "-aKjI1W2aro",
                    "publishedAt": "2017-09-29T08:07:34.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 30: Viewchild 1",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-30:-viewchild-1",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/-aKjI1W2aro\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "t1SKsTC-raU",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 31: ViewChild 2",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-31:-viewchild-2",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/t1SKsTC-raU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "EsLX8C6MRwA",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 32: ngContent",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-32:-ngcontent",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/EsLX8C6MRwA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "4zHjxGXj9eA",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 33:  Build in pipes",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-33:-build-in-pipes",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/4zHjxGXj9eA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "YLsYDlZIOi0",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 34: Custom pipe",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-34:-custom-pipe",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/YLsYDlZIOi0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ScZ-1IxFeuw",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 35: Kha\u0301i nie\u0323\u0302m service va\u0300 http service",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-35:-kha\u0301i-nie\u0323\u0302m-service-va\u0300-http-service",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ScZ-1IxFeuw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "DwgiDXSfqJk",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 36: Ta\u0301ch service",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-36:-ta\u0301ch-service",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/DwgiDXSfqJk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "HjDPaVDib1o",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 37: Su\u031b\u0309 du\u0323ng ngOnInit",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-37:-su\u031b\u0309-du\u0323ng-ngoninit",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/HjDPaVDib1o\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "cv1OphPpOaA",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 38: Gio\u031b\u0301i thie\u0323\u0302u ba\u0300i ta\u0323\u0302p tho\u031b\u0300i tie\u0302\u0301t",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-38:-gio\u031b\u0301i-thie\u0323\u0302u-ba\u0300i-ta\u0323\u0302p-tho\u031b\u0300i-tie\u0302\u0301t",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/cv1OphPpOaA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "HNG8_IcQH18",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 39: API open weather map",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-39:-api-open-weather-map",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/HNG8_IcQH18\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "VhuLdQ_LoAg",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 40: Weather service",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-40:-weather-service",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/VhuLdQ_LoAg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "pUmPxjW_cPs",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 41 La\u0302\u0301y nhie\u0323\u0302t \u0111o\u0323\u0302 va\u0300 hie\u0302\u0309n thi\u0323",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-41-la\u0302\u0301y-nhie\u0323\u0302t-do\u0323\u0302-va\u0300-hie\u0302\u0309n-thi\u0323",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/pUmPxjW_cPs\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "96up_VArm3M",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 42: Ti\u0301nh na\u0306ng loading va\u0300 xu\u031b\u0309 ly\u0301 lo\u0302\u0303i",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-42:-ti\u0301nh-na\u0306ng-loading-va\u0300-xu\u031b\u0309-ly\u0301-lo\u0302\u0303i",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/96up_VArm3M\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "8hnuBLREDss",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 43: Gio\u031b\u0301i thie\u0323\u0302u ve\u0302\u0300 form",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-43:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-form",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/8hnuBLREDss\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "2CfPXDIbYp0",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 44: ngForm",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-44:-ngform",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/2CfPXDIbYp0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "A-YoYaRT5oY",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 45: Validate template form",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-45:-validate-template-form",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/A-YoYaRT5oY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Vs07aUjJSW8",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 46: ngSubmit",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-46:-ngsubmit",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Vs07aUjJSW8\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "nPFooe3-p0c",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 47: Validate form 1",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-47:-validate-form-1",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/nPFooe3-p0c\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Ss9Bw_FoTeY",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 48: Xu\u031b\u0309 ly\u0301 style ca\u0301c input kho\u0302ng ho\u031b\u0323p le\u0323\u0302",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-48:-xu\u031b\u0309-ly\u0301-style-ca\u0301c-input-kho\u0302ng-ho\u031b\u0323p-le\u0323\u0302",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Ss9Bw_FoTeY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Sg2bUUocvHw",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 49: Xu\u031b\u0309 ly\u0301 checkbox va\u0300 ngModelGroup",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-49:-xu\u031b\u0309-ly\u0301-checkbox-va\u0300-ngmodelgroup",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Sg2bUUocvHw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "gOSZ8tJgpBk",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 50: Ta\u0323o server nodejs",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-50:-ta\u0323o-server-nodejs",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/gOSZ8tJgpBk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "g2so2gm6ldw",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 51: Gu\u031b\u0309i request tu\u031b\u0300 form angular",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-51:-gu\u031b\u0309i-request-tu\u031b\u0300-form-angular",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/g2so2gm6ldw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Tf67PNDlu-4",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 52:  Vie\u0302\u0301t service gu\u031b\u0309i request post",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-52:-vie\u0302\u0301t-service-gu\u031b\u0309i-request-post",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Tf67PNDlu-4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ZraONVxT4-c",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 53: Reactive form",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-53:-reactive-form",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ZraONVxT4-c\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "C08YZeJYhP4",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 54: Nested form group",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-54:-nested-form-group",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/C08YZeJYhP4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "q73tpw5pGHo",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 55: Form builder",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-55:-form-builder",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/q73tpw5pGHo\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "-qZFY7sQMcc",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 56: Reactive form validator",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-56:-reactive-form-validator",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/-qZFY7sQMcc\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "5fSFObDCo74",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 57: Custom reactive form validator",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-57:-custom-reactive-form-validator",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/5fSFObDCo74\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "BQBI0n_Ol7Q",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 58: Routing \u0111o\u031bn gia\u0309n",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-58:-routing-do\u031bn-gia\u0309n",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/BQBI0n_Ol7Q\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "-WRWzP44bUQ",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 59: Xu\u031b\u0309 ly\u0301 route ngoa\u0323i le\u0323\u0302",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-59:-xu\u031b\u0309-ly\u0301-route-ngoa\u0323i-le\u0323\u0302",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/-WRWzP44bUQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "FAHJcOnIAVI",
                    "publishedAt": "2017-09-29T08:08:35.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 60: App Routing Module",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-60:-app-routing-module",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/FAHJcOnIAVI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "nlveYGEsH1k",
                    "publishedAt": "2017-09-29T08:09:10.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 61: Routing vo\u031b\u0301i params",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-61:-routing-vo\u031b\u0301i-params",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/nlveYGEsH1k\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "OLMm7NZmkXM",
                    "publishedAt": "2017-09-29T08:09:10.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 62: Component modules",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-62:-component-modules",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/OLMm7NZmkXM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "o_eYZ9H2vtQ",
                    "publishedAt": "2017-09-29T08:09:10.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTA1m7Dasg8eraBr6R9nFgC",
                    "title": "La\u0323\u0302p tri\u0300nh Angular 4 - B\u00e0i 63:  Deploy github page",
                    "slug": "la\u0323\u0302p-tri\u0300nh-angular-4-bai-63:-deploy-github-page",
                    "description": "Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nAngular l\u00e0 m\u1ed9t javascript platform, gi\u00fap c\u00e1c b\u1ea1n x\u00e2y d\u1ef1ng c\u00e1c \u1ee9ng d\u1ee5ng web nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\nAngular \u0111\u00e3 trang b\u1ecb s\u1eb5n r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 \u0111\u1ec3 l\u00e0m qu\u00e1 tr\u00ecnh x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng web c\u1ee7a c\u00e1c b\u1ea1n d\u1ec5 d\u00e0ng h\u01a1n, vd nh\u01b0: t\u1ef1 \u0111\u1ed9ng reload khi code thay \u0111\u1ed5i, minify code b\u1eb1ng l\u1ec7nh, s\u1eed d\u1ee5ng typescript, sass, less thay th\u1ebf cho javascript v\u00e0 css \u0111\u01a1n thu\u1ea7n.\n\nT\u00ednh n\u0103ng v\u00f4 c\u00f9ng quan tr\u1ecdng n\u1eefa l\u00e0m cho Angular kh\u00e1c bi\u1ec7t so v\u1edbi Jquery l\u00e0, angular qu\u1ea3n l\u00fd view theo state, t\u1ee9c l\u00e0 thay \u0111\u1ed5i giao di\u1ec7n theo tr\u1ea1ng th\u00e1i, gi\u00fap ch\u00fang ta tr\u00e1nh \u0111\u01b0\u1ee3c r\u1ea5t nhi\u1ec1u l\u1ed7i logic trong qu\u00e1 tr\u00ecnh vi\u1ebft code, \u0111\u1eb7c bi\u1ec7t trong c\u00e1c project l\u1edbn v\u00e0 ph\u1ee9c t\u1ea1p. Kho\u00e1 h\u1ecdc Angular 4 t\u1ea1i Khoa Ph\u1ea1m: https:\/\/khoapham.vn\/khoa-hoc-lap-trinh-angular.html\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908\nT\u01b0 v\u1ea5n, ghi danh: 0942764080\nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/o_eYZ9H2vtQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                }
            ]
        },
        {
            "id": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
            "publishedAt": "2017-10-25T09:34:37.000Z",
            "title": "L\u1eadp tr\u00ecnh Front-End : S\u1eed D\u1ee5ng Sass",
            "slug": "lap-trinh-front-end-:-su-dung-sass",
            "description": "SASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n,ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
            "thumbnails": "https:\/\/i.ytimg.com\/vi\/zjW8LpCHasE\/hqdefault.jpg",
            "items": [
                {
                    "id": "zjW8LpCHasE",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 1: Gi\u1edbi Thi\u1ec7u",
                    "slug": "lap-trinh-front-end-bai-1:-gioi-thieu",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/zjW8LpCHasE\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "cX1_c52UvUg",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 2 C\u00e0i \u0110\u1eb7t",
                    "slug": "lap-trinh-front-end-bai-2-cai-dat",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com KH\u00d3A H\u1eccC L\u1eacP TR\u00ccNH PHP N\u00c2NG CAO V\u00c0 ZEND FRAMEWORK 3 T\u1ea0I KHOA PH\u1ea0M: \nhttps:\/\/khoapham.vn\/lap-trinh-php-nang-cao.html\nZend Framework l\u00e0 m\u1ed9t \u1ee9ng d\u1ee5ng web h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng m\u00e3 ngu\u1ed3n m\u1edf cho PHP 5. Zend Framework th\u01b0\u1eddng \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 'component library', b\u1edfi v\u00ec n\u00f3 c\u00f3 nhi\u1ec1u component m\u00e0 b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng chung ho\u1eb7c \u0111\u1ed9c l\u1eadp v\u1edbi nhau. Zend Framework c\u0169ng cung c\u1ea5p m\u1ed9t tr\u00ecnh tri\u1ec3n khai Model-View-Controller (MVC) n\u00e2ng cao c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 thi\u1ebft l\u1eadp m\u1ed9t c\u1ea5u tr\u00fac c\u01a1 b\u1ea3n cho c\u00e1c \u1ee9ng d\u1ee5ng Zend Framework. M\u1ed9t s\u1ed1 component \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ph\u1ed5 bi\u1ebfn nh\u1ea5t c\u1ee7a Zend Framework, bao g\u1ed3m Zend_Controller, Zend_Layout, Zend_Config, Zend_Db, Zend_Db_Table v\u00e0 Zend_Registry v\u00e0 Views Helper.\nZend Framework l\u00e0 m\u1ed9t trong nh\u1eefng th\u01b0 vi\u1ec7n PHP \u0111\u01b0\u1ee3c \u0111\u00e1nh gi\u00e1 l\u00e0 \u0111\u1ea7y \u0111\u1ee7 nh\u1ea5t hi\u1ec7n nay v\u00e0 \u0111ang \u0111\u01b0\u1ee3c c\u00e1c c\u00f4ng ty l\u1edbn trong l\u0129nh v\u1ef1c CNTT tr\u00ean th\u1ebf gi\u1edbi \u01b0u chu\u1ed9ng v\u00ec ZF r\u1ea5t linh ho\u1ea1t, b\u1ea3o m\u1eadt t\u1ed1t, c\u1ed9ng \u0111\u1ed3ng r\u1ed9ng l\u1edbn, ph\u00e1t tri\u1ec3n r\u1ea5t nhanh.",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/cX1_c52UvUg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "G2R5ZdyJIRM",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 3  Nested Rule",
                    "slug": "lap-trinh-front-end-bai-3-nested-rule",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/G2R5ZdyJIRM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "2UbDO1nK_jk",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 4 Variables",
                    "slug": "lap-trinh-front-end-bai-4-variables",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/2UbDO1nK_jk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "NIRZADtUgmU",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 5 Mixin",
                    "slug": "lap-trinh-front-end-bai-5-mixin",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/NIRZADtUgmU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Je2Fm4ZuYTQ",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 6 Extend",
                    "slug": "lap-trinh-front-end-bai-6-extend",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Je2Fm4ZuYTQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "uwx0emvkQF0",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 7 Placeholder Selectors",
                    "slug": "lap-trinh-front-end-bai-7-placeholder-selectors",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/uwx0emvkQF0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "BxmZ6Wluod4",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 8 Operations",
                    "slug": "lap-trinh-front-end-bai-8-operations",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/BxmZ6Wluod4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "i9ZB0BgjyEY",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 9 Interpolation",
                    "slug": "lap-trinh-front-end-bai-9-interpolation",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/i9ZB0BgjyEY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "y4BPAN1fJS4",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 10 If",
                    "slug": "lap-trinh-front-end-bai-10-if",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/y4BPAN1fJS4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "4ee02PNBg-A",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 11 For",
                    "slug": "lap-trinh-front-end-bai-11-for",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/4ee02PNBg-A\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "SRhtgOrB42o",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 12  Each",
                    "slug": "lap-trinh-front-end-bai-12-each",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/SRhtgOrB42o\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "K2J2r9SVEqs",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 13 While",
                    "slug": "lap-trinh-front-end-bai-13-while",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com KH\u00d3A H\u1eccC L\u1eacP TR\u00ccNH PHP N\u00c2NG CAO V\u00c0 ZEND FRAMEWORK 3 T\u1ea0I KHOA PH\u1ea0M: \nhttps:\/\/khoapham.vn\/lap-trinh-php-nang-cao.html\nZend Framework l\u00e0 m\u1ed9t \u1ee9ng d\u1ee5ng web h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng m\u00e3 ngu\u1ed3n m\u1edf cho PHP 5. Zend Framework th\u01b0\u1eddng \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 'component library', b\u1edfi v\u00ec n\u00f3 c\u00f3 nhi\u1ec1u component m\u00e0 b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng chung ho\u1eb7c \u0111\u1ed9c l\u1eadp v\u1edbi nhau. Zend Framework c\u0169ng cung c\u1ea5p m\u1ed9t tr\u00ecnh tri\u1ec3n khai Model-View-Controller (MVC) n\u00e2ng cao c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 thi\u1ebft l\u1eadp m\u1ed9t c\u1ea5u tr\u00fac c\u01a1 b\u1ea3n cho c\u00e1c \u1ee9ng d\u1ee5ng Zend Framework. M\u1ed9t s\u1ed1 component \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ph\u1ed5 bi\u1ebfn nh\u1ea5t c\u1ee7a Zend Framework, bao g\u1ed3m Zend_Controller, Zend_Layout, Zend_Config, Zend_Db, Zend_Db_Table v\u00e0 Zend_Registry v\u00e0 Views Helper.\nZend Framework l\u00e0 m\u1ed9t trong nh\u1eefng th\u01b0 vi\u1ec7n PHP \u0111\u01b0\u1ee3c \u0111\u00e1nh gi\u00e1 l\u00e0 \u0111\u1ea7y \u0111\u1ee7 nh\u1ea5t hi\u1ec7n nay v\u00e0 \u0111ang \u0111\u01b0\u1ee3c c\u00e1c c\u00f4ng ty l\u1edbn trong l\u0129nh v\u1ef1c CNTT tr\u00ean th\u1ebf gi\u1edbi \u01b0u chu\u1ed9ng v\u00ec ZF r\u1ea5t linh ho\u1ea1t, b\u1ea3o m\u1eadt t\u1ed1t, c\u1ed9ng \u0111\u1ed3ng r\u1ed9ng l\u1edbn, ph\u00e1t tri\u1ec3n r\u1ea5t nhanh.",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/K2J2r9SVEqs\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "gZLRt_IBQAw",
                    "publishedAt": "2017-10-25T09:35:52.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSWPPRE6Ib99zd5fV4YYH0Q",
                    "title": "L\u1eadp Tr\u00ecnh Front End   B\u00e0i 14 Demomenu",
                    "slug": "lap-trinh-front-end-bai-14-demomenu",
                    "description": "Kho\u00e1 h\u1ecdc Front-End t\u1ea1i Khoa Ph\u1ea1m: \nhttps:\/\/khoapham.vn\/khoa-hoc-lap-trinh-front-end.html\n\nSASS l\u00e0 m\u1ed9t CSS Preprocessor cung c\u1ea5p th\u00eam c\u00e1c quy t\u1eafc nh\u01b0 nested rule, variable, mixin, ... V\u1edbi SASS b\u1ea1n c\u00f3 th\u1ec3 vi\u1ebft CSS theo th\u1ee9 t\u1ef1 r\u00f5 r\u00e0ng, qu\u1ea3n l\u00fd c\u00e1c bi\u1ebfn \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a s\u1eb5n, c\u00f3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng n\u00e9n t\u1eadp tin CSS l\u1ea1i \u0111\u1ec3 b\u1ea1n ti\u1ebft ki\u1ec7m dung l\u01b0\u1ee3ng.\n\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908908 \nT\u01b0 v\u1ea5n, ghi danh: 0942764080 \nEmail: khoaphamtraining@gmail.com KH\u00d3A H\u1eccC L\u1eacP TR\u00ccNH PHP N\u00c2NG CAO V\u00c0 ZEND FRAMEWORK 3 T\u1ea0I KHOA PH\u1ea0M: \nhttps:\/\/khoapham.vn\/lap-trinh-php-nang-cao.html\nZend Framework l\u00e0 m\u1ed9t \u1ee9ng d\u1ee5ng web h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng m\u00e3 ngu\u1ed3n m\u1edf cho PHP 5. Zend Framework th\u01b0\u1eddng \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 'component library', b\u1edfi v\u00ec n\u00f3 c\u00f3 nhi\u1ec1u component m\u00e0 b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng chung ho\u1eb7c \u0111\u1ed9c l\u1eadp v\u1edbi nhau. Zend Framework c\u0169ng cung c\u1ea5p m\u1ed9t tr\u00ecnh tri\u1ec3n khai Model-View-Controller (MVC) n\u00e2ng cao c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 thi\u1ebft l\u1eadp m\u1ed9t c\u1ea5u tr\u00fac c\u01a1 b\u1ea3n cho c\u00e1c \u1ee9ng d\u1ee5ng Zend Framework. M\u1ed9t s\u1ed1 component \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ph\u1ed5 bi\u1ebfn nh\u1ea5t c\u1ee7a Zend Framework, bao g\u1ed3m Zend_Controller, Zend_Layout, Zend_Config, Zend_Db, Zend_Db_Table v\u00e0 Zend_Registry v\u00e0 Views Helper.\nZend Framework l\u00e0 m\u1ed9t trong nh\u1eefng th\u01b0 vi\u1ec7n PHP \u0111\u01b0\u1ee3c \u0111\u00e1nh gi\u00e1 l\u00e0 \u0111\u1ea7y \u0111\u1ee7 nh\u1ea5t hi\u1ec7n nay v\u00e0 \u0111ang \u0111\u01b0\u1ee3c c\u00e1c c\u00f4ng ty l\u1edbn trong l\u0129nh v\u1ef1c CNTT tr\u00ean th\u1ebf gi\u1edbi \u01b0u chu\u1ed9ng v\u00ec ZF r\u1ea5t linh ho\u1ea1t, b\u1ea3o m\u1eadt t\u1ed1t, c\u1ed9ng \u0111\u1ed3ng r\u1ed9ng l\u1edbn, ph\u00e1t tri\u1ec3n r\u1ea5t nhanh.",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/gZLRt_IBQAw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                }
            ]
        },
        {
            "id": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
            "publishedAt": "2017-06-22T12:30:19.000Z",
            "title": "React Native Animation",
            "slug": "react-native-animation",
            "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
            "thumbnails": "https:\/\/i.ytimg.com\/vi\/lLBUcuWLAII\/hqdefault.jpg",
            "items": [
                {
                    "id": "lLBUcuWLAII",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 0:  Gi\u1edbi thi\u1ec7u",
                    "slug": "react-native-animation-bai-0:-gioi-thieu",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/lLBUcuWLAII\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ZMgrwMY0v80",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 1:  Animation \u0111\u01a1n gi\u1ea3n 1",
                    "slug": "react-native-animation-bai-1:-animation-don-gian-1",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ZMgrwMY0v80\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "VJoPx0OyhG8",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 2:  Animation \u0111\u01a1n gi\u1ea3n 2",
                    "slug": "react-native-animation-bai-2:-animation-don-gian-2",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/VJoPx0OyhG8\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "jU-jjKSPvcA",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 3:  Config animation",
                    "slug": "react-native-animation-bai-3:-config-animation",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/jU-jjKSPvcA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "jRNJvjv1ep8",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 4:  Ph\u1ed1i h\u1ee3p c\u00e1c animation",
                    "slug": "react-native-animation-bai-4:-phoi-hop-cac-animation",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/jRNJvjv1ep8\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "YkNA8i6on0E",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 5:  S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1",
                    "slug": "react-native-animation-bai-5:-su-dung-ham-interpolate-phan-1",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/YkNA8i6on0E\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "vMyJel-skbw",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 6:  S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2",
                    "slug": "react-native-animation-bai-6:-su-dung-ham-interpolate-phan-2",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/vMyJel-skbw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "l9DH1EKmBMI",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 7:  T\u00e1i s\u1eed d\u1ee5ng animation view",
                    "slug": "react-native-animation-bai-7:-tai-su-dung-animation-view",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/l9DH1EKmBMI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "fmjj9cGxk3U",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 8:  V\u00ed d\u1ee5 1  M\u00e0n h\u00ecnh Hello App",
                    "slug": "react-native-animation-bai-8:-vi-du-1-man-hinh-hello-app",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/fmjj9cGxk3U\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "3syHdVImt1g",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 9:  Gesture Responder System",
                    "slug": "react-native-animation-bai-9:-gesture-responder-system",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/3syHdVImt1g\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "bOgNte86EgI",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 10:  View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture",
                    "slug": "react-native-animation-bai-10:-view-di-chuyen-dua-vao-gesture",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/bOgNte86EgI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "4lP8NCRQq4I",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 11:  Animation k\u1ebft h\u1ee3p v\u1edbi gesture",
                    "slug": "react-native-animation-bai-11:-animation-ket-hop-voi-gesture",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/4lP8NCRQq4I\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "4W3faNn3FQY",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 12:  V\u00ed d\u1ee5 2  Ph\u1ea7n 1 -  Hi\u1ec7u \u1ee9ng nghi\u00eang",
                    "slug": "react-native-animation-bai-12:-vi-du-2-phan-1-hieu-ung-nghieng",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/4W3faNn3FQY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Z6I1hAt6Qt4",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 13:  V\u00ed d\u1ee5 2  Ph\u1ea7n 2 - Hi\u1ec7u \u1ee9ng m\u1edd",
                    "slug": "react-native-animation-bai-13:-vi-du-2-phan-2-hieu-ung-mo",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Z6I1hAt6Qt4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "c0H1OZbjvZo",
                    "publishedAt": "2017-06-22T12:30:54.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riTko0_4YWBzmfvId9r7neuW",
                    "title": "React Native Animation - B\u00e0i 14:  V\u00ed d\u1ee5 2  Ph\u1ea7n 3 -  Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh",
                    "slug": "react-native-animation-bai-14:-vi-du-2-phan-3-hieu-ung-chuyen-anh",
                    "description": "React Native Animation\n\nC\u00e1c hi\u1ec7u \u1ee9ng animation (chuy\u1ec3n ho\u1ea1t) \u0111ang r\u1ea5t ph\u1ed5 bi\u1ebfn v\u00e0 l\u00e0 m\u1ed9t ph\u1ea7n kh\u00f4ng th\u1ec3 thi\u1ebfu trong c\u00e1c \u1ee9ng d\u1ee5ng hi\u1ec7n nay. Animation l\u00e0m cho \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta s\u1ed1ng \u0111\u1ed9ng v\u00e0 t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u c\u00e1ch l\u00e0m animation v\u1edbi React Native.\n\n0. Gi\u1edbi thi\u1ec7u\n1. Animation \u0111\u01a1n gi\u1ea3n 1\n2. Animation \u0111\u01a1n gi\u1ea3n 2\n3. C\u1ea5u h\u00ecnh animation\n4. Ph\u1ed1i h\u1ee3p c\u00e1c animation\n5. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 1\n6. S\u1eed d\u1ee5ng h\u00e0m interpolate ph\u1ea7n 2\n7. T\u00e1i s\u1eed d\u1ee5ng c\u00e1c animation view\n8. V\u00ed d\u1ee5 1. M\u00e0n h\u00ecnh Hello App\n9. Gesture Responder System\n10. View di chuy\u1ec3n d\u1ef1a v\u00e0o gesture\n11. Animation k\u1ebft h\u1ee3p v\u1edbi gesture\n12. V\u00ed d\u1ee5 2. Ph\u1ea7n 1. Hi\u1ec7u \u1ee9ng nghi\u00eang\n13. V\u00ed d\u1ee5 2. Ph\u1ea7n 2. Hi\u1ec7u \u1ee9ng m\u1edd\n14. V\u00ed d\u1ee5 2. Ph\u1ea7n 3. Hi\u1ec7u \u1ee9ng chuy\u1ec3n \u1ea3nh\n\nGithub cu\u1ed1i lo\u1ea1t b\u00e0i: https:\/\/github.com\/vanpho93\/RNAnimation\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham:  http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/c0H1OZbjvZo\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                }
            ]
        },
        {
            "id": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
            "publishedAt": "2017-05-03T07:52:28.000Z",
            "title": "L\u1eadp tr\u00ecnh ReactJS v\u1edbi React Router & Foundation",
            "slug": "lap-trinh-reactjs-voi-react-router-&-foundation",
            "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
            "thumbnails": "https:\/\/i.ytimg.com\/vi\/1LFqfxghAa0\/hqdefault.jpg",
            "items": [
                {
                    "id": "1LFqfxghAa0",
                    "publishedAt": "2017-05-29T07:43:07.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "ReactJS  React Router  & Foundation - B\u00e0i 0: Gi\u1edbi thi\u1ec7u",
                    "slug": "reactjs-react-router-&-foundation-bai-0:-gioi-thieu",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/1LFqfxghAa0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "b9IlXxhFo9Q",
                    "publishedAt": "2017-05-29T07:42:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "ReactJS  React Router  & Foundation - B\u00e0i 1:  C\u00e0i \u0111\u1eb7t m\u00f4i tr\u01b0\u1eddng",
                    "slug": "reactjs-react-router-&-foundation-bai-1:-cai-dat-moi-truong",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/b9IlXxhFo9Q\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "BgMfJ7ypj4w",
                    "publishedAt": "2017-05-03T07:53:04.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 2:  T\u1ea1o component",
                    "slug": "react-router-&-foundation-bai-2:-tao-component",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/BgMfJ7ypj4w\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "D6HNvImia-g",
                    "publishedAt": "2017-05-03T07:53:04.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 3:  C\u00e0i \u0111\u1eb7t react router",
                    "slug": "react-router-&-foundation-bai-3:-cai-dat-react-router",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/D6HNvImia-g\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Wy1OfTN_myo",
                    "publishedAt": "2017-05-03T07:53:04.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 4:  Link v\u00e0 IndexLink",
                    "slug": "react-router-&-foundation-bai-4:-link-va-indexlink",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Wy1OfTN_myo\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Cp7IGAweWmc",
                    "publishedAt": "2017-05-03T07:53:04.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 5:  React router onEnter",
                    "slug": "react-router-&-foundation-bai-5:-react-router-onenter",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Cp7IGAweWmc\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ug6t5vwUg1M",
                    "publishedAt": "2017-05-03T07:53:04.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 6:  Giao di\u1ec7n \u0111\u0103ng nh\u1eadp",
                    "slug": "react-router-&-foundation-bai-6:-giao-dien-dang-nhap",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ug6t5vwUg1M\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "gHQjVS0Szfk",
                    "publishedAt": "2017-05-03T07:53:04.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 7:  Gi\u1ea3 l\u1eadp \u0111\u0103ng nh\u1eadp -  \u0111\u0103ng xu\u1ea5t",
                    "slug": "react-router-&-foundation-bai-7:-gia-lap-dang-nhap-dang-xuat",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/gHQjVS0Szfk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "yL8Z3AtzEck",
                    "publishedAt": "2017-05-03T07:53:04.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 8:  Module axios",
                    "slug": "react-router-&-foundation-bai-8:-module-axios",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/yL8Z3AtzEck\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "LfL3DqCv0Nw",
                    "publishedAt": "2017-05-03T07:53:04.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 9:  \u0110\u0103ng nh\u1eadp ph\u00eda server v\u1edbi axios",
                    "slug": "react-router-&-foundation-bai-9:-dang-nhap-phia-server-voi-axios",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/LfL3DqCv0Nw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ySL6PBCg-WI",
                    "publishedAt": "2017-05-17T02:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 10:  L\u01b0u phi\u00ean \u0111\u0103ng nh\u1eadp v\u1edbi express session",
                    "slug": "react-router-&-foundation-bai-10:-luu-phien-dang-nhap-voi-express-session",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ySL6PBCg-WI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "7qvDngYrQCg",
                    "publishedAt": "2017-05-17T02:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 11:  Ch\u1ee9c n\u0103ng logout",
                    "slug": "react-router-&-foundation-bai-11:-chuc-nang-logout",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/7qvDngYrQCg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "GzK-XYRyhao",
                    "publishedAt": "2017-05-17T02:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 12:  Component Notification",
                    "slug": "react-router-&-foundation-bai-12:-component-notification",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/GzK-XYRyhao\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "QQfhIUQ-teM",
                    "publishedAt": "2017-05-17T02:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 13:  C\u00e0i \u0111\u1eb7t foundation css",
                    "slug": "react-router-&-foundation-bai-13:-cai-dat-foundation-css",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/QQfhIUQ-teM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "p4H9IDRl22Q",
                    "publishedAt": "2017-05-17T02:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 14:  C\u00e0i \u0111\u1eb7t foundation javascript",
                    "slug": "react-router-&-foundation-bai-14:-cai-dat-foundation-javascript",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/p4H9IDRl22Q\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "OnleGbzHfoQ",
                    "publishedAt": "2017-05-17T02:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 15:  \u0110\u00f3ng g\u00f3i css v\u1edbi webpack",
                    "slug": "react-router-&-foundation-bai-15:-dong-goi-css-voi-webpack",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/OnleGbzHfoQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "awt8YM63v-g",
                    "publishedAt": "2017-05-17T02:11:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riS6mBVG71EEBNm4VtT03y6x",
                    "title": "React Router & Foundation - B\u00e0i 16: L\u00e0m vi\u1ec7c v\u1edbi foundation scss",
                    "slug": "react-router-&-foundation-bai-16:-lam-viec-voi-foundation-scss",
                    "description": "React Router  & Foundation\nKh\u00f3a h\u1ecdc ReactJS t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-js.html\n\nReact Router l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 t\u1ea1o ra c\u00e1c route, gi\u00fap cho ng\u01b0\u1eddi d\u00f9ng chuy\u1ec3n h\u01b0\u1edbng website sang c\u00e1c page kh\u00e1c nhau m\u00e0 kh\u00f4ng c\u1ea7n ph\u1ea3i reload l\u1ea1i to\u00e0n b\u1ed9 trang web, \u0111i\u1ec1u n\u00e0y gi\u00fap cho tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\u00f9ng t\u1ed1t h\u01a1n khi gi\u1ea3m b\u1edbt \u0111\u01b0\u1ee3c th\u1eddi gian t\u1ea3i website.\n\nFoundation l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh d\u1ea1ng website nhanh ch\u00f3ng. \u0110i\u1ec3m m\u1ea1nh c\u1ee7a foundation l\u00e0 s\u1eed d\u1ee5ng scss \u2013 gi\u00fap cho vi\u1ec7c t\u00f9y bi\u1ebfn nhanh ch\u00f3ng v\u00e0 hi\u1ec7u qu\u1ea3 h\u01a1n.\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/awt8YM63v-g\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                }
            ]
        },
        {
            "id": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
            "publishedAt": "2016-12-03T04:51:52.000Z",
            "title": "L\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8",
            "slug": "lap-trinh-ios-co-ban-voi-swift-3-va-xcode-8",
            "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
            "thumbnails": "https:\/\/i.ytimg.com\/vi\/2yOl7cgNZnw\/hqdefault.jpg",
            "items": [
                {
                    "id": "2yOl7cgNZnw",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 1: Gi\u1edbi Thi\u1ec7u V\u1ec1 C\u00f4ng C\u1ee5 Xcode Trong L\u1eadp Tr\u00ecnh iOS",
                    "slug": "ios-swift-3-xcode-8-bai-1:-gioi-thieu-ve-cong-cu-xcode-trong-lap-trinh-ios",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/2yOl7cgNZnw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "YEXQryjlyeA",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 2: C\u00e1ch Khai B\u00e1o Bi\u1ebfn V\u00e0 H\u1eb1ng Trong L\u1eadp Tr\u00ecnh iOS",
                    "slug": "ios-swift-3-xcode-8-bai-2:-cach-khai-bao-bien-va-hang-trong-lap-trinh-ios",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/YEXQryjlyeA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "3VJg4JcTcDQ",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 3: C\u00e2u L\u1ec7nh \u0110i\u1ec1u Ki\u1ec7n Trong L\u1eadp Tr\u00ecnh iOS",
                    "slug": "ios-swift-3-xcode-8-bai-3:-cau-lenh-dieu-kien-trong-lap-trinh-ios",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/3VJg4JcTcDQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "1S6Mpnqc2VE",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 4: V\u00f2ng L\u1eadp Trong L\u1eadp Tr\u00ecnh iOS",
                    "slug": "ios-swift-3-xcode-8-bai-4:-vong-lap-trong-lap-trinh-ios",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/1S6Mpnqc2VE\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "20lbN1bjZ3Y",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 5: M\u1ea3ng Trong L\u1eadp Tr\u00ecnh iOS",
                    "slug": "ios-swift-3-xcode-8-bai-5:-mang-trong-lap-trinh-ios",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/20lbN1bjZ3Y\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "8cd9za620qU",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 6: Quy Tr\u00ecnh Thi\u1ebft K\u1ebf M\u1ed9t \u1ee8ng D\u1ee5ng Trong iOS",
                    "slug": "ios-swift-3-xcode-8-bai-6:-quy-trinh-thiet-ke-mot-ung-dung-trong-ios",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/8cd9za620qU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "L7vKMlVosBU",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 7: Ph\u00e2n Bi\u1ec7t D\u1ea5u ! v\u00e0 ? Trong L\u1eadp Tr\u00ecnh iOS",
                    "slug": "ios-swift-3-xcode-8-bai-7:-phan-biet-dau-!-va-?-trong-lap-trinh-ios",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/L7vKMlVosBU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "qnyDC9uOQuI",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 8: Ph\u00e2n Bi\u1ec7t \u00c1nh X\u1ea1 Outlet V\u00e0 Action Trong L\u1eadp Tr\u00ecnh iOS",
                    "slug": "ios-swift-3-xcode-8-bai-8:-phan-biet-anh-xa-outlet-va-action-trong-lap-trinh-ios",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/qnyDC9uOQuI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "VTioypcq4M4",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 9: Gi\u1edbi Thi\u1ec7u V\u1ec1 Label C\u01a1 B\u1ea3n",
                    "slug": "ios-swift-3-xcode-8-bai-9:-gioi-thieu-ve-label-co-ban",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/VTioypcq4M4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "4Y6otPGE8_U",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 10: H\u01b0\u1edbng d\u1eabn Custom Label Ph\u1ea7n 1",
                    "slug": "ios-swift-3-xcode-8-bai-10:-huong-dan-custom-label-phan-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/4Y6otPGE8_U\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "FcsttqSrtb4",
                    "publishedAt": "2016-12-03T04:52:21.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 11: H\u01b0\u1edbng d\u1eabn Custom Label Ph\u1ea7n 2",
                    "slug": "ios-swift-3-xcode-8-bai-11:-huong-dan-custom-label-phan-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 14 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/FcsttqSrtb4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "1EqRNvdciP8",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 12:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Textfield C\u01a1 B\u1ea3n Ph\u1ea7n 1",
                    "slug": "ios-swift-3-xcode-8-bai-12:-gioi-thieu-ve-textfield-co-ban-phan-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/1EqRNvdciP8\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "1RoC6W3KBmI",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 13:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Textfield C\u01a1 B\u1ea3n Ph\u1ea7n 2",
                    "slug": "ios-swift-3-xcode-8-bai-13:-gioi-thieu-ve-textfield-co-ban-phan-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/1RoC6W3KBmI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "g3RXMlPVRkA",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 14:  H\u01b0\u1edbng d\u1eabn Custom Textfield",
                    "slug": "ios-swift-3-xcode-8-bai-14:-huong-dan-custom-textfield",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/g3RXMlPVRkA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Xzxa_Yup1e8",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 15:  Demo K\u1ebft h\u1ee3p Textfield V\u00e0 Label",
                    "slug": "ios-swift-3-xcode-8-bai-15:-demo-ket-hop-textfield-va-label",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Xzxa_Yup1e8\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "6NN1TAKkQ2Y",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 16:  Gi\u1edbi Thi\u1ec7u V\u1ec1 ImageView Ph\u1ea7n 1",
                    "slug": "ios-swift-3-xcode-8-bai-16:-gioi-thieu-ve-imageview-phan-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/6NN1TAKkQ2Y\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "QrqpJN1NfWE",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 17:  Gi\u1edbi Thi\u1ec7u V\u1ec1 ImageView Ph\u1ea7n 2",
                    "slug": "ios-swift-3-xcode-8-bai-17:-gioi-thieu-ve-imageview-phan-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/QrqpJN1NfWE\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "yPWZDF-IN8g",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 18:  H\u01b0\u1edbng d\u1eabn Custom ImageView",
                    "slug": "ios-swift-3-xcode-8-bai-18:-huong-dan-custom-imageview",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/yPWZDF-IN8g\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "zWnYjGEnd0A",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 19:  H\u01b0\u1edbng d\u1eabn Load H\u00ecnh T\u1eeb Internet Ph\u1ea7n 1",
                    "slug": "ios-swift-3-xcode-8-bai-19:-huong-dan-load-hinh-tu-internet-phan-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/zWnYjGEnd0A\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "aaYtEVBpklk",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 20:  H\u01b0\u1edbng d\u1eabn Load H\u00ecnh T\u1eeb Internet Ph\u1ea7n 2",
                    "slug": "ios-swift-3-xcode-8-bai-20:-huong-dan-load-hinh-tu-internet-phan-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/aaYtEVBpklk\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "1m9SOhVbxCM",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 21:  Demo L\u00e0m \u1ee8ng D\u1ee5ng Th\u01b0 Vi\u1ec7n \u1ea2nh \u0110\u01a1n Gi\u1ea3n",
                    "slug": "ios-swift-3-xcode-8-bai-21:-demo-lam-ung-dung-thu-vien-anh-don-gian",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/1m9SOhVbxCM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "cqpRGwnLzGI",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 22:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Alert Controller",
                    "slug": "ios-swift-3-xcode-8-bai-22:-gioi-thieu-ve-alert-controller",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/cqpRGwnLzGI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "QpVrNARjJm4",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 23:  H\u01b0\u1edbng D\u1eabn Th\u00eam Button V\u00e0o Alert Controller",
                    "slug": "ios-swift-3-xcode-8-bai-23:-huong-dan-them-button-vao-alert-controller",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/QpVrNARjJm4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "oXD4GULAdsI",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 24:  H\u01b0\u1edbng D\u1eabn Th\u00eam Textfield V\u00e0o Alert Controller",
                    "slug": "ios-swift-3-xcode-8-bai-24:-huong-dan-them-textfield-vao-alert-controller",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/oXD4GULAdsI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "MBEVr6SkYwQ",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 25:  H\u01b0\u1edbng D\u1eabn L\u1ea5y Gi\u00e1 Tr\u1ecb C\u1ee7a  Textfiled Trong Alert Controller",
                    "slug": "ios-swift-3-xcode-8-bai-25:-huong-dan-lay-gia-tri-cua-textfiled-trong-alert-controller",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/MBEVr6SkYwQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "hbItBFlgr1I",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 26:  Demo T\u1ea1o Form \u0110\u0103ng Nh\u1eadp B\u1eb1ng Alert Controller",
                    "slug": "ios-swift-3-xcode-8-bai-26:-demo-tao-form-dang-nhap-bang-alert-controller",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/hbItBFlgr1I\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "SFRY38B3LBM",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 27:  Action Sheet trong Alert Controllert",
                    "slug": "ios-swift-3-xcode-8-bai-27:-action-sheet-trong-alert-controllert",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/SFRY38B3LBM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "t3DWlvXaMKM",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 28:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Button",
                    "slug": "ios-swift-3-xcode-8-bai-28:-gioi-thieu-ve-button",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/t3DWlvXaMKM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Iuj9kMNgn-E",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 29:  H\u01b0\u1edbng d\u1eabn Custom Button",
                    "slug": "ios-swift-3-xcode-8-bai-29:-huong-dan-custom-button",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Iuj9kMNgn-E\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "x5pGEaUZAbs",
                    "publishedAt": "2017-05-04T08:41:01.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 30:  Demo k\u1ebft h\u1ee3p Button, Label v\u00e0 Textfield",
                    "slug": "ios-swift-3-xcode-8-bai-30:-demo-ket-hop-button-label-va-textfield",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/x5pGEaUZAbs\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "bR4XzILtkqg",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 31:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Slider Ph\u1ea7n 1",
                    "slug": "ios-swift-3-xcode-8-bai-31:-gioi-thieu-ve-slider-phan-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/bR4XzILtkqg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "2wAyScS9BYc",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 32:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Slider Ph\u1ea7n 2",
                    "slug": "ios-swift-3-xcode-8-bai-32:-gioi-thieu-ve-slider-phan-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/2wAyScS9BYc\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "w6fKPRXj400",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 33:  H\u01b0\u1edbng d\u1eabn Custom Slider",
                    "slug": "ios-swift-3-xcode-8-bai-33:-huong-dan-custom-slider",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/w6fKPRXj400\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "0Gx5evwLkus",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 34:  Demo T\u1ea1o \u1ee8ng D\u1ee5ng Ph\u1ed1i M\u00e0u",
                    "slug": "ios-swift-3-xcode-8-bai-34:-demo-tao-ung-dung-phoi-mau",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/0Gx5evwLkus\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "LgxM-tvpMAw",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 35:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Switch",
                    "slug": "ios-swift-3-xcode-8-bai-35:-gioi-thieu-ve-switch",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/LgxM-tvpMAw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "I0Pg33ct08A",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 36:  Demo H\u01b0\u1edbng d\u1eabn l\u00e0m c\u00f4ng t\u0103c b\u00f3ng \u0111\u00e8n",
                    "slug": "ios-swift-3-xcode-8-bai-36:-demo-huong-dan-lam-cong-tac-bong-den",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/I0Pg33ct08A\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "F53wFEWv2hU",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 37:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Timer Ph\u1ea7n 1",
                    "slug": "ios-swift-3-xcode-8-bai-37:-gioi-thieu-ve-timer-phan-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/F53wFEWv2hU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "YpMg-pV67xA",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 38:  Gi\u1edbi Thi\u1ec7u V\u1ec1 Timer Ph\u1ea7n 2",
                    "slug": "ios-swift-3-xcode-8-bai-38:-gioi-thieu-ve-timer-phan-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/YpMg-pV67xA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "t5rDcnPj-dg",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 39:  Demo H\u01b0\u1edbng d\u1eabn l\u00e0m c\u00f4ng t\u1eafc qu\u1ea1t",
                    "slug": "ios-swift-3-xcode-8-bai-39:-demo-huong-dan-lam-cong-tac-quat",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/t5rDcnPj-dg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "qePSpY13vBw",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 40:  Gi\u1edbi Thi\u1ec7u V\u1ec1 WebView",
                    "slug": "ios-swift-3-xcode-8-bai-40:-gioi-thieu-ve-webview",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/qePSpY13vBw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "WS7XkEmM6GU",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 41:  Demo S\u1eed D\u1ee5ng WebView Hi\u1ec7n Clip Youtube",
                    "slug": "ios-swift-3-xcode-8-bai-41:-demo-su-dung-webview-hien-clip-youtube",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/WS7XkEmM6GU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "3MJrqDdNKV0",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 42:  Demo S\u1eed D\u1ee5ng WebView L\u00e0m Tr\u00ecnh Duy\u1ec7t Web Ph\u1ea7n 1",
                    "slug": "ios-swift-3-xcode-8-bai-42:-demo-su-dung-webview-lam-trinh-duyet-web-phan-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/3MJrqDdNKV0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "9l0byI6yy3s",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 43:  Demo S\u1eed D\u1ee5ng WebView L\u00e0m Tr\u00ecnh Duy\u1ec7t Web Ph\u1ea7n 2",
                    "slug": "ios-swift-3-xcode-8-bai-43:-demo-su-dung-webview-lam-trinh-duyet-web-phan-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/9l0byI6yy3s\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "wkzaT1WM6tc",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 44:  Demo S\u1eed D\u1ee5ng WebView L\u00e0m Tr\u00ecnh Duy\u1ec7t Web Ph\u1ea7n 3",
                    "slug": "ios-swift-3-xcode-8-bai-44:-demo-su-dung-webview-lam-trinh-duyet-web-phan-3",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/wkzaT1WM6tc\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "GHJ1B4a3JsM",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 45:  H\u01b0\u1edbng d\u1eabn Chuy\u1ec3n m\u00e0n h\u00ecnh b\u1eb1ng k\u00e9o th\u1ea3",
                    "slug": "ios-swift-3-xcode-8-bai-45:-huong-dan-chuyen-man-hinh-bang-keo-tha",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/GHJ1B4a3JsM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "-bd-WKkTLIA",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 46:  H\u01b0\u1edbng d\u1eabn t\u1ea1o Class qu\u1ea3n tr\u1ecb cho m\u00e0n h\u00ecnh",
                    "slug": "ios-swift-3-xcode-8-bai-46:-huong-dan-tao-class-quan-tri-cho-man-hinh",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/-bd-WKkTLIA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "PRDNCdMiU40",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 47:  H\u01b0\u1edbng d\u1eabn Chuy\u1ec3n m\u00e0n h\u00ecnh b\u1eb1ng code",
                    "slug": "ios-swift-3-xcode-8-bai-47:-huong-dan-chuyen-man-hinh-bang-code",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/PRDNCdMiU40\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "di9t9HrgZPc",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 48:  H\u01b0\u1edbng d\u1eabn truy\u1ec1n tham s\u1ed1 khi chuy\u1ec3n m\u00e0n h\u00ecnh",
                    "slug": "ios-swift-3-xcode-8-bai-48:-huong-dan-truyen-tham-so-khi-chuyen-man-hinh",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/di9t9HrgZPc\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "r-xfan0AOY4",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 49:  H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng UserDefaults",
                    "slug": "ios-swift-3-xcode-8-bai-49:-huong-dan-su-dung-userdefaults",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/r-xfan0AOY4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Q2_0EcVJGT8",
                    "publishedAt": "2017-05-04T09:06:42.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 50:  Gio\u031b\u0301i thie\u0323\u0302u ve\u0302\u0300 UITapGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-50:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-uitapgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Q2_0EcVJGT8\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "xAh-K4bK6uw",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 51:  Thao ta\u0301c vo\u031b\u0301i UITapGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-51:-thao-ta\u0301c-vo\u031b\u0301i-uitapgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/xAh-K4bK6uw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "qw3eoue1KV4",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 52:  Demo su\u031b\u0309 du\u0323ng UITapGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-52:-demo-su\u031b\u0309-du\u0323ng-uitapgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/qw3eoue1KV4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "KTNtyasQIvU",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 53:  Gio\u031b\u0301i thie\u0323\u0302u ve\u0302\u0300 UIPinchGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-53:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-uipinchgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/KTNtyasQIvU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "vn2IL39kMMQ",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 54:  Thao ta\u0301c vo\u031b\u0301i UIPinchGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-54:-thao-ta\u0301c-vo\u031b\u0301i-uipinchgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/vn2IL39kMMQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "d_8_0UT2OiY",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 55:  Demo su\u031b\u0309 du\u0323ng UIPinchGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-55:-demo-su\u031b\u0309-du\u0323ng-uipinchgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/d_8_0UT2OiY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "cb5RvarKDrE",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 56:  Gio\u031b\u0301i thie\u0323\u0302u ve\u0302\u0300 UIRotationGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-56:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-uirotationgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/cb5RvarKDrE\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "wE1RypafIs4",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 57:  Thao ta\u0301c vo\u031b\u0301i UIRotationGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-57:-thao-ta\u0301c-vo\u031b\u0301i-uirotationgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/wE1RypafIs4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "XsFa0hmsQyU",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 58:  Demo su\u031b\u0309 du\u0323ng UIRotationGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-58:-demo-su\u031b\u0309-du\u0323ng-uirotationgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/XsFa0hmsQyU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Jpji2a09h1Q",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 59:  Gio\u031b\u0301i thie\u0323\u0302u ve\u0302\u0300 UISwipeGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-59:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-uiswipegesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Jpji2a09h1Q\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "N3KBPKohsgU",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 60:  Demo su\u031b\u0309 du\u0323ng UISwipeGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-60:-demo-su\u031b\u0309-du\u0323ng-uiswipegesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/N3KBPKohsgU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "b3uEgg2yk04",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 61:  Gio\u031b\u0301i thie\u0323\u0302u ve\u0302\u0300 UIPanGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-61:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-uipangesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/b3uEgg2yk04\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "dobTnzNpIs8",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 62:  Thao ta\u0301c vo\u031b\u0301i UIPanGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-62:-thao-ta\u0301c-vo\u031b\u0301i-uipangesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/dobTnzNpIs8\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "2EojVXR5_6w",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 63:  Demo su\u031b\u0309 du\u0323ng UIPanGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-63:-demo-su\u031b\u0309-du\u0323ng-uipangesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/2EojVXR5_6w\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "eUBQZB3dYi8",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 64:  Gio\u031b\u0301i thie\u0323\u0302u va\u0300 thao ta\u0301c vo\u031b\u0301i UIScreenEdgePanGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-64:-gio\u031b\u0301i-thie\u0323\u0302u-va\u0300-thao-ta\u0301c-vo\u031b\u0301i-uiscreenedgepangesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/eUBQZB3dYi8\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "yZfvb7e9dpw",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 65:  Demo su\u031b\u0309 du\u0323ng UIScreenEdgePanGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-65:-demo-su\u031b\u0309-du\u0323ng-uiscreenedgepangesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/yZfvb7e9dpw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "KgmT3jtqbzI",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 66:  Gio\u031b\u0301i thie\u0323\u0302u ve\u0302\u0300 UILongPressGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-66:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-uilongpressgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/KgmT3jtqbzI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "JmqF-q5t9O0",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 67:  Thao ta\u0301c vo\u031b\u0301i UILongPressGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-67:-thao-ta\u0301c-vo\u031b\u0301i-uilongpressgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/JmqF-q5t9O0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "ig3tY04ay00",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 68:  Demo su\u031b\u0309 du\u0323ng UILongPressGestureRecognizer",
                    "slug": "ios-swift-3-xcode-8-bai-68:-demo-su\u031b\u0309-du\u0323ng-uilongpressgesturerecognizer",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/ig3tY04ay00\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "DcLEnkjFVEU",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 69:  Gio\u031b\u0301i thie\u0323\u0302u ve\u0302\u0300 MotionShake",
                    "slug": "ios-swift-3-xcode-8-bai-69:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-motionshake",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/DcLEnkjFVEU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "IqHeFOUr8ec",
                    "publishedAt": "2017-05-04T09:25:02.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 70:  Demo su\u031b\u0309 du\u0323ng MotionShake",
                    "slug": "ios-swift-3-xcode-8-bai-70:-demo-su\u031b\u0309-du\u0323ng-motionshake",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/IqHeFOUr8ec\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "wmmTivmXSVI",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 71:  Gio\u031b\u0301i thie\u0323\u0302u Ve\u0302\u0300 UIPickerView",
                    "slug": "ios-swift-3-xcode-8-bai-71:-gio\u031b\u0301i-thie\u0323\u0302u-ve\u0302\u0300-uipickerview",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/wmmTivmXSVI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "BlWFPXcNsf4",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 72:  Ca\u0302\u0301u hi\u0300nh UIPickerView ba\u0306\u0300ng ma\u0309ng 1 chie\u0302\u0300u",
                    "slug": "ios-swift-3-xcode-8-bai-72:-ca\u0302\u0301u-hi\u0300nh-uipickerview-ba\u0306\u0300ng-ma\u0309ng-1-chie\u0302\u0300u",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/BlWFPXcNsf4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "OQn5WX_yziU",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 73:  Ca\u0302\u0301u hi\u0300nh UIPickerView ba\u0306\u0300ng ma\u0309ng nhie\u0302\u0300u chie\u0302\u0300u",
                    "slug": "ios-swift-3-xcode-8-bai-73:-ca\u0302\u0301u-hi\u0300nh-uipickerview-ba\u0306\u0300ng-ma\u0309ng-nhie\u0302\u0300u-chie\u0302\u0300u",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/OQn5WX_yziU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "h3qSLEvln0o",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 74:  Ca\u0302\u0301u hi\u0300nh UIPickerView hie\u0302\u0309n thi\u0323 hi\u0300nh a\u0309nh",
                    "slug": "ios-swift-3-xcode-8-bai-74:-ca\u0302\u0301u-hi\u0300nh-uipickerview-hie\u0302\u0309n-thi\u0323-hi\u0300nh-a\u0309nh",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/h3qSLEvln0o\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "YZRdGV-7504",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 75:  Su\u031b\u0323 kie\u0323\u0302n cho\u0323n do\u0300ng trong UIPickerView",
                    "slug": "ios-swift-3-xcode-8-bai-75:-su\u031b\u0323-kie\u0323\u0302n-cho\u0323n-do\u0300ng-trong-uipickerview",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/YZRdGV-7504\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Kvz5J3DlM6w",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 76:  Demo UIPickerView Pha\u0302\u0300n 1",
                    "slug": "ios-swift-3-xcode-8-bai-76:-demo-uipickerview-pha\u0302\u0300n-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Kvz5J3DlM6w\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "7HJz2mCJDXE",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 77:  Demo UIPickerView Pha\u0302\u0300n 2",
                    "slug": "ios-swift-3-xcode-8-bai-77:-demo-uipickerview-pha\u0302\u0300n-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/7HJz2mCJDXE\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "dQ_DNyXbT94",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 78:  TableView  ph\u1ea7n 1",
                    "slug": "ios-swift-3-xcode-8-bai-78:-tableview-phan-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/dQ_DNyXbT94\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "dpW6tF5lU5U",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 79:  Table View Pha\u0302\u0300n 2",
                    "slug": "ios-swift-3-xcode-8-bai-79:-table-view-pha\u0302\u0300n-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/dpW6tF5lU5U\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "sK6WwJRYL5M",
                    "publishedAt": "2017-05-04T10:08:56.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 80:  Table View Pha\u0302\u0300n 3",
                    "slug": "ios-swift-3-xcode-8-bai-80:-table-view-pha\u0302\u0300n-3",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/sK6WwJRYL5M\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "NfvJ6A2dpvs",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 81:  Table View Pha\u0302\u0300n 4",
                    "slug": "ios-swift-3-xcode-8-bai-81:-table-view-pha\u0302\u0300n-4",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/NfvJ6A2dpvs\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "aMVkTxB6PGs",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 82:  Table View Pha\u0302\u0300n 5",
                    "slug": "ios-swift-3-xcode-8-bai-82:-table-view-pha\u0302\u0300n-5",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/aMVkTxB6PGs\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "tbYjXgtTODU",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 83:  Collection View Pha\u0302\u0300n 1",
                    "slug": "ios-swift-3-xcode-8-bai-83:-collection-view-pha\u0302\u0300n-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/tbYjXgtTODU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "hiGLDzRGUHs",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 84:  CollectionView Pha\u0302\u0300n 2",
                    "slug": "ios-swift-3-xcode-8-bai-84:-collectionview-pha\u0302\u0300n-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/hiGLDzRGUHs\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Ht6iyBghcuE",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 85:  CollectionView Pha\u0302\u0300n 3",
                    "slug": "ios-swift-3-xcode-8-bai-85:-collectionview-pha\u0302\u0300n-3",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Ht6iyBghcuE\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "3_8hypHb8I0",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 86:  Scroll View Pha\u0302\u0300n 1",
                    "slug": "ios-swift-3-xcode-8-bai-86:-scroll-view-pha\u0302\u0300n-1",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/3_8hypHb8I0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "hoEGy6bOdzw",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 87:  Scroll View Pha\u0302\u0300n 2",
                    "slug": "ios-swift-3-xcode-8-bai-87:-scroll-view-pha\u0302\u0300n-2",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/hoEGy6bOdzw\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "b6Sf1GxuFPY",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 88:  Scroll Viewn Pha\u0302\u0300n 3",
                    "slug": "ios-swift-3-xcode-8-bai-88:-scroll-viewn-pha\u0302\u0300n-3",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/b6Sf1GxuFPY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "0AWkF07fOaA",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 89:  AVFoundation Pha\u0301t nha\u0323c local",
                    "slug": "ios-swift-3-xcode-8-bai-89:-avfoundation-pha\u0301t-nha\u0323c-local",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/0AWkF07fOaA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "QSawMV4xG3g",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 90:  AVFoundation La\u0302\u0301y tho\u031b\u0300i gian ba\u0300i ha\u0301t va\u0300 tha\u0302y \u0111o\u0302\u0309i a\u0302m lu\u031bo\u031b\u0323ng",
                    "slug": "ios-swift-3-xcode-8-bai-90:-avfoundation-la\u0302\u0301y-tho\u031b\u0300i-gian-ba\u0300i-ha\u0301t-va\u0300-tha\u0302y-do\u0302\u0309i-a\u0302m-lu\u031bo\u031b\u0323ng",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/QSawMV4xG3g\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "L-LnwY9GH_M",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 91:  Hu\u031bo\u031b\u0301ng da\u0302\u0303n upload ba\u0300i ha\u0301t le\u0302n webservices",
                    "slug": "ios-swift-3-xcode-8-bai-91:-hu\u031bo\u031b\u0301ng-da\u0302\u0303n-upload-ba\u0300i-ha\u0301t-le\u0302n-webservices",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/L-LnwY9GH_M\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "xEQssEVWbRI",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 92:  AVFoundation Pha\u0301t nha\u0323c online",
                    "slug": "ios-swift-3-xcode-8-bai-92:-avfoundation-pha\u0301t-nha\u0323c-online",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/xEQssEVWbRI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "WmkYhUz9-zc",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 93:  AVKit Hu\u031bo\u031b\u0301ng da\u0302\u0303n pha\u0301t video local",
                    "slug": "ios-swift-3-xcode-8-bai-93:-avkit-hu\u031bo\u031b\u0301ng-da\u0302\u0303n-pha\u0301t-video-local",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/WmkYhUz9-zc\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "RXVHh-LNm1A",
                    "publishedAt": "2017-05-04T10:23:11.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSlAocQR3BvHCtEhcKa204E",
                    "title": "iOS Swift 3 Xcode 8 - B\u00e0i 94:  AVKit Hu\u031bo\u031b\u0301ng da\u0302\u0303n pha\u0301t video online",
                    "slug": "ios-swift-3-xcode-8-bai-94:-avkit-hu\u031bo\u031b\u0301ng-da\u0302\u0303n-pha\u0301t-video-online",
                    "description": "H\u01b0\u1edbng d\u1eabn l\u1eadp tr\u00ecnh iOS c\u01a1 b\u1ea3n v\u1edbi Swift 3 v\u00e0 Xcode 8 (tr\u00edch t\u1eeb kh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/\n\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/RXVHh-LNm1A\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                }
            ]
        },
        {
            "id": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
            "publishedAt": "2017-05-03T09:24:48.000Z",
            "title": "React Native v\u1edbi Firebase",
            "slug": "react-native-voi-firebase",
            "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
            "thumbnails": "https:\/\/i.ytimg.com\/vi\/7ayGqwxJLwg\/hqdefault.jpg",
            "items": [
                {
                    "id": "7ayGqwxJLwg",
                    "publishedAt": "2017-05-03T09:25:00.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 1: \u0110\u0103ng k\u00fd database",
                    "slug": "react-native-firebase-bai-1:-dang-ky-database",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/7ayGqwxJLwg\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "FPzvlT_Nm-k",
                    "publishedAt": "2017-05-03T09:25:15.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 2: K\u1ebft n\u1ed1i firebase",
                    "slug": "react-native-firebase-bai-2:-ket-noi-firebase",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/FPzvlT_Nm-k\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "S8cd31JW2wQ",
                    "publishedAt": "2017-05-03T09:25:15.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 3: \u0110\u1ea9y d\u1eef li\u1ec7u l\u00ean firebase",
                    "slug": "react-native-firebase-bai-3:-day-du-lieu-len-firebase",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/S8cd31JW2wQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "czPN-Uv1mkY",
                    "publishedAt": "2017-05-03T09:25:15.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 4: L\u01b0u d\u1eef li\u1ec7u",
                    "slug": "react-native-firebase-bai-4:-luu-du-lieu",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/czPN-Uv1mkY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "fjMPlyyLt_0",
                    "publishedAt": "2017-05-03T09:25:15.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 5: B\u1eaft s\u1ef1 ki\u1ec7n Value trong Firebase",
                    "slug": "react-native-firebase-bai-5:-bat-su-kien-value-trong-firebase",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/fjMPlyyLt_0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "uH2J2R6GZtM",
                    "publishedAt": "2017-05-03T09:25:15.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 6: Hi\u1ec3n th\u1ecb d\u1eef li\u1ec7u v\u1edbi listview",
                    "slug": "react-native-firebase-bai-6:-hien-thi-du-lieu-voi-listview",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/uH2J2R6GZtM\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "cb0nEKW5dSQ",
                    "publishedAt": "2017-05-03T09:25:15.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 7: App To do - ph\u1ea7n 1",
                    "slug": "react-native-firebase-bai-7:-app-to-do-phan-1",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/cb0nEKW5dSQ\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "X1S3TbMC9GA",
                    "publishedAt": "2017-05-03T09:25:15.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 7: App To do - ph\u1ea7n  2",
                    "slug": "react-native-firebase-bai-7:-app-to-do-phan-2",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/X1S3TbMC9GA\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "vReaZe4brEE",
                    "publishedAt": "2017-05-03T09:25:15.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riQNGi-bNJoUemqM4iB05XSS",
                    "title": "React Native - Firebase B\u00e0i 7: App To do - ph\u1ea7n 3",
                    "slug": "react-native-firebase-bai-7:-app-to-do-phan-3",
                    "description": "React Native k\u1ebft n\u1ed1i Firebase\nKh\u00f3a h\u1ecdc React Native t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-react-native.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/vReaZe4brEE\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                }
            ]
        },
        {
            "id": "PLzrVYRai0riT2DL43vdSw8_m4n7NF6Opt",
            "publishedAt": "2017-05-27T09:11:12.000Z",
            "title": "L\u1eadp tr\u00ecnh Android: Th\u01b0 vi\u1ec7n OkHttp",
            "slug": "lap-trinh-android:-thu-vien-okhttp",
            "description": "H\u01b0\u1edbng d\u1eabn  s\u1eed d\u1ee5ng  th\u01b0 vi\u1ec7n OkHttp \u0111\u1ec3 request get v\u00e0 post trong Android.\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh Android t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-android.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
            "thumbnails": "https:\/\/i.ytimg.com\/vi\/6O5k-3hl5AY\/hqdefault.jpg",
            "items": [
                {
                    "id": "6O5k-3hl5AY",
                    "publishedAt": "2017-05-27T09:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riT2DL43vdSw8_m4n7NF6Opt",
                    "title": "Android OkHttp -  Gi\u1edbi thi\u1ec7u",
                    "slug": "android-okhttp-gioi-thieu",
                    "description": "H\u01b0\u1edbng d\u1eabn  s\u1eed d\u1ee5ng  th\u01b0 vi\u1ec7n OkHttp \u0111\u1ec3 request get v\u00e0 post trong Android.\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh Android t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-android.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/6O5k-3hl5AY\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "3V6RXYQZ5v0",
                    "publishedAt": "2017-05-27T09:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riT2DL43vdSw8_m4n7NF6Opt",
                    "title": "Android OkHttp  - B\u00e0i 1:   Get n\u1ed9i dung t\u1eeb URL",
                    "slug": "android-okhttp-bai-1:-get-noi-dung-tu-url",
                    "description": "H\u01b0\u1edbng d\u1eabn  s\u1eed d\u1ee5ng  th\u01b0 vi\u1ec7n OkHttp \u0111\u1ec3 request get v\u00e0 post trong Android.\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh Android t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-android.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/3V6RXYQZ5v0\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "YybzKiHRkCs",
                    "publishedAt": "2017-05-27T09:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riT2DL43vdSw8_m4n7NF6Opt",
                    "title": "Android OkHttp  - B\u00e0i  2:   Load h\u00ecnh \u1ea3nh t\u1eeb URL",
                    "slug": "android-okhttp-bai-2:-load-hinh-anh-tu-url",
                    "description": "H\u01b0\u1edbng d\u1eabn  s\u1eed d\u1ee5ng  th\u01b0 vi\u1ec7n OkHttp \u0111\u1ec3 request get v\u00e0 post trong Android.\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh Android t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-android.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/YybzKiHRkCs\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "aJJcpR6PvYo",
                    "publishedAt": "2017-05-27T09:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riT2DL43vdSw8_m4n7NF6Opt",
                    "title": "Android OkHttp - B\u00e0i  3:   Post d\u1eef li\u1ec7u l\u00ean server",
                    "slug": "android-okhttp-bai-3:-post-du-lieu-len-server",
                    "description": "H\u01b0\u1edbng d\u1eabn  s\u1eed d\u1ee5ng  th\u01b0 vi\u1ec7n OkHttp \u0111\u1ec3 request get v\u00e0 post trong Android.\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh Android t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-android.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/aJJcpR6PvYo\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "x43xArbrJpI",
                    "publishedAt": "2017-05-27T09:11:26.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riT2DL43vdSw8_m4n7NF6Opt",
                    "title": "Android OkHttp  - B\u00e0i  4:   Post file l\u00ean server",
                    "slug": "android-okhttp-bai-4:-post-file-len-server",
                    "description": "H\u01b0\u1edbng d\u1eabn  s\u1eed d\u1ee5ng  th\u01b0 vi\u1ec7n OkHttp \u0111\u1ec3 request get v\u00e0 post trong Android.\nKh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh Android t\u1ea1i KhoaPham.Vn: http:\/\/khoapham.vn\/khoa-hoc-lap-trinh-android.html\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/x43xArbrJpI\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                }
            ]
        },
        {
            "id": "PLzrVYRai0riSl1YIy6EjkASA-iuAE5JiB",
            "publishedAt": "2017-05-03T04:17:49.000Z",
            "title": "L\u1eadp tr\u00ecnh iOS: Bi\u1ec3u \u0111\u1ed3 - Chart",
            "slug": "lap-trinh-ios:-bieu-do-chart",
            "description": "H\u01b0\u1edbng d\u1eabn th\u00eam bi\u1ec3u \u0111\u1ed3 v\u00e0o trong \u1ee9ng d\u1ee5ng iOS.\nkh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
            "thumbnails": "https:\/\/i.ytimg.com\/vi\/a6p9Kn4iMOs\/hqdefault.jpg",
            "items": [
                {
                    "id": "a6p9Kn4iMOs",
                    "publishedAt": "2017-05-03T04:17:58.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSl1YIy6EjkASA-iuAE5JiB",
                    "title": "L\u1eadp tr\u00ecnh iOS - Chart - B\u00e0i 1: Add Library Charts",
                    "slug": "lap-trinh-ios-chart-bai-1:-add-library-charts",
                    "description": "H\u01b0\u1edbng d\u1eabn th\u00eam bi\u1ec3u \u0111\u1ed3 v\u00e0o trong \u1ee9ng d\u1ee5ng iOS.\nkh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/a6p9Kn4iMOs\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "Ua-ncIipqcU",
                    "publishedAt": "2017-05-03T04:18:13.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSl1YIy6EjkASA-iuAE5JiB",
                    "title": "L\u1eadp tr\u00ecnh iOS - Chart - B\u00e0i 2:  Bar Chart 1",
                    "slug": "lap-trinh-ios-chart-bai-2:-bar-chart-1",
                    "description": "H\u01b0\u1edbng d\u1eabn th\u00eam bi\u1ec3u \u0111\u1ed3 v\u00e0o trong \u1ee9ng d\u1ee5ng iOS.\nkh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/Ua-ncIipqcU\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "FOSKglL7iFc",
                    "publishedAt": "2017-05-03T04:18:13.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSl1YIy6EjkASA-iuAE5JiB",
                    "title": "L\u1eadp tr\u00ecnh iOS - Chart - B\u00e0i 3:  Bar Chart 2",
                    "slug": "lap-trinh-ios-chart-bai-3:-bar-chart-2",
                    "description": "H\u01b0\u1edbng d\u1eabn th\u00eam bi\u1ec3u \u0111\u1ed3 v\u00e0o trong \u1ee9ng d\u1ee5ng iOS.\nkh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/FOSKglL7iFc\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "jhEGx_6WJMc",
                    "publishedAt": "2017-05-03T04:18:13.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSl1YIy6EjkASA-iuAE5JiB",
                    "title": "L\u1eadp tr\u00ecnh iOS - Chart - B\u00e0i 4:  Line Chart 1",
                    "slug": "lap-trinh-ios-chart-bai-4:-line-chart-1",
                    "description": "H\u01b0\u1edbng d\u1eabn th\u00eam bi\u1ec3u \u0111\u1ed3 v\u00e0o trong \u1ee9ng d\u1ee5ng iOS.\nkh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/jhEGx_6WJMc\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "l_8jLVgr6As",
                    "publishedAt": "2017-05-03T04:18:13.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSl1YIy6EjkASA-iuAE5JiB",
                    "title": "L\u1eadp tr\u00ecnh iOS - Chart - B\u00e0i 5:  Line Chart 2",
                    "slug": "lap-trinh-ios-chart-bai-5:-line-chart-2",
                    "description": "H\u01b0\u1edbng d\u1eabn th\u00eam bi\u1ec3u \u0111\u1ed3 v\u00e0o trong \u1ee9ng d\u1ee5ng iOS.\nkh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/l_8jLVgr6As\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                },
                {
                    "id": "3CnA7G4YPD4",
                    "publishedAt": "2017-05-03T04:18:13.000Z",
                    "channelId": "UCX1g7Ciyjv6pFeX7EhvX4sQ",
                    "playlistID": "PLzrVYRai0riSl1YIy6EjkASA-iuAE5JiB",
                    "title": "L\u1eadp tr\u00ecnh iOS - Chart - B\u00e0i 6:  Pie Chart",
                    "slug": "lap-trinh-ios-chart-bai-6:-pie-chart",
                    "description": "H\u01b0\u1edbng d\u1eabn th\u00eam bi\u1ec3u \u0111\u1ed3 v\u00e0o trong \u1ee9ng d\u1ee5ng iOS.\nkh\u00f3a h\u1ecdc L\u1eadp tr\u00ecnh iOS t\u1ea1i KhoaPham.Vn http:\/\/khoapham.vn\/khoa-hoc-laptrinhios.html)\n\nT\u01b0 v\u1ea5n ghi danh: 0942764080\nH\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt: 0967908907 (Th\u1ee9 hai \u0111\u1ebfn th\u1ee9 s\u00e1u t\u1eeb 13 - 16h)\nFanpage: https:\/\/www.facebook.com\/khoapham.vn\/",
                    "thumbnails": "https:\/\/i.ytimg.com\/vi\/3CnA7G4YPD4\/hqdefault.jpg",
                    "views": 1,
                    "comments": 1,
                    "ratting": 1
                }
            ]
        }
    ]
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDgOdaUHgWwhZsVREQ74cUGTOkFIHpdVdc",
        authDomain: "ver01.firebaseapp.com",
        databaseURL: "https://ver01.firebaseio.com",
        projectId: "youtubever01",
        storageBucket: "youtubever01.appspot.com",
        messagingSenderId: "677798956939"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map