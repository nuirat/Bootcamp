function encrypt (str)
{
let encryptString=''
for( let i=0;i<str.length;i++)
{
    encryptString+=(String.fromCharCode(str.charCodeAt(i)+1))
}
return encryptString
}
console.log(encrypt('cat'));

