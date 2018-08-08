webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_heroes_heroes_component__ = __webpack_require__("../../../../../src/app/components/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/components/hero-detail/hero-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_3__components_heroes_heroes_component__["a" /* HeroesComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-store.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducerFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index__ = __webpack_require__("../../../../../src/app/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Create reducer factories for development and production environments.
// These factories are supplied to the StoreModule to combine the supplied
// ActionReducerMap (a map of state key -> reducer fn) into one single
// ActionReducer ((state, action) -> state) the app can use.
function developmentReducerFactory(reducerMap) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__["storeFreeze"])(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["k" /* combineReducers */])(reducerMap));
}
function productionReducerFactory(reducerMap) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["k" /* combineReducers */])(reducerMap);
}
function reducerFactory(reducerMap) {
    if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
        return developmentReducerFactory(reducerMap);
    }
    else {
        return productionReducerFactory(reducerMap);
    }
}
var AppStoreModule = (function () {
    function AppStoreModule() {
    }
    return AppStoreModule;
}());
AppStoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__store_index__["b" /* reducers */], {
                reducerFactory: reducerFactory,
            }),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                maxAge: 25,
            }),
        ],
    })
], AppStoreModule);

//# sourceMappingURL=app-store.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  background: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ") no-repeat center center fixed;\n  background-size: cover;\n  min-height: 100vh;\n}\n\nnav a {\n  margin: 0.5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <h1>{{ title }}</h1>\n\n  <nav class=\"box-inline padded\">\n    <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n    <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n  </nav>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to my first Angular v4 app!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fapp-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__effects_hero_effects_service__ = __webpack_require__("../../../../../src/app/effects/hero-effects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_in_memory_data_service__ = __webpack_require__("../../../../../src/app/services/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_store_module__ = __webpack_require__("../../../../../src/app/app-store.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/components/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_heroes_heroes_component__ = __webpack_require__("../../../../../src/app/components/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_hero_search_hero_search_component__ = __webpack_require__("../../../../../src/app/components/hero-search/hero-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// NgRx Effects


// Imports for loading & configuring the in-memory web api


// Routes

// Redux Store

// Components





