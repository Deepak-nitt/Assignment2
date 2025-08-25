import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ValidationUtils {
  /** ✅ Name Validator: only alphabets + spaces, no emojis, no multiple spaces, max length */
  static nameValidator(maxLength = 20): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.value;
      if (!name) return { required: true };

      // 1. Only alphabets + spaces
      if (!/^[A-Za-z ]+$/.test(name)) return { invalidChars: true };

      // 2. Block multiple consecutive spaces
      if (/\s{2,}/.test(name)) return { multipleSpaces: true };

      // 3. Block leading or trailing spaces
      if (name.trim() !== name) return { leadingTrailing: true };

      // 4. Length check
      if (name.length > maxLength) {
        return { maxlength: { requiredLength: maxLength, actualLength: name.length } };
      }

      return null; // ✅ valid
    };
  }

  /** ✅ Skills Validator: only alphabets, commas, spaces; no duplicates, no empty entries */
  static skillsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const skillsCsv = control.value;
      if (!skillsCsv) return { required: true };

      // 1. Allowed characters only
      if (!/^[A-Za-z, ]+$/.test(skillsCsv)) return { invalidChars: true };

      // 2. Parse into array
      const skills = ValidationUtils.parseSkills(skillsCsv);

      // 3. Must have at least one skill
      if (skills.length === 0) return { noSkills: true };

      // 4. No duplicates (case-insensitive)
      const lower = skills.map(s => s.toLowerCase());
      if (new Set(lower).size !== skills.length) return { duplicate: true };

      // 5. Each skill min 2 chars
      if (skills.some(s => s.length < 2)) return { tooShort: true };

      return null;
    };
  }

  /** ✅ Parse CSV skills and remove empty values */
  static parseSkills(skillsCsv: string): string[] {
    return skillsCsv
      .split(',')
      .map(s => s.trim())
      .filter(s => !!s);
  }

  /** ✅ Project Title Validator: min/max length, no emojis, no multiple spaces */
  static titleValidator(minLength = 3, maxLength = 100): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const title = control.value;
      if (!title) return { required: true };

      // 1. Length check
      if (title.length < minLength) {
        return { minlength: { requiredLength: minLength, actualLength: title.length } };
      }
      if (title.length > maxLength) {
        return { maxlength: { requiredLength: maxLength, actualLength: title.length } };
      }

      // 2. Block emojis/unicode symbols
      if (/[\u{1F600}-\u{1F64F}]/u.test(title)) return { emoji: true };

      // 3. No leading/trailing/multiple spaces
      if (title.trim() !== title) return { leadingTrailing: true };
      if (/\s{2,}/.test(title)) return { multipleSpaces: true };

      return null;
    };
  }

  /** ✅ Project Description Validator: min/max length, no only-spaces */
  static descriptionValidator(minLength = 10, maxLength = 400): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const desc = control.value;
      if (!desc) return { required: true };

      const trimmed = desc.trim();

      // 1. Trim and length check
      if (trimmed.length < minLength) {
        return { minlength: { requiredLength: minLength, actualLength: trimmed.length } };
      }
      if (trimmed.length > maxLength) {
        return { maxlength: { requiredLength: maxLength, actualLength: trimmed.length } };
      }

      // 2. Ensure not all spaces/special chars
      if (/^[^A-Za-z0-9]+$/.test(trimmed)) return { onlySpecial: true };

      return null;
    };
  }
}


