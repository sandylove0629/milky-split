import axios from "axios"
const apiKey = "keyNAq8iPZJ0HayIo"
const appKey = "app1g9DEJjIUMSp3E" 
const baseUrl = `https://api.airtable.com/v0/${appKey}`

// 設定
const instance = axios.create({
  baseURL: baseUrl
})
instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${apiKey}`;
instance.defaults.headers.common["Content-Type"] = "application/json";

export const loginApi = account => {
  return instance.get(`${baseUrl}/account?view=Grid view&filterByFormula=({account}='${account}')`)
}

export const registerApi = body => {
  return instance.post(`${baseUrl}/account`, body)
}

export const createGroupApi = body => {
  return instance.post(`${baseUrl}/group`, body)
}

export const getGroupApi = id => {
  return instance.get(`${baseUrl}/group/${id}`)
}

export const getUsersApi = groupId => {
  return instance.get(`${baseUrl}/user?view=Grid view&filterByFormula=({group}='${groupId}')`)
}

export const getUserApi = userId => {
  return instance.get(`${baseUrl}/user/${userId}`)
}

export const updateUserApi = (userId, body) => {
  return instance.patch(`${baseUrl}/user/${userId}`, body)
}

export const createUserApi = body => {
  return instance.post(`${baseUrl}/user`, body)
}

export const deleteUsersApi = params => {
  return instance.delete(`${baseUrl}/user?${params}`)
}

export const createSplitApi = body => {
  return instance.post(`${baseUrl}/split`, body)
}

export const updateSplitApi = (splitId, body) => {
  return instance.patch(`${baseUrl}/split/${splitId}`, body)
}

export const deleteSplitsApi = params => {
  return instance.delete(`${baseUrl}/split?${params}`)
}

export const getSplitApi = splitId => {
  return instance.get(`${baseUrl}/split/${splitId}`)
}

export const updateGroupApi = (groupId, body) => {
  return instance.patch(`${baseUrl}/group/${groupId}`, body)
}

export const getPaymentMethodApi = paymentMethodId => {
  return instance.get(`${baseUrl}/qrcode/${paymentMethodId}`)
}