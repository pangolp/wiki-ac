---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# gameobject_questitem

**The \`gameobject_questitem\` table**

## Table Structure

| Field                               | Type | Attributes | Key | Null | Default | Extra | Comment |
| ----------------------------------- | ---- | ---------- | --- | ---- | ------- | ----- | ------- |
| [GameObjectEntry](#gameobjectentry) | INT  | UNSIGNED   | PRI | NO   | 0       |       |         |
| [Idx](#idx)                         | INT  | UNSIGNED   | PRI | NO   | 0       |       |         |
| [ItemId](#itemid)                   | INT  | UNSIGNED   |     | NO   | 0       |       |         |
| [VerifiedBuild](#verifiedbuild)     | INT  | UNSIGNED   |     | YES  | NULL    |       |         |

## Description of the fields

### GameObjectEntry

[gameobject_template.entry](gameobject-template#entry).

### Idx

Index 0-3

### ItemId

[item_template.entry](item-template#entry).

<!--@include: ./verified-build.md-->
