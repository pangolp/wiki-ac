# module_string_locale

[<-Back-to:World](database-world)

**The module_string_locale table**

This table holds information of string entries for modules.

**Table Structure**

| Field             | Type         | Attributes                              | Key | Null | Default | Extra | Comment                      |
| ----------------- | ------------ | --------------------------------------- | --- | ---- | ------- | ----- | ---------------------------- |
| [module](#module) | VARCHAR(255) |                                         | PRI | NO   |         |       | module dir name, eg mod-cfbg |
| [id](#id)         | INT          | UNSIGNED                                | PRI | NO   |         |       |                              |
| [locale](#locale) | ENUM         | koKR,frFR,deDE,zhCN,zhTW,esES,esMX,ruRU | PRI | NO   |         |       |                              |
| [string](#string) | TEXT         |                                         |     | NO   |         |       |                              |

**Description of the fields**

### module

Module identifier in [module_string.module](module-string#module).

### id

String id in [module_string.id](module-string#id).

<!--@include: /utils/locale.md-->

### string

The translated text of [module_string.string](module-string#string).
