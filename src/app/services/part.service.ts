import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from '../models/part.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private apiUrl = `${environment.apiUrl}/parts`;

  constructor(private http: HttpClient) {}

  checkPartExists(partId: string, unitId: string, groupId: string, lineId: string): Observable<boolean> {
    const url = `${this.apiUrl}/exists`;
    return this.http.post<boolean>(url, { partId, unitId, groupId, lineId });
  }

  savePart(part: Part): Observable<void> {
    const url = `${this.apiUrl}/save`;
    return this.http.post<void>(url, part);
  }

  updatePart(part: Part): Observable<void> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<void>(url, part);
  }

  lookupPartNumber(globalParameter: number): Observable<string[]> {
    const url = `${this.apiUrl}/lookup`;
    return this.http.get<string[]>(url, { params: { globalParameter: globalParameter.toString() } });
  }

  validatePartNumber(partNumber: string, partDescription: string): Observable<boolean> {
    const url = `${this.apiUrl}/validate`;
    return this.http.post<boolean>(url, { partNumber, partDescription });
  }

  validateFields(part: Part): string[] {
    const messages: string[] = [];
    if (!part.unitId || !part.unitName) {
      messages.push('Unit ID and Unit Name should not be null');
    }
    if (!part.groupId || !part.groupName) {
      messages.push('Group ID and Group Name should not be null');
    }
    if (!part.lineId || !part.lineDesc) {
      messages.push('Line ID and Line Description should not be null');
    }
    if (part.globalParameter === 0) {
      if (!part.partNo || !part.partDesc) {
        messages.push('Part No and Part Description should not be null');
      }
    } else if (part.globalParameter === 1) {
      if (!part.partId) {
        messages.push('Kindly choose data from LOV before changing Description');
      }
      if (!part.partNo || !part.partDesc) {
        messages.push('Part No and Part Description should not be null');
      }
    }
    return messages;
  }

  validatePartStatus(partStatus: string): Observable<boolean> {
    const url = `${this.apiUrl}/validateStatus`;
    return this.http.post<boolean>(url, { partStatus });
  }

  validateRequiredFields(fields: any): Observable<boolean> {
    const url = `${this.apiUrl}/validateFields`;
    return this.http.post<boolean>(url, fields);
  }
}
