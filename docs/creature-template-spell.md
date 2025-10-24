---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# creature_template_spell

**The \`creature_template_spell\` table**

## Table Structure

| Field              | Type      | Attribute | Key  | Null | Default | Extra | Comment |
| ------------------ | --------- | --------- | ---- | ---- | ------- | ----- | ------- |
| [CreatureID][1]    | MEDIUMINT | UNSIGNED  | PRI  | NO   |         |       |         |
| [Index][2]         | TINYINT   | UNSIGNED  | PRI  | NO   | 0       |       |         |
| [Spell][3]         | MEDIUMINT | UNSIGNED  |      | YES  | Null    |       |         |
| [VerifiedBuild][4] | SMALLINT  | SIGNED    |      | YES  | 0       |       |         |

[1]: #creatureid
[2]: #index
[3]: #spell
[4]: #verifiedbuild

## Description of the fields

### CreatureID

Creature entry from [creature_template.entry](creature-template#entry).

### Index

Value must be within this range. If above or under the SQL will fail on `creature_template_spell_chk_1`.

Index 0 - 7.

Spell position on actionbar for vehicle creatures.

### Spell

Spell ID that can be used for Mind Control of a creature.

<!--@include: ./verified-build.md-->
