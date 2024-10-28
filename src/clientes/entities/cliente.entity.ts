import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('increment')
  id: number;
    
  @Column()
  nome: string;
    
  @Column()
  email: string;
    
  @Column()
  telefone: string;
}
