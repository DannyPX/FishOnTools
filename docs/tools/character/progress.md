---
outline: deep
---

<script setup>
  import { ref } from 'vue'

  const progress = ref(0)
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

# Progress (Reel Speed)
Progress (Reel Speed) determines how fast you reel a fish.
The base progress stat is 0.6 units. The higher the number, the faster you reel in a fish.

The formula for progress is:

$0.6 + ( reel\ speed\ stat \times 0.001 )$

## Calculate Progress

::: info
You can get your total reel speed stat by combining all your rod parts reel speed stat together.
:::

<table>
  <tbody>
    <tr>
      <th colspan="2"><div :class="$style.label">Reel Speed:</div><input :class="$style.inputBox" v-model="progress" type="number"/></th>
    </tr>
    <tr>
      <td>Progress</td>
      <td>{{ (0.6+(progress*0.001)).toFixed(2) }} units</td>
    </tr>
  </tbody>
</table>

::: info
As it is still bit confusing what this unit means. Here is an example.

If you have 600 Reel Speed, you reel in fish twice as fast.
:::