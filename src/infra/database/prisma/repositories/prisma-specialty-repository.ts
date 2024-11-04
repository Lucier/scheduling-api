import { SpecialtyRepository } from '@/domain/application/repositories/specialty-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Specialty } from '@/domain/enterprise/entities/specialty'
import { PrismaSpecialtyMapper } from '../mappers/prisma-specialty-mappers'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { aw } from 'vitest/dist/chunks/reporters.anwo7Y6a'

@Injectable()
export class PrismaSpecialtyRepository implements SpecialtyRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Specialty | null> {
    const specialty = await this.prisma.specialty.findUnique({
      where: {
        id,
      },
    })

    if (!specialty) {
      return null
    }
    return PrismaSpecialtyMapper.toDomain(specialty)
  }

  async findByName(name: string): Promise<Specialty | null> {
    const specialty = await this.prisma.specialty.findFirst({
      where: { 
        name
       }
    })

    if(!specialty) {
      return null
    }

    return  PrismaSpecialtyMapper.toDomain(specialty)
  }

  async findAll({ page }: PaginationParams, name: string): Promise<Specialty[]> {
    const specialtys = await this.prisma.specialty.findMany({
      where: {
        name
      },
      take: 20,
      skip: (page -1) * 20
    })

    return specialtys.map(PrismaSpecialtyMapper.toDomain)
  }

  async create(specialty: Specialty): Promise<void> {
    const data = PrismaSpecialtyMapper.toPrisma(specialty)

    await this.prisma.specialty.create({
      data
    })
  }

  async delete(specialty: Specialty): Promise<void> {
    const data = PrismaSpecialtyMapper.toPrisma(specialty)

    await this.prisma.specialty.delete({
      where: {
        id: data.id,
      }
    })
  }
}
