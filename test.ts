magnetics.setLocalName("DeviceVal")
magnetics.startEmitting()


for (let i = 0; i < 10; ++i) {
    magnetics.setAdvertisingKeyValueData("val", i)
    pause(500)
}