// Services

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_heroes_heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_hero_search_hero_search_component__["a" /* HeroSearchComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__services_in_memory_data_service__["a" /* InMemoryDataService */]),
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_store_module__["a" /* AppStoreModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot([
                __WEBPACK_IMPORTED_MODULE_5__effects_hero_effects_service__["a" /* HeroEffects */],
            ]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_hero_service__["a" /* HeroService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding: 1rem;\n}\n\nh1, h2, h3 {\n  margin: 0 0 0.5em 0;\n}\n\nul {\n  margin: 0;\n}\n\nul li a {\n  padding: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard column\">\n  <section class=\"top-heroes column box-inline padded\">\n    <h2>Top Heroes</h2>\n\n    <ul class=\"row\">\n      <li *ngFor=\"let hero of heroes\" class=\"box\">\n        <a [routerLink]=\"['/detail', hero.id]\">\n          {{ hero.name }}\n        </a>\n      </li>\n    </ul>\n  </section>\n\n  <section class=\"hero-search column box-inline padded\">\n    <fapp-hero-search></fapp-hero-search>\n</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            _this.heroes = heroes.slice(1, 5);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fapp-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label div {\n  margin: 0.5rem;\n  text-align: left;\n  padding-left: 0.5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"column\">\n  <div class=\"box-inline padded column\">\n\n    <div *ngIf=\"error\">\n      <h3>Uh oh!</h3>\n      <p>{{ error }}</p>\n    </div>\n\n    <form *ngIf=\"heroForm\" [formGroup]=\"heroForm\" novalidate>\n\n      <h2>{{ heroForm.value.name }} details!</h2>\n\n      <div>\n        <label>\n          <legend>id:</legend>\n          <div>{{ heroForm.value.id }}</div>\n        </label>\n      </div>\n\n      <div>\n        <label>\n          <legend>name:</legend>\n          <input\n            type=\"text\"\n            spellcheck=\"false\"\n            formControlName=\"name\"\n            placeholder=\"name\" />\n        </label>\n      </div>\n\n      <div>\n        <label>\n          <legend>info:</legend>\n          <input\n            type=\"text\"\n            spellcheck=\"false\"\n            formControlName=\"info\"\n            placeholder=\"info\" />\n        </label>\n      </div>\n\n      <div>\n        <label>\n          <legend>sidekick:</legend>\n          <input\n            type=\"checkbox\"\n            name=\"sidekick\"\n            formControlName=\"sidekick\" />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <button\n          (click)=\"save()\"\n          [disabled]=\"heroForm.pristine\"\n          class=\"confirm\">\n          Save\n        </button>\n        <button\n          (click)=\"revert()\"\n          [disabled]=\"heroForm.pristine\"\n          class=\"cancel\">\n          Revert\n        </button>\n        <button\n          (click)=\"goBack()\"\n          class=\"cancel\">\n          Go Back\n        </button>\n      </div>\n\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_hero__ = __webpack_require__("../../../../../src/app/models/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location, formBuilder) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.formBuilder = formBuilder;
    }
    /* LifeCycle methods */
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(id = +params.get('id')); })
            .subscribe(function (hero) { return _this.setHero(hero); }, function (error) {
            _this.showError("Unable to find hero #" + id);
            console.error("Error getting hero with id " + id, error);
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(null);
        });
    };
    HeroDetailComponent.prototype.ngOnChanges = function () {
        this.setFormDataFromHero();
    };
    /* User Actions */
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.hero = this.getHeroFromFormData();
        this.heroService.update(this.hero)
            .then(function () { return _this.setFormDataFromHero(); });
    };
    HeroDetailComponent.prototype.revert = function () {
        this.setFormDataFromHero();
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    /* Component methods */
    HeroDetailComponent.prototype.showError = function (error) {
        this.error = error;
    };
    HeroDetailComponent.prototype.setHero = function (hero) {
        this.hero = hero;
        this.setFormDataFromHero();
        this.error = '';
    };
    HeroDetailComponent.prototype.setFormDataFromHero = function () {
        var heroFormData = this.getFormDataFromHero(this.hero);
        if (!this.heroForm) {
            this.heroForm = this.formBuilder.group(heroFormData);
        }
        else {
            this.heroForm.reset(heroFormData);
        }
    };
    /* Data Transformations */
    HeroDetailComponent.prototype.getFormDataFromHero = function (hero) {
        if (hero === void 0) { hero = {}; }
        return {
            id: hero.id,
            name: hero.name,
            info: hero.info,
            sidekick: hero.sidekick,
        };
    };
    HeroDetailComponent.prototype.getHeroFromFormData = function () {
        if (!this.heroForm) {
            return null;
        }
        var formModel = this.heroForm.value;
        return __assign({}, this.hero, { name: formModel.name, info: formModel.info, sidekick: formModel.sidekick });
    };
    return HeroDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__models_hero__["a" /* Hero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_hero__["a" /* Hero */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fapp-hero-detail',
        template: __webpack_require__("../../../../../src/app/components/hero-detail/hero-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/hero-detail/hero-detail.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_hero_service__["a" /* HeroService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
], HeroDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/hero-search/hero-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hero-search/hero-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h3>Hero Search</h3>\n\n  <input\n    type=\"text\"\n    id=\"search-box\"\n    (keyup)=\"search(searchBox.value)\"\n    #searchBox  />\n\n  <div>\n    <div\n      *ngFor=\"let hero of heroes | async\"\n      (click)=\"gotoDetail(hero)\"\n      class=\"search-result box-button padded\" >\n      {{ hero.name }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hero-search/hero-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_hero_search_service__ = __webpack_require__("../../../../../src/app/services/hero-search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Observable class extensions

// Observable operators




var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.heroSearchService.search(term)
            : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    return HeroSearchComponent;
}());
HeroSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fapp-hero-search',
        template: __webpack_require__("../../../../../src/app/components/hero-search/hero-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/hero-search/hero-search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_hero_search_service__["a" /* HeroSearchService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_hero_search_service__["a" /* HeroSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_hero_search_service__["a" /* HeroSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeroSearchComponent);

var _a, _b;
//# sourceMappingURL=hero-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/heroes/heroes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.row {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.heroes {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0 0 2em 0;\n  width: 15rem;\n  text-align: left;\n}\n\n.hero {\n  position: relative;\n  left: 0em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n  transition: left 0.1s ease-in-out;\n}\n\n.hero:hover {\n  left: 0.5em;\n}\n\n.hero:hover,\n.hero.selected,\n.hero .badge {\n  background-color: rgba(0, 204, 255, 0.3);\n}\n\n.hero .badge {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 auto;\n          flex: 0 auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: small;\n  color: white;\n  padding: 1em;\n  line-height: 1em;\n  border-radius: 0;\n}\n\n.hero .text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 1rem;\n}\n\n.hero .delete {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 auto;\n          flex: 0 auto;\n  justify-self: flex-end;\n  font-size: small;\n  color: white;\n  padding: 1em;\n  border-radius: 0;\n  margin: 0;\n}\n\n.hero .delete:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  justify-self: flex-end;\n  font-size: small;\n  color: white;\n  padding: 1em;\n  margin: 0;\n}\n\n.hero-detail {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.hero-detail > * {\n  background-color: rgba(128, 128, 128, 0.3);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"column\">\n\n  <h2>My Heroes</h2>\n\n  <div class=\"padded column box-inline\">\n    <p>\n      {{ heroesStore$ | async | json }}\n    </p>\n  </div>\n\n  <div class=\"padded column box-inline\">\n    <label>\n      <legend>Hero name:</legend>\n      <input\n        type=\"text\"\n        spellcheck=\"false\"\n        placeholder=\"name\"\n        #heroName />\n    </label>\n    <button (click)=\"add(heroName.value); heroName.value=''\">\n      Add\n    </button>\n  </div>\n\n  <section class=\"row\">\n\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        class=\"box-inline hero row\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n\n        <span class=\"badge\">{{ hero.id }}</span>\n        <span class=\"text\">{{ hero.name }}</span>\n        <button\n          class=\"delete\"\n          (click)=\"delete(hero); $event.stopPropagation()\">\n          x\n        </button>\n\n      </li>\n    </ul>\n\n    <div\n      *ngIf=\"selectedHero\"\n      class=\"hero-detail\"\n      (click)=\"selectedHero = null\">\n      <div\n        class=\"box padded column\"\n        (click)=\"$event.stopPropagation()\">\n        <h2>\n          <strong>{{selectedHero.name}}</strong> is my hero\n        </h2>\n        <button (click)=\"gotoDetail()\">View Details</button>\n      </div>\n    </div>\n\n  </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index__ = __webpack_require__("../../../../../src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Redux



var HeroesComponent = (function () {
    function HeroesComponent(heroService, router, store) {
        this.heroService = heroService;
        this.router = router;
        this.store = store;
        this.heroesStore$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store_index__["a" /* Heroes */].Selectors.getHeroes);
    }
    /* Lifecycle methods */
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    /* Component methods */
    HeroesComponent.prototype.add = function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_index__["a" /* Heroes */].CreateHeroRequest({ name: name }));
        // this.heroService.create(name)
        //   .then(hero => {
        //     this.heroes.push(hero);
        //     this.selectedHero = null;
        //   });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            _this.heroes = heroes;
        });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fapp-heroes',
        template: __webpack_require__("../../../../../src/app/components/heroes/heroes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/heroes/heroes.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _c || Object])
], HeroesComponent);

