import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesController } from './spaces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceEntity } from './entities/spaces.entity';
import { SpaceDocumentEntity } from './entities/spaces-document.entity';
import { SpaceMemberEntity } from './entities/spaces-members.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpaceEntity, SpaceDocumentEntity, SpaceMemberEntity])],
  controllers: [SpacesController],
  providers: [SpacesService],
})
export class DocumentModule {}
