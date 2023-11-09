
import { AbstractFactory } from "./abstracts";
import { PopularFactory } from "./popular";
import { SportiveFactory } from "./sportive";

function clientCode(factory: AbstractFactory) {
    const wheel = factory.createWheel();
    const engine = factory.createEngine();
    const onboardSystem = factory.createOnboardSystem();

    console.log(wheel.inflate());
    console.log(onboardSystem.startEngine(engine));
}

console.log('Testando a fábrica esportiva...');
clientCode(new SportiveFactory());
//Pneu esportivo calibrado
//Deu partida no motor esportivo

console.log('');

console.log('Testando a fábrica popular...');
clientCode(new PopularFactory());
//Pneu popular calibrado
//Deu partida no motor popular