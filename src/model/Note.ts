import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
    tableName: Note.NOTE_TABLE_NAME,
})

export default class Note extends Model {
    public static NOTE_TABLE_NAME = 'note' as string

    public static NOTE_ID = 'id' as string
    public static NOTE_TITLE = 'title' as string
    public static NOTE_CONTENT = 'content' as string

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: Note.NOTE_ID,
    })
    id!: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: Note.NOTE_TITLE,
    })
    title!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: Note.NOTE_CONTENT,
    })
    content!: string
}