import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentBlockEntity } from './entities/document-block.entity';
import { DocumentEntity } from './entities/document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentBlockEntity, DocumentEntity])],
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentModule {}
