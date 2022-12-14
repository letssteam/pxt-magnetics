/**
 * Functions to communicate with magnetics layer
 */
//% color="#B4009E" weight=40 icon="\uf076"
namespace magnetics {

    /**
     *  Start the device to sending data (by default the sending is activated)
     *
     */
    //% blockId=ble_start_emitting block="Start Send mode"
    //% help=magnetics/ble_start_emitting weight=95
    export function startEmitting(): void
    {

    }

    /**
     *  Stop the device to sending data
     *
     */
    //% blockId=ble_stop_emitting block="Stop Send mode"
    //% help=magnetics/ble_stop_emitting weight=95 
    export function stopEmitting(): void
    {

    }

    /**
     * Start the device to receiving data (by default the receiving is activated)
     *
     */
    //% blockId=ble_start_scanning block="Start Scan mode"
    //% help=magnetics/ble_start_scanning weight=91
    export function startScanning(): void
    {

    }

    /**
     * Stop the device to receiving data
     *
     */
    //% blockId=ble_stop_scanning block="Stop Scan mode"
    //% help=magnetics/ble_stop_scanning weight=91 
    export function stopScanning(): void
    {

    }

    /**
     * Set the BLE device local name
     *
     * @param name The name
     */
    //% blockId=ble_set_local_name block="BLE device name : %name"
    //% help=magnetics/ble_set_local_name weight=90
    export function setLocalName(name: string): void
    {

    }

    /**
     * Send string data
     *
     */
    //% blockId=ble_set_string_data block="BLE send string %data"
    //% help=magnetics/ble_set_string_data weight=71 shim=magnetics::setAdvertisingStringData
    export function setAdvertisingStringData(data: string): void
    {

    }

    /**
     * Send "key:value" data
     *
     */
    //% blockId=ble_set_keyvalue_data block="BLE send key %key: value %value"
    //% help=magnetics/ble_set_keyvalue_data weight=70
    export function setAdvertisingKeyValueData(key: string, value: number): void
    {

    }

    /**
     * Is there any data from a device with specific name ?
     *
     */
    //% blockId=ble_available_data_from_name block="is available BLE data from %name"
    //% help=magnetics/ble_available_data_from_name weight=65
    export function availableDataFromName(name: string): boolean
    {
        return false;
    }

    /**
     * Get the data from the device with a specific name (if there are multiple device with the same name, the first who emit will
     * be use)
     *
     */
    //% blockId=ble_receive_data_from_name block="BLE receive data from %name"
    //% help=magnetics/ble_receive_data_from_name weight=65
    export function readDataFromName(name: string): string
    {
        return "";
    }

    /**
     * Run some code when we receive new message from device
     */
    //% blockId=ble_on_new_message block="on new message from %name"
    //% help=magnetics/ble_on_new_message weight=60
    export function onNewMessageReceived(name: string, handler: () => void): void
    {

    }
}
