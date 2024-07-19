import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormInitializationService {
  private globalParameter: number = 0;
  private formName: string = 'TMM022';

  constructor(private http: HttpClient) {}

  initializeForm(): void {
    const currentDate = new Date().toISOString().split('T')[0];
    this.globalParameter = 0;
    const mode = this.globalParameter === 0 ? 'Create Mode' : 'Edit Mode';
    document.body.style.cursor = 'default';
    this.disableButton('SAVE');
    this.enableFields(['GROUP_ID', 'PARTNO', 'PART_STATUS', 'PART_DESC', 'LINE_ID']);
    this.enableFieldIfDisabled('UNIT_ID');
    this.moveToField('UNIT_ID');
  }

  whenNewFormInstance(): void {
    this.initializeForm();
  }

  clearForm(): void {
    this.clearFields();
    this.enableFieldIfDisabled('UNIT_ID');
    this.setFieldValue('PART_STATUS', 'A');
    this.whenNewFormInstance();
  }

  executeWhenNewFormInstance(): void {
    this.whenNewFormInstance();
  }

  getGlobalParameter(): number {
    return this.globalParameter;
  }

  fetchLovData(): Observable<any> {
    return this.http.get('/api/lov-data');
  }

  fetchLOVData(globalParameter: number): Observable<any> {
    const url = globalParameter === 0 ? '/api/line-lov' : '/api/edit-line-lov';
    return this.http.get(url);
  }

  fetchGroupLOVData(globalParameter: number, unitID: string): Observable<any> {
    const url = globalParameter === 0 ? `/api/group-lov/${unitID}` : `/api/edit-group-lov/${unitID}`;
    return this.http.get(url);
  }

  private disableButton(buttonId: string): void {
    const button = document.getElementById(buttonId) as HTMLButtonElement;
    if (button) {
      button.disabled = true;
    }
  }

  private enableFields(fieldIds: string[]): void {
    fieldIds.forEach(fieldId => this.enableField(fieldId));
  }

  private enableField(fieldId: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field) {
      field.disabled = false;
    }
  }

  private enableFieldIfDisabled(fieldId: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field && field.disabled) {
      field.disabled = false;
    }
  }

  private moveToField(fieldId: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field) {
      field.focus();
    }
  }

  private clearFields(): void {
    const fields = ['UNIT_ID', 'UNIT_NAME', 'GROUP_ID', 'GROUP_NAME', 'LINE_ID', 'LINE_DESC', 'PART_ID', 'PARTNO', 'PART_DESC', 'PART_STATUS'];
    fields.forEach(fieldId => this.setFieldValue(fieldId, ''));
  }

  private setFieldValue(fieldId: string, value: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field) {
      field.value = value;
    }
  }
}
