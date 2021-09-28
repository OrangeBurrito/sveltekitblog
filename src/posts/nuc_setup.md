---
title: "Intel NUCs: A walnut-laden dissertation"
date: 2021-07-12
coverImage: "https://i.redd.it/ggstkjnb53kz.jpg"
excerpt: "Can It Run D̶o̶o̶m̶ Minecraft: Intel NUC Edition"
---
 
# start
- etymology of "nuc"
- why did I get this thing and should you
- how to set it up
	- what you need
	- options
	- installing npm
- ssh permission
- installing docker
- setting up server
- copying files, running it
- logs

NUC, pronounced like Bad Luck is short for Next Unit of Computing.  It should be NUoC but that wouldn't make a nice acronym.

Why would you need it? For running servers or just to have a tiny computer.
If you just want to run a Minecraft server you can use various server hosts, but they're a mixed bag.
For more fine-tuned control you can use DigitalOcean, but it has a higher price.

If you plan on running a server for many years it may be worth it to get your own server instead of paying per month.

NUC types: for starters you can get a regular one, it doesn't have to be the newest model. 2020-2017's a good bet.
If you are a pleb and don't know what an SSD is, the standard Mini PC is a good option.
The other, cooler option is the Kit.

## What you'll need

![ajg](insert a picture)

The first step is to prepare the OS. As an owner of the Kit you'll need to find a flash drive and "etch" an OS onto it.  For your choice of operating system, it depends what you're using it for.
If the NUC is intended to be a server and you know your way around the command line, you can install a headless Linux server (I used Ubuntu).
If the NUC's to be a personal computer go with Windows or some flavor of Linux.
MacOS is an option if you're willing to perform some illegal hijinks.  As long as you're not wealthy, the fruity lawyers won't be bothered to sue your ass.

Once you've downloaded the OS from the requisite source, etch it onto your flash drive.  I used [balenaEtcher](https://www.balena.io/etcher/) for this.

With all the parts assembled and pieces unwrapped, I unscrewed the butt of the PC and popped in the SSD and RAM (purchased separately).
Then came the bootable flash drive and ethernet cable for internet access.
Note: situate yourself near your router for this.

Once the monitor and keyboard were set up and the issues regarding missing drivers on the NUC's part were resolved (you may need to use an HDMI cable) I switched on the PC and monitor and began setup.

A white Intel logo on a black screen flashed and was replaced by the barebones startup screen, with a few options on screen

The installation process was pretty simple.  After selecting Install Unbuntu Server a cascade of logs spilled over the screen for a minute before switching over to the settings.   In the process of user account creation, I bequeathed the perfect name to the micro machine sitting dutifully to my right.

[insert pic of WalNUC my beloved]
The only thing missing is a walnut chassis

The last thing to note in setup was the optional list of packages to install.  I selected Docker for running my Minecraft server.

Finally emerging from the womb of installation, I got my bearings and installed `nmcli` over the net through my ethernet connection and ran a few commands to connect to my wifi.

```
nmcli d
nmcli d wifi list
nmcli d connect $wifiNetwork
```


With the WiFi up and running, I set up SSH and remotely connected to the mini PC from my laptop.
For anyone still following along, this means you can put the monitor and keyboard back and go sit in a more comfortable location.


## Running The Block Game

The fun part!  This method is similar to using online cloud platforms, but with a few extra steps.

You'll need admin access to your router and a domain name ready to go.
I highly advise *not* touching GoDaddy with a ten-foot pole.  They're notorious for domain poaching and there's a high chance the domain you searched for on their site will be snapped up and sold back to your for an outrageous price.
I personally use Namecheap for domains.

The first step is port forwarding.  If you want anyone not connected directly to your WiFi to be able to join, you'll need to map an external port to the server's IP Address.

The public IP address consists of your router's IP Address plus the specified port.  In my case it would be:
`[ip address]:25565`

Create an A Record on your domain's hosting site and paste in the IP Address, splitting where necessary.  You can set the TTL to the minimum amount of time if you don't want to wait too long for the new address to propagate.

> **Note:** this is a quote!