# LightClock



### Starting the LightClock

Simply navigate to the repository directory on the raspberry pi, and type

```
sudo node main.js
```

> If you just cloned this repository, you will have to install the dependencies first, by running `node install`

### Web interface

Running main.js will also run a HTML interface at `localhost:3000` on the raspberry pi. To forward this to your local machine, type (on your local machine):

```
ssh -L <yourlocalhost>:<raspberry_pi_ip>:3000 pi@<raspberry_pi_ip>
```

