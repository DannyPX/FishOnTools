---
outline: deep
---

<script setup>
  import { ref } from 'vue'

  const scale = ref(0)
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

# Scale
Scale determines your chances to catch certain size groups.
Base scale chances are in this table below:
| Size Group |     Chance     |
| ---------- | :------------: |
| Baby       |   20% (0.20)   |
| Juvenile   |   40% (0.40)   |
| Adult      |   30% (0.30)   |
| Large      |   7% (0.07)    |
| Large+     | 2.98% (0.0298) |
| Gigantic   | 0.02% (0.0002) |

The formula for scale for each size group:

| Size Group | Formula                                                   |
| ---------- | --------------------------------------------------------- |
| Baby       | $1 - (Juvenile + Adult + Large + Large\_plus + Gigantic)$ |
| Juvenile   | $(40 - (Scale \times 0.008)) \times 0.01$                 |
| Adult      | $(30 + (Scale \times 0.008)) \times 0.01$                 |
| Large      | $(7 + (Scale \times 0.008)) \times 0.01$                  |
| Large+     | $(2.98 + (Scale \times 0.01)) \times 0.01$                |
| Gigantic   | $(0.02 + (Scale \times 0.001)) \times 0.01$                |

::: info
Large and Large+ in the game are the same thing. Both just have different sizes but are shown visually as 'large' in game.
:::

## Calculate Scale Chance (Without baits/lures)
::: info
You can get your scale stat by going to your stat page (`/stats`) and hover over your player head.
:::

<table>
  <tbody>
    <tr>
      <th colspan="2"><div :class="$style.label">Scale:</div><input :class="$style.inputBox" v-model="scale" type="number"/></th>
    </tr>
    <tr>
      <th>Size Group</th><th>Chance</th>
    </tr>
    <tr>
      <td>Baby</td>
      <td>{{ (100 - ((40 - (scale * 0.008)) + (30 + (scale * 0.008)) + (7 + (scale * 0.008)) + (2.98 + (scale * 0.01)) + (0.02 + (scale * 0.001)))).toFixed(2)  }}%</td>
    </tr>
    <tr>
      <td>Juvenile</td>
      <td>{{ (40 - (scale * 0.008)).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Adult</td>
      <td>{{ (30 + (scale * 0.008)).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Large</td>
      <td>{{ (7 + (scale * 0.008)).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Large+</td>
      <td>{{ (2.98 + (scale * 0.01)).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Gigantic</td>
      <td>{{ (0.02 + (scale * 0.001)).toFixed(2) }}%</td>
    </tr>
  </tbody>
</table>