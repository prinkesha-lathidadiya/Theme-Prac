import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  userForm: FormGroup
  activatedRoute: any;

  constructor(private formBuilder: FormBuilder ) {
    
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
}

  ngOnInit(): void {
  }

}
