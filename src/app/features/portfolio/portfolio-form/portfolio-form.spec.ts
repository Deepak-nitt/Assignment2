import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFormComponent } from './portfolio-form';

describe('PortfolioFormComponent', () => {
  let component: PortfolioFormComponent;
  let fixture: ComponentFixture<PortfolioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioFormComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
