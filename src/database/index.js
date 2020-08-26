import Sequelize from 'sequelize'
import sqlite from "sqlite3";
import path from "path"
import {
    app,
    remote
} from "electron"


//Models/Tables
import campaigns from "./campaigns";


//Sql file path
//If we have access to remote this module was loaded from the renderer otherwise its from background.
let db_path = path.join(remote ? remote.app.getPath("documents") : app.getPath("documents"), "app", "db.sqlite");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    dialectModule: sqlite, //Important, if we dont do it this way, electron-builder wont include sqlite.
    storage: db_path
});


let db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.campaigns = campaigns(db.sequelize, db.Sequelize);

export default db