import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGroupLOVData(globalParameter: number, unitID: string): Observable<Group[]> {
    const endpoint = globalParameter === 0 ? 'group-lov' : 'edit-group-lov';
    return this.http.get<Group[]>(`${this.apiUrl}/${endpoint}`, { params: { unitID } });
  }

  validateGroupID(groupID: string, groupName: string, globalParameter: number, unitID: string): Observable<boolean> {
    const endpoint = globalParameter === 0 ? 'validate-group' : 'validate-edit-group';
    return this.http.post<boolean>(`${this.apiUrl}/${endpoint}`, { groupID, groupName, unitID });
  }
}
