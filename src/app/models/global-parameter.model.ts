export class GlobalParameter {
  globalParameter: number;

  constructor(globalParameter: number) {
    this.globalParameter = globalParameter;
  }

  // Method to check if the global parameter is set to 0
  isGlobalParameterZero(): boolean {
    return this.globalParameter === 0;
  }

  // Method to check if the global parameter is set to 1
  isGlobalParameterOne(): boolean {
    return this.globalParameter === 1;
  }
}
