import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

enum SPACE_ROLE {
  OWNER,
  ADMIN,
  EDITOR,
  VIEWER,
  GUEST,
}

@Entity('sys_space_member', { comment: '空间成员表' })
export class SpaceMemberEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '主键ID' })
  public id: number;

  @Column({ type: 'int', name: 'space_id', comment: '空间ID' })
  public spaceId: number;

  @Column({ type: 'int', name: 'user_id', comment: '用户ID' })
  public userId: number;

  @Column({ type: 'enum', enum: SPACE_ROLE, default: SPACE_ROLE.VIEWER, name: 'role', comment: '成员角色' })
  public role: SPACE_ROLE;
}
