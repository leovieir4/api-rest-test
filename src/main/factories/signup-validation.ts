import { CompareFieldsValidation } from '../../presentation/helper/validatiors/compare-fields-validation'
import { RequiredFieldValidation } from '../../presentation/helper/validatiors/required-field-validation'
import { Validation } from '../../presentation/helper/validatiors/validation'
import { ValidationComposite } from '../../presentation/helper/validatiors/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  return new ValidationComposite(validations)
}
