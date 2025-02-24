---
outline: deep
---

<script setup>
  import { ref } from 'vue'

  const luck = ref(0)
  const scale = ref(0)
  const luckBoost = ref(false)
  const scaleBoost = ref(false)
  const eventBoost = ref(false)

  function salmonZombie() {
    let luckc = luck.value
    let scalec = scale.value
    let r = (30+(luckc*0.002))*0.01
    let e = (10+(luckc*0.004))*0.01
    let l = (4+(luckc*0.006))*0.01
    let m = (1+(luckc*0.008))*0.01
    let o = (r + e + l + m) < 1
    let g = (0.02 + (scalec * 0.001)) * 0.01
    let c = eventBoost.value ? 0.04 : 0.02
    let rarities = {
      common: o ? ((1 - (r + e + l + m)) / 5) * c : 0,
      rare: o ? (r / 4) * c : ((r / (r + e + l + m)) / 4) * c,
      epic: o ? (e / 3) * c : ((e / (r + e + l + m)) / 3) * c,
      legendary: o ? (l / 2) * c : ((l / (r + e + l + m)) / 2) * c,
      mythical: o ? m * c : ((m / (r + e + l + m))) * c,
    }

    let total = {
      rarity: rarities,
      rarity_gigantic: {
        common: rarities.common * g,
        rare: rarities.rare * g,
        epic: rarities.epic * g,
        legendary: rarities.legendary * g,
        mythical: rarities.mythical * g
      },
      total: rarities.common + rarities.rare + rarities.epic + rarities.legendary + rarities.mythical,
      gigantic: rarities.common * g + rarities.rare * g + rarities.epic * g + rarities.legendary * g + rarities.mythical * g
    }
    return total
  }

const format = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ')

</script>

<style module>
  .label {
    font-size: x-small;
  }

  .inputBox {
    border: 1px solid var(--vp-c-default-1);
    border-radius: 4px;
    padding: .2em .6em;
  }
  
  .tableTitle {
    text-align: center; 
    vertical-align: middle;
    font-weight: bold
  }
</style>

# Winter Event (2025)
The Winter 2025 Event is a week long fishing event located in Kenai River. During the event you could fish for an unique variant known as Zombie Fish. This special variant is only applied to salmon at the Kenai River.
The base chance for a Zombie variant is 1/50. Do note its a 1/50 chance for a salmon to be a Zombie, so add salmon chances.

Formula for Salmon Zombie chance is:
$$zombie\ chance = salmon\ chance \times 0.02$$
$$salmon\ chance = {common\ chance \over common\ salmons} + {rare\ chance \over rare\ salmons} + {epic\ chance \over epic\ salmons} + {legendary\ chance \over legendary\ salmons} + {mythical\ chance \over mythical\ salmons}$$

::: info
Check rarity chances over at [Luck](../character/luck.md)
:::

## Calculate Zombie variant chances

::: info
You can get your scale/luck stat by going to your stat page (`/stats`) and hover over your player head. Do note that values can vary whenever there is a luck/scale boost activated.
:::

<table>
  <tbody>
    <tr>
      <th colspan="3"><div :class="$style.label">Luck:</div><input :class="$style.inputBox" v-model="luck" type="number"/></th>
    </tr>
    <tr>
      <th colspan="3"><div :class="$style.label">Scale:</div><input :class="$style.inputBox" v-model="scale" type="number"/></th>
    </tr>
    <tr>
      <th colspan="3"><div :class="$style.label">Event Booster:</div><input :class="$style.inputBox" v-model="eventBoost" type="checkbox"/></th>
    </tr>
    <tr>
      <td colspan="3" :class="$style.tableTitle">Result</td>
    </tr>
    <tr>
      <td colspan="2">Total Zombie Chance</td>
      <td>1 / {{ format((1 / salmonZombie().total).toFixed(0)) }}</td>
    </tr>
    <tr>
      <td colspan="2">Gigantic Zombie Chance</td>
      <td>1 / {{ format((1 / salmonZombie().gigantic).toFixed(0)) }}</td>
    </tr>
    <tr>
      <td colspan="3" :class="$style.tableTitle">Detailed view</td>
    </tr>
    <tr>
      <td></td>
      <td>Zombie Chances</td>
      <td>Gig. Zombie Chances</td>
    </tr>
    <tr>
      <td>Common</td>
      <td>1 / {{ format((1 / salmonZombie().rarity.common).toFixed(0)) }}</td>
      <td>1 / {{ format((1 / salmonZombie().rarity_gigantic.common).toFixed(0)) }}</td>
    </tr>
    <tr>
      <td>Rare</td>
      <td>1 / {{ format((1 / salmonZombie().rarity.rare).toFixed(0)) }}</td>
      <td>1 / {{ format((1 / salmonZombie().rarity_gigantic.rare).toFixed(0)) }}</td>
    </tr>
    <tr>
      <td>Epic</td>
      <td>1 / {{ format((1 / salmonZombie().rarity.epic).toFixed(0)) }}</td>
      <td>1 / {{ format((1 / salmonZombie().rarity_gigantic.epic).toFixed(0)) }}</td>
    </tr>
    <tr>
      <td>Legendary</td>
      <td>1 / {{ format((1 / salmonZombie().rarity.legendary).toFixed(0)) }}</td>
      <td>1 / {{ format((1 / salmonZombie().rarity_gigantic.legendary).toFixed(0)) }}</td>
    </tr>
    <tr>
      <td>Mythical</td>
      <td>1 / {{ format((1 / salmonZombie().rarity.mythical).toFixed(0)) }}</td>
      <td>1 / {{ format((1 / salmonZombie().rarity_gigantic.mythical).toFixed(0)) }}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>1 / {{ format((1 / salmonZombie().total).toFixed(0)) }}</td>
      <td>1 / {{ format((1 / salmonZombie().gigantic).toFixed(0)) }}</td>
    </tr>
  </tbody>
</table>