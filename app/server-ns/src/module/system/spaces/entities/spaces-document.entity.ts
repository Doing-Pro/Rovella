import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('sys_space_document', { comment: '空间-文档关联表' })
export class SpaceDocumentEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '主键ID' })
  public id: number;

  @Column({ type: 'int', name: 'space_id', comment: '空间ID' })
  public spaceId: number;

  @Column({ type: 'int', name: 'document_id', comment: '文档ID' })
  public documentId: number;
}
