import React from 'react'
import Input from '@/components/input'
import { useForm } from 'react-hook-form'
import { setCallback } from '@/api'
import { toast } from 'react-toastify'

const SchoolForm = ({ our_schools, school, setIsShown }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    setCallback(data)
      .then(() => {
        setIsShown(false)
        toast.success(our_schools?.toast?.success)
      })
      .catch(() => {
        toast.error(our_schools?.toast?.error)
      })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="school-form">
      <h3>{our_schools?.form_title}</h3>
      <Input
        isInvalid={!!errors?.name}
        register={register('name', { required: true })}
        placeholder={our_schools?.name?.placeholder}
        label={our_schools?.name?.label}
      />
      <Input
        type={'number'}
        isInvalid={!!errors?.phone}
        register={register('phone', { required: true })}
        placeholder={our_schools?.phone?.placeholder}
        label={our_schools?.phone?.label}
      />
      <Input
        isInvalid={!!errors?.age}
        type={'number'}
        register={register('age', { required: true })}
        placeholder={our_schools?.age?.placeholder}
        label={our_schools?.age?.label}
      />
      <Input
        isInvalid={!!errors?.country}
        register={register('country', { required: true })}
        placeholder={our_schools?.country?.placeholder}
        label={our_schools?.country?.label}
      />

      <button>Send</button>
    </form>
  )
}

export default SchoolForm
