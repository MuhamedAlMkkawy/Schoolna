import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useCounterAnimation(statistics, options = {}) {
  // options with defaults
  const {
    stepDivisor = 100, // controls smoothness
    interval = 100,    // ms for setInterval
    threshold = 0.3,   // intersection % to trigger
    once = true        // run only once by default
  } = options

  // reactive copy for animation
  const animatedStats = ref(statistics.map((s) => ({ ...s, current: 0 })))
  const sectionRef = ref(null)
  let observer = null

  function animateCounters() {
    animatedStats.value.forEach((stat, i) => {
      let n = 0
      const step = Math.ceil(stat.number / stepDivisor)
      const timer = setInterval(() => {
        n += step
        if (n >= stat.number) {
          n = stat.number
          clearInterval(timer)
        }
        animatedStats.value[i].current = n
      }, interval)
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            if (once) observer.disconnect()
          }
        })
      },
      { threshold }
    )

    if (sectionRef.value) observer.observe(sectionRef.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return {
    sectionRef,
    animatedStats,
    animateCounters
  }
}


// HOW TO USE THIS HELPER FUNCTION ===> VIEW SCHOOLNA STATISTICS COMPONENT


// const { sectionRef, animatedStats } = useCounterAnimation(statistics, {
//   stepDivisor: 80,
//   interval: 50,
//   threshold: 0.2
// })