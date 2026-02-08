import * as yup from 'yup'
import { useI18n } from 'vue-i18n'

export const useValidationSchemas = () => {
  const { t } = useI18n()

  const subscribeSchema = yup.object({
    email: yup
      .string()
      .required(() => t('footer.subscribe.validations.email.required'))
      .email(() => t('footer.subscribe.validations.email.invalid'))
  })

  const contactSchema = yup.object({
    fullName: yup
      .string()
      .required(() => t('contact_page.form.validations.fullName.required'))
      .min(2, () => t('contact_page.form.validations.fullName.min')),

    subject: yup
      .string()
      .required(() => t('contact_page.form.validations.subject.required'))
      .min(5, () => t('contact_page.form.validations.subject.min')),

    phone: yup
      .string()
      .required(() => t('contact_page.form.validations.phone.required'))
      .min(10, () => t('contact_page.form.validations.phone.min'))
      .matches(/^[0-9+\-\s()]+$/, () => t('contact_page.form.validations.phone.invalid')),

    email: yup
      .string()
      .required(() => t('contact_page.form.validations.email.required'))
      .email(() => t('contact_page.form.validations.email.invalid')),

    message: yup
      .string()
      .required(() => t('contact_page.form.validations.message.required'))
      .min(10, () => t('contact_page.form.validations.message.min'))
  })


  const loginSchema = yup.object({
    email: yup
      .string()
      .required(() => t('login_page.validations.email.required'))
      .email(() => t('login_page.validations.email.invalid'))
  })

  return { 
    subscribeSchema, 
    contactSchema ,
    loginSchema
  }
}


