# fakeapi

Usage

Add `"fakeapi": "git+ssh://git@github.com:poptocrack/fakeapi.git",` in `package.json`

Install packages with `yarn` or `nmp i`

`import Api from 'fakeapi'`

`const res = await Api.ApiCall(<response>)`

`ApiCall` is taking 1 arg:

It is the returned value (whatever makes sense in your case)

You can use `Api.setMaxWaitTime(<time>)` to make `ApiCall` goes faster. 3000 = 3s max wait time before response.
