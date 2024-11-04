import { PaginationParams } from '@/core/repositories/pagination-params'
import { Specialty } from '@/domain/enterprise/entities/specialty'

export abstract class SpecialtyRepository {
  abstract findById(id: string): Promise<Specialty | null>
  abstract findByName(name: string): Promise<Specialty | null>
  abstract findAll(params: PaginationParams, name: string): Promise<Specialty[]>
  abstract create(specialty: Specialty): Promise<void>
  abstract delete(specialty: Specialty): Promise<void>
}
