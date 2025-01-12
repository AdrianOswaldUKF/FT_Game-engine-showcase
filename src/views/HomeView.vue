<template>

  <v-container class="d-flex justify-center align-center fill-height">

    <v-card class="rounded-xl elevation-4 mt-16">

      <v-card-title class="d-flex justify-center align-center">

        <h1 class="d-flex">Videoherné enginy</h1>

      </v-card-title>

      <v-card-text>

        <p>Herný engine je softvérový rámec primárne navrhnutý na vývoj videohier a zvyčajne zahŕňa príslušné knižnice a podporné programy, ako napríklad editor úrovní. Termín „engine“ je podobný termínu „softvérový engine“, ktorý sa bežne používa v softvérovom priemysle.

          Herný engine môže tiež odkazovať na vývojový softvér podporujúci tento rámec, zvyčajne súbor nástrojov a funkcií na vývoj hier.

          Vývojári môžu používať herné enginy na tvorbu hier pre herné konzoly a iné typy počítačov. Základné funkcie, ktoré herný engine zvyčajne poskytuje, môžu zahŕňať renderovací engine („renderer“) na 2D alebo 3D grafiku, fyzikálny engine alebo detekciu kolízií (a reakcie na kolízie), zvuk, skriptovanie, animáciu, umelú inteligenciu, sieťové funkcie, streamovanie, správu pamäte, viacvláknové spracovanie, podporu lokalizácie, graf scén a podporu videa pre filmové sekvencie. Implementátori herných enginov často zefektívňujú proces vývoja hier tým, že vo veľkej miere opakovane používajú alebo prispôsobujú rovnaký herný engine na tvorbu rôznych hier alebo na uľahčenie prenosu hier na viaceré platformy.
        </p>

      </v-card-text>

      <v-card-actions class="d-flex justify-center align-center">

        <v-btn
            variant="elevated"
            color="secondary"
            href="https://en.wikipedia.org/wiki/Game_engine"
            target="_blank"
        >Zdroj</v-btn>

      </v-card-actions>

    </v-card>

  </v-container>

</template>

<script lang="ts">

export default {

  name: "HomeView",

}
</script>
