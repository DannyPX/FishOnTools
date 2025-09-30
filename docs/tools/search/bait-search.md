---
outline: deep
---

<script setup>
import { ref } from 'vue'
import { data } from './bait.data.ts'

const searchBait = ref("")
const searchRarity = ref("")
const searchFishgroup = ref("")
const searchFishspecies = ref("")
const searchLocation = ref("")
const searchWater = ref("")
</script>

# Bait overview
Here you can search baits by name, rarity, fish group, fish species, location or water type.

<table>
  <tbody>
    <tr>
      <th><div :class="$style.label">Search Bait</div> <input :class="$style.inputBox" v-model="searchBait" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Rarity</div> <input :class="$style.inputBox" v-model="searchRarity" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Fish Group</div> <input :class="$style.inputBox" v-model="searchFishgroup" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Fish Species</div> <input :class="$style.inputBox" v-model="searchFishspecies" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Location</div> <input :class="$style.inputBox" v-model="searchLocation" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Water</div> <input :class="$style.inputBox" v-model="searchWater" placeholder="Search"/></th>
    </tr>
    <tr>
      <th>Bait</th>
      <th>Rarity</th>
      <th>Fish Group</th>
      <th>Fish Species</th>
      <th>Location</th>
      <th>Water</th>
    </tr>
    <template v-for="bait in data">
      <tr v-if="(bait.bait.toLowerCase().includes(searchBait.toLowerCase()) 
        && bait.rarity.toLowerCase().includes(searchRarity.toLowerCase())
        && bait.fishgroup.toString().toLowerCase().includes(searchFishgroup.toLowerCase())
        && bait.fishspecies.toString().toLowerCase().includes(searchFishspecies.toLowerCase())
        && bait.location.toString().toLowerCase().includes(searchLocation.toLowerCase())
        && bait.water.toLowerCase().includes(searchWater.toLowerCase()))
        || (searchBait == '' && searchRarity == '' && searchFishgroup == '' && searchLocation == '' && searchWater == '' && searchFishspecies == '')">
        <td>{{bait.bait}}</td>
        <td>{{bait.rarity}}</td>
        <td>{{bait.fishgroup.join(", ")}}</td>
        <td>{{bait.fishspecies.join(", ")}}</td>
        <td>{{bait.location.join(", ")}}</td>
        <td>{{bait.water}}</td>
      </tr>
    </template>
  </tbody>
</table>

## Discrepancies

- Small Cut Squid has `Flounders` listed in fish groups but isnt in the game. It should be `Flatfishes` but isnt fixed yet.
- Bread has `Eurasian Minnows` listed in fish groups but has some discrepancies with `Eurasian Minnows` and `Eurasian+Minnows` on some fishes.

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
