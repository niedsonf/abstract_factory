"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportiveFactory = void 0;
var SportiveFactory = /** @class */ (function () {
    function SportiveFactory() {
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
}());
exports.SportiveFactory = SportiveFactory;
var SportiveWheel = /** @class */ (function () {
    function SportiveWheel() {
        this.rim = 20;
    }
    SportiveWheel.prototype.inflate = function () {
        return 'Pneu esportivo calibrado';
    };
    return SportiveWheel;
}());
var SportiveEngine = /** @class */ (function () {
    function SportiveEngine() {
    }
    SportiveEngine.prototype.start = function () {
        return 'Deu partida no motor esportivo';
    };
    return SportiveEngine;
}());
var SportiveOnboardSystem = /** @class */ (function () {
    function SportiveOnboardSystem() {
    }
    SportiveOnboardSystem.prototype.lockDoors = function () {
        return 'Portas do carro esportivo trancadas';
    };
    SportiveOnboardSystem.prototype.startEngine = function (collaborator) {
        return collaborator.start();
    };
    return SportiveOnboardSystem;
}());
