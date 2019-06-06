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
1. Open `./manifest.yml` and update `name` and `host`

2. Build for production

	```shell
	npm run build
	```

3. Deploy

	```shell
	cf push
	```

## License
MIT

