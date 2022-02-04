const HitCounter = function () {
    this.indices = []
    this.counts = []
  }

/**
 * Return the number of hits in the past 5 minutes.
    @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
        HitCounter.prototype.getHits = function (timestamp) {
            let count = 0
            for (let i = 0; i < 300; i++) {
              if (timestamp - this.indices[i] < 300) {
                count += this.counts[i]
              }
            }
            return count
          }