import clsx from 'clsx'
import { forwardRef } from 'react'
import { FieldError, ControllerRenderProps, FieldValues } from 'react-hook-form'
import style from './style.module.scss'

interface Props {
    errors?: {
        [x: string]: {
            [x: string]: FieldError
        }
    }
    name?: string
    defaultValue?: string | number | readonly string[]
    placeholder?: string
    field?: ControllerRenderProps<FieldValues, string>
    value?: string | number | readonly string[]
    type?: React.HTMLInputTypeAttribute
}

export const Input = forwardRef(
    (
        {
            name,
            errors,
            defaultValue,
            placeholder,
            value,
            type,
            ...field
        }: Props,
        ref: React.LegacyRef<HTMLInputElement>
    ): React.ReactElement => (
        <input
            defaultValue={defaultValue}
            // {...register(name, { required: required })}
            className={clsx(
                style['form-control'],
                errors && errors[name ?? ''] ? style.red : ''
            )}
            placeholder={placeholder}
            name={name}
            id="input"
            value={value}
            ref={ref}
            type={type}
            {...field}
        />
    )
)
