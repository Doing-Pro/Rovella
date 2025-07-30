import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base';

@Entity('sys_document_block', { comment: '文档内容块表' })
export class DocumentBlockEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'block_id', comment: '内容块ID' })
  public blockId: number;

  @Column({ type: 'json', name: 'content', comment: '内容json' })
  public content: any;

  @Column({ type: 'int', name: 'content_size', comment: '内容大小' })
  public contentSize: number;

  @Column({ type: 'int', name: 'character_count', comment: '字符数', nullable: true })
  public characterCount: number;

  @Column({ type: 'int', name: 'word_count', comment: '单词数', nullable: true })
  public wordCount: number;

  @Column({ type: 'int', name: 'document_id', comment: '所属文档ID', nullable: true })
  public documentId: number;
}
