import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    registerForm = new FormGroup({
        name: new FormControl(),
        series: new FormControl('NeedNet Registration')
    });

    constructor(private formBuilder: FormBuilder,
        private router: Router) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

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
        this.router.navigate(['/']);
    }

    onReset(): void {
         this.submitted = false;
        this.registerForm.reset();
    }

}