---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# lfg_dungeon_template

**The \`lfg_dungeon_template\` table**

Used to give NPC spells cooldowns for mindcontroll.

## Table Structure

| Field                           | Type         | Attributes | Key | Null | Default | Extra | Comment                        |
| ------------------------------- | ------------ | ---------- | --- | ---- | ------- | ----- | ------------------------------ |
| [dungeonId](#dungeonid)         | INT          | UNSIGNED   | PRI | NO   | 0       |       | Unique id from LFGDungeons.dbc |
| [name](#name)                   | VARCHAR(255) |            |     | YES  | NULL    |       |                                |
| [position_x](#positionx)        | FLOAT        |            |     | NO   | 0       |       |                                |
| [position_y](#positiony)        | FLOAT        |            |     | NO   | 0       |       |                                |
| [position_z](#positionz)        | FLOAT        |            |     | NO   | 0       |       |                                |
| [orientation](#orientation)     | FLOAT        |            |     | NO   | 0       |       |                                |
| [VerifiedBuild](#verifiedbuild) | INT          |            |     | YES  | NULL    |       |                                |

## Description of the fields

### DungionId

Unique id from LFGDungeons.dbc

### name

Dungeon Name

### poisition_x

`field-no-description|3`

### poisition_y

`field-no-description|4`

### poisition_z

`field-no-description|5`

### orientation

`field-no-description|6`

<!--@include: ./verified-build.md-->
