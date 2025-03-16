---
outline: deep
---

<script setup>
  import { reactive, ref } from 'vue'

  const multipliers = reactive({
    common: 1,
    rare: 1.506,
    epic: 2.255,
    legendary: 3.37,
    mythical: 5.071,
  })

  const baseValues = reactive ({
    chestplate: {
      luck: 50,
      scale: 50,
      prospect: 35
    },
    leggings: {
      luck: 40,
      scale: 40,
      prospect: 30
    },
    boots: {
      luck: 25,
      scale: 25,
      prospect: 15
    },
  })

  const quality = ref(100)

  function limitStat(value) {
    return value > 5 ? value : 5 
  }
</script>

# Armor Calculations
Check armor values for all rarities and quality.

<table>
  <tbody>
    <tr>
      <th colspan="4">Quality: <input :class="$style.inputBox" v-model="quality" placeholder="100" type="number" min="1" max="100"/>
      </th>
    </tr>
    <tr>
      <td colspan="4" :class="$style.tableTitle">Chestplate</td>
    </tr>
    <tr><th>Tier</th><th>Luck</th><th>Scale</th><th>Prospect</th></tr>
    <tr><td>Common</td>
      <td>{{ limitStat(baseValues.chestplate.luck * (quality / 100)).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.scale * (quality / 100)).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.prospect * (quality / 100)).toFixed(2) }}</td>
    </tr>
    <tr><td>Rare</td>
      <td>{{ limitStat(baseValues.chestplate.luck * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.scale * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.prospect * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
    </tr>
    <tr><td>Epic</td>
      <td>{{ limitStat(baseValues.chestplate.luck * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.scale * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.prospect * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
    </tr>
    <tr><td>Legendary</td>
      <td>{{ limitStat(baseValues.chestplate.luck * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.scale * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.prospect * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
    </tr>
    <tr><td>Mythical</td>
      <td>{{ limitStat(baseValues.chestplate.luck * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.scale * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.chestplate.prospect * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
    </tr>
    <tr>
      <td colspan="4" :class="$style.tableTitle">Leggings</td>
    </tr>
    <tr><th>Tier</th><th>Luck</th><th>Scale</th><th>Prospect</th></tr>
    <tr><td>Common</td>
      <td>{{ limitStat(baseValues.leggings.luck * (quality / 100)).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.scale * (quality / 100)).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.prospect * (quality / 100)).toFixed(2) }}</td>
    </tr>
    <tr><td>Rare</td>
      <td>{{ limitStat(baseValues.leggings.luck * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.scale * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.prospect * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
    </tr>
    <tr><td>Epic</td>
      <td>{{ limitStat(baseValues.leggings.luck * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.scale * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.prospect * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
    </tr>
    <tr><td>Legendary</td>
      <td>{{ limitStat(baseValues.leggings.luck * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.scale * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.prospect * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
    </tr>
    <tr><td>Mythical</td>
      <td>{{ limitStat(baseValues.leggings.luck * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.scale * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.leggings.prospect * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
    </tr>
    <tr>
      <td colspan="4" :class="$style.tableTitle">Boots</td>
    </tr>
    <tr><th>Tier</th><th>Luck</th><th>Scale</th><th>Prospect</th></tr>
    <tr><td>Common</td>
      <td>{{ limitStat(baseValues.boots.luck * (quality / 100)).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.scale * (quality / 100)).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.prospect * (quality / 100)).toFixed(2) }}</td>
    </tr>
    <tr><td>Rare</td>
      <td>{{ limitStat(baseValues.boots.luck * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.scale * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.prospect * (quality / 100) * multipliers.rare).toFixed(2) }}</td>
    </tr>
    <tr><td>Epic</td>
      <td>{{ limitStat(baseValues.boots.luck * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.scale * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.prospect * (quality / 100) * multipliers.epic).toFixed(2) }}</td>
    </tr>
    <tr><td>Legendary</td>
      <td>{{ limitStat(baseValues.boots.luck * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.scale * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.prospect * (quality / 100) * multipliers.legendary).toFixed(2) }}</td>
    </tr>
    <tr><td>Mythical</td>
      <td>{{ limitStat(baseValues.boots.luck * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.scale * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
      <td>{{ limitStat(baseValues.boots.prospect * (quality / 100) * multipliers.mythical).toFixed(2) }}</td>
    </tr>
  </tbody>
</table>

::: warning
These values are not 100%, as we cannot see decimals in game. Could be off by 1~
:::

<style module>
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