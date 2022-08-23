<script setup>
import { welt } from "../assets/welt.js"
console.log("Test")
const unoLaender = welt.filter(x => x.uno)
console.log(unoLaender)
</script>