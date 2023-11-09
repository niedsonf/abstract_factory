import { AbstractFactory, AbstractWheel, AbstractEngine, AbstractOnboardSystem } from "./abstracts";

export class PopularFactory implements AbstractFactory {
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

class PopularWheel implements AbstractWheel {
    rim = 16;
    public inflate(): string {
        return 'Pneu popular calibrado';
    }
}


class PopularEngine implements AbstractEngine {
    public start(): string {
        return 'Deu partida no motor popular';
    }
}

class PopularOnboardSystem implements AbstractOnboardSystem {
    public lockDoors(): string {
        return 'Portas do carro popular trancadas';
    }

    public startEngine(collaborator: AbstractEngine): string {
        return collaborator.start();
    }
}