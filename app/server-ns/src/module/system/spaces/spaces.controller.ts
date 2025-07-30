import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { SpacesService } from './spaces.service';
import { SpaceEntity } from './entities/spaces.entity';
import { SpaceMemberEntity } from './entities/spaces-members.entity';

@ApiTags('空间管理')
@ApiBearerAuth()
@Controller('system/spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @ApiOperation({ summary: '创建空间' })
  @ApiBody({ type: SpaceEntity })
  @Post()
  create(@Body() data: Partial<SpaceEntity>) {
    return this.spacesService.createSpace(data);
  }

  @ApiOperation({ summary: '根据ID查找空间' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spacesService.findSpaceById(+id);
  }

  @ApiOperation({ summary: '查找某用户拥有的所有空间' })
  @Get('owner/:ownerId')
  findByOwner(@Param('ownerId') ownerId: string) {
    return this.spacesService.findSpacesByOwner(+ownerId);
  }

  @ApiOperation({ summary: '更新空间' })
  @ApiBody({ type: SpaceEntity })
  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<SpaceEntity>) {
    return this.spacesService.updateSpace(+id, data);
  }

  @ApiOperation({ summary: '删除空间' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spacesService.deleteSpace(+id);
  }

  // 成员相关
  @ApiOperation({ summary: '添加成员' })
  @ApiBody({ type: SpaceMemberEntity })
  @Post(':spaceId/member')
  addMember(@Param('spaceId') spaceId: string, @Body() data: { userId: number; role?: number }) {
    return this.spacesService.addMember(+spaceId, data.userId, data.role);
  }

  @ApiOperation({ summary: '查询空间成员' })
  @Get(':spaceId/members')
  getMembers(@Param('spaceId') spaceId: string) {
    return this.spacesService.getMembers(+spaceId);
  }

  @ApiOperation({ summary: '移除成员' })
  @Delete(':spaceId/member/:userId')
  removeMember(@Param('spaceId') spaceId: string, @Param('userId') userId: string) {
    return this.spacesService.removeMember(+spaceId, +userId);
  }

  @ApiOperation({ summary: '查询用户所有空间（成员表）' })
  @Get('user/:userId')
  getUserSpaces(@Param('userId') userId: string) {
    return this.spacesService.getUserSpaces(+userId);
  }
}
