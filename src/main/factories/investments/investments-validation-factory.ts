import { RequiredFieldValidation, ValidationComposite } from '../../../presentation/helper/validators'
import { Validation } from '../../../presentation/protocols/validation'
export const makeInvestmentsValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['type', 'userId', 'value']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
