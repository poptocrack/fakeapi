class Api {
  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  sleep = async () => {
    return new Promise(resolve => setTimeout(resolve, this.getRandomInt(1000)))
  }

  ApiCall = async (response) => {
    await this.sleep()
    if (this.getRandomInt(10) >= 9) {
      throw new Error("Some random error")
    } else {
      return (response)
    }
  }
}

export default new Api();
