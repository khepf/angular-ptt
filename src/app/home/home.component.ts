import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }

  onSendToLocalStorage(event) {
  
    // localStorage.setItem('serviceData', JSON.stringify(f.value));
  }

}
