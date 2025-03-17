import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private isOpen = false;

  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    try {
      if (this.isOpen) {
        return;
      }
      const ret = await this.sqlite.checkConnectionsConsistency();
      const isConn = (await this.sqlite.isConnection('mydatabase', false)).result;
      if (ret.result && isConn) {
        this.db = await this.sqlite.retrieveConnection('mydatabase', false);
      } else {
        this.db = await this.sqlite.createConnection('mydatabase', false, 'no-encryption', 1, false);
      }
      await this.db.open();
      this.isOpen = true;
      await this.createTables();
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  async createTables() {
    try {
      await this.executeSql(`
        CREATE TABLE IF NOT EXISTS Amigos (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          Nombre_apellidos TEXT NOT NULL,
          E_mail TEXT UNIQUE,
          Telefono TEXT
        );
      `);
      await this.executeSql(`
        CREATE TABLE IF NOT EXISTS Transacciones (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          Categoria_base TEXT NOT NULL,
          Categoria_concreta TEXT,
          Importe REAL NOT NULL,
          Concepto TEXT,
          ID_cuenta_cargo INTEGER,
          Fecha TEXT DEFAULT (datetime('now', 'localtime')),
          FOREIGN KEY (ID_cuenta_cargo) REFERENCES Cuentas(ID)
        );
      `);
      await this.executeSql(`
        CREATE TABLE IF NOT EXISTS Deudas (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          Amigos_vinculados TEXT NOT NULL,
          Categoria_base TEXT NOT NULL,
          Categoria_concreta TEXT,
          Importe REAL NOT NULL,
          Concepto TEXT,
          ID_cuenta_cargo INTEGER,
          Fecha TEXT DEFAULT (datetime('now', 'localtime')),
          FOREIGN KEY (ID_cuenta_cargo) REFERENCES Cuentas(ID)
        );
      `);
      await this.executeSql(`
        CREATE TABLE IF NOT EXISTS Pagos_Deudas (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          ID_deuda INTEGER,
          ID_cuenta_pago INTEGER,
          Importe_pagado REAL NOT NULL,
          Fecha_pago TEXT DEFAULT (datetime('now', 'localtime')),
          FOREIGN KEY (ID_deuda) REFERENCES Deudas(ID),
          FOREIGN KEY (ID_cuenta_pago) REFERENCES Cuentas(ID)
        );
      `);
      await this.executeSql(`
        CREATE TABLE IF NOT EXISTS Cuentas (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          Nombre_cuenta TEXT NOT NULL,
          Tipo_cuenta TEXT,
          Saldo REAL DEFAULT 0.0,
          Descripcion TEXT
        );
      `);
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

  //Este método es utilizado para ejecutar consultas sql
  async executeSql(sql: string, params?: boolean): Promise<any> {
    try {
      await this.initializeDatabase();
      return this.db.execute(sql, params);
    } catch (error) {
      console.error('Error executing SQL:', error);
      return null;
    }
  }

  async addFriend(nombre: string, email: string, telefono: string)
  {
    const sql = 'INSERT INTO Amigos (Nombre_apellidos, E_mail, Telefono) VALUES (?, ?, ?)';
    await this.executeSql(sql)
  }
}