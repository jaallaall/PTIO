import { useMutation } from 'react-query'
import { newUser } from './api'

export const useNewUser = () => useMutation(newUser)
