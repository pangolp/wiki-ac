---
prev:
  text: 'Step 1: Requirements'
  link: 'windows-requirements'

next:
  text: 'Step 3: Server Setup'
  link: 'windows-server-setup'
---

# Windows Core Installation

## Required software

See [Requirements](windows-requirements) before you continue.

## Pulling & Compiling the source

### Pulling the code

1. Create the directory where the source files will be located. In this guide, we will use **C:\Azerothcore**.
2. Open up Github Desktop
3. Click **File** -> **Clone repository...** in the top left
4. Click **URL**
5. Fill in the data as follow:

```
Repository URL or GitHub username and repository: https://github.com/azerothcore/azerothcore-wotlk
Local path: C:\Azerothcore
```

Click **Clone**. Within a few minutes, Azerothcore's source files will be cloned into **C:\Azerothcore**.

#### Troubleshooting

If you encounter an error like **fatal: early EOF** or **fatal: fetch-pack: invalid index-pack output** you can find a workaround here: [Common Errors ACE00105](common-errors#ace00105).

### Configuring and generating Visual C++ solution with CMake

Before you begin, create a new directory called **Build**. In this guide, we will use **C:\Build**.

1. Open CMake
2. Click **Browse Source...** → Select the source directory (**C:\Azerothcore**)
3. Click **Browse Build...** → Select the build directory (**C:\Build**)
4. Click **Configure**.
5. In the dropdown menu, choose the version of the compiler you downloaded in the [Requirements](windows-requirements) section. Be sure to choose the **Win64** version if you work on a 64-bit compilation.
6. Make sure that **Use default native compilers** is checked.
7. Click **Finish**.
8. Make sure **TOOLS_BUILD** is set to `all`. This will compile the extractors needed later in the setup.
9. Click **Configure** again. As long as you have error(s) typed in red in the log window you will need to check your parameters and re-run it.
10. Click **Generate**. This will install the selected build files into your **C:\Build** folder.

::: info Note
If you were to encounter errors in CMake see [Common Errors](common-errors#core-installation-errors).
:::

### Compiling the Source

1. In CMake press **Open Project** to open the **AzerothCore.sln** file directly with Visual Studio.

1. In the menu at the top, click **Build** and select **Configuration Manager**.

    1. Set **Active Solution Configuration** to **RelWithDebInfo**.

    1. Set **Active Solution Platform** to **x64** and then click Close (settings automatically save).

1. Right-click **ALL_BUILD** in the Solution Explorer on the right sidebar and select **Clean**.
 
1. Right-click **ALL_BUILD** and select **Build**. (Ctrl + Shift + B)

    1. If your GUI does not show Solution Explorer, click the Build menu and select **Clean Solution**, and then **Build**.

Build time differs from machine to machine, but you can expect it to take between 5 and 30 minutes.

If you are asked to "Reload build files" during or after the compilation, do so.

When the build is complete you will find a message in the output that looks similar to this:

```
========== Build: 22 succeeded, 0 failed, 0 up-to-date, 1 skipped ==========
```

You will find your freshly compiled binaries in the **C:\Build\bin\RelWithDebInfo** or **C:\Build\bin\Debug** folder. These are all used to run your server at the end of this instruction.

You will need the following files in order for the core to function properly:

```
\configs\
authserver.exe
authserver.pbd
worldserver.exe
worldserver.pdb
libmysql.dll
legacy.dll
libcrypto-3-x64.dll
libssl-3-x64.dll
```

There are four DLL files that need to be manually added to this folder, and you need to copy them from the following directories:

```
- libmysql.dll
(C:\Program Files\MySQL\MySQL Server 8.x\lib)
```

::: info Note
Your libmysql.dll version need to match the MySQL Server version you run. If you update your MySQL server you need to recompile the core and copy the new dll file over.
:::

```
- legacy.dll
- libcrypto-3-x64.dll
- libssl-3-x64.dll
(C:\OpenSSL-Win64\bin)
```

In the **configs** folder you should find:

```
authserver.conf.dist
worldserver.conf.dist
```

#### About compilation log and report

pdb files only exist if you compile with Debug or RelWithDebInfo configuration. It is not mandatory but it is recommended to compile core with at least the RelWithDebInfo configuration to get proper crash logs.

::: tip Important
To report crash logs it's MANDATORY to compile with Debug or RelWithDebInfo configuration.
:::

<!--@include: ./help.md-->
