import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    description: string;

    @Column()
    completed: boolean;

    constructor(description: string, completed: boolean) {
        this.completed = completed;
        this.description = description;
    }
}