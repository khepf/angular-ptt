import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const formFromLocalStorage = JSON.parse(window.localStorage.getItem('serviceData'));
    console.log('formFromLocalStorage', formFromLocalStorage.input1);
    this.homeForm = new FormGroup({
      input1: new FormControl(formFromLocalStorage.input1),
      input2: new FormControl(formFromLocalStorage.input2)
    });

  }

  onSaveToLocalStorage() {
    console.log('homeForm', this.homeForm);
    localStorage.setItem('serviceData', JSON.stringify(this.homeForm.value));
  }

}
