# Network File Sender

##Purpose

This is a simple file sharing script which can send a file (any format) over a LAN network. Useful in instances where you need to send executable files, or executable zipped files which cannot be e-mailed and in absence of airdrop and/or bluetooth, this script can be used to send the file. The client only needs a web browser to download the file to the default downloads folder of the client.

##Dependencies##

Requires nodejs

```
"dependencies": {
    "fs": "0.0.2"
  }
```


##Installation

Clone the github repo:

```
git clone git@github.com:ashutosh30492/network_file_sender.git
```
Install the dependencies:

	npm install
	
##Running
Run the application

	node index.js 
	
The file which needs to be sent is file.zip. Will add configurable filenames and support for multiple files in the future. To download the file, the client needs to go to http://SERVER_IP_ADDRESS:1234/ on it's web browser.