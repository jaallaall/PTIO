import style from './style.module.scss'

export const Checkbox: React.FC<{
    id: string
    name: string
    label: string
    value: string | number | readonly string[]
    checked?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
}> = ({ id, name, value, label, checked, onChange }): React.ReactElement => {
    return (
        <label htmlFor={id} className={style.radio}>
            <input
                type="radio"
                name={name}
                value={value}
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <span className={style.checkmark} />
            {label}
        </label>
    )
}
