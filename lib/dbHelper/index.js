import mysql from "mysql";

const config={
	host     : '127.0.0.1',
	user     : 'root',
	password : '123123',
	database : 'nodeData'
}
const pool=mysql.createPool(config);
module.exports={
	query:function ( sql,pramas,fn ) {
		pool.getConnection(function ( err,con ) {
			if (!err){
				con.query(sql , params,fn);
				con.release();
			} else {
				fn(err , null,null);
			}
		})
	}
};