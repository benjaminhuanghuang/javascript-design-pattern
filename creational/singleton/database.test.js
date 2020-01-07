import Database from './database';

describe('singleton: database test', () => {
  it('same instance', () => {
    const mongo = new Database('mongo');
    expect(mongo.getData()).toEqual('mongo');
    
    const mysql = new Database('mysql');
    expect(mongo.getData()).toEqual('mongo');
  });
});
