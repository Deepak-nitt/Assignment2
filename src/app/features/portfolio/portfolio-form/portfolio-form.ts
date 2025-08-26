import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from '../../../core/services/portfolio.services';
import { ValidationUtils } from '../../../core/utils/validation.utils';
import { PortfolioFormValue } from '../models/portfolio.model';

@Component({
  selector: 'app-portfolio-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './portfolio-form.html',
  styleUrls: ['./portfolio-form.css'],
})
export class PortfolioFormComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<PortfolioFormValue>();

  form!: FormGroup;

  constructor(private fb: FormBuilder, private portfolioService: PortfolioService) {}

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

  onSubmit(): void {
    if (this.form.valid) {
      const raw = this.form.getRawValue();

      const formValue: PortfolioFormValue = {
        name: raw.name.trim(),
        skillsCsv: ValidationUtils.parseSkills(raw.skillsCsv).join(', '),
        projectTitle: raw.projectTitle.trim(),
        projectDescription: raw.projectDescription.trim(),
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



