## Install dependencies

```shell
npm install
```

## Run (locally)
1. Install dependencies

	```shell
	npm start
	```

2. Navigate to [http://localhost:8080](http://localhost:8080)

## Deploy (IBM Cloud)
1. Open `./manifest.yml` and update `name` and `host` with `<YOUR-USERNAME>-nlu-web`

2. Build for production

	```shell
	npm run build
	```

3. Deploy

	```shell
	cf push
	```

4. Navigate to [https://YOUR-USERNAME.mybluemix.net](https://YOUR-USERNAME.mybluemix.net)

## License
MIT

