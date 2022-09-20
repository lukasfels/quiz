import { defineStore } from 'pinia'
import { ref } from "vue"

export const useUserStore = defineStore('userStore', () => {
    const strUserName = ref("")
    const strUserMail = ref("")
    const strUserUID = ref("")
    const strUserPhoto = ref("")

    return { strUserName, strUserMail, strUserUID, strUserPhoto }
})
