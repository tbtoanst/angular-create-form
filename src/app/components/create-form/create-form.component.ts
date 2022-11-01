import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidateService } from 'src/app/services/form-validate.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private formValidationService: FormValidateService
  ) { }

  createForm: FormGroup = this.formBuilder.group({
    firstName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
    ],
    middleName: [
      '',
      Validators.compose([
        Validators.maxLength(16),
      ]),
    ],
    lastName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(16),
      ]),
    ],
    file: ['',
    Validators.compose([Validators.required])
    ]
  });
  
  ngOnInit(): void {
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.createForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.createForm);
  }

  get f(){
    return this.createForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file)
    }
  }

  onSubmit(){
    console.log('file: ',this.createForm.get('file')?.value)
  }

}
