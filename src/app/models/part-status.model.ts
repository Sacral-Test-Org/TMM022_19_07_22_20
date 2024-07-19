export interface PartStatus {
  value: string;
  viewValue: string;
}

export const PART_STATUS_OPTIONS: PartStatus[] = [
  { value: 'A', viewValue: 'Active' },
  { value: 'I', viewValue: 'Inactive' }
];