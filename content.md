title: Remote Pad

Imagine poder controlar um jogo em seu computador usando seu smartphone
como gamepad?

<p><img alt="racepad" src="img/racepad-page.png" style="width: 70%" class="center" /></p>

---

title: Arquitetura

<p><img alt="architecture" src="img/architecture.png" style="width: 70%" class="center" /></p>

---

title: Agenda

Tópicos:

* **html5** - events, hardware access
* **nodejs** - event driven, assynchronous I/O
* **robotjs** - envios de tecla através de software
* **vuejs** - unobtrusive reactivity system
* **mqtt** - real time communication

---

content_class: flexbox vcenter

![html5](img/html5.png)

---

title: Device Orientation Events

Eventos no DOM para obter informações sobre a orientação e movimentação
física do dispositivo móvel.

* Giroscópio
* Acelerômetro
* Compasso

---

title: Device Orientation Events

<p><img alt="device-events" src="img/device-alpha-beta-gamma.png" style="width: 90%" class="center" /></p>

Eventos:

* `deviceorientation`
* `devicemotion` &#10003;
* `compassneedscalibration`

---

title: Outras APIs

* Ambient Light API
* Geolocation API
* Battery Status API
* getUserMedia API
* Vibration API
* Web Notification API
* Web Speech API

---

content_class: flexbox vcenter

![nodejs](img/nodejs.png)

---

title: NodeJS

NodeJS usa um modelo orientado a eventos, com E/S não bloqueante que o torna
leve e eficiente.

Como o Javascript é restrito ao browser foi necessário criar outros
módulos como:

* Buffer
* Child Process
* File System
* OS
* Stream, etc.

---

title: NodeJS

Node é projetado para construir aplicações escaláveis de rede. A seguir um exemplo
de servidor que pode atender a várias conexões concorrentemente:

<pre class="prettyprint">
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
</pre>

---

title: Benchmark
content_class: flexbox vcenter

`$ pm2 start index.js`

![nodejs-server](img/nodejs-pm2-monit.png)

---

title: Benchmark
content_class: flexbox vcenter

`$ locust --host=http://localhost:3003`

![locustio](img/locust-nodejs-1000users.png)

---

title: NodeJS Event Loop
content_class: flexbox vcenter

![threading_node](img/threading_node.png)

---

title: NodeJS Event Loop
content_class: flexbox vcenter

![node-event-loop](img/node-event-loop.jpeg)

---

title: NodeJS Event Loop

Visualizing the javascript runtime at runtime

<http://latentflip.com/loupe>

---

title: Referências

* HTML5
	* <http://www.girliemac.com/presentation-slides/html5-mobile-approach/deviceAPIs.html>
	* <https://github.com/AurelioDeRosa/HTML5-API-demos>
* NodeJS
	* <https://strongloop.com/strongblog/node-js-event-loop/>
	* <http://latentflip.com/loupe>
    * <https://strongloop.com/strongblog/node-js-is-faster-than-java/>
* Outras Ferramentas
	* <http://locust.io/>

---

title: Referências

* VueJS