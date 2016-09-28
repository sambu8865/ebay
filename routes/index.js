var path=require('path');

exports.index=function(req,res){
	res.sendFile(path.resolve(__dirname+'/../public/app/index.html'));
}
