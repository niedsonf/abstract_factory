export abstract class AbstractFactory {
    public abstract createWheel(): AbstractWheel;
    public abstract createEngine(): AbstractEngine;
    public abstract createOnboardSystem(): AbstractOnboardSystem;
}

export abstract class AbstractWheel {
    protected abstract rim: number;
    public abstract seeRim(): string;
    public abstract inflate(): string;
}

export abstract class AbstractEngine {
    public abstract start(): string;
}

export abstract class AbstractOnboardSystem {
    public abstract lockDoors(): string;
    public abstract startEngine(collaborator: AbstractEngine): string;
}
