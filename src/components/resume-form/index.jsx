import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/components/input'
import Checkbox from '@/components/checkbox'
import FileInput from '@/components/file-input'
import { setResume } from '@/api'
import { toast } from 'react-toastify'

const ResumeForm = ({ setIsShown, vacancy_title, certificates, fields_text }) => {
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    data.title = vacancy_title
    data.certificates = data.certificates.join(', ')
    const formData = new FormData()
    Array.from(Object.keys(data)).forEach((key) => {
      formData.append(key, data[key])
    })
    setResume(formData)
      .then(() => {
        toast.success('Вакансия успешно отправлена')
        reset()
        setIsShown('')
      })
      .catch(() => {
        toast.error('Что-то пошло не такю Попробуйте позже')
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'vacancy-form'}>
      <div className="name-age">
        <Input
          isInvalid={!!errors?.name}
          register={register('name', { required: true })}
          placeholder={fields_text?.name?.placeholder}
          label={fields_text?.name?.label}
        />
        <Input
          isInvalid={!!errors?.age}
          type={'number'}
          register={register('age', { required: true })}
          placeholder={fields_text?.age?.placeholder}
          label={fields_text?.age?.label}
        />
      </div>
      <Input
        isInvalid={!!errors?.education1}
        register={register('education1', { required: true })}
        placeholder={fields_text?.education_1?.placeholder}
        label={fields_text?.education_1?.label}
      />
      <Input
        isInvalid={!!errors?.education2}
        register={register('education2')}
        placeholder={fields_text?.education_2?.placeholder}
        label={fields_text?.education_2?.label}
      />{' '}
      <Input
        isInvalid={!!errors?.education3}
        register={register('education3')}
        placeholder={fields_text?.education_3?.placeholder}
        label={fields_text?.education_3?.label}
      />
      <Input
        isInvalid={!!errors?.experience}
        textarea
        register={register('experience', { required: true })}
        placeholder={fields_text?.experience?.placeholder}
        label={fields_text?.experience?.label}
      />
      <Input
        isInvalid={!!errors?.english}
        register={register('english', { required: true })}
        placeholder={fields_text?.english?.placeholder}
        label={fields_text?.english?.label}
      />
      <div className="phone-email">
        <Input
          isInvalid={!!errors?.phone}
          type={'tel'}
          register={register('phone', { required: true })}
          placeholder={fields_text?.phone?.placeholder}
          label={fields_text?.phone?.label}
        />
        <Input
          isInvalid={!!errors?.email}
          type={'email'}
          register={register('email', { required: true })}
          placeholder={fields_text?.email?.placeholder}
          label={fields_text?.email?.label}
        />
      </div>
      <div>
        <p className="certificates-label">{fields_text.certificates}</p>
        <div className="certificates">
          {certificates.map((cerf, i) => (
            <div className="d-flex align-items-center gap-5">
              <Checkbox
                setValue={(e) => {
                  setValue(`certificates.${i}`, e ? cerf.title : null)
                }}
              />
              <p>{cerf.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="certificates-label">{fields_text.other}</p>

        <FileInput text={fields_text?.file} register_key={'cv'} setValue={setValue} />
      </div>
      <button>send</button>
    </form>
  )
}

export default ResumeForm
