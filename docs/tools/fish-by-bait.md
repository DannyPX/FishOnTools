---
outline: deep
---

<script setup>
import { ref } from 'vue'
import { data as fishData } from './fish.data.ts'
import { data as baitData } from './bait.data.ts'

const searchFishgroup = ref("")
const searchLifestyle = ref("")
const searchLocation = ref("")
const searchWater = ref("")

const baitSelected = ref("")

function findBait(baitName) {
  return baitData.find(function(bait, i) {
    if(bait.bait == baitName) {
      return bait.bait
    }
  })
}

function onBaitChange() {
  var baitObj = findBait(baitSelected.value)
  searchFishgroup.value = baitObj.fishgroup.toString()
  searchWater.value = baitObj.water.toString()
  searchLocation.value = baitObj.location.toString()
  searchLifestyle.value = baitObj.lifestyle.toString()
}
</script>

<table>
  <tbody>
    <tr>
      <th colspan="5"><div :class="$style.label">Search Species</div>
        <select :class="$style.inputBox" v-model="baitSelected" @change="onBaitChange()">
          <option disabled value="">Select a bait</option>
          <option v-for="bait in baitData">{{ bait.bait }}</option>
        </select>
      </th>
    </tr>
    <tr>
      <th>Species</th>
      <th>Fish Group</th>
      <th>Lifestyle</th>
      <th>Rarity</th>
      <th>Location</th>
    </tr>
    <template v-for="fish in fishData">
      <tr v-if="((searchFishgroup.toLowerCase().includes(fish.fishgroup.toLowerCase()) || searchFishgroup == '')
      && searchWater.includes(fish.water)
      && fish.location.toLowerCase().includes(searchLocation.toLowerCase())
      && fish.lifestyle.toLowerCase().includes(searchLifestyle.toLowerCase()))
      || (searchFishgroup == '' && searchLifestyle == '' && searchLocation == '' && searchWater == '')">
        <td>{{fish.species}}</td>
        <td>{{fish.fishgroup}}</td>
        <td>{{fish.lifestyle}}</td>
        <td>{{fish.rarity}}</td>
        <td>{{fish.location}}</td>
      </tr>
    </template>
  </tbody>
</table>

<style module>
  .label {
    font-size: x-small;
  }

  .inputBox {
    border: 1px solid var(--vp-c-default-1);
    border-radius: 4px;
    padding: .2em .6em;
  }
</style>