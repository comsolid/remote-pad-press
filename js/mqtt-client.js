require(['mqtt.min'], function (mqtt) {
    var btnClose = document.getElementById('mqtt_close')
    var btnSend = document.getElementById('mqtt_send')
    var message = document.getElementById('mqtt_message')
    var result = document.getElementById('mqtt_result')
    var client = mqtt.connect('ws://test.mosquitto.org:8080/mqtt')
    client.subscribe("mqtt/demo")

    client.on("message", function(topic, payload) {
        result.innerHTML = [topic, payload].join(": ")
    })

    btnSend.onclick = function (e) {
        e.preventDefault()
        client.publish("mqtt/demo", message.value)
    }

    btnClose.onclick = function (e) {
        e.preventDefault()
        client.end()
    }
})
