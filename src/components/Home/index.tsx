import { Button, Checkbox, Field, Input } from '@mui'
import { Options } from 'interfaces'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'
import { useNewUser } from 'services/user'
import style from './style.module.scss'
// import 'react-modern-calendar-datepicker/lib/DatePicker.css'
// import DatePicker from 'react-modern-calendar-datepicker'
import { toast } from 'react-toastify'

type Inputs = { [key: string]: FieldValues | undefined }

const data = [
    'username',
    'linked_profile',
    'full_name',
    'designation',
    'branch_id',
    'profile_id',
    'login_day_left',
    'user_status',
]

const defualtValue: Options = {
    username: '',
    gender: 1,
    linked_profile: '',
    full_name: '',
    designation: '',
    branch_id: 0,
    profile_id: 0,
    login_day_left: 0,
    role_list: [],
    user_status: 1,
}

export default function App() {
    const { mutate, isLoading } = useNewUser()

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data: Options) => {
        mutate(
            {
                ...data,
                gender: data.gender === 'male' ? '1' : '2',
                role_list: data.role_list.map((item: Options) => item.value),
            },
            {
                onSuccess: (data) => {
                    reset(defualtValue)
                    toast(data.message, {
                        position: toast.POSITION.BOTTOM_CENTER,
                        progressClassName: 'progressToast',
                    })
                },
            }
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            {data.map((item, i) => {
                const isItem =
                    item === 'username' ||
                    item === 'full_name' ||
                    item === 'designation' ||
                    item === 'user_status' ||
                    item === 'linked_profile'
                        ? true
                        : false
                return (
                    <Field
                        className={style.formGroup}
                        label={item}
                        key={i}
                        name={item}
                        control={control}
                        errors={errors}
                        required
                        render={({ field }) => (
                            <Input
                                {...field}
                                name={field.name}
                                errors={errors}
                                // placeholder={field.name}
                                type={isItem ? 'text' : 'number'}
                            />
                        )}
                    />
                )
            })}
            <Field
                name="role_list"
                className={style.formGroup}
                label="role_list"
                required
                control={control}
                errors={errors}
                render={({ field }) => {
                    return (
                        <Select
                            {...field}
                            styles={{
                                control: (props) => ({
                                    ...props,
                                    minHeight: '55px',
                                    borderColor: errors[field.name]
                                        ? 'var(--error-color)'
                                        : '#BCBCBC',
                                }),
                            }}
                            isMulti
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'primary25',
                                    primary: errors[field.name]
                                        ? '#f00'
                                        : '#333',
                                },
                            })}
                            options={[
                                { value: '1', label: 'role1' },
                                { value: '2', label: 'role2' },
                                { value: '3', label: 'role3' },
                            ]}
                        />
                    )
                }}
            />
            <Field
                name="gender"
                className={style.formGroup}
                label="gender"
                control={control}
                errors={errors}
                required
                render={({ field }) => (
                    <div className={style.flex} {...field}>
                        <Checkbox
                            name="gender"
                            value="male"
                            checked={field.value === 'male'}
                            id="male"
                            onChange={field.onChange}
                            label="male"
                        />
                        <Checkbox
                            name="gender"
                            value="female"
                            checked={field.value === 'female'}
                            id="female"
                            onChange={field.onChange}
                            label="female"
                        />
                    </div>
                )}
            />
            {/* <Field
                name="date"
                control={control}
                errors={errors}
                required
                render={({ field }) => {
                    return (
                        <DatePicker
                            value={field.value}
                            onChange={field.onChange}
                            inputPlaceholder="Select a date"
                            inputClassName="my-custom-input"
                            shouldHighlightWeekends
                            renderInput={({
                                ref,
                            }: {
                                ref: React.RefObject<HTMLElement>
                            }) => (
                                <Input
                                    ref={ref}
                                    value={
                                        field.value
                                            ? `${field.value.year}/${field.value.month}/${field.value.day}`
                                            : ''
                                    }
                                    placeholder="date"
                                />
                            )}
                        />
                    )
                }}
            /> */}

            <div className={style.button}>
                <Button type="submit" loading={isLoading}>
                    Add
                </Button>
            </div>
        </form>
    )
}
