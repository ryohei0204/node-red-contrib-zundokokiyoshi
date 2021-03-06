module.exports = function(RED){
    function KiyoshiNode(config){
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input',function(msg){//ここからが処理の部分、ノードの処理の変更はここ
            //msg.payload = msg.payload.toLowerCase();
            var phrase = 'ズンズンズンズンドコ';
            var generated = '';
            do {
                var choice = ['ズン', 'ドコ'][Math.random() * 2 | 0];
                msg.payload = choice;
                node.send(msg);
                generated = (generated + choice).substr(- phrase.length);
            } while (generated !== phrase);
            msg.payload = 'キ・ヨ・シ！';
            node.send(msg);
        });
    }
    RED.nodes.registerType("kiyoshi-node",KiyoshiNode);
}