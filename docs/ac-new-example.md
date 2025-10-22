---
prev:
  text: 'Start: Installation Guide'
  link: 'classic-installation'

next:
  text: 'Step 2: Core Installation'
  link: 'windows-core-installation'
---

# Example of NEW Windows Requirements

::: info
- Windows ≥ 10
- Boost ≥ 1.78
- MySQL ≥ 8.0 (Recommended 8.4)
- OpenSSL ≥ 3.x.x
- CMake ≥ 3.16
- MS Visual Studio (Community) ≥ 17 (2022) (Desktop) (No preview)
:::

|                            Header                             |
| :-----------------------------------------------------------: |
|                          [Git](#git)                          |
|               [Github Desktop](#github-desktop)               |
| [Visual Studio Community 2022](#visual-studio-community-2022) |
|                        [MySQL](#mysql)                        |
|                 [MySQL Client](#mysql-client)                 |
|                        [CMake](#cmake)                        |
|                      [OpenSSL](#openssl)                      |
|                        [Boost](#boost)                        |

## Git

### Download

- https://git-scm.com/download/win

### Instalation

- Run the standalone Installer

::: info
During the installation, you will be prompt to Adjust your PATH environment. Pick 'Git from the command line and also from 3rd-party software'.
:::

## Github Desktop

### Download

- https://desktop.github.com

### Instalation

- Download the installer and follow the steps to set it up.

## Visual Studio Community 2022

### Download

- https://visualstudio.microsoft.com/downloads

::: info
Make sure you're getting 'Visual Studio 2022 Community' and not 'Visual Studio Code'.
:::

### Instalation

- Install the C++ compiler. You will need to install the C++ compiler.

To do this, select **Desktop development for C++** under **Workloads -> Desktop & Mobile**.

![visualstudio](images/visualstudio.jpg)

## MySQL

- [Download](https://dev.mysql.com/downloads/mysql/8.4.html)

### Instalation

1. Run the Windows MSI Installer.
2. Scroll down to the bottom and click on "No thanks, just take me to the downloads!"
3. When the installation is almost done, make sure "Launch the MySQL Instance Configuration Wizard" is checked, then click "Finish".
4. When the MySQL Instance Configuration Wizard launches, most default options are fine, but remember the username and password you use (root // whatever). You will need them to log into your chosen database management tool (below) in order to import SQL files later.
5. To test if MySQL is set up correctly, hit CTRL+ALT+DEL on your keyboard, enter the Task Manager, and select the "Services" tab. In the list of services you should see "MySQL" with a status of "Running".

6. Add MySQL to Environment Variables.
   1. Go to Control Panel -> System
   2. Go to Advanced System Settings
   3. Go to Environment Variables
   4. Under "Systemvariables" select **Path**
   5. Edit and add your install path of MySQL, i.e **C:\Program Files\MySQL\MySQL Server 8.0\bin\\**

::: info NOTE
MySQL development files: These files are shipped with MySQL Server, search for them in the program files directory, MySQL\MySQL Server 8.0\lib / MySQL\MySQL Server 5.7\lib. You will need them later on for the server.
:::

## MySQL Client

### Download

- [HeidiSQL](https://www.heidisql.com/download.php) (Best for beginners)
- MySQL CLI (Fastest, comes with your MySQL Instalation)
- [DBeaver](https://dbeaver.io/) (Multiplatform Database Management Tool)
- [SQLYog Community Edition](https://github.com/webyog/sqlyog-community/wiki/Downloads)

::: info NOTE
You only have to pick one of the options on top.
:::

### Instalation

1. Try connecting to your database. You may be looking for "Connect to Host", "New Connection" or "Session Manager" depending on which program you use.

2. Create a new connection/session. The Hostname/IP address of "127.0.0.1" or "localhost" is fine if you installed MySQL on the same computer that you installed HeidiSQL or SQLYog. Simply fill in your root // whatever password and you should now be able to connect to your database. It's the information used in this step [MySQL](#mysql)

## CMake

### Download

- https://cmake.org/download

::: info
NEVER download and install the RC (Release Candidate), ALWAYS the Latest Release
:::

### Instalation

- Run the Windows MSI Installer.

::: info
We recommend compiling in 64-bit mode.
:::

## OpenSSL

### Download

- http://www.slproweb.com/products/Win32OpenSSL.html

::: info
Find the 64-bit version by finding the latest 3.x.x Win64 OpenSSL that is NOT the `light` version.
:::

### Instalation

- Run the Windows EXE/MSI Installer.

::: tip
- If you get the error 'Missing Microsoft Visual C++ .... Redistributable' while installing OpenSSL, download the [Microsoft Visual C++ 2017/2019/2022 Redistributable Package (x64) (Direct Download)](https://aka.ms/vs/17/release/vc_redist.x64.exe) (1.7MB Installer) and install it. While installing OpenSSL, choose The OpenSSL binaries `/bin` directory **NOT The Windows system directory** when given the choice of where to copy the OpenSSL DLLs. These DLLs will need to be located easily for [Core Installation](windows-core-installation).
:::

## Boost

### Download

- [Boost 1.81.0](https://sourceforge.net/projects/boost/files/boost-binaries/1.81.0/boost_1_81_0-msvc-14.3-64.exe/download)

::: info
You only have to pick one of the options on top. The one that has the specific number, it's direct download to that version.
:::

### Instalation

- Add an environment variable to the "System" variable named "BOOST_ROOT" and with the value being your Boost installation directory, e.g. `C:/local/boost_1_81_0`. Important is to use '**/**', not '**\\**' when pointing to the directory. (Make sure that it does not have a trailing slash (end of the path). If you still get problems, add the same variable in the `USER` variables section too, as shown in the image below.)

![boost](images/boost.jpg)

::: info
Notice that this image shows the version number 1.72.0 - use your actual version number in your settings.
:::

::: info
Make sure your BOOST_ROOT variable value has it's / facing the correct way. Like/this/that not\this\that
:::

|                            Header                             |
| :-----------------------------------------------------------: |
|                          [Git](#git)                          |
|               [Github Desktop](#github-desktop)               |
| [Visual Studio Community 2022](#visual-studio-community-2022) |
|                        [MySQL](#mysql)                        |
|                 [MySQL Client](#mysql-client)                 |
|                        [CMake](#cmake)                        |
|                      [OpenSSL](#openssl)                      |
|                        [Boost](#boost)                        |

<!--@include: ./help.md-->
