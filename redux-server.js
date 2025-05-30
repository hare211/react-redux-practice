const express = require('express');
const app = express();

const server = app.listen(3355, () => {
    console.log(`App listening on ${server.address().port}`);
});

const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.get('/food/find', function (req, res) {
    busanFoodFind(req, res);
});

async function busanFoodFind(req, res) {
    // 검색어 받기
    let fd = req.query.fd;
    let connection;

    try {
        // 오라클 연동
        connection = await oracledb.getConnection({
            user: "hr",
            password: "happy",
            connectionString: "localhost:1521/xe"
        })
        // query 전송 -> 결과값 받기
        const result = await connection.execute(
            `SELECT fno, poster, name, score, type, hit, jjimcount, likecount 
             FROM busan_food 
             WHERE name 
             LIKE '%'||:name||'%'`, [fd]
        );

        console.log(result);
        res.json(result.rows);
    } catch (err) {
        console.error('err: ', err);
    } finally {
        try {
            if (connection) {
                await connection.close();
            }
        } catch (error) {
            console.error('err: ', error);
        }
    }
}
