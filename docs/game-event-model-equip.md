# game_event_model_equip

[<-Back-to:World](database-world)

**The \`game_event_model_equip\` table**

Contains all creature instances that need to change display id and/or equipment during defined game events.

**Table Structure**

| Field                         | Type      | Attributes | Key | Null | Default | Extra  | Comment                  |
| ----------------------------- | --------- | ---------- | --- | ---- | ------- | ------ | ------------------------ |
| [eventEntry](#evententry)     | SMALLINT  | SIGNED     |     | NO   | 0       |        | Entry of the game event. |
| [guid](#guid)                 | INT       | UNSIGNED   | PRI | NO   | 0       | Unique |                          |
| [modelid](#modelid)           | MEDIUMINT | UNSIGNED   |     | NO   | 0       |        |                          |
| [equipment_id](#equipment-id) | MEDIUMINT | UNSIGNED   |     | NO   | 0       |        |                          |

**Description of the fields**

### eventEntry

Refers to: [game_event.entry](game-event#entry).

Only a **positve** value can be used.

### guid

Refers to: [creature.guid](creature#guid).

### modelid

Refers to [creature_model_info.displayid](creature-model-info#displayid) to change the [creature](creature#guid)'s [model](creature-model-info#displayid) when the event running.

### equipment_id

Refers to [creature_equip_template.creatureid](creature-equip-template#creatureid) to change when the event running.

If you don't want to add or change the current equipment being used, set the value to `0`, It will use [creature_equip_template](creature-equip-template#CreatureID) for the [creature_template](creature-template#entry) where it matches with [creature.id1](creature#id1) from [creature.guid](creature#guid).
