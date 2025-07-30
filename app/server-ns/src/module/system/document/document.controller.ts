import { Controller, Get, Post, Body, Put, Param, Query, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { DocumentService } from './document.service';
import { DocumentEntity } from './entities/document.entity';
import { DocumentBlockEntity } from './entities/document-block.entity';

@ApiTags('文档管理')
@ApiBearerAuth()
@Controller('system/document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @ApiOperation({ summary: '创建文档' })
  @ApiBody({ type: DocumentEntity })
  @Post()
  create(@Body() data: Partial<DocumentEntity>) {
    return this.documentService.createDocument(data);
  }

  @ApiOperation({ summary: '根据ID查找文档' })
  @Get(':documentId')
  findOne(@Param('documentId') documentId: string) {
    return this.documentService.findDocumentById(+documentId);
  }

  @ApiOperation({ summary: '查找某用户的所有文档' })
  @Get('owner/:ownerId')
  findByOwner(@Param('ownerId') ownerId: string) {
    return this.documentService.findDocumentsByOwner(+ownerId);
  }

  @ApiOperation({ summary: '更新文档' })
  @ApiBody({ type: DocumentEntity })
  @Put(':documentId')
  update(@Param('documentId') documentId: string, @Body() data: Partial<DocumentEntity>) {
    return this.documentService.updateDocument(+documentId, data);
  }

  @ApiOperation({ summary: '删除文档' })
  @Delete(':documentId')
  remove(@Param('documentId') documentId: string) {
    return this.documentService.deleteDocument(+documentId);
  }

  // 文档块相关
  @ApiOperation({ summary: '创建文档块' })
  @ApiBody({ type: DocumentBlockEntity })
  @Post('block')
  createBlock(@Body() data: Partial<DocumentBlockEntity>) {
    return this.documentService.createBlock(data);
  }

  @ApiOperation({ summary: '根据ID查找文档块' })
  @Get('block/:blockId')
  findBlock(@Param('blockId') blockId: string) {
    return this.documentService.findBlockById(+blockId);
  }

  @ApiOperation({ summary: '查找某文档的所有块' })
  @Get(':documentId/blocks')
  findBlocksByDocument(@Param('documentId') documentId: string) {
    return this.documentService.findBlocksByDocument(+documentId);
  }

  @ApiOperation({ summary: '更新文档块' })
  @ApiBody({ type: DocumentBlockEntity })
  @Put('block/:blockId')
  updateBlock(@Param('blockId') blockId: string, @Body() data: Partial<DocumentBlockEntity>) {
    return this.documentService.updateBlock(+blockId, data);
  }

  @ApiOperation({ summary: '删除文档块' })
  @Delete('block/:blockId')
  removeBlock(@Param('blockId') blockId: string) {
    return this.documentService.deleteBlock(+blockId);
  }
}
