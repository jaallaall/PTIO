import { Options } from 'interfaces'
import { instance } from '../fetchClient'

export const newUser = async (body: Options) => {
    const { data } = await instance().post('panel/admin/user/new', {
        username: body.username,
        gender: body.gender,
        linked_profile: body.linked_profile,
        full_name: body.full_name,
        designation: body.designation,
        branch_id: body.branch_id,
        profile_id: body.profile_id,
        login_day_left: body.login_day_left,
        role_list: body.role_list,
        user_status: body.user_status,
    })
    return data
}
