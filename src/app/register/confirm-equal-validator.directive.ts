import { Validators, NG_VALIDATORS, AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Input, Directive } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';

@Directive({
     selector: '[appConfirmEqualValidator]',
     providers: [{
         provide: NG_VALIDATORS,
         useExisting: ConfirmEqualValidatorDirective,
         multi: true
     }]
 })


export class ConfirmEqualValidatorDirective implements Validators{
submitted = false;

 registerForm = new FormGroup({
        name: new FormControl(),
        series: new FormControl('NeedNet Registration')
    });

        @Input() appConfirmEqualValidator: string;
        validate(control: AbstractControl): {[Key: string]: any} | null{
            const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
            if (controlToCompare && controlToCompare.value !== control.value) {
                return{'notEqual': true};
            }
            return null;
        }


        onFormSubmit(): void {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log('Mobile Number:' + this.registerForm.get('mobileNumber').value);
        console.log('Password:' + this.registerForm.get('password').value);
        console.log('Confirm Password:' + this.registerForm.get('confirmPassword').value);
        // redirect to home after submitting the values
       // this.router.navigate(['/']);
    }
    }