# GOT Remover

Google chrome extension to hide any Facebook post contains references to Got, Game of thrones. 

# Bulding & Installing

## Linux & OS X

Clone the repo: `git clone https://github.com/azoughbi/got_remove.git`

Run `google-chrome --pack-extension=/path/to/repo/src`

> This will generate 2 files: `src.crx` and `src.pem`, Delete the `src.pem` since it won't be needed. 

Open Google Chrome, navigate to `chrome://extensions`, drag and drop `src.crx` to the extensions window, and click `Add Extension`

## Windows 

Clone the repo: `git clone https://github.com/azoughbi/got_remove.git`

Run `chrome.exe --pack-extension=C:\got_remove\src`

> Make sure to replace `C:\got_remove` with the path you cloned the repo to. 

> The above command will generate 2 files: `src.crx` and `src.pem`, Delete the `src.pem` since it won't be needed. 

Open Google Chrome, navigate to `chrome://extensions`, drag and drop `src.crx` to the extensions window, and click `Add Extension`

## From Google Chrome

Clone the repo: `git clone https://github.com/azoughbi/got_remove.git`

Open Google Chrome, navigate to `chrome://extensions` 

Click on `Pack extension` 

In the `Extension root directory` field, specify the path to the extension's `src` folder

Click `Package`. The packager creates two files: src.crx file, which is the actual extension that can be installed, and a src.pem file, which contains the private key that you can delete.

Install the extension by dragging and dropping `src.crx` to the extensions window, and click `Add Extension`

## Or download the compiled CRX extensions

[From here](https://github.com/azoughbi/got_remove/releases/download/1.0/src.crx)
