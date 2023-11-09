"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularFactory = void 0;
var PopularFactory = /** @class */ (function () {
    function PopularFactory() {
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
}());
exports.PopularFactory = PopularFactory;
var PopularWheel = /** @class */ (function () {
    function PopularWheel() {
        this.rim = 16;
    }
    PopularWheel.prototype.inflate = function () {
        return 'Pneu popular calibrado';
    };
    return PopularWheel;
}());
var PopularEngine = /** @class */ (function () {
    function PopularEngine() {
    }
    PopularEngine.prototype.start = function () {
        return 'Deu partida no motor popular';
    };
    return PopularEngine;
}());
var PopularOnboardSystem = /** @class */ (function () {
    function PopularOnboardSystem() {
    }
    PopularOnboardSystem.prototype.lockDoors = function () {
        return 'Portas do carro popular trancadas';
    };
    PopularOnboardSystem.prototype.startEngine = function (collaborator) {
        return collaborator.start();
    };
    return PopularOnboardSystem;
}());
