import { TestBed } from '@angular/core/testing';

import { FinanceBuddyDatabaseSQLiteService } from './finance-buddy-database-sqlite.service';

describe('FinanceBuddyDatabaseSQLiteService', () => {
  let service: FinanceBuddyDatabaseSQLiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceBuddyDatabaseSQLiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
