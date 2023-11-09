import { AbstractFactory, AbstractWheel, AbstractEngine, AbstractOnboardSystem } from "./abstracts";

export class PopularFactory extends AbstractFactory {
    public createWheel(): AbstractWheel {
        return new PopularWheel();
    }

    public createEngine(): AbstractEngine {
        return new PopularEngine();
    }

    public createOnboardSystem(): AbstractOnboardSystem {
        return new PopularOnboardSystem();
    }
}

class PopularWheel extends AbstractWheel {
    rim = 16;
    public seeRim(): string {
        return `Pneu popular aro ${this.rim}"`;
    }
    public inflate(): string {
        return 'Pneu popular calibrado';
    }
}


class PopularEngine extends AbstractEngine {
    public start(): string {
        return 'Deu partida no motor popular';
    }
}

class PopularOnboardSystem extends AbstractOnboardSystem {
    public lockDoors(): string {
        return 'Portas do carro popular trancadas';
    }

    public startEngine(collaborator: AbstractEngine): string {
        return collaborator.start();
    }
}