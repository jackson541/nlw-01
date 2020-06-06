import kenx from 'knex'
import path from 'path'

//arquivo para conectar ao banco de dados SQLite
//o path serve para que o programa consiga enchergar o arquivo do DB e __dirname
// se refere ao caminho para esse arquivo atual (connection.ts)

const connection = kenx({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
})

export default connection