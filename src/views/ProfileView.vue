<script setup>
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore()
</script>

<template>
    <h1>Mein Profil</h1>
    <p>Name: {{ userStore.strUserName }}</p>
    <p>E-Mail: {{ userStore.strUserMail }}</p>
    <p>UID: {{ userStore.strUserUID }}</p>
    <img :src="userStore.strUserPhoto" />
</template>