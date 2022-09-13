<script setup>
import { ref } from 'vue';

const hide = ref(true)

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevents the default mini-infobar or install dialog from appearing on mobile
    e.preventDefault();
    // Save the event because you'll need to trigger it later.
    deferredPrompt = e;
    // Show your customized install prompt for your PWA
    // Your own UI doesn't have to be a single element, you
    // can have buttons in different locations, or wait to prompt
    // as part of a critical journey.
    hide.value = false
});

const install = async () => {
    // deferredPrompt is a global variable we've been using in the sample to capture the `beforeinstallevent`
    deferredPrompt.prompt();
    // Find out whether the user confirmed the installation or not
    const { outcome } = await deferredPrompt.userChoice;
    // The deferredPrompt can only be used once.
    deferredPrompt = null;
    // Act on the user's choice
    if (outcome === 'accepted') {
        console.log('User accepted the install prompt.');
    } else if (outcome === 'dismissed') {
        console.log('User dismissed the install prompt');
    }
}
</script>

<template>
    <div class="pwa" :class="{ hidePWA: hide }">
            <button @click="install">Als App installieren</button>
    </div>
</template>

<style>
.pwa {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}

.pwa button {
    width: 100%;
    font: inherit;
    font-size: 1.5rem;
    border: 0;
    background-color: #1FFFA9;
    padding: 20px;

}

.hidePWA {
    display: none;
}
</style>