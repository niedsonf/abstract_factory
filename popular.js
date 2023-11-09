"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularFactory = void 0;
var abstracts_1 = require("./abstracts");
var PopularFactory = /** @class */ (function (_super) {
    __extends(PopularFactory, _super);
    function PopularFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopularFactory.prototype.createWheel = function () {
        return new PopularWheel();
    };
    PopularFactory.prototype.createEngine = function () {
        return new PopularEngine();
    };
    PopularFactory.prototype.createOnboardSystem = function () {
        return new PopularOnboardSystem();
    };
    return PopularFactory;
}(abstracts_1.AbstractFactory));
exports.PopularFactory = PopularFactory;
var PopularWheel = /** @class */ (function (_super) {
    __extends(PopularWheel, _super);
    function PopularWheel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rim = 16;
        return _this;
    }
    PopularWheel.prototype.seeRim = function () {
        return "Pneu popular aro ".concat(this.rim, "\"");
    };
    PopularWheel.prototype.inflate = function () {
        return 'Pneu popular calibrado';
    };
    return PopularWheel;
}(abstracts_1.AbstractWheel));
var PopularEngine = /** @class */ (function (_super) {
    __extends(PopularEngine, _super);
    function PopularEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopularEngine.prototype.start = function () {
        return 'Deu partida no motor popular';
    };
    return PopularEngine;
}(abstracts_1.AbstractEngine));
var PopularOnboardSystem = /** @class */ (function (_super) {
    __extends(PopularOnboardSystem, _super);
    function PopularOnboardSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopularOnboardSystem.prototype.lockDoors = function () {
        return 'Portas do carro popular trancadas';
    };
    PopularOnboardSystem.prototype.startEngine = function (collaborator) {
        return collaborator.start();
    };
    return PopularOnboardSystem;
}(abstracts_1.AbstractOnboardSystem));
