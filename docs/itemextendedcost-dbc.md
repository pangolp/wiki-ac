# itemextendedcost_dbc

[<-Back-to:World](database-world)

**The \`itemextendedcost_dbc\` table**

**Table Structure**

| Field                                       | Type | Attributes | Key | Null | Default | Extra | Comment |
| ------------------------------------------- | ---- | ---------- | --- | ---- | ------- | ----- | ------- |
| [ID](#id)                                   | INT  | UNSIGNED   | PRI | NO   | 0       |
| [HonorPoints](#honorpoints)                 | INT  | UNSIGNED   |     | NO   | 0       |
| [ArenaPoints](#arenapoints)                 | INT  | UNSIGNED   |     | NO   | 0       |
| [ArenaBracket](#arenabracket)               | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemID_1](#itemid-1)                       | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemID_2](#itemid-2)                       | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemID_3](#itemid-3)                       | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemID_4](#itemid-4)                       | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemID_5](#itemid-5)                       | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemCount_1](#itemcount-1)                 | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemCount_2](#itemcount-2)                 | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemCount_3](#itemcount-3)                 | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemCount_4](#itemcount-4)                 | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemCount_5](#itemcount-5)                 | INT  | UNSIGNED   |     | NO   | 0       |
| [RequiredArenaRating](#requiredarenarating) | INT  | UNSIGNED   |     | NO   | 0       |
| [ItemPurchaseGroup](#itempurchasegroup)     | INT  | UNSIGNED   |     | NO   | 0       |

**Description of the fields**

### ID

ID that's used in [npc_vendor](npc-vendor#extendedcost)

### HonorPoints

The amount of required honor points.

### ArenaPoints

The amount of required arena points.

### ArenaBracket

| Value | Format |
| :-----: | :------: |
| 0     | 2 v 2  |
| 1     | 3 v 3  |
| 2     | 5 v 5  |

### ItemID_1

[Entry](item-template#entry) of item required to buy [ItemID_1](#itemid-1).

### ItemID_2

[Entry](item-template#entry) of item required to buy [ItemID_2](#itemid-2).

### ItemID_3

[Entry](item-template#entry) of item required to buy [ItemID_3](#itemid-3).

### ItemID_4

[Entry](item-template#entry) of item required to buy [ItemID_4](#itemid-4).

### ItemID_5

[Entry](item-template#entry) of item required to buy [ItemID_5](#itemid-5).

### ItemCount_1

The amount of required for [ItemID_1](#itemid-1).

### ItemCount_2

The amount of required for [ItemID_2](#itemid-2).

### ItemCount_3

The amount of required for [ItemID_3](#itemid-3).

### ItemCount_4

The amount of required for [ItemID_4](#itemid-4).

### ItemCount_5

The amount of required for [ItemID_5](#itemid-5).

### RequiredArenaRating

The amount of required personal arena rating.

### ItemPurchaseGroup 

THIS IS UN-USED

