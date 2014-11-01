#Cordova

##Pre-Req

- nodejs
- cordova

## HolaLP

```bash
cordova create HolaLP io.laplatajs.holalp HolaLP
cd HolaLP
cordova platform add ios
cordova emulate ios

```

> editar HolaLP/wwww/index.html

```html
<div class="app">
    <h1>Hola La Plata</h1>
    <div id="deviceready" class="blink">
        <p class="event listening">Connecting to Device</p>
        <p class="event received">Device is Ready</p>
    </div>
</div>
```

## Plugins

> Listado completo en [cordova plugin registry](http://plugins.cordova.io/)


```bash
cordova plugin add org.apache.cordova.device
```

> editar HolaLP/www/js/index.js
> agregar esta linea al final del metodo `receivedEvent`

```js

    receivedElement.innerHTML = device.platform + ' ' + device.version;

```


#Sencha Touch + Cordova

##Pre-Req

- Sencha Cmd [download](http://www.sencha.com/products/sencha-cmd/) (instalar)
- Sencha Touch [download](http://www.sencha.com/products/touch/download)
- Cordova

##HolaLP-ST

```bash
sencha -sdk {sencha-touch-sdk-folder} generate app HolaLP HolaLP-ST
cd HolaLP-ST
sencha cordova init io.laplatajs.holalp

```
Donde `{sencha-touch-sdk-folder}` es la carpeta donde descomprimieron el donwnload de Sencha Touch.

> editar HolaLP-ST/app.json
> agregar las plataformas en 'builds.native.cordova'

```json

"builds": {
    "web": {"default": true},
    "native": {
        "packager": "cordova",
        "cordova" : {
            "config": {
                "platforms": "ios",

                "id": "com.domain.HolaLP",
                "name": "HolaLP"
            }
        }
    }
},
```


```bash
sencha app build -run native

```

## Agregar Plugins

```bash
cd cordova
cordova plugin add org.apache.cordova.device
```

# Ionic + Cordova

##Pre-Req

- ionic ( sudo npm install -g ionic )

###HolaLP-Ionic

```bash
ionic start HolaLP-Ionic --app-name "HolaLP"
cd HolaLP-Ionic
ionic platform add ios
ionic build ios
ionic emulate ios
```
