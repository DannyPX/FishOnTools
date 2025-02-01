---
outline: deep
---

<script setup>
  import { ref } from 'vue'

  const bitespeed = ref(0)
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

# Bite Speed
Bite speed determines how long it takes before a fish bite the hook.
The maximum time it takes is 20 seconds and the minimum is 10 seconds.
::: info
The stat on `/stats` is the maximum shown.
:::

The formulas for bite speed are as follows:
$$maximum\ bite\ speed\ = 20 - (20 \times ({ bite\ speed\ stat \over 1000 }))$$
$$minimum\ bite\ speed\ = 10 - (10 \times ({ bite\ speed\ stat \over 1000 }))$$

## Calculate Bite Speed
::: info
You can get your total bite speed stat by combining all your rod parts bite speed stat together.
:::

<table>
  <tbody>
    <tr>
      <th colspan="2"><div :class="$style.label">Bite Speed:</div><input :class="$style.inputBox" v-model="bitespeed" type="number"/></th>
    </tr>
    <tr>
      <td>Max Bite Speed</td>
      <td>{{ (20 - (20*(bitespeed/1000))).toFixed(2) }} seconds</td>
    </tr>
    <tr>
      <td>Min Bite Speed</td>
      <td>{{ (10 - (10*(bitespeed/1000))).toFixed(2) }} seconds</td>
    </tr>
  </tbody>
</table>