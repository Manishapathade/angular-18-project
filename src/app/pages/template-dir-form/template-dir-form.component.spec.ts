import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDirFormComponent } from './template-dir-form.component';

describe('TemplateDirFormComponent', () => {
  let component: TemplateDirFormComponent;
  let fixture: ComponentFixture<TemplateDirFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDirFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
