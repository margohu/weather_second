class Weather {
    constructor(city) {
        this.city = city
        this.key = '0ca6039cec9a0c8c1ae8ad5e5bd8ff9b'
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }

    changeCity(city){
        this.city = city
    }
}