magnetics.setLocalName("DeviceVal")
magnetics.startEmitting()
let val = 0;
basic.forever(function () {
    magnetics.setAdvertisingKeyValueData("val", val++)
    pause(500)
})
