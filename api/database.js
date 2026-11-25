import { DatabaseSync } from "node:sqlite"

const db = new DatabaseSync("db_acervoufal.db")

console.log(db)

export default db
