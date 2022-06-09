import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';

@Component({
  selector:    'app-contactform-component',
  templateUrl: './contactform.component.html',
  styleUrls:   ['./contactform.component.scss']
})
export class ContactformComponent {

  contact: FormGroup;

  constructor(private formBuilder: FormBuilder, private userservice: UserService, private snackBar: MatSnackBar) {
    this.contact = this.formBuilder.group(
      {
        firstName: [null, Validators.required],
        lastName:  [null, Validators.required],
        number:    [null, Validators.required],
        email:     [null, [Validators.required, Validators.email]],
        message:   [null, Validators.required],
        subject:   [null, Validators.required]
      }
    );
  }

  onSubmit() {
    console.log(this.contact.value);
    this.userservice.contact(this.contact.value).subscribe(response => {
        this.userservice.currentLanguage.subscribe((lang: string) => {
          if (lang === 'en') {
            this.snackBar.open('You have successfully sent message!', 'SENT', {
              duration: 5000,
            });
          } else {
            this.snackBar.open('Sie haben erfolgreich eine Nachricht gesendet!', 'GESCHICKT', {
              duration: 5000,
            });
          }
        });

        this.resetForm(this.contact);
      },
      error1 => {
        console.log('error', error1);
      }
    );
  }

  public resetForm(formGroup: FormGroup): void {
    let control: AbstractControl;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }
}
