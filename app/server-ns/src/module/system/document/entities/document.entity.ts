import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base';

export enum DocumentType {
  FILE = 'file',
  FOLDER = 'folder',
}

@Entity('sys_document', { comment: '文档表' })
export class DocumentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'document_id', comment: '文档ID' })
  public documentId: number;

  @Column({ type: 'varchar', length: 255, name: 'title', comment: '文档标题' })
  public title: string;

  @Column({ type: 'enum', enum: DocumentType, default: DocumentType.FILE, comment: '文档类型' })
  public type: DocumentType;

  @Column({ type: 'int', name: 'owner_id', comment: '作者和user_id' })
  public ownerId: number;

  @Column({ type: 'int', name: 'parent_id', comment: '父文档id', nullable: true })
  public parentId: number;

  @Column('simple-array', { name: 'children', comment: '子文档ids', nullable: true })
  public children: number[];

  @Column({ type: 'varchar', length: 255, name: 'icon', comment: '文档图标', nullable: true })
  public icon: string;

  @Column({ type: 'int', name: 'root_space_id', comment: '根空间ids', nullable: true })
  public rootSpaceId: number;

  @Column('simple-array', { name: 'blocks', comment: '内容block_ids', nullable: true })
  public blocks: number[];

  @Column('simple-array', { name: 'edit_session_ids', comment: '编辑当前会话用户ids', nullable: true })
  public editSessionIds: number[];

  @Column({ type: 'int', default: 0, comment: '文档排序', name: 'sort_order' })
  public sortOrder: number;

  @Column({ type: 'int', default: 1, comment: '文档当前版本' })
  public version: number;

  @Column('simple-array', { name: 'version_history_ids', comment: '历史版本ids', nullable: true })
  public versionHistoryIds: number[];

  @Column({ type: 'timestamp', name: 'last_viewed', comment: '最后查看时间', nullable: true })
  public lastViewed: Date;
}
