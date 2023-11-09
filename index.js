"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var popular_1 = require("./popular");
var sportive_1 = require("./sportive");
function clientCode(factory) {
    var wheel = factory.createWheel();
    var engine = factory.createEngine();
    var onboardSystem = factory.createOnboardSystem();
    console.log(wheel.inflate());
    console.log(onboardSystem.startEngine(engine));
}
console.log('Testando a fábrica esportiva...');
clientCode(new sportive_1.SportiveFactory());
console.log('');
console.log('Testando a fábrica popular...');
clientCode(new popular_1.PopularFactory());
