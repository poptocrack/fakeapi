# fakeapi

Usage

Add `"fakeapi": "git+ssh://git@github.com:poptocrack/fakeapi.git",` in `package.json`

Install packages with `yarn` or `nmp i`

`import Api from 'fakeapi'`

`const res = await Api.ApiCall()`

`ApiCall` is taking 2 args:

The first one is the returned value (whatever makes sense in your case)

The second is the maximum time before the `return`
