var fakeHuman = require('@faker-js/faker');
const makeHuman= function (number)
{
for(i=0;i<number;i++)
console.log(fakeHuman.faker.name.findName()+" "+fakeHuman.faker.image.avatar()+" "+fakeHuman.faker.company.companyName());
}
makeHuman(3)
