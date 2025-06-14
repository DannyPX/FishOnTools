---
outline: deep
---

<script setup>
  import { ref } from 'vue'

  const prospect = ref(0)
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

::: warning
Outdated since 2025/06/14
:::

# Prospect
Prospect is a stat that increases shard chance.
Base prospect chance is 1/50.

The formula for prospect chance is:
$$prospect\ chance = {1 \over 50 - (50 \times (0.0005 \times Prospect))}$$ 

## Calculate Prospect Chance
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