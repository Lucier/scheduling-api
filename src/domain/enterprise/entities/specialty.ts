import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export interface SpecialtyProps {
  name: string
  description: string
}

export class Specialty extends Entity<SpecialtyProps> {
  get name() {
    return this.props.name
  }

  get description() {
    return this.props.description
  }

  static create(props: SpecialtyProps, id?: UniqueEntityId) {
    const specialty = new Specialty(props, id)

    return specialty
  }
}