var _a, _b, _c;
//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ "../../../../../src/app/effects/hero-effects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index__ = __webpack_require__("../../../../../src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeroEffects = (function () {
    function HeroEffects(http, actions$, heroService) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.heroService = heroService;
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
        });
        // non-dispatching effects
        // @Effect({ dispatch: false }) logActions$ =
        this.createHero$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__store_index__["a" /* Heroes */].CREATE_HERO_REQUEST)
            .switchMap(function (action) {
            return _this.heroService.create(action.payload.name)
                .then(function (hero) { return new __WEBPACK_IMPORTED_MODULE_5__store_index__["a" /* Heroes */].CreateHeroSuccess(action, hero); })
                .catch(function (error) { return new __WEBPACK_IMPORTED_MODULE_5__store_index__["a" /* Heroes */].CreateHeroFailure(action, error); });
        });
    }
    HeroEffects.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HeroEffects.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroEffects.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroEffects.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroEffects.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroEffects.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HeroEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], HeroEffects.prototype, "createHero$", void 0);
HeroEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_hero_service__["a" /* HeroService */]) === "function" && _d || Object])
], HeroEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=hero-effects.service.js.map

/***/ }),

/***/ "../../../../../src/app/models/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero() {
        this.id = '';
        this.name = '';
        this.info = '';
        this.sidekick = false;
    }
    return Hero;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ "../../../../../src/app/services/hero-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
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



