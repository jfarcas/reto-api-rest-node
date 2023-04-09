import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

export interface IJoke {
    id: string;
    joke: string;
    type: string;
}

@Entity()
export class Joke {
    @PrimaryGeneratedColumn()
    number!: number;

    @Column()
    joke!: string;

    @Column()
    type!: string;
}
