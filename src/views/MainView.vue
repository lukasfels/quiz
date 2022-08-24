<script setup>
const modi = ["Flaggen", "Hauptstädte", "Umrisse", "Expert", "Pokemon"]
</script>

<template>
    <h1>Wähle einen Modus</h1>
    <br>
    <ul class="modi">
        <a v-for="modus in modi" href="modus">
            <li class="modus">{{ modus }}</li>
        </a>
    </ul>
</template>

<style>
.modi {
    list-style-type: none;
    padding: 0;
}

.modus {
    font-size: 16px;
    border: 1px solid black;
    margin: -1px 0 0 -1px;
    float: left;
    width: 50%;
    padding: 25px 0;
    text-align: center;
}
</style>