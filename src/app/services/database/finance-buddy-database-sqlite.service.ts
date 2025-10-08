import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})

export class FinanceBuddyDatabaseSQLiteService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private isOpen = false;

  // Initializes the database and creates the tables if they don't exist
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

  //Make sure that the database is open before doing any operations
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

  //Create the needed tables
  async createTables() {
    try {
      //------- TABLE FRIENDS -------
      await this.executeSql(`
            CREATE TABLE IF NOT EXISTS Friends (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                FullName TEXT NOT NULL,
                Email TEXT UNIQUE,
                Phone TEXT
            );
        `);
      //------- TABLE TRANSACTIONS -------  
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
      
      //------- TABLE DEBTS -------  
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

      //------- TABLE DEBT PAYMENTS -------
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

      //------- TABLE ACCOUNTS (bank/cash accounts) -------  
      await this.executeSql(`
            CREATE TABLE IF NOT EXISTS Accounts (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                AccountName TEXT NOT NULL,
                BankCode TEXT,
                IBAN TEXT,
                Currency TEXT,
                Balance REAL DEFAULT 0.0
            );
        `);
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

  //This method is used to execute SQL queries
  async executeSql(sql: string, params: any[] = []): Promise<any> {
    try {
      await this.ensureDbOpen();
      return this.db!.run(sql, params);
    } catch (error) {
      console.error('Error executing SQL:', error);
    }
  }

  //------- COMMON OPERATIONS ON TABLES -------
  // ACCOUNTS TABLE
  async createAccount(AccountName: string, BankCode: string, IBAN: string, Currency: string, Balance: number) {
    try {
      await this.ensureDbOpen();
      return this.db!.run('INSERT INTO Accounts (AccountName, BankCode, IBAN, Currency, Balance) VALUES (?, ?, ?, ?, ?)', [AccountName, BankCode, IBAN, Currency, Balance]);
    } catch (error) {
      console.error('Error creating account:', error);
      return null;
    }
  }

  //Get all the accounts from the database accounts table
  async getAccounts() {
    try {
      await this.ensureDbOpen();
      return this.db!.query('SELECT * FROM Accounts');
    } catch (error) {
      console.error('Error getting accounts:', error);
      return null;
    }
  }

  //Self explanatory
  async getAccountDetailsByID(id: number) {
    try {
      await this.ensureDbOpen();
      return this.db!.query('SELECT * FROM Accounts WHERE ID = ?', [id]);
    } catch (error) {
      console.error('Error getting account details:', error);
      return null;
    }
  }

  //Self explanatory
  async deleteAccountByID(id: number) {
    try {
      await this.ensureDbOpen();
      return this.db!.run('DELETE FROM Accounts WHERE ID = ?', [id]);
    } catch (error) {
      console.error('Error deleting account:', error);
      return null;
    }
  }

  //------- TRANSACTIONS TABLE -------
  async createTransaction(BaseCategory: string, SpecificCategory: string, Amount: number, Concept: string, AccountID: number) {
    try {
      await this.ensureDbOpen();
      return this.db!.run('INSERT INTO Transactions (BaseCategory, SpecificCategory, Amount, Concept, AccountID) VALUES (?, ?, ?, ?, ?)', [BaseCategory, SpecificCategory, Amount, Concept, AccountID]);
    } catch (error) {
      console.error('Error creating transaction:', error);
      return null;
    }
  }

  //------- DEBTS TABLE -------

  //Get all the debts from the table debts, to show them on page load
  async getDebts() {
    try {
      await this.ensureDbOpen();
      return this.db!.query('SELECT * FROM Debts');
    } catch (error) {
      console.error('Error getting debts:', error);
      return null;
    }
  }

  async getDebtPayments() {
    try {
      await this.ensureDbOpen();
      return this.db!.query('SELECT * FROM DebtPayments');
    } catch (error) {
      console.error('Error getting debt payments:', error);
      return null;
    }
  }


  //------- FRIENDS TABLE -------
  //Creates a new friend
  async createFriend(FullName: string, Email: string, Phone: string) {
    try {
      await this.ensureDbOpen();
      return this.db!.run('INSERT INTO Friends (FullName, Email, Phone) VALUES (?, ?, ?)', [FullName, Email, Phone]);
    } catch (error) {
      console.error('Error creating friend:', error);
      return null;
    }
  }

  //Get all the friends from the table friends
  async getFriends() {
    try {
      await this.ensureDbOpen();
      return this.db!.query('SELECT * FROM Friends');
    } catch (error) {
      console.error('Error getting friends:', error);
      return null;
    }
  }

  async updateFriend(FriendID: number, FullName: string, Email: string, Phone: string) {
    try {
      await this.ensureDbOpen();
      return this.db!.run('UPDATE Friends SET FullName = ?, Email = ?, Phone = ? WHERE ID = ?', [FullName, Email, Phone, FriendID]);
    } catch (error) {
      console.error('Error updating friend:', error);
      return null;
    }
  }
}