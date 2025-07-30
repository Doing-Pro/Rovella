import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultData } from 'src/common/utils/result';
import { DocumentEntity } from './entities/document.entity';
import { DocumentBlockEntity } from './entities/document-block.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(DocumentEntity)
    private readonly documentRepo: Repository<DocumentEntity>,
    @InjectRepository(DocumentBlockEntity)
    private readonly blockRepo: Repository<DocumentBlockEntity>,
  ) {}

  /** 创建文档 */
  async createDocument(data: Partial<DocumentEntity>) {
    const doc = this.documentRepo.create(data);
    const saved = await this.documentRepo.save(doc);
    return ResultData.ok(saved);
  }

  /** 根据ID查找文档 */
  async findDocumentById(documentId: number) {
    const doc = await this.documentRepo.findOne({ where: { documentId } });
    return ResultData.ok(doc);
  }

  /** 查找某个用户的所有文档 */
  async findDocumentsByOwner(ownerId: number) {
    const docs = await this.documentRepo.find({ where: { ownerId } });
    return ResultData.ok(docs);
  }

  /** 更新文档 */
  async updateDocument(documentId: number, data: Partial<DocumentEntity>) {
    const result = await this.documentRepo.update({ documentId }, data);
    return ResultData.ok(result);
  }

  /** 删除文档 */
  async deleteDocument(documentId: number) {
    const result = await this.documentRepo.delete({ documentId });
    return ResultData.ok(result);
  }

  /** 创建文档块 */
  async createBlock(data: Partial<DocumentBlockEntity>) {
    const block = this.blockRepo.create(data);
    const saved = await this.blockRepo.save(block);
    return ResultData.ok(saved);
  }

  /** 根据ID查找文档块 */
  async findBlockById(blockId: number) {
    const block = await this.blockRepo.findOne({ where: { blockId } });
    return ResultData.ok(block);
  }

  /** 查找某文档的所有块 */
  async findBlocksByDocument(documentId: number) {
    const blocks = await this.blockRepo.find({ where: { documentId } });
    return ResultData.ok(blocks);
  }

  /** 更新文档块 */
  async updateBlock(blockId: number, data: Partial<DocumentBlockEntity>) {
    const result = await this.blockRepo.update({ blockId }, data);
    return ResultData.ok(result);
  }

  /** 删除文档块 */
  async deleteBlock(blockId: number) {
    const result = await this.blockRepo.delete({ blockId });
    return ResultData.ok(result);
  }
}