var HeroSearchService = (function () {
    function HeroSearchService(http) {
        this.http = http;
    }
    HeroSearchService.prototype.search = function (term) {
        return this.http
            .get("api/heroes/?name=" + term)
            .map(function (response) { return response.json(); });
    };
    return HeroSearchService;
}());
HeroSearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HeroSearchService);

var _a;
//# sourceMappingURL=hero-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4__ = __webpack_require__("../../../../uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
        });
    }
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ id: __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default()(), name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HeroService);

var _a;
//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: '0', name: 'Zero', info: 'No info here', sidekick: true },
            { id: '11', name: 'Mr. Nice' },
            { id: '12', name: 'Narco' },
            { id: '13', name: 'Bombasto' },
            { id: '14', name: 'Celeritas' },
            { id: '15', name: 'Magneta' },
            { id: '16', name: 'RubberMan' },
            { id: '17', name: 'Dynama' },
            { id: '18', name: 'Dr IQ' },
            { id: '19', name: 'Magma' },
            { id: '20', name: 'Tornado' },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/store/heroes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_HERO_REQUEST", function() { return CREATE_HERO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_HERO_SUCCESS", function() { return CREATE_HERO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_HERO_FAILURE", function() { return CREATE_HERO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHeroRequest", function() { return CreateHeroRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHeroSuccess", function() { return CreateHeroSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHeroFailure", function() { return CreateHeroFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selectors", function() { return Selectors; });
/* harmony export (immutable) */ __webpack_exports__["reducer"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid_v4__ = __webpack_require__("../../../../uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid_v4__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


// ------------------------------------------------------------
// Action Constants
// ------------------------------------------------------------
var CREATE_HERO_REQUEST = '[Heroes] Create Hero (Request)';
var CREATE_HERO_SUCCESS = '[Heroes] Create Hero (Success)';
var CREATE_HERO_FAILURE = '[Heroes] Create Hero (Failure)';
// ------------------------------------------------------------
// Actions
// ------------------------------------------------------------
var CreateHeroRequest = (function () {
    function CreateHeroRequest(payload) {
        this.payload = payload;
        this.type = CREATE_HERO_REQUEST;
        this.requestId = __WEBPACK_IMPORTED_MODULE_1_uuid_v4___default()();
    }
    return CreateHeroRequest;
}());

var CreateHeroSuccess = (function () {
    function CreateHeroSuccess(requestAction, payload) {
        this.requestAction = requestAction;
        this.payload = payload;
        this.type = CREATE_HERO_SUCCESS;
    }
    return CreateHeroSuccess;
}());

var CreateHeroFailure = (function () {
    function CreateHeroFailure(requestAction, error) {
        this.requestAction = requestAction;
        this.error = error;
        this.type = CREATE_HERO_FAILURE;
    }
    return CreateHeroFailure;
}());

var initialState = {
    heroes: [],
};
// ------------------------------------------------------------
// Selectors
// ------------------------------------------------------------
var getLocalState = function (state) { return state.heroes; };
var createLocalSelector = function (selector) { return Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getLocalState, selector); };
var Selectors = (function () {
    function Selectors() {
    }
    return Selectors;
}());

Selectors.getHeroes = createLocalSelector(function (state) { return state.heroes; });
// ------------------------------------------------------------
// Reducer
// ------------------------------------------------------------
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    console.log('reducing', action.type);
    switch (action.type) {
        case CREATE_HERO_SUCCESS: {
            var hero = action.payload;
            return __assign({}, state, { heroes: state.heroes.concat([
                    hero,
                ]) });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=heroes.js.map

/***/ }),

/***/ "../../../../../src/app/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroes__ = __webpack_require__("../../../../../src/app/store/heroes.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__heroes__; });

var reducers = {
    heroes: __WEBPACK_IMPORTED_MODULE_0__heroes__["reducer"],
};

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/assets/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.966932addf40da9dccfa.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map