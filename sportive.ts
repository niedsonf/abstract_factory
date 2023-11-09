import { AbstractFactory, AbstractWheel, AbstractEngine, AbstractOnboardSystem } from "./abstracts";

export class SportiveFactory implements AbstractFactory {
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

class SportiveWheel implements AbstractWheel {
    rim = 20;
    public inflate(): string {
        return 'Pneu esportivo calibrado';
    }
}

class SportiveEngine implements AbstractEngine {
    public start(): string {
        return 'Deu partida no motor esportivo';
    }
}


class SportiveOnboardSystem implements AbstractOnboardSystem {
    public lockDoors(): string {
        return 'Portas do carro esportivo trancadas';
    }

    public startEngine(collaborator: AbstractEngine): string {
        return collaborator.start();
    }
}
