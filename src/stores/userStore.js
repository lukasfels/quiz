import { defineStore } from 'pinia'
import { ref } from "vue"

export const useUserStore = defineStore('userStore', () => {
    const strUserName = ref("")
    const strUserMail = ref("")
    const strUserUID = ref("")
    const strUserPhoto = ref("")
    const strUserPlaytime = ref(0)
    const strUserWins = ref(0)

    return { strUserName, strUserMail, strUserUID, strUserPhoto, strUserPlaytime, strUserWins }
})
