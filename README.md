pi-mac-monitor
==============

Use raspberry pi, firebase and angularjs to monitor devices @ your home.

Read the full article on Medium:
https://medium.com/@rotemtam/build-a-homemade-spying-machine-with-a-raspberry-pi-firebase-and-some-python-9ef74bec301c


### Installation

```bash
git clone https://github.com/rotemtam/pi-mac-monitor.git
cd pi-mac-monitor
bower install
npm install

```

### Configuration

```bash
cd app/scripts/angularfire/
cp config.js-example config.js
nano config.js # edit <your_app>
```

### Running the app
```bash
grunt serve
```