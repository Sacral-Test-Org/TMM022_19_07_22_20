import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { NGXLogger } from 'ngx-logger';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-lov',
  templateUrl: './group-lov.component.html',
  styleUrls: ['./group-lov.component.css']
})
export class GroupLovComponent implements OnInit {
  groupLOVData: any[] = [];
  globalParameter: number;
  unitId: string;

  constructor(
    private groupService: GroupService,
    private logger: NGXLogger,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.globalParameter = +params['globalParameter'] || 0;
      this.unitId = params['unitId'] || '';
      this.displayGroupLOV();
    });
  }

  displayGroupLOV(): void {
    if (this.globalParameter === 0) {
      this.groupService.getGroupLOVData(this.unitId).subscribe(
        data => {
          this.groupLOVData = data;
          this.logger.info('Group LOV data fetched successfully', data);
        },
        error => {
          this.logger.error('Error fetching Group LOV data', error);
        }
      );
    } else if (this.globalParameter === 1) {
      this.groupService.getEditGroupLOVData(this.unitId).subscribe(
        data => {
          this.groupLOVData = data;
          this.logger.info('Edit Group LOV data fetched successfully', data);
        },
        error => {
          this.logger.error('Error fetching Edit Group LOV data', error);
        }
      );
    }
  }
}
