<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="HomePage" href="/tabs/HomePage">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button tab="Product" href="/tabs/Product">
          <ion-icon aria-hidden="true" :icon="searchOutline" />
        </ion-tab-button>

        <ion-tab-button tab="ShoppingCart" href="/tabs/ShoppingCart">
          <ion-icon aria-hidden="true" :icon="cartOutline" />
        </ion-tab-button>

        <ion-tab-button tab="UserCenter" href="/tabs/UserCenter">
          <ion-icon aria-hidden="true" :icon="personOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { cartOutline, personOutline, homeOutline, searchOutline } from 'ionicons/icons';
</script>
