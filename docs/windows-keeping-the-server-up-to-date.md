---
prev:
  text: 'Step 6: Final Server Steps'
  link: 'final-server-steps'

next:
  text: 'Step 8: Client Setup'
  link: 'client-setup'
---

# Windows Keeping the Server Up-to-Date

## Keeping the source Up-to-Date

Open your AzerothCore repository in GitExtensions.

- Click on the blue down arrow (Pull - merge).
  - This will sync your local repo to the latest commits from the azerothcore-wotlk repository.
- Now you will need to re-run CMake Configure and Generate to update your solution (.sln) files.
- Compile downloaded source as explained in [Windows Core Installation](windows-core-installation#compiling-the-source)

## Keeping the Database Up-to-Date

Read [Database Keeping the Server Up-to-Date](database-keeping-the-server-up-to-date)

<!--@include: ./help.md-->
