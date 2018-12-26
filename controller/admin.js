module.exports={
	index:function () {
		return function ( req,res,next ) {
			res.render('./admin/index.html',{})
		}
	}
}