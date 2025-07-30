import { Repository } from 'typeorm';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultData } from 'src/common/utils/result';
import { SpaceEntity } from './entities/spaces.entity';
import { SpaceMemberEntity } from './entities/spaces-members.entity';

@Injectable()
export class SpacesService {
  constructor(
    @InjectRepository(SpaceEntity)
    private readonly spaceRepo: Repository<SpaceEntity>,
    @InjectRepository(SpaceMemberEntity)
    private readonly spaceMemberRepo: Repository<SpaceMemberEntity>,
  ) {}

  /** 创建空间 */
  async createSpace(data: Partial<SpaceEntity>) {
    const space = this.spaceRepo.create(data);
    const saved = await this.spaceRepo.save(space);
    return ResultData.ok(saved);
  }

  /** 根据ID查找空间 */
  async findSpaceById(id: number) {
    const space = await this.spaceRepo.findOne({ where: { id } });
    return ResultData.ok(space);
  }

  /** 查找某个用户拥有的所有空间 */
  async findSpacesByOwner(ownerId: number) {
    const spaces = await this.spaceRepo.find({ where: { ownerId } });
    return ResultData.ok(spaces);
  }

  /** 更新空间 */
  async updateSpace(id: number, data: Partial<SpaceEntity>) {
    const result = await this.spaceRepo.update({ id }, data);
    return ResultData.ok(result);
  }

  /** 删除空间 */
  async deleteSpace(id: number) {
    const result = await this.spaceRepo.delete({ id });
    return ResultData.ok(result);
  }

  /** 添加成员 */
  async addMember(spaceId: number, userId: number, role = 0) {
    const member = this.spaceMemberRepo.create({ spaceId, userId, role });
    const saved = await this.spaceMemberRepo.save(member);
    return ResultData.ok(saved);
  }

  /** 查询空间成员 */
  async getMembers(spaceId: number) {
    const members = await this.spaceMemberRepo.find({ where: { spaceId } });
    return ResultData.ok(members);
  }

  /** 移除成员 */
  async removeMember(spaceId: number, userId: number) {
    const result = await this.spaceMemberRepo.delete({ spaceId, userId });
    return ResultData.ok(result);
  }

  /** 查询用户所有空间（通过成员表） */
  async getUserSpaces(userId: number) {
    const memberships = await this.spaceMemberRepo.find({ where: { userId } });
    const spaceIds = memberships.map((m) => m.spaceId);
    if (spaceIds.length === 0) return ResultData.ok([]);
    const spaces = await this.spaceRepo.findByIds(spaceIds);
    return ResultData.ok(spaces);
  }
}
