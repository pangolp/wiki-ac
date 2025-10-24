---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# quest\_request\_items\_locale

**Table: quest\_request\_items\_locale**

## Table Structure

| Field               | Type       | Attribute | Key | Null | Default | Extra | Comment |
| ------------------- | ---------- | --------- | --- | ---- | ------- | ----- | ------- |
| [ID][1]             | INT        | UNSIGNED  | PRI | NO   |         |       |         |
| [locale][2]         | VARCHAR(4) |           | PRI | NO   |         |       |         |
| [CompletionText][3] | text       |           |     | YES  | NULL    |       |         |
| [VerifiedBuild][4]  | SMALLINT   |           |     | NO   |         |       |         |

[1]: #id
[2]: #locale
[3]: #completiontext
[4]: #verifiedbuild

## Description of the fields

### ID

Is the quest ID, obtained from quest_template

<!--@include: /utils/locale.md-->

### CompletionText

It is the text that is shown, while the quest is not completed.

<!--@include: ./verified-build.md-->

### Example

```sql
DELETE FROM `quest_request_items_locale` WHERE `ID`=2 AND `locale`='esES';
INSERT INTO `quest_request_items_locale` (`ID`, `locale`, `CompletionText`, `VerifiedBuild`) VALUES`ID`, `locale`, `CompletionText`, `VerifiedBuild`
(2, "esES", "Sí, $gpoderoso:poderosa; $c, he presentido tu llegada. Confío que tienes más noticias que darme sobre tu caza.", 0);
```
