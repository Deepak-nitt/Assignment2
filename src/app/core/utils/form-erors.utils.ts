import { AbstractControl } from "@angular/forms";

export class FormErrorsUtils {
  /** Map validator keys to messages */
  static errorMessages: Record<string, (params?: any) => string> = {
    required: () => 'This field is required.',
    invalidChars: () => 'Only alphabets and spaces are allowed.',
    multipleSpaces: () => 'No multiple consecutive spaces allowed.',
    leadingTrailing: () => 'No leading or trailing spaces allowed.',
    tooLong: (params: any) => `Maximum ${params?.requiredLength} characters allowed.`,
    tooShort: (params: any) => `Minimum ${params?.requiredLength} characters required.`,
    noSkills: () => 'Please enter at least one valid skill.',
    duplicate: () => 'Duplicate skills are not allowed.',
    onlySpecialChars: () => 'Description cannot contain only symbols or spaces.',
    emoji: () => 'Emojis are not allowed.',
  };

  /** Get array of error messages for a control */
  static getErrors(control: AbstractControl): string[] {
    if (!control.errors) return [];
    if(!control.touched && !control.dirty) return [];

    return Object.keys(control.errors).map(key => {
      const fn = FormErrorsUtils.errorMessages[key];
      return fn ? fn(control.errors?.[key]?? null) : `Invalid field (${key})`;
    });
  }
}
