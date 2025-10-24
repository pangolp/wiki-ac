---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# quest\_details

**The \`quest_details\` table**

This table handles Quest NPC emotes with emote delays.

## Table Structure

| Field                           | Type      | Attributes | Key | NULL | Default | Comment                                             |
| ------------------------------- | --------- | ---------- | --- | ---- | ------- | --------------------------------------------------- |
| [ID](#id)                       | MEDIUMINT | UNSIGNED   | PRI | NO   | 0       | Unique ID ([quest\_template.ID](quest-template#id)) |
| [Emote1](#emote1)               | SMALLINT  | UNSIGNED   |     | NO   | 0       | Quest NPC [Emote](emotes)                           |
| [Emote2](#emote2)               | SMALLINT  | UNSIGNED   |     | NO   | 0       | Quest NPC [Emote](emotes)                           |
| [Emote3](#emote3)               | SMALLINT  | UNSIGNED   |     | NO   | 0       | Quest NPC [Emote](emotes)                           |
| [Emote4](#emote4)               | SMALLINT  | UNSIGNED   |     | NO   | 0       | Quest NPC [Emote](emotes)                           |
| [EmoteDelay1](#emotedelay1)     | INT       | UNSIGNED   |     | NO   | 0       | Emote delay in milliseconds                         |
| [EmoteDelay2](#emotedelay2)     | INT       | UNSIGNED   |     | NO   | 0       | Emote delay in milliseconds                         |
| [EmoteDelay3](#emotedelay3)     | INT       | UNSIGNED   |     | NO   | 0       | Emote delay in milliseconds                         |
| [EmoteDelay4](#emotedelay4)     | INT       | UNSIGNED   |     | NO   | 0       | Emote delay in milliseconds                         |
| [VerifiedBuild](#verifiedbuild) | SMALLINT  |            |     | NO   | 0       | Game client Build number or manually set value      |

## Description of the fields

### ID

Unique ID ([quest\_template.ID](quest-template#id))

### Emote1

Emote (from [Emotes.dbc](emotes)) played by NPC

### Emote2

Emote (from [Emotes.dbc](emotes)) played by NPC

### Emote3

Emote (from [Emotes.dbc](emotes)) played by NPC

### Emote4

Emote (from [Emotes.dbc](emotes)) played by NPC

### EmoteDelay1

Emote delay in milliseconds

### EmoteDelay2

Emote delay in milliseconds

### EmoteDelay3

Emote delay in milliseconds

### EmoteDelay4

Emote delay in milliseconds

<!--@include: ./verified-build.md-->
