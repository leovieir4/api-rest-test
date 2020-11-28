import { RequiredFieldValidation } from '../../presentation/helper/validatiors/required-field-validation'
import { Validation } from '../../presentation/helper/validatiors/validation'
import { ValidationComposite } from '../../presentation/helper/validatiors/validation-composite'
import { makeSignUpValidation } from './signup-validation'

jest.mock('../../presentation/helper/validatiors/validation-composite')

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
