import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ValidationUtils {
  // has Emoji
  static containsEmoji(text: string): boolean {
    return /[\p{Emoji}]/u.test(text);
  }
  /** Name Validator */
  static nameValidator(maxLength = 20): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.value;
      if (!name) return { required: true };
      if (ValidationUtils.containsEmoji(name)) return { emoji: true };

      if (!/^[A-Za-z ]+$/.test(name)) return { invalidChars: true };
      if (/\s{2,}/.test(name)) return { multipleSpaces: true };
      if (name.trim() !== name) return { leadingTrailing: true };

      if (name.length > maxLength) return { tooLong: { requiredLength: maxLength, actualLength: name.length } };

      return null;
    };
  }

  /** Skills Validator */
  static skillsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const skillsCsv:string = control.value;
      if (!skillsCsv) return { required: true };
      if (ValidationUtils.containsEmoji(skillsCsv)) return { emoji: true };

      if (!/^[A-Za-z+#., ]+$/.test(skillsCsv)) return { invalidChars: true };

      const skills = ValidationUtils.parseSkills(skillsCsv);
      if (skills.length === 0) return { noSkills: true };

      const lower = skills.map(s => s.toLowerCase());
      if (new Set(lower).size !== skills.length) return { duplicate: true };

      const shortSkill = skills.find(s => s.length < 2);
      if (shortSkill) return { tooShort: { requiredLength: 2, actualLength: shortSkill.length } };

      // check for skills longer than max length
      const longSkill = skills.find(s => s.length > 20);
      if (longSkill) return {
         skillsMaxLength: { 
          requiredLength: 20, 
          actualLength: longSkill.length,
          skill: longSkill
         } };

      return null;
    };
  }

// parse skills from CSV string
  static parseSkills(skillsCsv: string): string[] {
    return skillsCsv
      .split(',')
      .map(s => s.trim())
      .filter(s => !!s);
  }

  /** Project Title Validator */
  static titleValidator(minLength = 3, maxLength = 100): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const title = control.value;
      if (!title) return { required: true };
      if (ValidationUtils.containsEmoji(title)) return { emoji: true };

      if (title.length < minLength) return { tooShort: { requiredLength: minLength, actualLength: title.length } };
      if (title.length > maxLength) return { tooLong: { requiredLength: maxLength, actualLength: title.length } };

      if (/[\p{Emoji}]/u.test(title)) return { emoji: true };

      if (title.trim() !== title) return { leadingTrailing: true };
      if (/\s{2,}/.test(title)) return { multipleSpaces: true };

      return null;
    };
  }

  /** Project Description Validator */
  static descriptionValidator(minLength = 10, maxLength = 400): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const desc:string = control.value;
      if (!desc) return { required: true };
      if (ValidationUtils.containsEmoji(desc)) return { emoji: true };

      const trimmed = desc.trim();

      if (trimmed.length < minLength) return { tooShort: { requiredLength: minLength, actualLength: trimmed.length } };
      if (trimmed.length > maxLength) return { tooLong: { requiredLength: maxLength, actualLength: trimmed.length } };

      if (/^[^A-Za-z0-9]+$/.test(trimmed)) return { onlySpecialChars: true };

      return null;
    };
  }
}




