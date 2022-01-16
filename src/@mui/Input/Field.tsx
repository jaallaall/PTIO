import { Controller, ControllerProps, FieldError } from 'react-hook-form'
import style from './style.module.scss'

export const Field: React.FC<
    {
        name: string
        required?: boolean
        errors?: {
            [x: string]: {
                [x: string]: FieldError
            }
        }
        className?: string
        label?: string
    } & ControllerProps
> = ({
    name,
    required,
    errors,
    label,
    className,
    ...rest
}): React.ReactElement => {
    return (
        <div className={className}>
            {label && (
                <span style={{ marginTop: name === 'gender' ? 0 : '' }}>
                    {label}
                </span>
            )}
            <div>
                <Controller
                    name={name}
                    rules={{
                        required: required,
                    }}
                    {...rest}
                />
                {errors
                    ? errors[name] && (
                          <div className={style.error}>{name} is required.</div>
                      )
                    : null}
            </div>
        </div>
    )
}
