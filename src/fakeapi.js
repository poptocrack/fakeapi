import SUGGESTED_LIST from './suggestedList'

class Api {
  constructor() {
    this.maxWaitTime = 1000
  }

  setMaxWaitTime = (max) => {
    this.maxWaitTime = max
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  sleep = async () => {
    return new Promise(resolve => setTimeout(resolve, this.getRandomInt(this.maxWaitTime)))
  }

  ApiCall = async (response) => {
    await this.sleep()
    if (this.getRandomInt(10) >= 9) {
      throw new Error("Some random error")
    } else {
      return (response)
    }
  }

  getSuggestedPlates = () => {
    return this.ApiCall(SUGGESTED_LIST)
  }
}

export default Api;
