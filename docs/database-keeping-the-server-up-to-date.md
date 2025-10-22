---
prev:
  text: 'Step 6: Final Server Steps'
  link: 'final-server-steps'

next:
  text: 'Step 8: Client Setup'
  link: 'client-setup'
---

# Database Keeping the Server Up-to-Date

1. First make sure that your core is [up-to-date](keeping-the-server-up-to-date).

If you want to know how the SQL directory works or plan to have custom changes we recommend you read [this](sql-directory).

## Automatic Database Updater

By default, the Worldserver and Authserver will check for, and execute all new files into the database you specified in the config.

1. Start worldserver.exe

To edit the automatic database updater you will find the necessary settings in authserver.conf and worldserver.conf under **UPDATE SETTINGS**.

<!--@include: ./help.md-->
