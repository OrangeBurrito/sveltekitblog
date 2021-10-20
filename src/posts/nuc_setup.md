---
title: "Mini PCs: Setup"
date: 2021-10-20
coverImage: "https://www.intel.com/content/dam/www/global/badges/nuc7i7bnh-nuc7i5bnh-front-angle-rwd.png.rendition.intel.web.480.270.png"
excerpt: "Intel NUCs: how to set one up and how to run a Minecraft Server on it"
---

<!-- ## Table of Contents
- etymology of "nuc"
- why did I get this thing and should you
- how to set it up
	- what you need, options, installing npm, ssh permission
- installing docker
- setting up server
- copying files, running it, logs -->

This is a short guide detailing the setup of a mini PC, and how to run a Minecraft Server on it.

If you just want the server and aren't interested in setting up a mini PC, You can (1. use a cloud service provider like DigitalOcean, or (2. use a Minecraft Server hosting service (this option is viable for the computer illiterate and/or the lazy, but there are no guarantees on how reliable these are) 

I've listed a few pros and cons of using a cloud service provider below:

### Pros
- No need to invest in infrastructure (not having a server in your home running 24/7)
- Accessibility (You can spin up new servers from anywhere in seconds)
- Data backups (it's on the cloud, there's little chance something will wipe your data)

