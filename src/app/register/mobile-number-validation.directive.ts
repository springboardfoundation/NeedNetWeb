import { Validators, FormBuilder, FormGroup, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Directive, OnInit, Input} from '@angular/core';

@Directive({
     selector: '[mobileNumberValidation]',
     providers: [{
         provide: NG_VALIDATORS,
         useExisting: MobileNumberValidationDirective,
         multi: true
     }]
 })

export class MobileNumberValidationDirective implements OnInit {

  mobileNumberValidation = ('^[6-9]\d{9}$');

  registerForm = new FormGroup({
        name: new FormControl(),
        series: new FormControl('NeedNet Registration')
	});

//@Input() mobileNumberValidation: number;

  constructor(private formBuilder: FormBuilder) { }

   ngOnInit() {
    this.registerForm = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.pattern(this.mobileNumberValidation)]]
    });

  }

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
}
}