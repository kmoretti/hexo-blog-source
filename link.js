const YML = require('yamljs')
const fs = require('fs')

const blacklist = [];

let friends = [],
    data_f = YML.parse(fs.readFileSync('source/_data/links.yml').toString().replace(/(?<=rss:)\s*\n/g, ' ""\n'));

data_f.forEach((entry, index) => {
    if (!entry.link_list) return;
    const filteredLinkList = entry.link_list.filter(linkItem => !blacklist.includes(linkItem.name));
    friends = friends.concat(filteredLinkList);
});

const friendData = {
    friends: friends.map(item => {
        const name = item.name || '';
        const link = item.link || '';
        const avatar = item.avatar || '';
        const linkpage = item.friendslink || item.flink || '';
        return linkpage ? [name, link, linkpage, avatar] : [name, link, avatar];
    })
};

const friendJSON = JSON.stringify(friendData, null, 2);

fs.writeFileSync('./source/friend.json', friendJSON);

console.log('friend.json 文件已生成，共 ' + friendData.friends.length + ' 条友链。');