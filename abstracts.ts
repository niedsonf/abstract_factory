export interface AbstractFactory {
    createWheel(): AbstractWheel;
    createEngine(): AbstractEngine;
    createOnboardSystem(): AbstractOnboardSystem;
}

export interface AbstractWheel {
    rim: number;
    inflate(): string;
}

export interface AbstractEngine {
    start(): string;
}

export interface AbstractOnboardSystem {
    lockDoors(): string;
    startEngine(collaborator: AbstractEngine): string;
}
