---
title: 'Firmware and Drivers'
date: '18 July, 2023'
---

[A **microcontroller**](https://en.wikipedia.org/wiki/Microcontroller) is a small computer on a
single integrated circuit (IC) chip which contains one processor along with memory and programmable
input/ouput peripherals. Most **hardware** devices embed one or more microcontrollers, which usually
responsible for controlling the **basic functions** of hardware devices, such as power management,
communication, and data storage. For example, the microcontroller in a keyboard is responsible for
interpreting the keystrokes and sending them to the computer; the microcontroller in a router is
responsible for configuring the network settings, managing the firewall, and providing routing
services. The software system resides and runs on the microcontroller is **firmware**. Usually,
firmware is stored in **non-volatile memory**, could be loaded from drivers too. Firmware can be
updated to add freatures or fix bugs.  Firmware is **hardware dependent**, but independent to
operating system (OS).

For **BIOS/UEFI**, the whole system can be thought as a microcontroller, and the OS also runs on
this microcontroller.

>[A **driver**](https://en.wikipedia.org/wiki/Device_driver) provides a **software interface** to
>hardware devices, enabling OS and other computer programs to access hardware functions without
>needing to know precise details about the hardware being used.
>
>A driver communicates with the device through the computer bus or communications subsystem to which
>the hardware connects. When a calling program invokes a routine in the driver, the driver issues
>commands to the device (drives it). Once the device sends data back to the driver, the driver may
>invoke routines in the original calling program.
>
>Drivers are **hardware dependent and operating-system-specific**. They usually provide the
>interrupt handling required for any necessary asynchronous time-dependent hardware interface.

Drivers might invoke functionalities implemented by firmware or interact with the hardware by
protococls avaiable.
