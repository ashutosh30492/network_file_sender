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
