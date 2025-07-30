import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base';

enum SPACE_TYPE {
  WORKSPACE,
  PROJECT,
  PERSONAL,
}

@Entity('sys_space', { comment: '空间表' })
export class SpaceEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '空间ID' })
  public id: number;

  @Column({ type: 'varchar', length: 255, name: 'name', comment: '空间名称' })
  public name: string;

  @Column({ type: 'varchar', length: 1024, name: 'description', comment: '空间描述', nullable: true })
  public description: string;

  @Column({ type: 'varchar', length: 255, name: 'icon', comment: '空间图标', nullable: true })
  public icon: string;

  @Column({ type: 'enum', enum: SPACE_TYPE, default: SPACE_TYPE.WORKSPACE, name: 'type', comment: '空间类型' })
  public type: SPACE_TYPE;

  @Column({ type: 'boolean', default: false, name: 'is_public', comment: '是否公开' })
  public isPublic: boolean;

  @Column({ type: 'int', name: 'owner_id', comment: '拥有者user_id' })
  public ownerId: number;
}
