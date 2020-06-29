import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureSectionComponent } from './secure-section.component';

describe('SecureSectionComponent', () => {
  let component: SecureSectionComponent;
  let fixture: ComponentFixture<SecureSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
