import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAccessTreeComponent } from './role-access-tree.component';

describe('RoleAccessTreeComponent', () => {
  let component: RoleAccessTreeComponent;
  let fixture: ComponentFixture<RoleAccessTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAccessTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAccessTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
