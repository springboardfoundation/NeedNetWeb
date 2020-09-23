import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
    templateUrl: 'userprofile.component.html'
})
export class UserProfileComponent{
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    userForm = new FormGroup({
        name: new FormControl(),
        series: new FormControl('NeedNet Registration')
    });

    constructor(private formBuilder: FormBuilder,
                private router: Router) {
    }

    get f() { return this.userForm.controls; }
 
    onProfileSubmit(): void {

        
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        console.log('Full Name:' + this.userForm.get('fullname').value);
        console.log('Email:' + this.userForm.get('email').value);
        console.log('Place:' + this.userForm.get('place').value);
        console.log('Age:' + this.userForm.get('age').value);
        console.log('Gender:' + this.userForm.get('gender').value);
        console.log('Occupation:' + this.userForm.get('occupation').value);
        // redirect to home after submitting the values
        this.router.navigate(['/']);
    }

}