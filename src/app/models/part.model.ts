export class Part {
  constructor(
    public partId: string,
    public unitId: string,
    public unitName: string,
    public groupId: string,
    public groupName: string,
    public lineId: string,
    public lineDesc: string,
    public partNumber: string,
    public partDescription: string,
    public partStatus: string
  ) {}

  // Validation methods
  static validateFields(part: Part): string | null {
    if (!part.unitId) return 'Unit ID is required';
    if (!part.unitName) return 'Unit Name is required';
    if (!part.groupId) return 'Group ID is required';
    if (!part.groupName) return 'Group Name is required';
    if (!part.lineId) return 'Line ID is required';
    if (!part.lineDesc) return 'Line Description is required';
    if (!part.partNumber) return 'Part Number is required';
    if (!part.partDescription) return 'Part Description is required';
    if (!part.partId) return 'Part ID is required';
    return null;
  }

  static setPartStatus(part: Part, globalParam: number): void {
    if (globalParam === 0 || globalParam === 1) {
      if (
        part.unitId &&
        part.unitName &&
        part.groupId &&
        part.groupName &&
        part.lineId &&
        part.lineDesc &&
        part.partNumber &&
        part.partDescription &&
        (globalParam === 0 || part.partId)
      ) {
        part.partStatus = 'A';
      }
    }
  }

  // Method to clear part description and disable save button
  static clearPartDescription(part: Part, saveButton: { disabled: boolean }): void {
    if (part.partDescription) {
      part.partDescription = '';
      saveButton.disabled = true;
    }
  }
}