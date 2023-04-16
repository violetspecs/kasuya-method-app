<template>
  <q-page class="flex flex-center column">
    <div v-if="showStart" class="flex flex-center column">
      <h5>Hario v60 4:6 method timer</h5>
      <q-input v-model="coffeeAmount" label="Amount of coffee (in grams)" />
      <q-btn color="white" text-color="black" label="Start" @click="onClick()"/>
    </div>
    <div v-if="!showStart">
      <q-card flat bordered class="my-card flex flex-center column">
        <q-card-section>
          <div v-if="showStartTimer" class="text-h3">{{ startTime }}</div>
          <div v-if="!showStartTimer" class="text-h3">{{ mainTime }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none text-h5">
          {{ currentAction }}
        </q-card-section>
        <q-card-section class="q-pt-none text-h5">
          Amount to pour: {{ waterAmount }} mL
        </q-card-section>
        <q-card-section class="q-pt-none text-h5">
          Remaining pours: {{ remainingPours }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn color="white" text-color="black" label="Reset" @click="onReset()"/>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn color="white" text-color="black" label="Back" @click="onBack()"/>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
      return {
          coffeeAmount: 0,
          waterAmount: 0,
          showStart: true,
          remainingPours: 5,
          startTime: 0,
          mainTime: 0,
          showStartTimer: true,
          startTimerInterval: null,
          mainTimerInterval: null,
          currentAction: "Wait",
          durationPerPour: 45
      }
  },
  methods: {
      onClick() {
        this.remainingPours = 5
        this.waterAmount = this.coffeeAmount * 3
        this.startTimer()
      },
      onBack() {
        clearInterval(this.startTimerInterval)
        clearInterval(this.mainTimerInterval)
        this.showStart = true
      },
      onReset() {
        clearInterval(this.startTimerInterval)
        clearInterval(this.mainTimerInterval)
        this.startTimer()
      },
      startTimer() {
        this.showStart = false
        this.showStartTimer = true
        this.startTime = 3
        this.currentAction = "Ready"
        this.remainingPours = 5

        this.startTimerInterval = setInterval(() => {
          if (this.startTime == 0) {
            clearInterval(this.startTimerInterval)
            this.remainingPours -= 1
            this.startMainTimer()
          }
          this.startTime -= 1
        }, 1000)
      },
      startMainTimer() {
        this.showStartTimer = false
        this.mainTime = this.durationPerPour
        this.currentAction = "Pour"
        this.mainTimerInterval = setInterval(() => {
          if (this.mainTime == 1) {
            clearInterval(this.mainTimerInterval)
            if (this.remainingPours > 0) {
              this.startMainTimer()
            } else{
              this.currentAction = "Done"
            }
            this.remainingPours -= 1
          }

          this.mainTime -= 1
          if (this.mainTime <= 5) {
            this.currentAction = "Prepare for next pour"
          }
        }, 1000)
      }
  }
})
</script>
