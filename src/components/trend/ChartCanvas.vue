<template>
  <canvas id="chart"></canvas>
</template>

<script>
export default {
  mounted() {
        this.clearCanvas()
        const panel = document.getElementById("chart")
        panel.width = '920'
        panel.height = '600'
        this.updateCanvas()
    },
    watch: {
        'price': {
            handler: function (val, oldVal) {
                this.clearCanvas()
                this.updateCanvas()
            },
            deep: true,
        }
    },
    data() {
        return {
            nextDay: 81.5,
            ratio: -0.82,
            color: ['rgb(255,0,0)','rgb(0,0,255)','rgb(255,255,0)','rgb(0,255,0)'],
            company: ['BMW','Google','Apple','Twitter']
        }
    },
    computed: {
        price() {
            return this.$store.getters.price
        },
    },
    methods: {
        clearCanvas: function() {
            var c = document.getElementById("chart").getContext("2d");
            c.restore()
            c.clearRect(0,0,920,600);
        },
        updateCanvas: function() {
            var c = document.getElementById("chart").getContext("2d");
            c.save()
            c.translate(99,456)
            for (let i = 0; i < 4; i++) {
                c.beginPath()
                c.strokeStyle = this.color[i]
                c.moveTo(0,this.price[this.company[i]][0]*this.ratio)
                c.fillText(this.price[this.company[i]][0].toString(),0,this.price[this.company[i]][0]*this.ratio+10)
                for (let j = 1; j < this.price[this.company[i]].length; j++) {
                    c.lineTo(this.nextDay*(j),this.price[this.company[i]][j]*this.ratio)
                    c.fillText(this.price[this.company[i]][j].toString(),this.nextDay*(j),this.price[this.company[i]][j]*this.ratio+10)
                }
                c.stroke()
            }
        }
    }
}
</script>

<style scoped>
 #chart{
     background-image: url('/src/assets/chart.png');
     background-repeat: no-repeat;
     margin: 10px;
 }
</style>
