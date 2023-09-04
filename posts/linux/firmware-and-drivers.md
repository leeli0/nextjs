---
title: 'Firmware and Drivers'
release: '18 July, 2023'
update: '04 September, 2023'
author: 'Lee Li'
category: 'linux'
tag: 'linux'
---

For **computer platforms**, microcontroller firmware interfaces the hardware to Operating Systems
and drivers. UEFI firmware works with microcontroller firmware to handle the computer
before OSs and its drivers kick in, initializes the hardware and provides necessary information to
the OSs. Thus, the OSs can install the correct drivers and drivers know the available way to control
the hardware.  Drivers can invoke firmware routines or directly control the hardware to carry out
tasks sent by OSs. All firmware is **self-contained subsystems** automatically loaded and run when
hardware switchs on , can work together to compose a bigger system. OS drivers provide interfaces
for hardware/software, is part of a OS, have to loaded by OSs, can't directly run by hardware.

**Firmware** is a software system developed for a specific hardware platform and directly run on it. Its role vary significantly for different hardware platform. Let's see some examples.

On mainboards, there are one or more PCIe controllers. A PCIe controller is typically implemented as
a microcontroller. **A microcontroller** is a small integrated circuit (IC) that contains a CPU
core, memory, and various peripherals, all integrated into a single chip. These microcontrollers are
designed to handle specific tasks and functions efficiently. In the case of a PCIe controller, the
microcontroller is specifically tailored to manage the data transfer and communication between the
Central Processing Unit (CPU) and the PCIe devices connected to the mainboard. The software system
runs on these microcontrollers is firmware.  Microcontroller firmware is invoked to initialize and
control PCIe devices. There is a similar microcontroller and firmware with similar roles in almost
all mainboard components (Network Interface Card (NIC) , Hard Drive (HDD/SSD) Controller)and
peripheral devices (USB flash memory, printer).

**Unified Extensible Firmware Interface (UEFI)** is a specification prescribing the architecture of
the firmware used by computer platforms. The CPU on a computer is hardwired to run the UEFI
firmware.  The UEFI firmware initializes the hardware components and loads its modules stage by
stage which is called **UEFI boot stages**.  Security Phase (SEC) is the first stage. It configures
temporary RAM (often CPU cache as RAM), configures stack and heap in the temporary RAM, invokes
Pre-EFI Initialization (PEI) with location and size of firmware volume (FV), temporary RAM, stack
and heap.  Main memory is not available yet. PEI is the second stage. It does the main memory and
other early hardware initialization, also does firmware recovery operations. The third stage is
Driver Execution Environment (DXE). As main memory available now, most modules are loaded and most
hardware is initialized, like CPU, chipset, mainboard, and boot devices. EFI drivers or Option ROMs
of PCI devices are executed. The fourth stage is Transient System Load (TSL). Here you either enter
the UEFI shell or execute an UEFI application, like the Operating System (OS) boot loader. Then, the
last stage Runtime (RT) comes. The loaded OS takes over the computer. 

As you can see, UEFI firmware and microcontroller firmware is quite different. UEFI firmware looks
like an OS, has drivers, applications and graphic user interface (GUI)/command-line interface(CLI).
It invokes microcontroller firmware to control other devices. Contrast to that, microcontroller
firmware is way simpler, without GUI/CLI, only responsible for one component or peripheral device.

The software systems used by video game consoles (PlayStation, Xbox), routers, switches, kiosks, and
many embeded systems used in vehicles, appliances, robots and Internet of Things (IoT) devices are
frimware too. Like the UEFI firmware, some of them have similar features with an OS, like user
applications, system applications, kernel, drivers, boot loaders. It is not very clear in some cases
if it is an OS or firmware. But they are all **designed for a specific hardware platform with
  relatively specific purposes**. While OSs are more general, run on a variety of hardware platforms
  and can do all the things the above devices do.

**A driver** is a software system developed to provide interfaces of hardware/software which are
invoked by other software systems.  It can has a layered architecture.  **Driver stack** refer to a
hierarchical arrangement of multiple drivers that work together to enable the communication between
a hardware device and the OS or software applications. Each layer in the driver stack is responsible
for specific tasks, and the interaction between the layers allows for efficient handling of hardware
  functionality and data flow. Layered drivers are common in modern operating systems to provide
  modularity, flexibility, and support for a wide range of hardware devices. It is obviouly that
  drivers have to correctly communicate with the hardware/software which it provides interfaces, and
  the software which invokes the interfaces.
