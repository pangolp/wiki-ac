---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# creature_questitem

## The \`creature_questitem\` table**

Holds NPC quest ender relations on which NPCs finishes which quests.

| Field                           | Type | Attributes | Key | Null | Default | Extra | Comment |
| ------------------------------- | ---- | ---------- | --- | ---- | ------- | ----- | ------- |
| [CreatureEntry](#creatureEntry) | INT  | UNSIGNED   | PRI | NO   | 0       |       |         |
| [Idx](#idx)                     | INT  | UNSIGNED   | PRI | NO   | 0       |       |         |
| [ItemId](#itemid)               | INT  | UNSIGNED   |     | NO   | 0       |       |         |
| [VerifiedBuild](#verifiedbuild) | INT  |            |     | YES  | NULL    |       |         |

## Description of the fields

### CreatureEntry

[creature_template.entry](creature-template#entry).

### Idx

Index 0-3

### ItemId

[item_template.entry](item-template#entry).

<!--@include: ./verified-build.md-->
