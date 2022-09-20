<script setup>
import { auth, signIn } from '@/firebase.js'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const strLogin = ref("Login")
const router = useRouter()
const userStore = useUserStore()

onAuthStateChanged(auth, (user) => {
    if (user) {
        strLogin.value = "Logout"
        userStore.strUserName = user.displayName
        userStore.strUserMail = user.email
        userStore.strUserUID = user.uid
        userStore.strUserPhoto = user.photoURL
    } else {
        strLogin.value = "Login"
    }
});

function logInOut() {
    if (strLogin.value == "Login") {
        signIn()
    } else {
        signOut(auth)
    }
}

function routeProfile() {
    router.push({ name: "profile" })
}
</script>

<template>
    <div class="sidebar">
        <div>
            <p>Home</p>
        </div>
        <div v-if="auth.currentUser">
            <p @click="routeProfile()">Profil</p>
        </div>
        <button class="button" @click="logInOut()">{{strLogin}}</button>
    </div>
</template>

<style>
.sidebar {
    position: fixed;
    background-color: rgba(0.8, 0.8, 0.8, 0.5);
}
</style>