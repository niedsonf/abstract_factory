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
exports.SportiveFactory = void 0;
var abstracts_1 = require("./abstracts");
var SportiveFactory = /** @class */ (function (_super) {
    __extends(SportiveFactory, _super);
    function SportiveFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportiveFactory.prototype.createWheel = function () {
        return new SportiveWheel();
    };
    SportiveFactory.prototype.createEngine = function () {
        return new SportiveEngine();
    };
    SportiveFactory.prototype.createOnboardSystem = function () {
        return new SportiveOnboardSystem();
    };
    return SportiveFactory;
}(abstracts_1.AbstractFactory));
exports.SportiveFactory = SportiveFactory;
var SportiveWheel = /** @class */ (function (_super) {
    __extends(SportiveWheel, _super);
    function SportiveWheel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rim = 20;
        return _this;
    }
    SportiveWheel.prototype.seeRim = function () {
        return "Pneu esportivo aro ".concat(this.rim, "\"");
    };
    SportiveWheel.prototype.inflate = function () {
        return 'Pneu esportivo calibrado';
    };
    return SportiveWheel;
}(abstracts_1.AbstractWheel));
var SportiveEngine = /** @class */ (function (_super) {
    __extends(SportiveEngine, _super);
    function SportiveEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportiveEngine.prototype.start = function () {
        return 'Deu partida no motor esportivo';
    };
    return SportiveEngine;
}(abstracts_1.AbstractEngine));
var SportiveOnboardSystem = /** @class */ (function (_super) {
    __extends(SportiveOnboardSystem, _super);
    function SportiveOnboardSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportiveOnboardSystem.prototype.lockDoors = function () {
        return 'Portas do carro esportivo trancadas';
    };
    SportiveOnboardSystem.prototype.startEngine = function (collaborator) {
        return collaborator.start();
    };
    return SportiveOnboardSystem;
}(abstracts_1.AbstractOnboardSystem));
