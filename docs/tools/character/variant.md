---
outline: deep
---

<script setup>
  import { ref } from 'vue'

  const trophy = ref(0)
  const melanistic = ref(0)
  const albino = ref(0)
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

# Variant Chance

## Trophy Chance
Trophy chance is the chance to catch a trophy fish. Currently the shard for it is only used for Midas RX rod parts (See [wiki](https://wiki.fishonmc.net/wiki/List_Of_Rod_Parts)).
Base trophy chance is 1/15000.

The formula for trophy chance is:

$$trophy\ chance = {15000 \over 1 + (trophy\ chance\ stat\ /\ 100)}$$

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
      <td>1 / {{ (15000 / (1 + ((trophy) / 100))).toFixed(0) }}</td>
    </tr>
  </tbody>
</table>

## Melanistic Chance
Melanistic chance is the chance to catch a melanistic fish. Currently the shard for it is only used for Onyx RX rod parts(See [wiki](https://wiki.fishonmc.net/wiki/List_Of_Rod_Parts)).
Base melanistic chance is 1/10000.

The formula for melanistic chance is:

$$melanistic\ chance = {10000 \over 1 + (melanistic\ chance\ stat\ /\ 100)}$$

### Calculate Melanistic Chance
::: info
You can get your total melanistic chance stat by combining all your armor melanistic chance and rod part melanistic chance together
:::

<table>
  <tbody>
    <tr>
      <th colspan="2"><div :class="$style.label">Melanistic Chance:</div><input :class="$style.inputBox" v-model="melanistic" type="number"/></th>
    </tr>
    <tr>
      <td>Melanistic Chance</td>
      <td>1 / {{ (10000 / (1 + ((melanistic) / 100))).toFixed(0) }}</td>
    </tr>
  </tbody>
</table>

## Albino Chance
Albino chance is the chance to catch a albino fish. Currently the shard for it is only used for Ivory RX rod parts(See [wiki](https://wiki.fishonmc.net/wiki/List_Of_Rod_Parts)).
Base albino chance is 1/5000.

The formula for albino chance is:

$$albino\ chance = {5000 \over 1 + (albino\ chance\ stat\ /\ 100)}$$

### Calculate Albino Chance
::: info
You can get your total albino chance stat by combining all your armor albino chance and rod part albino chance together
:::

<table>
  <tbody>
    <tr>
      <th colspan="2"><div :class="$style.label">Albino Chance:</div><input :class="$style.inputBox" v-model="albino" type="number"/></th>
    </tr>
    <tr>
      <td>Albino Chance</td>
      <td>1 / {{ (5000 / (1 + ((albino) / 100))).toFixed(0) }}</td>
    </tr>
  </tbody>
</table>