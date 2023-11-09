"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var popular_1 = require("./popular");
var sportive_1 = require("./sportive");
function clientCode(factory) {
    var wheel = factory.createWheel();
    var engine = factory.createEngine();
    var onboardSystem = factory.createOnboardSystem();
    console.log(wheel.inflate());
    console.log(wheel.seeRim());
    console.log(onboardSystem.startEngine(engine));
}
console.log('Testando a fábrica esportiva...');
clientCode(new sportive_1.SportiveFactory());
//Pneu esportivo calibrado
//Deu partida no motor esportivo
console.log('');
console.log('Testando a fábrica popular...');
clientCode(new popular_1.PopularFactory());
//Pneu popular calibrado
//Deu partida no motor popular
