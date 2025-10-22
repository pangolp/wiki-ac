---
prev:
  text: 'Step 6: Final Server Steps'
  link: 'final-server-steps'

next:
  text: 'Step 8: Client Setup'
  link: 'client-setup'
---

# macOS Keeping the Server Up-to-Date

## Keeping the source Up-to-Date

```sh
cd ~/azerothcore/ && git pull origin master
```

```sh
cd build && make -j 8 && make install
```

Sometimes we add or remove files from the repositiory. At that point it is neccessary to recompile the server, the same way as it was installed the first time [in the macOS Core Installation](macos-core-installation#configuring-for-compiling).

## Keeping the Database Up-to-Date

Read [Database Keeping the Server Up-to-Date](database-keeping-the-server-up-to-date)

<!--@include: ./help.md-->
