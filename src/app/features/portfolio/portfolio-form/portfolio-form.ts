import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from '../../../core/services/portfolio.services';
import { ValidationUtils } from '../../../core/utils/validation.utils';
import { PortfolioFormValue } from '../models/portfolio.model';
import { FormErrorsUtils } from '../../../core/utils/form-erors.utils';

@Component({
  selector: 'app-portfolio-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portfolio-form.html',
  styleUrls: ['./portfolio-form.css'],
})
export class PortfolioFormComponent implements OnInit {

  // input class for styling
  inputClass = `w-full rounded-md border px-4 py-2 text-gray-900 shadow-sm 
               focus:ring-blue-200  text-sm transition`;

  // Events to notify parent components
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<PortfolioFormValue>();

  // Reactive form group
  form!: FormGroup;

  // Inject FormBuilder and PortfolioService
  constructor(private fb: FormBuilder, private portfolioService: PortfolioService) {}

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

  getErrorMessages(controlName:string):string[]{
    return FormErrorsUtils.getErrors(this.form.get(controlName)!);
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

      // Submit via service
      this.portfolioService.submitPortfolio(formValue);

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



