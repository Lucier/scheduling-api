import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Specialty } from '@/domain/enterprise/entities/specialty'
import { Prisma, Specialty as PrismaSpecialty } from '@prisma/client'

export class PrismaSpecialtyMapper {
  static toDomain(raw: PrismaSpecialty): Specialty {
    return Specialty.create(
      {
        name: raw.name,
        description: raw.description,
      },
      new UniqueEntityId(raw.id),
    )
  }

  static toPrisma(specialty: Specialty): Prisma.SpecialtyUncheckedCreateInput {
    return {
      id: specialty.id.toString(),
      name: specialty.name.toString(),
      description: specialty.description.toString(),
    }
  }
}
