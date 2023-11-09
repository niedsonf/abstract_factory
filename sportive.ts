import { AbstractFactory, AbstractWheel, AbstractEngine, AbstractOnboardSystem } from "./abstracts";

export class SportiveFactory extends AbstractFactory {
    public createWheel(): AbstractWheel {
        return new SportiveWheel();
    }

    public createEngine(): AbstractEngine {
        return new SportiveEngine();
    }

    public createOnboardSystem(): AbstractOnboardSystem {
        return new SportiveOnboardSystem();
    }
}

class SportiveWheel extends AbstractWheel {
    protected rim = 20

    public seeRim(): string {
        return `Pneu esportivo aro ${this.rim}"`;
    }
    public inflate(): string {
        return 'Pneu esportivo calibrado';
    }
}

class SportiveEngine extends AbstractEngine {
    public start(): string {
        return 'Deu partida no motor esportivo';
    }
}


class SportiveOnboardSystem extends AbstractOnboardSystem {
    public lockDoors(): string {
        return 'Portas do carro esportivo trancadas';
    }

    public startEngine(collaborator: AbstractEngine): string {
        return collaborator.start();
    }
}
