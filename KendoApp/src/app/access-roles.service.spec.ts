import { TestBed, inject } from '@angular/core/testing';

import { AccessRolesService } from './access-roles.service';

describe('AccessRolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessRolesService]
    });
  });

  it('should be created', inject([AccessRolesService], (service: AccessRolesService) => {
    expect(service).toBeTruthy();
  }));
});
