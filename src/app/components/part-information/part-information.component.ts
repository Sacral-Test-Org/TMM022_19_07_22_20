import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-part-information',
  templateUrl: './part-information.component.html',
  styleUrls: ['./part-information.component.css']
})
export class PartInformationComponent implements OnInit {
  partForm: FormGroup;
  currentDate: string = new Date().toLocaleDateString();
  partStatusOptions = [
    { label: 'Active', value: 'A' },
    { label: 'Inactive', value: 'I' }
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private logger: NGXLogger
  ) {
    this.partForm = this.fb.group({
      sysdate: [{ value: this.currentDate, disabled: true }],
      screenname: [''],
      mode: [{ value: 'ReadOnly', disabled: true }],
      unit_id: [''],
      unit_name: [''],
      group_id: [''],
      group_name: [''],
      line_id: [''],
      line_desc: [''],
      part_id: [''],
      partno: [''],
      part_desc: [''],
      part_status: ['A']
    });
  }

  ngOnInit(): void {
    this.logger.log('Part Information Component Initialized');
  }

  onSave(): void {
    this.logger.log('Save button clicked');
    // Implement save logic here
  }

  onClear(): void {
    this.logger.log('Clear button clicked');
    this.partForm.reset({
      sysdate: { value: this.currentDate, disabled: true },
      screenname: '',
      mode: { value: 'ReadOnly', disabled: true },
      unit_id: '',
      unit_name: '',
      group_id: '',
      group_name: '',
      line_id: '',
      line_desc: '',
      part_id: '',
      partno: '',
      part_desc: '',
      part_status: 'A'
    });
  }

  onEdit(): void {
    this.logger.log('Edit button clicked');
    // Implement edit logic here
  }

  onExit(): void {
    this.logger.log('Exit button clicked');
    // Implement exit logic here
  }
}
