# warden\_checks

[<-Back-to:World](database-world)

**The \`warden\_checks\` table**

This table contains data related to the use of the anti-cheat tool Warden, which can be enabled in Worldserver.conf

**Table Structure**

| Field                             | Type        | Attributes | Key | NULL | Default         | Comment                                   |
| --------------------------------- | ----------- | ---------- | --- | ---- | --------------- | ----------------------------------------- |
| [id](#warden-checks-id)           | SMALLINT    | UNSIGNED   | PRI | NO   | auto\_increment | Unique ID, automatically incremented by 1 |
| [type](#warden-checks-type)       | TINYINT     | UNSIGNED   |     | YES  | NULL            |                                           |
| [data](#warden-checks-data)       | VARCHAR(48) |            |     | YES  | NULL            |                                           |
| [str](#warden-checks-str)         | VARCHAR(20) |            |     | YES  | NULL            |                                           |
| [address](#warden-checks-address) | INT         | UNSIGNED   |     | YES  | NULL            |                                           |
| [length](#warden-checks-length)   | TINYINT     | UNSIGNED   |     | YES  | NULL            |                                           |
| [result](#warden-checks-result)   | VARCHAR(24) |            |     | YES  | NULL            |                                           |
| [comment](#warden-checks-comment) | VARCHAR(50) |            |     | YES  | NULL            |                                           |

**Description of the fields:**

### id

Unique ID, automatically incremented by 1

### type

`field-no-description|2`

### data

`field-no-description|3`

### str

`field-no-description|4`

### address

`field-no-description|5`

### length

`field-no-description|6`

### result

`field-no-description|7`

### comment

`field-no-description|8` 
