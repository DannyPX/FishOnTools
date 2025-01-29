---
outline: deep
---

<script setup>
import { ref } from 'vue'
import baitData from './baitData.json'

const data = baitData

const searchBait = ref("")
const searchRarity = ref("")
const searchSpecies = ref("")
const searchLocation = ref("")
const searchWater = ref("")
</script>

<table>
  <tbody>
    <tr>
      <th><div :class="$style.label">Search Bait</div> <input :class="$style.inputBox" v-model="searchBait" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Rarity</div> <input :class="$style.inputBox" v-model="searchRarity" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Species</div> <input :class="$style.inputBox" v-model="searchSpecies" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Location</div> <input :class="$style.inputBox" v-model="searchLocation" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Water</div> <input :class="$style.inputBox" v-model="searchWater" placeholder="Search"/></th>
    </tr>
    <tr>
      <th>Bait</th>
      <th>Rarity</th>
      <th>Species</th>
      <th>Location</th>
      <th>Water</th>
    </tr>
    <template v-for="bait in data">
      <tr v-if="(bait.bait.toLowerCase().includes(searchBait.toLowerCase()) 
        && bait.rarity.toLowerCase().includes(searchRarity.toLowerCase())
        && bait.species.toString().toLowerCase().includes(searchSpecies.toLowerCase())
        && bait.location.toString().toLowerCase().includes(searchLocation.toLowerCase())
        && bait.water.toLowerCase().includes(searchWater.toLowerCase()))
        || (searchBait == '' && searchRarity == '' && searchSpecies == '' && searchLocation == '' && searchWater == '')">
        <td>{{bait.bait}}</td>
        <td>{{bait.rarity}}</td>
        <td>{{bait.species.join(", ")}}</td>
        <td>{{bait.location.join(", ")}}</td>
        <td>{{bait.water}}</td>
      </tr>
    </template>
  </tbody>
</table>

<style module>
  .inputBox {
    border: 1px solid var(--vp-c-default-1);
    border-radius: 4px;
    padding: .2em .6em;
    width: 90px
  }

    .label {
    font-size: x-small;
  }
</style>