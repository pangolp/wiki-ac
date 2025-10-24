---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# points\_of\_interest\_locale

**The \`locales\_points\_of\_interest\` table**

`table-no-description`

## Table Structure

| Field                           | Type       | Attributes | Key | Null | Default | Extra | Comment |
| ------------------------------- | ---------- | ---------- | --- | ---- | ------- | ----- | ------- |
| [ID](#id)                       | INT        | UNSIGNED   | PRI | NO   | 0       |       |         |
| [locale](#locale)               | VARCHAR(4) |            |     |      |         |       |         |
| [Name](#name)                   | TEXT       |            |     | YES  | NULL    |       |         |
| [VerifiedBuild](#verifiedbuild) | INT        |            |     | YES  | NULL    |       |         |

## Description of the fields

### ID

`field-no-description|1`

<!--@include: /utils/locale.md-->

### Name

`field-no-description|3`

<!--@include: ./verified-build.md-->
