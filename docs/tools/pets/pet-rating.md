---
outline: deep
---

<script setup>
import { ref } from 'vue'

// pet 1
const rarity = ref("")
const cluck = ref(0)
const cscale = ref(0)
const lluck = ref(0)
const lscale = ref(0)

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
</script>

# Pet Rating
Pet Rating describes how high or low your stats on your pet are.
Below is the table for every rating.

<table>
  <tbody>
    <tr>
      <th>Rating</th>
      <th>Rating %</th>
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

The formula to calculate your pet rating percentage is:

$$ climate\ luck + climate\ scale + location\ luck + location\ scale \over rarity\ multiplier $$

<table>
  <tbody>
    <tr>
      <th>Rarity</th>
      <th>Multiplier</th>
    </tr>
    <tr>
      <td>Common</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Rare</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Epic</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Legendary</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Mythical</td>
      <td>7.5</td>
    </tr>
  </tbody>
</table>

## Calculate Pet Rating

<table>
  <tbody>
    <!-- RARITY -->
    <tr>
      <td>
        <select :class="$style.inputBox" v-model="rarity">
          <option disabled value="">Please select rarity</option>
          <option>Common</option>
          <option>Rare</option>
          <option>Epic</option>
          <option>Legendary</option>
        </select>
      </td>
    </tr>
    <tr>
      <td :class="$style.tableTitle">CLIMATE</td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Luck:</div> <input :class="$style.inputBox" v-model="cluck" type="number"/>
      </td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Scale:</div> <input :class="$style.inputBox" v-model="cscale" type="number"/>
      </td>
    </tr>
    <tr>
      <td :class="$style.tableTitle">LOCATION</td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Luck:</div> <input :class="$style.inputBox" v-model="lluck" type="number"/>
      </td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Scale:</div> <input :class="$style.inputBox" v-model="lscale" type="number"/>
      </td>
    </tr>
    <tr>
      <td :class="$style.tableTitle">PET RATING</td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Rating %:</div> {{ ((cluck + cscale + lluck + lscale)/rarityMulti(rarity1)).toFixed(2) }}%
      </td>
    </tr>
    <tr>
      <td>
        <div :class="$style.label">Rating:</div> {{ rarityValue((cluck + cscale + lluck + lscale)/rarityMulti(rarity1)) }}
      </td>
    </tr>
  </tbody>
</table>

::: warning
These values are not 100%, as we cannot see decimals in game. Could be off by 2~
:::

<style module>
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