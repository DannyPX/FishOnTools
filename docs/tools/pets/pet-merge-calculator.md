---
outline: deep
---

<script setup>
import { ref } from 'vue'

// pet 1
const rarity1 = ref("")
const cluck1 = ref(0)
const cscale1 = ref(0)
const lluck1 = ref(0)
const lscale1 = ref(0)

// pet 2
const rarity2 = ref("")
const cluck2 = ref(0)
const cscale2 = ref(0)
const lluck2 = ref(0)
const lscale2 = ref(0)

function rarityMulti(value) {
  switch (value) {
    case "Common":
      return 1;
    case "Rare":
      return 2;
    case "Epic":
      return 3;
    case "Legendary":
      return 5;
    case "Mythical":
      return 7.5;
    default:
      return 1;
  }
}

function rarityValue(value) {
  switch (true) {
    case (value < 10):
      return "Awful";
    case (value < 20):
      return "Bad";
    case (value < 35):
      return "Below Average";
    case (value < 50):
      return "Average";
    case (value < 60):
      return "Good";
    case (value < 80):
      return "Great";
    case (value < 90):
      return "Excellent";
    case (value < 100):
      return "Amazing";
    case (value < 101):
      return "Perfect";
    default:
      return "Wrong Rarity Selected";
  }
}

function rarityUpgrade(value) {
    switch (value) {
    case "Common":
      return "Rare";
    case "Rare":
      return "Epic";
    case "Epic":
      return "Legendary";
    case "Legendary":
      return "Mythical";
    default:
      return "";
  }
}
</script>

# Pet Merge Calculator

This is a calculator for merging pets. The statistics that is used is from the Wiki and help from some community members.

## Calculator