### Cons
- Subscription based (You need to keep paying a set fee per month to keep the server running)
- Less Flexibility/Control (Since you don't own the infrastructure you can't just swap out a new RAM stick)
- Errors (When something goes wrong it's a lot harder to troubleshoot)


## Choice of PC

First of all, what is a mini PC? It's just a scaled down computer, with a few things removed due to space constraints.

The most important thing that's missing is a tangible interface.  Without peripherals plugged into it, it's a black box of mystery and heat.

[](sdr)

This makes mini PCs inefficient for use as a laptop, but but more suited to use as an unobtrusive home server or desktop computer.

![hh](/images/posture.png)*The right way to use a mini PC*

A mini PC is a good choice for a home server because of its small size, and general noiselessness.  You can stash it away in a corner with a power source and it'll run fine.

[](sdl)


Some models may chug along noisily for some unforseen reason, but that can usually be fixed by letting it bask in its birthday suit.
A fanless case is good for noise reduction, but it's a last-ditch resort because it's so large it basically defeats the point of a having mini PC. 

![Akasa Turing Fanless Case next to Intel NUC](https://www.akasa.com.tw/img/product/common/feature/00/A-NUC45-M1B_f0A.jpg)*This particular case doubles the size of an Intel NUC*

NUC types: for starters you can get a regular one, it doesn't have to be the newest model. 2020-2017's a good bet.
If you are a pleb and don't know what an SSD is, the standard Mini PC is a good option.
The other, cooler option is the Kit.


## The Kit



Your brand new toy has arrived.  Before you gleefully desecrate the packaging, have your RAM stick(s) and SSD ready to go, as you'll need to pop them into the computer.  These will need to be purchased separately.

### Assembly

[](sdr)

Take the payload out of the supply drop and remove all miscellaneous wrapping.
Flip the device over and unscrew all four foot-screw-nubs.
If you're like me and belong in a Gary Larson comic, heed common sense and remember to use a large screwdriver.

![School For The Mechanically Declined](https://www.fredwehner.de/buggsold/fs7.gif)

Once it's unscrewed, gently lift the cover off.  There'll be a kind of magnetic tape attaching it to the main computer, so lay it down next to the de-fleshed skeleton.

A diagram of the inside of the mini PC:

![Diagram of Inside of Mini PC](/images/inside_nuc.png)

There are two slots for RAM and one for the SSD as pictured above.
After you've finished (gently) plugging in the sticks, you can screw the cover back on and plug it in with the included cable.


### Etching

The second step to greatness is etching your preferred operating system onto a flash drive, known as a bootable drive.
Scrounge up a flash drive and search the interwebs for an operating system (preferrably from an official source).

If the NUC is intended to be a server, go with a headless Linux distribution.  I used [Ubuntu](https://ubuntu.com/download/server).

Download the image file for the OS, and use an etching program to flash it onto your thumb drive.

I used [balenaEtcher](https://www.balena.io/etcher/) for its ease of use and intuitive UI.
It supports .ISO, .IMG and .ZIP images, so make sure your image is in one of those formats.

> Remember to plug in your thumb drive before doing this!


The process of etching an OS image onto a thumb drive:
![Process of Flashing to a Thumb Drive](/images/etcher.png)


### Apparatus

The penultimate step is to obtain a monitor and keyboard to be our portal to interacting with the NUC.

At this stage, the Mini PC has only a simple BIOS installed.  The BIOS lacks any bluetooth drivers and will be unable to communicate with any bluetooth peripherals you give it.  It may also not work for certain types of cables, so I'd recommend sticking with a regular HDMI cable.

After the monitor and keyboard are plugged in/turned on, attach the flash drive and the main power cable before pressing the start button.

The monitor will light up in the middle with an Intel logo before being replaced by the barebones startup screen.

Select the Install OS option 

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

This method has similarities to hosting a server on a platform like DigitalOcean, but requires some extra steps for port forwarding.

### What You'll Need
1. **Docker**
	For running and deploying the server.  I used docker for the ease-of-use and self-containment it provides.

1. **Admin access to your home router**
	For port forwarding

1. **A Domain Name**
	For your server's IP


**The first step** is port forwarding.  If you want anyone not connected directly to your WiFi to be able to join, you'll need to map an external port to the server's IP Address.  The way you do it varies from router to router.

The public IP address consists of your router's IP Address plus the specified port.  In my case it would be:
`[ip address]:25565`

Create an A Record on your domain's hosting site and paste in the IP Address, splitting where necessary.  You can set the TTL to the minimum amount of time if you don't want to wait too long for the new address to propagate.

**The second step** (optional if you have a static IP address) is enabling DDNS.

Your home network and its devices will be assigned new IP addresses every 24 hours by your ISP.  This is an issue when you want to map a domain name to a constantly changing IP address, thus forcing you to manually update it on the daily.
If you're like me and are surprised at the exorbitant prices for static IP addresses (it's exactly what it says on the tin), you can use the Dynamic Domain Name System and have the program automatically update the address mapped to your domain name. 

On my NUC, I installed ddclient as a [docker container](https://hub.docker.com/r/linuxserver/ddclient) and created a docker-compose file, which I promptly ran to generate the ddclient config file.

Inside the file I used my text editor of choice (I'm leaning towards vim nowadays) to insert my server URL, domain password and optional subdomain.

After a quick re-run of the compose file and checking of the logs, it was up and running.

```shell
SUCCESS:  updating mc: good: IP address set to [Port Forwarded IP Address]
```

This is what your logs should look like ⬏

**The third step** is starting the Minecraft server.
I used [this Docker image](https://github.com/itzg/docker-minecraft-server) to start up and run the server.

It's basically just a program that installs the necessary game files and runs a launch script.  You can choose between different variations of the Minecraft server, from the default vanilla basegame to the Forge modlauncher.

After creating a folder to store my server data, I copied the minecraft installer jar file from my local machine and created a docker-compose file.

Inside the file, I pasted in my build script.  You can find examples of one in the [docker-minecraft-server documentation](https://github.com/itzg/docker-minecraft-server).

Finally, I ran the docker-compose file with `docker-compose up -d`.
(-d, shorthand for --detach, runs the container in detached mode meaning it runs in the background)

This creates a container with the name specified in the file (in this case `mc`) from the given image (docker-minecraft-server) and runs it.

I ran a quick `docker logs mc --since 1m` to check the progress on it.  The `--since` tag is optional, but useful if your server has been running continuously for weeks and you only want to see the latest logs.




I created the `mc_volume` folder in the `/mnt` directory.
Inside `mc_volume`, I created the docker-compose file.
I then opened up a new terminal window to my local filesystem and copied the forge-installer jarfile onto the NUC.

```shell
scp Downloads/forge-[version]-installer.jar username:[local IP Address]:/mnt/mc_volume
```
Copying a jar file from the Downloads folder to mc_volume

> **Note:** this is a quote!