# achievement\_reward\_locale

[<-Back-to:World](database-world)

**The \`achievement\_reward\_locale\` table**

It is the table that stores the translations of the table `achievement_reward`, so that the game client can display the messages in different languages.

**Table Structure**

| Field        | Type       | Attributes | Key | Null | Default | Extra | Comment |
| ------------ | ---------- | ---------- | --- | ---- | ------- | ----- | ------- |
| [ID][1]      | MEDIUMINT  | UNSIGNED   | PRI | NO   | 0       |       |         |
| [Locale][2]  | VARCHAR(4) |            | PRI | NO   |         |       |         |
| [Subject][3] | text       |            |     | YES  |         |       |         |
| [Text][4]    | text       |            |     | YES  |         |       |         |

[1]: #id
[2]: #locale
[3]: #subject
[4]: #text

**Description of the fields**

### ID

It is the [ID](achievement-reward#id) of the achievement obtained from `achievement_reward`

<!--@include: /utils/locale.md-->

### Subject

It is the text of the column [Subject](achievement-reward#subject) of the table `achievement_reward`

### Text

It is the text of the column [Body](achievement-reward#body) of the table `achievement_reward`

### Example

```sql
DELETE FROM `achievement_reward_locale` WHERE `ID`=13 AND `Locale`="esES";
INSERT INTO `achievement_reward_locale` (`ID`, `Locale`, `Subject`, `Text`) VALUES
(13, "esES", "Nivel 80", "Alcanza el nivel 80.");
```
