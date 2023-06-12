<template>
  <q-page class="flex justify-center row">
    <div v-if="showStart" class="flex column justify-evenly">
      <h5>Hario v60 4:6 method timer</h5>
      <div class="row label">Amount of coffee</div>
      <div class="row items-center label">
        <div class="col-4"><q-input outlined v-model.number="coffeeAmount" type="number" :input-style="{ fontSize: '1.2rem' }"/></div>
        grams
      </div>
      <div class="label">Select flavor profile</div>
      <div class="row justify-center">
        <div class="col-10">
          <q-slider
            v-model="flavorProfile"
            markers
            :marker-labels="flavorProfileMarkerLabels"
            snap
            :min="1"
            :max="5"
          />
        </div>
      </div>
      <div class="label">Select coffee strength</div>
      <div class="row justify-center">
        <div class="col-10">
          <q-slider
            v-model="strength"
            markers
            :marker-labels="strengthMarkerLabels"
            snap
            :min="1"
            :max="5"
          />
        </div>
      </div>
      <q-btn color="white" text-color="black" label="Start" @click="onClick()" size="lg"/>
    </div>
    <div v-if="!showStart" class="flex column flex-center">
      <q-card flat bordered class="my-card flex column flex-center">
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
        <q-card-actions vertical align="stretch">
          <q-btn color="white" text-color="black" label="Reset" @click="onReset()" size="lg"/>
          <q-btn color="white" text-color="black" label="Back" @click="onBack()" size="lg"/>
        </q-card-actions>
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
          durationPerPour: 45,
          flavorProfile: 3,
          flavorProfileMarkerLabels: {1: 'More sweet', 5: 'More acidic'},
          strength: 3,
          strengthMarkerLabels: {1: 'Lighter', 5: 'Stronger'},
          pours: []
      }
  },
  methods: {
      setInitialValues() {
        this.showStart = false
        this.showStartTimer = true
        this.startTime = 3
        this.currentAction = "Ready"
        this.remainingPours = this.pours.length

      },
      onClick() {
        this.pours = []
        this.remainingPours = this.pours.length
        //this.waterAmount = this.coffeeAmount * 3
        let waterAmount = this.coffeeAmount * 3

        let flavorWaterTotalAmount = waterAmount * 2
        let strengthWaterTotalAmount = waterAmount * 3

        let firstPourWater = (flavorWaterTotalAmount/6) * this.flavorProfile
        let secondPourWater = flavorWaterTotalAmount - firstPourWater
        let strengthPourWater = strengthWaterTotalAmount / this.strength

        this.pours.push(Math.round(firstPourWater))
        this.pours.push(Math.round(secondPourWater))
        for (let i = 0; i < this.strength; i++) {
          this.pours.push(Math.round(strengthPourWater))
        }

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
        this.setInitialValues()
        this.waterAmount = this.pours[0]
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
        this.waterAmount = this.pours[Math.abs(this.remainingPours-(this.pours.length - 1))]
        console.log(this.pours)
        console.log(this.remainingPours)
        console.log(Math.abs(this.remainingPours-4))
        this.mainTimerInterval = setInterval(() => {
          if (this.mainTime <= 6) {
            if (this.remainingPours == 0) {
              this.currentAction = "Almost done!"
            } else{
              this.currentAction = "Prepare for next pour"
            }
          }

          if (this.mainTime == 1) {
            clearInterval(this.mainTimerInterval)
            this.remainingPours -= 1
            if (this.remainingPours >= 0) {
              this.startMainTimer()
            } else {
              this.currentAction = "Done"
            }
          }
          this.mainTime -= 1
        }, 1000)
      }
  }
})
</script>
<style scoped>
  .label {
    font-size: 1.2rem;
  }
</style>