<table>
  <tbody>
    <tr>
      <th>Pet 1</th>
      <th>Pet 2</th>
      <th style="width:100%">Result</th>
    </tr>
    <!-- RARITY -->
    <tr>
      <td>
        <select :class="$style.inputBox" v-model="rarity1">
          <option disabled value="">Please select rarity</option>
          <option>Common</option>
          <option>Rare</option>
          <option>Epic</option>
          <option>Legendary</option>
        </select>
      </td>
      <td>
        <select :class="$style.inputBox" v-model="rarity2">
          <option disabled value="">Please select rarity</option>
          <option>Common</option>
          <option>Rare</option>
          <option>Epic</option>
          <option>Legendary</option>
        </select>
      </td>
      <td>
        <div v-if="rarity1 == rarity2">{{ rarityUpgrade(rarity1) }}</div>
        <div v-else style="font-size: x-small">Needs to be same rarity</div>
      </td>
    </tr>
    <!-- CLIMATE -->
    <tr>
      <td colspan="3" :class="$style.tableTitle">CLIMATE</td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Luck:</div> <input :class="$style.inputBox" v-model="cluck1" type="number"/>
      </td>
      <td>
        <div :class="$style.label">Luck:</div> <input :class="$style.inputBox" v-model="cluck2" type="number"/>
      </td>
      <td>
        <div :class="$style.label">Luck:</div> <div v-if="rarity1 != '' && rarity1 == rarity2">{{ ((((cluck1 + cluck2)/rarityMulti(rarity1))/2)*(rarityMulti(rarityUpgrade(rarity1)))).toFixed(2) }}</div> <div v-else>-</div>
      </td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Scale:</div> <input :class="$style.inputBox" v-model="cscale1" type="number"/>
      </td>
      <td>
        <div :class="$style.label">Scale:</div> <input :class="$style.inputBox" v-model="cscale2" type="number"/>
      </td>
      <td>
        <div :class="$style.label">Scale:</div> <div v-if="rarity1 != '' && rarity1 == rarity2">{{ ((((cscale1 + cscale2)/rarityMulti(rarity1))/2)*(rarityMulti(rarityUpgrade(rarity1)))).toFixed(2) }}</div> <div v-else>-</div>
      </td>
    </tr>
    <!-- LOCATION -->
    <tr>
      <td colspan="3" :class="$style.tableTitle">LOCATION</td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Luck:</div> <input :class="$style.inputBox" v-model="lluck1" type="number"/>
      </td>
      <td>
        <div :class="$style.label">Luck:</div> <input :class="$style.inputBox" v-model="lluck2" type="number"/>
      </td>
      <td>
        <div :class="$style.label">Scale:</div> <div v-if="rarity1 != '' && rarity1 == rarity2">{{ ((((lluck1 + lluck2)/rarityMulti(rarity1))/2)*(rarityMulti(rarityUpgrade(rarity1)))).toFixed(2) }}</div> <div v-else>-</div>
      </td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Scale:</div> <input :class="$style.inputBox" v-model="lscale1" type="number"/>
      </td>
      <td>
        <div :class="$style.label">Scale:</div> <input :class="$style.inputBox" v-model="lscale2" type="number"/>
      </td>
      <td>
        <div :class="$style.label">Scale:</div> <div v-if="rarity1 != '' && rarity1 == rarity2">{{ ((((lscale1 + lscale2)/rarityMulti(rarity1))/2)*(rarityMulti(rarityUpgrade(rarity1)))).toFixed(2) }}</div> <div v-else>-</div>
      </td>
    </tr>
    <!-- RATING % -->
    <tr>
      <td>
        <div :class="$style.label">Rating %:</div> {{ ((cluck1 + cscale1 + lluck1 + lscale1)/rarityMulti(rarity1)).toFixed(2) }}%
      </td>
      <td>
        <div :class="$style.label">Rating %:</div> {{ ((cluck2 + cscale2 + lluck2 + lscale2)/rarityMulti(rarity1)).toFixed(2) }}%
      </td>
      <td>
        <div :class="$style.label">Rating %:</div> <div v-if="rarity1 != '' && rarity1 == rarity2">{{ ((((cluck1 + cscale1 + lluck1 + lscale1)/rarityMulti(rarity1))+((cluck2 + cscale2 + lluck2 + lscale2)/rarityMulti(rarity1)))/2).toFixed(2) }}</div> <div v-else>-</div>
      </td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Rating:</div> {{ rarityValue((cluck1 + cscale1 + lluck1 + lscale1)/rarityMulti(rarity1)) }}
      </td>
      <td>
        <div :class="$style.label">Rating:</div> {{ rarityValue((cluck2 + cscale2 + lluck2 + lscale2)/rarityMulti(rarity1)) }}
      </td>
      <td>
        <div :class="$style.label">Rating:</div> <div v-if="rarity1 != '' && rarity1 == rarity2">{{ rarityValue((((cluck1 + cscale1 + lluck1 + lscale1)/rarityMulti(rarity1))+((cluck2 + cscale2 + lluck2 + lscale2)/rarityMulti(rarity1)))/2) }}</div> <div v-else>-</div>
      </td>
    </tr>
  </tbody>
</table>

::: warning
These values are not 100%, as we cannot see decimals in game. Could be off by 2~
:::

## Rating Table

<table>
  <tbody>
    <tr>
      <th colspan="2">Rating Table</th>
    </tr>
    <tr>
      <td>Awful</td>
      <td>0% - 9%</td>
    </tr>
    <tr>
      <td>Bad</td>
      <td>10% - 19%</td>
    </tr>
    <tr>
      <td>Below Average</td>
      <td>20% - 34%</td>
    </tr>
    <tr>
      <td>Average</td>
      <td>35% - 49%</td>
    </tr>
    <tr>
      <td>Good</td>
      <td>50% - 59%</td>
    </tr>
    <tr>
      <td>Great</td>
      <td>60% - 79%</td>
    </tr>
    <tr>
      <td>Excellent</td>
      <td>80% - 89%</td>
    </tr>
    <tr>
      <td>Amazing</td>
      <td>90% - 99%</td>
    </tr>
    <tr>
      <td>Perfect</td>
      <td>100%</td>
    </tr>
  </tbody>
</table>

::: info
Awful and Bad is not in the game.
:::

<style module>
  table { 
    margin: 0px auto; 
    width: 100%;  
  }

  .inputBox {
    border: 1px solid var(--vp-c-default-1);
    border-radius: 4px;
    padding: .2em .6em;
  }

  
  .label {
    font-size: x-small;
  }

  .tableTitle {
    text-align: center; 
    vertical-align: middle;
    font-weight: bold
  }
</style>