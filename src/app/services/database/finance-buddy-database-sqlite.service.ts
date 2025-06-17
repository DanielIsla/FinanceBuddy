import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})

export class FinanceBuddyDatabaseSQLiteService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private isOpen = false;

  async initializeDatabase(): Promise<void> {
    try {
      const isConn = (await this.sqlite.isConnection('financebuddydb', false)).result;

      if (isConn) {
        this.db = await this.sqlite.retrieveConnection('financebuddydb', false);
      } else {
        this.db = await this.sqlite.createConnection('financebuddydb', false, 'no-encryption', 1, false);
      }

      await this.db.open();

      await this.createTables();
    } catch (err) {
      console.error('Error initializing database:', err);
    }
  }

  private async ensureDbOpen(): Promise<void> {
    if (!this.db) {
      const isConn = (await this.sqlite.isConnection('financebuddydb', false)).result;
      if (isConn) {
        this.db = await this.sqlite.retrieveConnection('financebuddydb', false);
        await this.db.open();
      } else {
        await this.initializeDatabase();
      }
    } else {
      const isOpen = await this.db.isDBOpen();
      if (!isOpen) {
        await this.db.open();
      }
    }
  }




  async createTables() {
    try {
      await this.executeSql(`
            CREATE TABLE IF NOT EXISTS Friends (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                FullName TEXT NOT NULL,
                Email TEXT UNIQUE,
                Phone TEXT
            );
        `);
      await this.executeSql(`
            CREATE TABLE IF NOT EXISTS Transactions (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                BaseCategory TEXT NOT NULL,
                SpecificCategory TEXT,
                Amount REAL NOT NULL,
                Concept TEXT,
                AccountID INTEGER,
                Date TEXT DEFAULT (datetime('now', 'localtime')),
                FOREIGN KEY (AccountID) REFERENCES Accounts(ID)
            );
        `);
      await this.executeSql(`
            CREATE TABLE IF NOT EXISTS Debts (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                LinkedFriends TEXT NOT NULL,
                BaseCategory TEXT NOT NULL,
                SpecificCategory TEXT,
                Amount REAL NOT NULL,
                Concept TEXT,
                AccountID INTEGER,
                Date TEXT DEFAULT (datetime('now', 'localtime')),
                FOREIGN KEY (AccountID) REFERENCES Accounts(ID)
            );
        `);
      await this.executeSql(`
            CREATE TABLE IF NOT EXISTS DebtPayments (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                DebtID INTEGER,
                PaymentAccountID INTEGER,
                AmountPaid REAL NOT NULL,
                PaymentDate TEXT DEFAULT (datetime('now', 'localtime')),
                FOREIGN KEY (DebtID) REFERENCES Debts(ID),
                FOREIGN KEY (PaymentAccountID) REFERENCES Accounts(ID)
            );
        `);
      await this.executeSql(`
            CREATE TABLE IF NOT EXISTS Accounts (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                AccountName TEXT NOT NULL,
                AccountType TEXT,
                IBAN TEXT,
                Currency TEXT,
                Balance REAL DEFAULT 0.0,
                Bank_tint TEXT
            );
        `);
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

  //Este método es utilizado para ejecutar consultas sql
  async executeSql(sql: string, params: any[] = []): Promise<any> {
    try {
      await this.ensureDbOpen();
      return this.db!.run(sql, params);
    } catch (error) {
      console.error('Error executing SQL:', error);
    }
  }
}