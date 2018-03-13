import * as types from '../config/ActionTypes'

export const setPasswordModalVisible = flag => ({
    type: types.SET_PASSWORDMODAL_VISIBLE,
    payload: !!flag
})