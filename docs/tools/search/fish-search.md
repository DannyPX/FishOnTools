---
outline: deep
---

<script setup>
import { ref } from 'vue'
import { data } from './fish.data.ts'

const searchSpecies = ref("")
const searchFishgroup = ref("")
const searchLifestyle = ref("")
const searchRarity = ref("")
const searchLocation = ref("")

</script>

# Fish Overview
Here you can search fish species by their name, fish group, lifestyle, rarity or location.

<table>
  <tbody>
    <tr>
      <th><div :class="$style.label">Search Species</div> <input :class="$style.inputBox" v-model="searchSpecies" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Fish Group</div> <input :class="$style.inputBox" v-model="searchFishgroup" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Lifestyle</div> <input :class="$style.inputBox" v-model="searchLifestyle" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Rarity</div> <input :class="$style.inputBox" v-model="searchRarity" placeholder="Search"/></th>
      <th><div :class="$style.label">Search Location</div> <input :class="$style.inputBox" v-model="searchLocation" placeholder="Search"/></th>
    </tr>
    <tr>
      <th>Species</th>
      <th>Fish Group</th>
      <th>Lifestyle</th>
      <th>Rarity</th>
      <th>Location</th>
    </tr>
    <template v-for="fish in data">
      <tr v-if="(fish.species.toLowerCase().includes(searchSpecies.toLowerCase()) 
        && fish.fishgroup.toLowerCase().includes(searchFishgroup.toLowerCase())
        && fish.lifestyle.includes(searchLifestyle)
        && fish.rarity.toLowerCase().includes(searchRarity.toLowerCase())
        && fish.location.toLowerCase().includes(searchLocation.toLowerCase()))
        || (searchSpecies == '' && searchFishgroup == '' && searchLifestyle == '' && searchRarity == '' && searchLocation == '')">
        <td>{{fish.species}}</td>
        <td>{{fish.fishgroup}}</td>
        <td>{{fish.lifestyle}}</td>
        <td>{{fish.rarity}}</td>
        <td>{{fish.location}}</td>
      </tr>
    </template>
  </tbody>
</table>

## Discrepancies

- Hasu is listed as `Eurasian+Minnows` but has discrepancies with `Eurasian+Minnows` and `Eurasian Minnows` on some other fishes
- White Bream is listed as `Eurasian+Minnows` but has discrepancies with `Eurasian+Minnows` and `Eurasian Minnows` on some other fishes
- Roach is listed as `Eurasian+Minnows` but has discrepancies with `Eurasian+Minnows` and `Eurasian Minnows` on some other fishes
- Sichel is listed as `Eurasian+Minnows` but has discrepancies with `Eurasian+Minnows` and `Eurasian Minnows` on some other fishes
- Tench is listed as `Eurasian Minnows` but has discrepancies with `Eurasian+Minnows` and `Eurasian Minnows` on some other fishes
- Freshwater Bream is listed as `Eurasian+Minnows` but has discrepancies with `Eurasian+Minnows` and `Eurasian Minnows` on some other fishes
- Asp is listed as `Eurasian+Minnows` but has discrepancies with `Eurasian+Minnows` and `Eurasian Minnows` on some other fishes

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