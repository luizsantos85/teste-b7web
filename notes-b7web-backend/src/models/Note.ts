import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/database/mysql';

interface NoteInstance extends Model {
   id: number;
   title: string;
   content: string;
   bg_color: string;
   text_color: string;
}

export const Note = sequelize.define<NoteInstance>(
    "Note",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        bg_color: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '#ffffff'
        },
        text_color: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '#000000'
        },
    },
    {
        timestamps: false,
        tableName:'notes'
    }
)