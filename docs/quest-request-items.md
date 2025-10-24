---
prev:
  text: 'Database World'
  link: 'database-world'
next: false
aside: false
---

# quest\_request\_items

**The \`quest\_request\_items\` table**

This table basically handles 3 quest details:

1.  NPC Emote when quest is completed
2.  NPC Emote when quest is incomplete
3.  Completion text for quests requiring quest items

## Table Structure

| Field                                   | Type      | Attributes | Key | NULL | Default | Comment |
| --------------------------------------- | --------- | ---------- | --- | ---- | ------- | ------- |
| [ID](#id)                               | MEDIUMINT | UNSIGNED   | PRI | NO   | 0       |         |
| [EmoteOnComplete](#emoteoncomplete)     | SMALLINT  | UNSIGNED   |     | NO   | 0       |         |
| [EmoteOnIncomplete](#emoteonincomplete) | SMALLINT  | UNSIGNED   |     | NO   | 0       |         |
| [CompletionText](#completiontext)       | text      |            |     | YES  | NULL    |         |
| [VerifiedBuild](#verifiedbuild)         | SMALLINT  |            |     | NO   | 0       |         |

## Description of the fields

### ID

Quest ID for quests showing a completion text upon turning in an item delivery quest.
Primary Key for this table. Each quest ID must be unique.

### EmoteOnComplete

Emote (from [Emotes.dbc](emotes)) played by the quest ender NPC when all quest objectives are completed.

### EmoteOnIncomplete

Emote (from [Emotes.dbc](emotes)) played by the quest ender NPC if any of the quest objectives are incomplete.

### CompletionText

Quest gossip text shown in the final gossip dialogue window when turning in an item delivery quest.
The quest item(s) involved in the quest can either be provided by the quest giver or collected by the player.

<!--@include: ./verified-build.md-->
