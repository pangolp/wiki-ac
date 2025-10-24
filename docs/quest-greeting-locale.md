---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# quest_greeting_locale

**The \`quest_greeting_locale\` table**

This table add greeting behavior to an NPC or an Gameobject.

## Table Structure

| Field              | Type       | Attributes | Key | NULL | Default | Comment |
| ------------------ | ---------- | ---------- | --- | ---- | ------- | ------- |
| [ID][1]            | MEDIUMINT  | UNSIGNED   | Yes | NO   | 0       |         |
| [Type][2]          | TINYINT    | UNSIGNED   | Yes | NO   | 0       |         |
| [locale][3]        | VARCHAR(4) |            | NO  | NO   |         |         |
| [Greeting][5]      | TEXT       |            | NO  | YES  | NULL    |         |
| [VerifiedBuild][6] | SMALLINT   | SIGNED     | NO  | NO   | 0       |         |

[1]: #id
[2]: #type
[3]: #greetemotetype
[4]: #greetemotedelay
[5]: #greeting
[6]: #verifiedbuild

## Description of the fields

### ID

Unique ID ([creature_template.entry](creature-template#entry) or [gameobject\_template.entry](gameobject-template#entry))

### Type

- 0 = Creature (The ID is point to creature\_template.entry)
- 1 = GameObject (The ID is point to gameobject\_template.entry)

### locale

Client Locale

### Greeting

Text to show

<!--@include: ./verified-build.md-->
