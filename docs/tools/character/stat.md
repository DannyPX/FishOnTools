---
outline: deep
---

<script setup>
  import { ref } from 'vue'

  const prospect = ref(0)
  const luck = ref(0)
  const trophy = ref(0)
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
</style>

# Stat Calculations
Here you can check the exact values for each stat and what they do.

## Prospect
Prospect is a stat that increases shard chance.
Base prospect chance is 1/50.

The formula for prospect chance is:
$$prospect\ chance = {1 \over 50 - (50 \times (0.0005 \times Prospect))}$$ 

### Calculate Prospect Chance
::: info
You can get your total prospect stat by combining all your armor prospect stat and general location bonus together.
:::

<table>
  <tbody>
    <tr>
      <th colspan="2"><div :class="$style.label">Prospect:</div><input :class="$style.inputBox" v-model="prospect" type="number"/></th>
    </tr>
    <tr>
      <td>Prospect Chance</td>
      <td>1 / {{ (50 - (50 * (0.0005 * prospect))).toFixed(2) }}</td>
    </tr>
  </tbody>
</table>

## Luck
Luck determines your chances to catch certain rarities.
Base luck chances are in this table below:
|Rarity    |Chance     |
| -------- |:---------:|
|Common    |55% (0.55) |
|Rare      |30% (0.3)  |
|Epic      |10% (0.1)  |
|Legendary |4% (0.04)  |
|Mythical  |1% (0.01)  |

The formula for luck for each rarity:

|Rarity|Formula|
|---|---|
|Common|$1 - (Rare + Epic + Legendary + Mythical)$|
|Rare|$(30 + (Luck \times 0.002)) \times 0.01$|
|Epic|$(10 + (Luck \times 0.004)) \times 0.01$|
|Legendary|$(4 + (Luck \times 0.006)) \times 0.01$|
|Legendary|$(1 + (Luck \times 0.008)) \times 0.01$|

### Calculate Luck Chance (Without baits/lures)
::: info
You can get your luck stat by going to your stat page (`/stats`) and hover over your player head.
:::
<table>
  <tbody>
    <tr>
      <th colspan="2"><div :class="$style.label">Luck:</div><input :class="$style.inputBox" v-model="luck" type="number"/></th>
    </tr>
    <tr>
      <th>Rarity</th><th>Chance</th>
    </tr>
    <tr>
      <td>Common</td>
      <td>{{ (100 - ((30 + (luck * 0.002)) + (10 + (luck * 0.004)) + (4 + (luck * 0.006)) + (1 + (luck * 0.008))).toFixed(2))}}%</td>
    </tr>
    <tr>
      <td>Rare</td>
      <td>{{ (30 + (luck * 0.002)).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Epic</td>
      <td>{{ (10 + (luck * 0.004)).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Legendary</td>
      <td>{{ (4 + (luck * 0.006)).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Mythical</td>
      <td>{{ (1 + (luck * 0.008)).toFixed(2) }}%</td>
    </tr>
  </tbody>
</table>

### Calculate Luck Chance for baits (WIP)
`WIP Need more info about this stat`

## Scale (WIP)
`WIP Need more info about this stat`

## Maximum Wait Time (WIP)
`WIP Need more info about this stat`

## Trophy Chance
Trophy chance is the chance to catch a trophy shard. Currently the shard is only used for Midas RX rod parts (See [wiki](https://wiki.fishonmc.net/wiki/List_Of_Rod_Parts)).
Base trophy chance is 1/15000

The formula for trophy chance is:

$trophy\ chance = 15000 - (15000 * trophy\ chance\ stat)$

### Calculate Trophy Chance
::: info
You can get your total trophy chance stat by combining all your armor trophy chance and rod part trophy chance stat together
:::

<table>
  <tbody>
    <tr>
      <th colspan="2"><div :class="$style.label">Trophy Chance:</div><input :class="$style.inputBox" v-model="trophy" type="number"/></th>
    </tr>
    <tr>
      <td>Trophy Chance</td>
      <td>1 / {{ (15000 - (15000 * (trophy * 0.01))).toFixed(0) }}</td>
    </tr>
  </tbody>
</table>