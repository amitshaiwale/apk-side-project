import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apk-checkout',
  templateUrl: './apk-checkout.component.html',
  styleUrls: ['./apk-checkout.component.scss']
})
export class ApkCheckoutComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      address: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.maxLength(6)]],
      city: 'Pune',
      phone: ['', [Validators.required, Validators.maxLength(10)]]
    })

    this.formGroup.valueChanges.subscribe(console.log);
  }

  get name() {
    return this.formGroup.get('name');
  }

  get email() {
    return this.formGroup.get('email');
  }

  get address() {
    return this.formGroup.get('address');
  }

  get pincode() {
    return this.formGroup.get('pincode');
  }

  get phone() {
    return this.formGroup.get('phone');
  }

  onSubmit() {

  }

}
