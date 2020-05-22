import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CarpartService } from '../shared/carpart.service';
import { Carpart } from '../shared/carpart.model';

declare var M: any;

@Component({
  selector: 'app-carpart',
  templateUrl: './carpart.component.html',
  styleUrls: ['./carpart.component.css'],
  providers: [CarpartService]
})
export class CarpartComponent implements OnInit {

  constructor(private carpartService: CarpartService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCarpartList();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.carpartService.selectedCarpart = {
      _id: '',
      name: '',
      car_type: '',
      description: '',
      price: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value._id === '') {
      this.carpartService.postCarpart(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCarpartList();
        M.toast({ html: 'Saved successfully'});
      });
    } else {
      this.carpartService.putCarpart(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCarpartList();
        M.toast({html: 'Updated successfully'});
      });
    }
  }

  refreshCarpartList() {
    this.carpartService.getCarpartList().subscribe((res) => {
      this.carpartService.carparts = res as Carpart[];
    });
  }

  onEdit(parts: Carpart) {
    this.carpartService.selectedCarpart = parts;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.carpartService.deleteCarpart(_id).subscribe((res) => {
        this.refreshCarpartList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
