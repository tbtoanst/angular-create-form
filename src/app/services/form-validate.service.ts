import { Injectable } from '@angular/core';
import { IErrorMessage } from '../models/error.model';

@Injectable({
  providedIn: 'root'
})
export class FormValidateService {
  constructor() {}
  fieldHasError(fieldName: string, targetForm: any): boolean {
    const formField = targetForm?.controls[fieldName];
    return formField?.invalid && formField?.touched ? true : false;
  }
  getErrorMessage(fieldName: string, targetForm: any): string {
    const formField = targetForm?.get(fieldName);
    const fieldErrors = targetForm?.controls[fieldName].errors;
    
    return formField?.hasError('required')
      ? 'Reuired field'
      : formField?.hasError('minlength')
      ? `Input should contain at least
      ${this.getLengthError(fieldErrors?.['minlength'])} characters`
      : formField?.hasError('maxlength')
      ? `Input should contain max
      ${this.getLengthError(fieldErrors?.['maxlength'])} characters`
      : 'Unknown error';
  }
  // MAKE LENGTH ERRORS SHORTER
  private getLengthError(fieldError: any): string {
    return `(${fieldError?.actualLength} / ${fieldError?.requiredLength})`;
  }
}
