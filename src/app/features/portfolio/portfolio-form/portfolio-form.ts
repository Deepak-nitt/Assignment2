import { Component, EventEmitter, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationUtils } from '../../../core/utils/validation.utils';
import { PortfolioFormValue } from '../models/portfolio.model';
import { FormErrorsUtils } from '../../../core/utils/form-erors.utils';

@Component({
  selector: 'app-portfolio-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portfolio-form.html',
  styleUrls: ['./portfolio-form.css'],
  // changeDetection to OnPush for performance
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioFormComponent implements OnInit {

  // input class for styling
  readonly inputClass = `w-full rounded-md border px-4 py-2 text-gray-900 shadow-sm 
               focus:ring-blue-200  text-sm transition`;

  // Events to notify parent components
  // cancel event to close the form without saving
  @Output() readonly cancel = new EventEmitter<void>();
  // create event to submit the form data
  @Output() readonly create = new EventEmitter<PortfolioFormValue>();

  // Reactive form group
  form!: FormGroup;

  // Inject FormBuilder and PortfolioService
  constructor(private readonly fb: FormBuilder) {}

  // Initialize form with validators
  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      name: ['', [ValidationUtils.nameValidator(20)]],
      skillsCsv: ['', [ValidationUtils.skillsValidator()]],
      projectTitle: ['', [ValidationUtils.titleValidator(3, 100)]],
      projectDescription: ['', [ValidationUtils.descriptionValidator(10, 400)]],
    });
  }

  // getter for easier access in template
  get f() {
    return this.form.controls;
  }

  getErrorMessages(controlError:string):string[]{
    return FormErrorsUtils.getErrors(this.form.get(controlError)!);
  }

  // Handle form submission

  onSubmit(): void {
    if (this.form.valid) {
      const raw = this.form.getRawValue();

      const formValue: PortfolioFormValue = {
        name: raw.name.trim(),
        skillsCsv: ValidationUtils.parseSkills(raw.skillsCsv).join(', '),
        projectTitle: raw.projectTitle.trim(),
        projectDescription: raw.projectDescription.trim(),
        createdAt: Date.now(), // current timestamp
      };


      // Emit to parent component
      this.create.emit(formValue);

      // Reset after submit
      this.form.reset();
    } else {
      // Highlight errors if invalid
      this.form.markAllAsTouched();
    }
  }
}



